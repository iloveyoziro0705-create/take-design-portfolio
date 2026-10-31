# 営業用LP 運用マニュアル

公開URL：**https://takecraft-web.vercel.app/**（Vercel プロジェクト `takecraft-web`）
旧URL `https://take-design-portfolio.vercel.app/web-services/` はポートフォリオの `vercel.json` で新URLへ 301 転送しています。

## 1. 構成

| 役割 | ファイル |
|---|---|
| 掲載データ（料金・プラン・FAQ・実績の選定） | `data/web-services.mjs` |
| ページ生成 | `scripts/build-web-services.mjs` → `web-services-site/`（index.html・thanks/・robots.txt・sitemap.xml、使用画像をコピー） |
| デザイン・動き | `web-services-site/assets/ws.css`, `web-services-site/assets/ws.js` |
| 送信API（Vercel Functions） | `web-services-site/api/contact.js` |
| OGP画像 | `web-services-site/assets/og-web-services.png` |

ポートフォリオ（`scripts/build.mjs`）とは別のサイトです。ポートフォリオ側は `SALES_LP`（build.mjs）でLPのURLを持ち、ヘッダー「Services」・Creative Fields・フッター・Web/LP実績の詳細ページに導線を表示します（`SALES_LP=off` で非表示）。

**デプロイ**：`scripts/deploy.sh lp`（ポートフォリオは `portfolio`、両方は `all`）。LPはポートフォリオの master push では更新されません。手動の場合：`node scripts/build-web-services.mjs` → コミット → `web-services-site/` を `takecraft-web` プロジェクトへデプロイ（`cd web-services-site && npx vercel deploy --prod`。初回のみ `npx vercel link --project takecraft-web`）。

## 2. 文言・料金を変更する

1. `data/web-services.mjs` を編集する（料金は数値で持っているので、ファーストビュー・料金一覧・構造化データに同じ値が出ます）
2. `node scripts/build-web-services.mjs` を実行する
3. 料金を変えたら、`web-services-site/assets/og-web-services.png`（OGP画像）の料金表記も確認する
4. CSS/JSを変えたら、`build-web-services.mjs` の `V` を上げる（キャッシュ対策）

実績を差し替えるときは `WORK_PICKS`（ポートフォリオの slug）を編集します。自主制作は自動的に「Concept Work／自主制作」と表示されます。

## 3. 環境変数（Vercel の **takecraft-web** プロジェクト → Settings → Environment Variables）

| 名前 | 必須 | 内容 |
|---|---|---|
| `RESEND_API_KEY` | ○ | Resend の API キー（https://resend.com → API Keys）。**コードやGitには書かない** |
| `CONTACT_TO` | ○ | 通知メールの宛先（例：i.love.yoziro0705@gmail.com）。カンマ区切りで複数可 |
| `CONTACT_FROM` | – | 送信元。未設定時は `TAKE CRAFT <onboarding@resend.dev>`。独自ドメインを Resend で認証したら `TAKE CRAFT <contact@独自ドメイン>` に変更 |
| `AUTO_REPLY` | – | `on` で問い合わせ者へ自動返信。**独自ドメイン認証後のみ有効化**（onboarding@resend.dev からは自分以外に送れないため） |
| `ALLOWED_ORIGINS` | – | 送信を受け付ける Origin を追加する場合（独自ドメイン導入時など）。カンマ区切り |
| `GA4_ID` | – | **ビルド時**の値。`GA4_ID=G-XXXXXXX node scripts/build-web-services.mjs` で計測タグを出力。プライバシーポリシー（ポートフォリオ側）にも追記されるよう `GA4_ID=... node scripts/build.mjs` も実行 |

環境変数を追加・変更したら、Vercel で再デプロイすると反映されます。
`RESEND_API_KEY` / `CONTACT_TO` が未設定の間、LPのフォームは「送信できませんでした」と表示し、ポートフォリオのフォームを案内します（送信内容は失われません）。

### ポートフォリオのフォームとの共用（2026-10-31〜）
- ポートフォリオ（https://take-design-portfolio.vercel.app/#contact）のフォームも、この API（`/api/contact`）に `source: "portfolio"` で送信します。環境変数の設定は takecraft-web 側の1か所だけで済みます
- 別オリジンからの送信のため、API は許可した Origin（takecraft-web・take-design-portfolio・`ALLOWED_ORIGINS`）にだけ CORS を許可します（OPTIONS のプリフライトにも対応）
- 件名：`【TAKE CRAFT ポートフォリオ】<ご相談の種類>のご相談：<お名前>様`（LPは `【TAKE CRAFT Web制作】…`）
- API 未設定（not_configured）・通信できない・送信失敗のときは、ポートフォリオ側が自動でメールアプリ（mailto）方式に切り替えます。Resend の設定前にデプロイしても、今までどおり問い合わせを受け付けられます
- 反映の順番：**先に LP（`deploy.sh lp`：CORS 対応の API）→ 次にポートフォリオ（`deploy.sh portfolio`）**。逆にすると、LP が古い API の間はポートフォリオの送信がすべて mailto に切り替わります（受付は止まりません）

### Resend の初期設定（ご本人の操作が必要）
1. https://resend.com でアカウント作成（無料枠：月3,000通・1日100通）
2. API Keys → Create API Key（権限：Sending access）
3. 無料のまま `onboarding@resend.dev` から送る場合、**宛先は Resend に登録したメールアドレスだけ**になります。`CONTACT_TO` をそのアドレスにしてください
4. 独自ドメインを取得したら Domains で認証 → `CONTACT_FROM` を変更 → 必要なら `AUTO_REPLY=on`

## 4. スパム対策（実装済み）
- ハニーポット項目（人には見えない入力欄。値が入っていたら成功を装って破棄）
- 表示から送信まで3秒未満／24時間超の送信を拒否
- Origin の確認（本番ドメイン・プレビューURL以外からの送信を拒否）
- サーバー側の入力検証と文字数上限、件名の改行除去
- 二重送信防止（送信中はボタンを無効化）

スパムが増えた場合は Cloudflare Turnstile（無料）の追加を検討してください（サイトキー・シークレットキーの発行が必要）。

## 5. GA4 計測（測定ID設定後に有効）

| イベント | 発火タイミング | パラメータ |
|---|---|---|
| `cta_click` | 主要CTA（FV・料金・最終CTA・ヘッダー・固定CTA・お悩みカード） | `location` |
| `service_cta_click` | サービス別・料金カード・保守プランのCTA | `location`, `service` |
| `view_pricing` | 料金セクションが25%表示された（1回のみ） | – |
| `portfolio_click` | ポートフォリオ・実績詳細への遷移 | `location` |
| `generate_lead` | 問い合わせ送信の成功 | `service` |

GA4 管理画面で `generate_lead` を「キーイベント」に設定してください。

## 6. 公開・確認の手順
1. 作業ブランチでコミット → プレビューデプロイで確認（フォームはプレビューにも環境変数を設定すると動作します）
2. 承認後、`takecraft-web` に本番デプロイ（ポートフォリオ側の変更がある場合は master へ反映）
3. 公開後、実際にフォームから1件送信し、通知メールの到着を確認する
