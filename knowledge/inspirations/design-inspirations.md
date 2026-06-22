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

## DESINS-006: エレガント・クリームゴールド（老舗・継承系美容パレット）

**出典**: Hériter（ヘリテ）/ 2026-06-20-heriter-beauty-salon.md  
**業種タグ**: #beauty #salon #luxury #japanese #heritage  
**LP-Rank**: B  
**参考箇所**: カラーパレット全体設計

### 参考要素
- 背景: `#faf8f3`（DESINSー001のアイボリーより僅かに黄みがかり「蜜蝋」のような温かさ）
- テキスト: `#4a3c30`（ダークブラウン系 — 純黒でなく「土・木」のような自然な暗さ）
- アクセント: `#c8a560`（鈍めゴールド — ピカピカしないマットな金）
- トーン: 全体的に彩度を抑え、「引き算の贅沢」を表現

### 適用可能業種
美容サロン・日本料理・旅館・茶道・ブライダル（和風）・骨董・伝統工芸

### 実装メモ
```css
:root {
  --bg:     #faf8f3;
  --text:   #4a3c30;
  --sub:    #7a6a5a;
  --accent: #c8a560;
  --gold-light: #e0c890;
  --soft:   #f0ead8;
  --deep:   #3a2c20;
}
```

---

## DESINS-007: ナチュラル・ペールトーン（グランドオープン・グリーン系パレット）

**出典**: Liceria & Co. フライヤー / 2026-06-20-liceria-flyer.md  
**業種タグ**: #beauty #salon #natural #fresh #grandopen  
**LP-Rank**: 参考事例（フライヤー）  
**参考箇所**: カラーパレット全体設計

### 参考要素
- ミントグリーン: `#e8ece9`（白みがかったグリーン — 清潔さと自然の両立）
- クリーミーピンク: `#f5ede8`（桜よりも黄みのある柔らかいピンク — 女性的で主張が強くない）
- ブラウン系テキスト: `#6b5c50` or `#8a7060`（温かみを持ちながら可読性を確保）
- 2色のパレットトーンを組み合わせることで「ナチュラルでお洒落な春」の印象

### 適用可能業種
美容サロン・ネイル・エステ・ウェルネス・有機野菜・カフェ（ナチュラル系）

### 実装メモ
```css
:root {
  --bg:       #f5ede8;  /* クリーミーピンク */
  --surface:  #ffffff;
  --accent:   #e8ece9;  /* ミントグリーン */
  --text:     #6b5c50;
  --sub:      #8a7060;
  --deep:     #4a3c30;
}
/* セクション背景を2色で交互に */
.section:nth-child(odd)  { background: #f5ede8; }
.section:nth-child(even) { background: #e8ece9; }
```

---

## DESINS-008: スタイリッシュ・モノクロ＋コーラル（ミニマリスト高級感パレット）

**出典**: Invincible Hair MADA / 2026-06-20-mada-beauty-salon.md  
**業種タグ**: #beauty #salon #monochrome #minimal #stylish  
**LP-Rank**: A（80/100）  
**参考箇所**: カラーパレット全体設計

### 参考要素
- 背景: `#ffffff`（純白 — ミニマルの極地）
- テキスト: `#1a1a1a`（ほぼ黒 — 純黒より柔らかく可読性と存在感のバランス）
- アクセント: `#e05050`（コーラルレッド — 温かさと存在感を同時に付与）
- モノクロのシンプルな2色構成にコーラル1色を加えることで「無彩色の単調さ」を回避
- Aスコア（80/100）を獲得した実証済みパレット

### 適用可能業種
美容サロン・アパレル・ライフスタイルブランド・フィットネス・コーポレート（スタイリッシュ系）

### 実装メモ
```css
:root {
  --bg:      #ffffff;
  --text:    #1a1a1a;
  --sub:     #555;
  --border:  #e8e8e8;
  --accent:  #e05050;
  --accent-hover: #c83c3c;
  --surface: #f8f8f8;
}
/* アクセント使用例: ボタン・下線・ホバー色に限定 */
.btn-primary    { background: var(--accent); }
.link:hover     { color: var(--accent); }
.section-label  { color: var(--accent); }
```

---

## DESINS-009: 和紙テクスチャー×ダークゴールド×毛筆体（炭火職人系）

**出典**: 炭火串焼 慶鳥（けいちょう）/ 2026-06-21-keicho-restaurant-lp.md  
**業種タグ**: #restaurant #yakitori #japanese #craftsman  
**LP-Rank**: B-（65/100）  
**参考箇所**: カラーパレット全体設計・背景テクスチャー設計

### 参考要素
- 背景: `#f5ead8`（和紙クリーム）— 和紙・障子を連想させる温かみと質感
- テキスト: `#4a2c0a`（ダークブラウン）— 炭・木・土の色相で職人感を表現
- アクセント: `#c8960a`（鈍金）— ピカピカしないマットな金で「老舗の渋み」を表現
- 焼き鳥・炭火・和食職人系の「暗さの中の温かさ」を演出するパレット
- 毛筆体フォントとの組み合わせでさらに和の格調が増す

