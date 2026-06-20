# 配色・余白・世界観インスピレーション事例集

## 概要
制作時に強く参考になる配色・余白・世界観・雰囲気の事例を保存する。
「なぜその配色・余白が機能するか」を構造的に記録する（感想禁止）。

---

## 記録フォーマット

```
## DESINS-XXX: [事例タイトル]
**出典**: [案件名 / 分析ID]
**業種タグ**: #XXX #XXX
**LP-Rank**: S / A / B
**参考箇所**: 配色 / 余白 / テクスチャ / 世界観 / フォント選択 等

### 参考要素
[何が、どのように機能しているかを構造的に記録]

### 適用可能業種
[この要素が転用できる業種リスト]

### 実装メモ
[カラーコード・CSS値・フォント指定]
```

---

## 事例一覧

---

## DESINS-001: アイボリー × ゴールド × ブラウン（ラグジュアリー美容パレット）

**出典**: beauty-salon-lp（Lumière Beauty Salon）/ 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #beauty #luxury #salon #wellness  
**LP-Rank**: A  
**参考箇所**: カラーパレット全体設計

### 参考要素
- 背景: アイボリー系（`#faf7f3`）で「温かみ」と「清潔感」を同時表現
- アクセント: ゴールド（`#c8a56a`）は「高級感」と「温かさ」を両立する色相
- テキスト: 純黒（`#000`）ではなくウォームブラウン（`#4a403b` / `#3b2f2a`）を使用
  → 純黒の冷たさを排除し、全体の色温度を統一
- サブテキスト: `#7c6f68`（グレーよりブラウン寄り）でトーン一貫性を維持

### 適用可能業種
美容サロン・エステ・スパ・ホテル・ブライダル・オーガニック系

### 実装メモ
```css
:root {
  --bg:          #faf7f3;
  --surface:     #ffffff;
  --text:        #4a403b;
  --sub:         #7c6f68;
  --accent:      #d7b49e;
  --gold:        #c8a56a;
  --gold-light:  #ead8b7;
  --soft:        #f1e5dc;
  --deep:        #3b2f2a;
}
```

---

## DESINS-002: ほぼ黒 × クリームゴールド × ホワイト（ラグジュアリー飲食パレット）

**出典**: restaurant-lp / 2026-06-20-restaurant-lp.md  
**業種タグ**: #restaurant #food #luxury #dark-theme  
**LP-Rank**: A  
**参考箇所**: ダーク系カラーパレット

### 参考要素
- 背景: `#0f0f0f`（純黒より柔らかい、圧迫感のない黒）
- タイトル: `#f5e6c8`（アイボリーがかったクリーム色）→ 純白より高級感
- アクセント: `#d8a76a`（ゴールドブラウン）→ 食欲と高級感の両立
- 本文: `#ddd`（明るすぎず読みやすい中間グレー）

### 適用可能業種
飲食（高級）・バー・ナイトエンタメ・ラグジュアリーホテル・ジュエリー

### 実装メモ
```css
:root {
  --bg:     #0f0f0f;
  --title:  #f5e6c8;
  --text:   #ddd;
  --sub:    #aaa;
  --accent: #d8a76a;
  --accent-hover: #f0c98b;
}
```

---

## DESINS-003: フォントペアリング（ラグジュアリー日本語 × 欧文）

**出典**: beauty-salon-lp / 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #beauty #luxury #branding  
**LP-Rank**: A  
**参考箇所**: フォント組み合わせ設計

### 参考要素
- 見出し: Noto Serif JP（日本語明朝体）→ 格式・上品さ
- 本文: Noto Sans JP（日本語ゴシック）→ 可読性
- ラベル/英字: Jost（幾何学的サンセリフ）→ モダン・洗練
- 3種類の組み合わせで「伝統 × 現代」の世界観を構築

### 適用可能業種
美容・ホテル・ブライダル・和食・士業・コーポレート

### 実装メモ
```html
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@500;600;700&display=swap" rel="stylesheet">
```
```css
/* 見出し */
h1, h2, h3 { font-family: 'Noto Serif JP', serif; }
/* 本文 */
body { font-family: 'Noto Sans JP', sans-serif; }
/* ラベル・英字 */
.label, .num, .stat { font-family: 'Jost', sans-serif; }
```

---

## DESINS-004: 余白を広く取ることによる高級感の演出

**出典**: beauty-salon-lp / 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #luxury #beauty #hotel #premium  
**LP-Rank**: A  
**参考箇所**: 余白設計

### 参考要素
- セクション縦余白: 120px（一般的な96pxより25%広い）
- カード内パディング: `40px 32px`（コンテンツが少なくても窮屈に見えない）
- セクション見出し下マージン: `64px`（コンテンツとの間にゆとり）
- 余白を広く取ることで各要素の「存在感」が増し、ブランド力が上がる
- 余白はコストゼロのデザイン要素であり、高級感の主要因のひとつ

### 適用可能業種
美容・ホテル・ブライダル・ジュエリー・高級飲食・コーポレート（プレミアム）

### 実装メモ
```css
/* ラグジュアリー余白スケール */
.section         { padding: 120px 0; }
.section-head    { margin-bottom: 64px; }
.card            { padding: 40px 32px; }
.grid            { gap: 32px; }

/* 比較: 標準余白スケール */
.section         { padding: 80px 0; }
.section-head    { margin-bottom: 48px; }
.card            { padding: 28px 24px; }
.grid            { gap: 24px; }
```

---

## DESINS-005: 線（1px）とグラデーションによる装飾設計

**出典**: beauty-salon-lp / 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #beauty #luxury #premium  
**LP-Rank**: A  
**参考箇所**: 装飾デザイン

### 参考要素
- `linear-gradient(var(--gold), transparent)` の縦線で「消えていく線」を表現
- 実線ではなくグラデーションで消える線が「繊細さ」を演出
- `width: 1px` という極細の線が余白と同じく「余裕」を示す
- カードの区切り線にも同手法を適用可能

### 適用可能業種
美容・ホテル・ブライダル・ジュエリー・和食・茶道・伝統工芸

### 実装メモ
```css
/* 縦グラデーション線（セクション装飾） */
.ornament {
  width: 1px;
  height: 54px;
  background: linear-gradient(#c8a56a, transparent);
  margin: 0 auto 18px;
}

/* 横グラデーション線（セクション区切り） */
.divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c8a56a 50%, transparent);
  margin: 80px 0;
}

/* カード区切り線 */
.card-divider {
  width: 40px;
  height: 1px;
  background: linear-gradient(#c8a56a, transparent);
  margin: 16px 0;
}
```

---

## 統計

- 登録事例数: 5
- 最終更新: 2026-06-20
