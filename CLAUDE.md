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

## よくあるミスと対処

### GitHubでLPが見えない
- **原因**：作業ブランチにしかなく、`master` に反映していない
- **対処**：`git checkout master && git merge [作業ブランチ名] && git push origin master`
- **予防**：LP作成・修正の最後に必ずmasterへのmerge & pushを行う
