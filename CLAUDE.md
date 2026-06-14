# TAKE Design Portfolio — プロジェクトルール

## フォルダ構成ルール

このリポジトリでは、LPごとにフォルダを分けて管理する。

```
take-design-portfolio/
├── index.html              ← TAKE Design portfolio（触らない）
├── restaurant-lp/
│   └── index.html          ← レストランオープンLP
└── [新しいLP名]/
    └── index.html          ← 新規LP（ここに追加）
```

### 新しいLPを作るとき

- ルートの `index.html` は **絶対に上書きしない**
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
