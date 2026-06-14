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

- `master` ブランチ：本番。TAKE Design portfolio を維持
- 作業は作業ブランチで行い、masterには安易にmergeしない
