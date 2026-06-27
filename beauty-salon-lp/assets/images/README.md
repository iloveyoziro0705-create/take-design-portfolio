# 画像管理マニュアル — Luminos Skin LP

**対象LP**: `beauty-salon-lp/index.html`
**アイコンセット**: Lucide Icons（CDN）
**作成日**: 2026-06-27

---

## 必要画像一覧

| ファイル名 | 配置箇所 | 推奨サイズ | アスペクト比 | 取得方法 |
|-----------|---------|-----------|------------|---------|
| `fv-hero.jpg` | ヒーロー右カラム | 1200×1500px以上 | 4:5（SP: 3:2） | クライアント提供 / ChatGPT生成 |
| `menu-01-basic.jpg` | ベーシックフェイシャル | 800×450px以上 | 16:9 | フリー素材 / ChatGPT生成 |
| `menu-02-aging.jpg` | エイジングケアコース | 800×450px以上 | 16:9 | フリー素材 / ChatGPT生成 |
| `menu-03-moisture.jpg` | 保湿集中フェイシャル | 800×450px以上 | 16:9 | フリー素材 / ChatGPT生成 |
| `owner.jpg` | オーナープロフィール | 600×800px以上 | 3:4（SP: 3:2） | **クライアント提供のみ** |

---

## 画像の配置方法

このフォルダ（`assets/images/`）に上記ファイル名でJPGを配置するだけで自動的に表示されます。

```
beauty-salon-lp/
└── assets/
    └── images/
        ├── fv-hero.jpg        ← ここに配置
        ├── menu-01-basic.jpg
        ├── menu-02-aging.jpg
        ├── menu-03-moisture.jpg
        └── owner.jpg
```

**画像がない状態**: グレーのプレースホルダーが表示されます（エラーにはなりません）

---

## フリー素材 検索ワード

### fv-hero.jpg（ヒーロー画像）
- **Unsplash**: `facial treatment` / `beauty spa woman` / `skincare beauty`
- **Pexels**: `facial care asian` / `beauty salon treatment` / `skincare routine`
- **注意**: 日本人・アジア系モデルが望ましい。明るい・清潔感・高級感のあるトーン

### menu-01-basic.jpg（ベーシックフェイシャル）
- **Unsplash**: `facial massage` / `beauty treatment close-up`
- **Pexels**: `facial care woman` / `skincare beauty professional`

### menu-02-aging.jpg（エイジングケアコース）
- **Pexels**: `anti-aging treatment` / `face lifting massage`
- **Unsplash**: `beauty care mature woman` / `face massage treatment`

### menu-03-moisture.jpg（保湿集中フェイシャル）
- **Unsplash**: `moisturizing skincare` / `hydration face mask`
- **Pexels**: `face mask beauty` / `skincare hydration woman`

---

## ChatGPT画像生成プロンプト

### fv-hero.jpg 用（IMAGE-PROMPT-BT-001相当）

```
プライベートフェイシャルサロンの施術シーン。30代の日本人女性が清潔感のある
完全個室のサロンベッドに横たわり、フェイシャルトリートメントを受けている。
柔らかいピンクベージュの内装、自然光が差し込む落ち着いた空間。
プロのエステティシャンの手が優しく顔に触れている。
縦型構図（4:5）、テキストを置けるよう上部に余白あり。
高級感、清潔感、安心感を表現。写真リアリティ、商業写真クオリティ。
ネガティブ: 男性、暗い空間、クリニック・病院風、大型サロン感、文字
```

### menu-01-basic.jpg 用（ベーシックフェイシャル）

```
エステサロンのフェイシャルトリートメント施術のクローズアップ。
清潔な白いタオルをまとった女性のフェイスケアシーン。
横長構図（16:9）、明るく清潔感のあるサロン背景。
毛穴ケア・角質ケアをイメージする柔らかい手の施術。
ピンク・ベージュのブランドカラーに合ったトーン。
ネガティブ: 暗い、モデルのアップすぎ、医療・クリニック感
```

### menu-02-aging.jpg 用（エイジングケア）

```
エイジングケアのリフトアップ施術シーン。EMSマシンや美容液パックを使った
フェイシャルトリートメント。40代女性のリラックスした表情。
横長構図（16:9）、上品でモダンなサロン空間。
ネガティブ: 外科的処置、医療機器の強調、文字・テキスト
```

### menu-03-moisture.jpg 用（保湿集中）

```
保湿フェイシャルパック・ヒアルロン酸マスクの施術シーン。
ツヤのある潤った肌感、ゆったりとした個室サロン空間。
シフォンのような保湿パックが顔に当てられている。横長（16:9）。
ネガティブ: 乾燥肌の表現、チープなシート、文字
```

---

## アイコン仕様（Lucide Icons）

CDN読み込み済み（`<head>` 内）。`lucide.createIcons()` で自動描画されます。

| 使用箇所 | アイコン名 | サイズ |
|---------|----------|--------|
| REASON 01 完全個室 | `door-closed` | 28px |
| REASON 02 女性スタッフ | `users` | 28px |
| REASON 03 勧誘なし | `shield-check` | 28px |
| REASON 04 都度払い | `credit-card` | 28px |
| REASON 05 口コミ評価 | `star` | 28px |
| REASON 06 駅徒歩3分 | `map-pin` | 28px |
| TRUST 累計施術実績 | `users` | 28px |
| TRUST サロン運営歴 | `building-2` | 28px |
| TRUST 口コミ評価 | `star` | 28px |
| TRUST メディア掲載 | `newspaper` | 28px |
| TRUST 資格バッジ | `award` | 13px |
| お客様の声 アバター | `user-circle` | 18px |
| Before/After アバター | `user-circle` | 18px |
| LINE特典 24時間受付 | `clock` | 28px |
| LINE特典 相談OK | `message-circle` | 28px |
| LINE特典 勧誘なし | `shield-check` | 28px |
| ヒーロー緊急性 初回限定 | `gift` | 12px |
| ヒーロー緊急性 期間限定 | `clock` | 12px |
| アクセスマップ | `map-pin` | 40px |

---

## Google Mapsの埋め込み方法

`index.html` の `<!-- Google Maps埋め込み -->` コメント箇所を以下で差し替えてください：

```html
<iframe
  src="https://www.google.com/maps/embed?pb=【URLをGoogle Mapsの共有から取得】"
  width="100%"
  height="100%"
  style="border:0;"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

---

## ライセンス注意事項

| 素材元 | ライセンス | 商用利用 | 帰属表示 |
|-------|----------|---------|---------|
| Unsplash | Unsplash License | OK | 不要（推奨） |
| Pexels | Pexels License | OK | 不要 |
| Lucide Icons | MIT | OK | 不要 |
| ChatGPT生成 | OpenAI利用規約 | OK | 不要 |
| クライアント提供 | クライアント確認 | 要確認 | — |

---

## 画像差し替えチェックリスト

- [ ] `fv-hero.jpg` 配置済み（推奨: 1200×1500px、200KB以下）
- [ ] `menu-01-basic.jpg` 配置済み（推奨: 800×450px、100KB以下）
- [ ] `menu-02-aging.jpg` 配置済み
- [ ] `menu-03-moisture.jpg` 配置済み
- [ ] `owner.jpg` 配置済み（クライアント提供のみ使用）
- [ ] Google Maps iframeを埋め込み済み
- [ ] すべての `<img>` に `alt` 属性設定済み ✅（実装済み）
- [ ] FV以外の画像に `loading="lazy"` 設定済み ✅（実装済み）
- [ ] 画像がない状態でもプレースホルダーが正常表示される ✅（実装済み）
