# TAKE Design Portfolio — プロジェクトルール

## 本番デプロイ

ユーザーから「デプロイして」と依頼されたら `scripts/deploy.sh portfolio|lp|all` を**絶対パスで単独実行**する（`cd ... &&` を前に付けない。許可ルールが一致しなくなる）。
事前に変更をコミット（master）してから実行すること。スクリプトが master・未コミットなし・生成物最新を確認し、反映後に本番のHTML一致を確認する。

## ポートフォリオ本体（2026-10 リニューアル以降）

ルートの `index.html` / `works.html` / `video-works.html` / `works/*.html` / `privacy.html` / `404.html` / `sitemap.xml` / `robots.txt` は **生成物**。直接編集しない。

- 実績の追加・修正：`data/works.mjs`（区分 client / concept、確認できた事実のみ記載）
- サービス・文言・テンプレート：`scripts/build.mjs`
- デザインシステム：`assets/css/site.css`（トークンは `:root`）、挙動：`assets/js/site.js`
- 実績画像（LP）：`node scripts/capture-works.mjs [slug]` で公開ページから撮影（Desktop 1440×900@2x／Mobile 390×796@3x：フレームの画面比率に一致）→ `node scripts/compose-devices.mjs [slug]` でスマホフレームに合成
  - フレーム素材は `_private/device-frames/`（.gitignore 済み）。**素材単体は規約上公開不可**。出典は同フォルダの SOURCE.txt
  - 表示は build.mjs の `deviceMockup()`（PC=ブラウザウィンドウ＋スマホ=合成画像）に統一。ステージ色は works.mjs の `tone`
- 動画のサムネイル：`assets/works/<slug>-thumb(-640|-960).webp`
- 編集後は `node scripts/build.mjs` を実行。CSS/JS を変えたら `build.mjs` の `ASSET_V` を上げる
- **役割分担**：ポートフォリオ＝制作力・実績の証明（料金・保守プラン・依頼の流れは載せない）／営業用LP `/web-services/`＝サービス・料金・依頼方法（別プロジェクト）
- 営業用LPへのリンクは `build.mjs` の `SALES_LP`。`web-services/index.html` をリポジトリに追加するとビルド時に自動で有効化（強制: `SALES_LP=on|off node scripts/build.mjs`）。未公開の間はリンクを一切出さない。営業用LPのフォームのアンカーIDは完成後に `SALES_LP.contact` へ合わせる
- 総合問い合わせフォーム（/#contact）は映像・AIの相談窓口として維持する。送信先は変更しない。2026-10-31 から営業用LPの送信API（`https://takecraft-web.vercel.app/api/contact`、`source: "portfolio"`）を共用し、API未設定・通信できないときは site.js が mailto 方式へ自動で切り替える（mailto のみに戻す：`CONTACT_API=off node scripts/build.mjs`）。「ご相談の種類」は build.mjs の `INQUIRY_TYPES` と contact.js の `PORTFOLIO_TYPES` を必ず同じにする
- Tools & Skills（`TOOLS`）は使用経験を確認できたものだけ載せる（2026-10-27 確認済み）

## 営業用LP（https://takecraft-web.vercel.app/ ・Vercel プロジェクト takecraft-web）

- データ `data/web-services.mjs` → `node scripts/build-web-services.mjs` → 生成先 `web-services-site/`（独立サイトのルート。index.html・thanks/ は直接編集しない）
- 送信API `web-services-site/api/contact.js`（Vercel Functions + Resend）。環境変数は takecraft-web 側に設定。詳細は `docs/web-services-operations.md`
- LP は master push では更新されない。`web-services-site/` を takecraft-web へ CLI デプロイ（要ユーザー了承）
- 旧URL `/web-services/` はポートフォリオの `vercel.json` で 301 転送。ポートフォリオの導線は build.mjs の `SALES_LP`

## フォルダ構成ルール

このリポジトリでは、LPごとにフォルダを分けて管理する。

```
take-design-portfolio/
├── index.html              ← ポートフォリオ（生成物。上の節を参照）
├── restaurant-lp/
│   └── index.html          ← レストランオープンLP
└── [新しいLP名]/
    └── index.html          ← 新規LP（ここに追加）
```

### 新しいLPを作るとき

- ルートの `index.html` を LP で **上書きしない**（ポートフォリオは build.mjs で生成）
- 必ず `[案件名]/index.html` という形で新しいフォルダを作成する
- フォルダ名の例：`beauty-salon-lp/`、`dental-lp/`、`gym-lp/` など

## ブランチ運用

- `master` ブランチ：本番。全LPフォルダを含む最新状態を維持する
- 作業ブランチで開発 → 完成したら必ず `master` にもmergeしてpushする
- **新しいLPを作成・更新したら、必ず最後に master へ反映すること**

## イラスト・画像の使い方

LPにイラストや写真を使う場合は、インラインSVGではなく **外部ファイル（画像）** を使うフローを優先する。

### フロー（イラストを使うとき）

1. **Claudeが先にフォルダを用意する**
   - `[案件名]-lp/images/` フォルダを作成してGitHubにpush
   - 必要なイラストの一覧（ファイル名・サイズ・内容）をユーザーに伝える

2. **ユーザーがイラストを集めてアップロード**
   - GitHubの `finance-lp/images/` などに「Add file → Upload files」でアップロード
   - ファイル名はClaudeが指定した名前に合わせる

3. **ClaudeがHTMLに組み込む**
   - SVGをすべて `<img src="./images/ファイル名.png" alt="説明">` に差し替え
   - 差し替え後にcommit & pushし、masterにも反映

### フォルダ構成（画像ありの場合）

```
take-design-portfolio/
└── [案件名]-lp/
    ├── index.html
    └── images/
        ├── hero-left.png
        ├── hero-right.png
        └── ...
```

### 注意

- 画像が届く前にLPを作る場合は、インラインSVGでプレースホルダーを作っておく
- 画像が届いたら必ずSVGから `<img>` タグに差し替える
- 背景透過PNG推奨（デザインに馴染みやすい）

## よくあるミスと対処

### GitHubでLPが見えない
- **原因**：作業ブランチにしかなく、`master` に反映していない
- **対処**：`git checkout master && git merge [作業ブランチ名] && git push origin master`
- **予防**：LP作成・修正の最後に必ずmasterへのmerge & pushを行う
