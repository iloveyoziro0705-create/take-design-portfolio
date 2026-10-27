# TAKE Design Portfolio — プロジェクトルール

## ポートフォリオ本体（2026-10 リニューアル以降）

ルートの `index.html` / `works.html` / `video-works.html` / `works/*.html` / `privacy.html` / `404.html` / `sitemap.xml` / `robots.txt` は **生成物**。直接編集しない。

- 実績の追加・修正：`data/works.mjs`（区分 client / concept、確認できた事実のみ記載）
- サービス・文言・テンプレート：`scripts/build.mjs`
- デザインシステム：`assets/css/site.css`（トークンは `:root`）、挙動：`assets/js/site.js`
- 実績画像：`assets/works/<slug>-pc1〜3.webp` / `-sp.webp`（pc1 と動画 thumb は `-640` `-960` 縮小版も必要）
- 編集後は `node scripts/build.mjs` を実行。CSS/JS を変えたら `build.mjs` の `ASSET_V` を上げる
- 将来のサービス専用LPは、公開後に `SERVICES[].lp` にパスを入れるとリンクが表示される（未公開のうちは null のまま）

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