### 適用可能業種
焼き鳥・炭火料理・和食職人系・老舗居酒屋・日本料理・蕎麦・うなぎ・鰻

### 実装メモ
```css
:root {
  --bg:     #f5ead8;  /* 和紙クリーム */
  --text:   #4a2c0a;  /* ダークブラウン（炭・木・土）*/
  --sub:    #7a5a30;  /* ミドルブラウン */
  --accent: #c8960a;  /* 鈍金（マットゴールド）*/
  --deep:   #2a1000;  /* ほぼ黒（焦げ感）*/
}
/* フォントペアリング */
h1, h2, h3 { font-family: 'Noto Serif JP', '游明朝', serif; }
/* セクション背景の和の変化 */
.section--washi { background: #f0e0c8; } /* 竹紙トーン */
.section--char  { background: #1a0a00; color: #f5ead8; } /* 炭黒セクション */
```

---

## DESINS-010: バーントオレンジ×ダークチョコブラウン（スパイシー本格系）

**出典**: SPICE HOLIC（スパイスホリック）/ 2026-06-20-spiceholic-restaurant-lp.md  
**業種タグ**: #restaurant #curry #spice #ethnic  
**LP-Rank**: A（82/100）  
**参考箇所**: カラーパレット全体設計

### 参考要素
- メインカラー: `#c8400a`（バーントオレンジ）— 食欲増進色。マクドナルド・吉野家等の飲食チェーンが採用する「食欲と活気」の色相
- 背景: `#2a1a0a`（ダークチョコブラウン）— スパイス・コーヒー・チョコレートを連想させる「深み」の色
- サブ背景: `#f5e6c8`（クリームベージュ）— ご飯・ナン・ライスの色相で「完成された料理」を連想させる
- A'unique（白×グレー）との対比で「飲食LP暖色アクセント必須ルール」を実証（17点差）

### 適用可能業種
スパイスカレー・インド料理・タイ料理・エスニック全般・メキシカン・本格カジュアル飲食

### 実装メモ
```css
:root {
  --bg:          #2a1a0a;  /* ダークチョコブラウン（背景）*/
  --surface:     #f5e6c8;  /* クリームベージュ（カード背景）*/
  --text:        #ffffff;  /* 白（暗背景用）*/
  --sub:         #d8c9a8;  /* ライトクリーム（サブテキスト）*/
  --accent:      #c8400a;  /* バーントオレンジ（強調・CTA）*/
  --accent-hover: #e85a20;
}
/* 食欲訴求強化: アクセントカラーでCTA・タグを統一 */
.btn-primary { background: var(--accent); color: #fff; }
.tag         { background: var(--accent); color: #fff; }
.section-light { background: var(--surface); color: var(--bg); }
```

---

## DESINS-011: クリームベージュ×ウォームブラウン×刺繍テクスチャー（欧風ダイニング系）

**出典**: OINOS（オイノス）/ 2026-06-21-oinos-restaurant-lp.md  
**業種タグ**: #restaurant #european #dining #bar #casual-luxury  
**LP-Rank**: D+（42/100 — パレット設計の方向性のみ参考）  
**参考箇所**: カラーパレット全体設計・テクスチャー設計

### 参考要素
- 背景: `#f5ead0`（クリームベージュ）— ヨーロッパの古いカフェ・レストランの壁色を連想させる温かみ
- テキスト: `#5c3d1e`（ウォームブラウン）— 木製家具・コルクボードの色相。欧風の親しみやすさと上品さを両立
- 刺繍テクスチャー: テーブルクロス・ランチョンマットを連想させる幾何学刺繍パターン
- OINOSはLPスコアが低いが（NewsStale 13年・CTA欠如）、カラーパレットの「方向性」は欧風ダイニング業態と合致しており参考になる

### 適用可能業種
欧風ダイニング・イタリアン・フレンチカフェ・ワインバー・ブランチカフェ・ビストロ

### 実装メモ
```css
:root {
  --bg:     #f5ead0;  /* クリームベージュ（欧州カフェの壁色）*/
  --surface: #fff8f0; /* 明るいクリーム（カード）*/
  --text:   #5c3d1e;  /* ウォームブラウン */
  --sub:    #8a6a48;  /* ライトブラウン */
  --accent: #8a4800;  /* テラコッタブラウン */
  --deep:   #3a2010;  /* ダークブラウン */
}
/* 刺繍風ボーダー装飾 */
.section-embroidery-border {
  border-top: 1px solid var(--accent);
  border-bottom: 1px solid var(--accent);
  padding: 4px 0;
  background-image: repeating-linear-gradient(
    90deg,
    transparent, transparent 6px,
    var(--accent) 6px, var(--accent) 7px
  );
  background-size: 14px 3px;
  background-position: 0 0, 0 100%;
  background-repeat: repeat-x;
}
```

---

## 統計

- 登録事例数: 11（飲食LP 辞典統合 2026-06-22 時点）
- 最終更新: 2026-06-22（DESINS-009〜011 追加 / 飲食LP辞典統合）
