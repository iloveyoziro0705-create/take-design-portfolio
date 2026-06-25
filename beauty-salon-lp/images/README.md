# Luminos Skin — 画像素材管理

## フォルダ構成

```
beauty-salon-lp/images/
├── fv-hero.jpg      ← FVメイン画像（必須・★★★）
├── menu-01.jpg      ← ベーシックフェイシャル（必須・★★★）
├── menu-02.jpg      ← エイジングケアコース（必須・★★★）
├── menu-03.jpg      ← 保湿集中フェイシャル（必須・★★★）
├── owner.jpg        ← オーナー写真（必須・★★★）
└── ogp.jpg          ← OGP画像（推奨・★★）
```

---

## 各画像の仕様

| ファイル名 | 推奨サイズ | アスペクト比 | 最大容量 | 備考 |
|-----------|-----------|------------|---------|------|
| fv-hero.jpg | 1000×1250px | 4:5（PC）/ 3:2（SP） | 300KB | object-fit:cover で表示 |
| menu-01.jpg | 1200×675px | 16:9 | 150KB | フェイシャル施術シーン |
| menu-02.jpg | 1200×675px | 16:9 | 150KB | リフトアップ施術シーン |
| menu-03.jpg | 1200×675px | 16:9 | 150KB | 保湿ケアシーン |
| owner.jpg | 600×800px | 3:4（PC）/ 3:2（SP） | 100KB | 白背景 or ベージュ背景推奨 |
| ogp.jpg | 1200×630px | 1.91:1 | 200KB | SNSシェア用 |

---

## 素材調達方針

### クライアント提供（CLIENT）優先
- `owner.jpg` — サロンオーナー写真（必須）
- `fv-hero.jpg` — 実際の施術シーン（最優先）

### フリー素材（PHOTO）で対応可
Unsplash / Pexels で検索する場合の推奨ワード：

**fv-hero.jpg 用**
- `"facial treatment private room"`
- `"esthetic salon women relaxing"`
- `"skincare facial massage"`

**menu-01.jpg（クレンジング・角質ケア）用**
- `"facial cleansing skincare"`
- `"beauty treatment face"`

**menu-02.jpg（EMSリフトアップ）用**
- `"face lifting massage"`
- `"anti-aging facial treatment"`

**menu-03.jpg（保湿パック）用**
- `"hydration face mask treatment"`
- `"moisturizing skincare"`

### ChatGPT（DALL·E 3）で生成する場合

**fv-hero.jpg 用プロンプト（IMAGE-PROMPT-001）**
```
A 35-year-old Japanese woman with clear radiant skin lying on a facial treatment bed in a luxury private salon room. Natural window light from the left. Warm beige and cream interior. Professional esthetician's hands gently applying facial massage. Expression is serene and relaxed. Shot from slightly above. Shallow depth of field. No text, no logos. High-end beauty photography style. Aspect ratio 4:5.
```

**menu-01.jpg 用プロンプト**
```
Close-up of a professional facial treatment — gentle cleansing and exfoliation on a Japanese woman's face. Private salon room with soft warm lighting. Clean towels, white sheets. Serene atmosphere. No text. Beauty photography style.
```

---

## ライセンス確認

フリー素材を使用した場合は、以下を確認してから使用してください：

- [ ] 商用利用が許可されているか
- [ ] 帰属表記（クレジット）が必要か
- [ ] 加工・編集が許可されているか
- [ ] LP・Webサイトへの使用が許可されているか

Unsplash / Pexels は商用利用・帰属表記不要で使用可能です。

---

## 薬機法・景表法チェック（美容サロン必須）

Before/After 画像を追加する場合は必ず確認：

- [ ] 「個人差があります」の記載あり
- [ ] 「効果を保証する」表現がないか
- [ ] 特定の病名・症状への効果を謳っていないか

---

## 画像を追加したら

1. 推奨サイズ・容量に圧縮（TinyPNG や Squoosh を使用）
2. WebP 変換推奨（本番環境では `<picture>` タグで WebP + JPEG フォールバック）
3. index.html の `alt` 属性が適切か確認

---

*最終更新: 2026-06-25 | Luminos Skin LP | TAKE Design*
