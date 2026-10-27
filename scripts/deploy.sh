#!/bin/bash
# TAKE CRAFT 本番デプロイ
#
#   scripts/deploy.sh portfolio   … ポートフォリオ（master を push → Vercel が自動デプロイ）
#   scripts/deploy.sh lp          … 営業用LP（web-services-site/ を Vercel プロジェクト takecraft-web へ）
#   scripts/deploy.sh all         … 両方
#
# 安全確認：master ブランチ・未コミットの変更なし・生成物が最新、のいずれかを満たさなければ何もせず終了する。
# 反映後に本番の HTML が手元と一致するかを確認し、主要URLのステータスを表示する。
set -euo pipefail

REPO="/Users/papapapa/local/bin/take-design-portfolio"
PORTFOLIO_URL="https://take-design-portfolio.vercel.app"
LP_URL="https://takecraft-web.vercel.app"
LP_PROJECT='{"projectId":"prj_hscUgbLybsgZ20aONGVTuzjYfmf3","orgId":"team_j3fd7m6ZYgeMvh4Z1Uw4onM0","projectName":"takecraft-web"}'

TARGET="${1:-}"
case "$TARGET" in portfolio|lp|all) ;; *) echo "使い方: $0 portfolio|lp|all"; exit 2 ;; esac
cd "$REPO"

fail() { echo "✗ $*"; exit 1; }
md5of() { md5 -q "$1" 2>/dev/null || md5sum "$1" | cut -d' ' -f1; }

# ---------- 事前チェック ----------
[ "$(git branch --show-current)" = "master" ] || fail "master ブランチではありません（現在: $(git branch --show-current)）"
git diff --quiet && git diff --cached --quiet || fail "未コミットの変更があります。コミットしてから実行してください"
git fetch -q origin
[ "$(git rev-list --count master..origin/master)" = "0" ] || fail "origin/master に手元にないコミットがあります。先に取り込んでください"

if [ "$TARGET" != "lp" ]; then node scripts/build.mjs >/dev/null; fi
if [ "$TARGET" != "portfolio" ]; then node scripts/build-web-services.mjs >/dev/null; fi
git diff --quiet || { git status -s | head; fail "生成物がコミット内容と一致しません（ビルド結果をコミットしてから実行してください）"; }
echo "✓ 事前チェック OK（$(git log --oneline -1)）"

wait_match() { # $1=URL $2=ローカルファイル $3=名前
  local want; want=$(md5of "$2")
  for i in $(seq 1 36); do
    if [ "$(curl -s "$1?nc=$(date +%s)" | md5 -q 2>/dev/null)" = "$want" ]; then echo "✓ $3 の本番反映を確認（約$((i*10))秒）"; return 0; fi
    sleep 10
  done
  fail "$3 の本番反映を6分以内に確認できませんでした"
}
status() { for u in "$@"; do printf "  %s %s\n" "$(curl -s -o /dev/null -w '%{http_code}' "$u")" "$u"; done; }

# ---------- ポートフォリオ ----------
if [ "$TARGET" = "portfolio" ] || [ "$TARGET" = "all" ]; then
  if [ "$(git rev-list --count origin/master..master)" = "0" ]; then
    echo "・ポートフォリオ：push するコミットがありません（本番は最新）"
  else
    git push origin master
    wait_match "$PORTFOLIO_URL/" "$REPO/index.html" "ポートフォリオ"
  fi
  status "$PORTFOLIO_URL/" "$PORTFOLIO_URL/works.html" "$PORTFOLIO_URL/privacy.html" "$PORTFOLIO_URL/web-services/"
fi

# ---------- 営業用LP ----------
if [ "$TARGET" = "lp" ] || [ "$TARGET" = "all" ]; then
  TMP=$(mktemp -d)
  trap 'rm -rf "$TMP"' EXIT
  git archive HEAD web-services-site | tar -x -C "$TMP"
  mkdir -p "$TMP/web-services-site/.vercel"
  echo "$LP_PROJECT" > "$TMP/web-services-site/.vercel/project.json"
  (cd "$TMP/web-services-site" && npx -y vercel@latest deploy --prod --yes >/dev/null)
  wait_match "$LP_URL/" "$REPO/web-services-site/index.html" "営業用LP"
  status "$LP_URL/" "$LP_URL/thanks/" "$LP_URL/assets/ws.css"
fi

echo "✓ デプロイ完了"
