# FVインスピレーション事例集

## 概要
辞典（fv-library.md）に登録するほどではないが、制作時に強く参考になるFV事例を保存する。
「なぜ参考になるか」を必ず構造的に記録する（感想禁止）。

---

## 記録フォーマット

```
## FVINS-XXX: [事例タイトル]
**出典**: [案件名 / 分析ID]
**業種タグ**: #XXX #XXX
**LP-Rank**: S / A / B
**参考箇所**: FV全体 / コピー / ビジュアル / CTA配置 / 余白 / 等

### 参考要素
[何が、どのように機能しているかを構造的に記録]

### 適用可能業種
[この要素が転用できる業種リスト]

### 実装メモ
[コード断片・CSS値・寸法・色コード等]
```

---

## 事例一覧

---

## FVINS-001: グラデーション背景 × 装飾グリッドオーバーレイ

**出典**: beauty-salon-lp（Lumière Beauty Salon）/ 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #beauty #salon #luxury  
**LP-Rank**: A  
**参考箇所**: 背景テクスチャ設計

### 参考要素
- `body::before` に `position: fixed; pointer-events: none;` でグリッドオーバーレイを常時表示
- グリッド線: `rgba(255,255,255,.35)` で44px間隔、全体opacity `0.16` で目立ちすぎない
- 複数の `radial-gradient` を重ねることで、フラットな背景に奥行きと質感を付与
- 画像なしでも高級感を演出できる構成

### 適用可能業種
美容・サロン・ホテル・ブライダル・ジュエリー・インテリア

### 実装メモ
```css
body {
  background:
    radial-gradient(circle at 10% 0%, rgba(232, 204, 181, .45), transparent 34%),
    radial-gradient(circle at 90% 18%, rgba(200, 165, 106, .18), transparent 30%),
    #faf7f3;
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px);
  background-size: 44px 44px;
  opacity: .16;
  z-index: -1;
}
```

---

## FVINS-002: フルスクリーン背景 × 二段階ダークオーバーレイ

**出典**: restaurant-lp / 2026-06-20-restaurant-lp.md  
**業種タグ**: #restaurant #food #luxury  
**LP-Rank**: A  
**参考箇所**: 写真背景の可読性確保手法

### 参考要素
- `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.75))` で上部を薄く・下部を濃くする
- 上部を薄くすることで写真のメインビジュアルを見せつつ、テキストエリア（中下部）の可読性を確保
- 単一rgba値の均一オーバーレイより自然な明暗差が生まれる

### 適用可能業種
飲食・ホテル・旅行・ウェディング・不動産（外観写真）・美容（店内写真）

### 実装メモ
```css
.hero {
  background:
    linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.75)),
    url('hero.jpg') center/cover no-repeat;
}
/* テキスト配置エリアによってオーバーレイ値を調整 */
/* テキスト上部配置: (.2, .6) / 中央配置: (.4, .7) / 下部配置: (.55, .8) */
```

---

## FVINS-003: 英字ラベル × 縦線装飾 × 明朝体H1 の三層構造

**出典**: beauty-salon-lp（Lumière Beauty Salon）/ 2026-06-20-beauty-salon-lp.md  
**業種タグ**: #beauty #luxury #branding  
**LP-Rank**: A  
**参考箇所**: 見出し階層設計

### 参考要素
- 英字キャプション（12px / 追跡0.24em）→ 縦線（1px / 54px）→ 明朝体H1 の順序
- 英字ラベルがブランド感と情報整理を同時に担う
- 縦線がセクションヘッダーの「始まり」を視覚的に示す
- 3層構造が視線を自然にH1へ誘導する

### 適用可能業種
美容・ホテル・ブライダル・飲食（高級）・インテリア・アパレル

### 実装メモ
```css
.ornament {
  width: 1px;
  height: 54px;
  background: linear-gradient(#c8a56a, transparent);
  margin: 0 auto 18px;
}
.label {
  font-family: 'Jost', sans-serif;
  color: #c8a56a;
  letter-spacing: .24em;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
}
```

---

## FVINS-004: clamp()によるレスポンシブH1スケーリング

**出典**: restaurant-lp / 2026-06-20-restaurant-lp.md  
**業種タグ**: #all  
**LP-Rank**: A  
**参考箇所**: タイポグラフィのレスポンシブ設計

### 参考要素
- `font-size: clamp(46px, 8vw, 92px)` でモバイル〜デスクトップを1行で制御
- 最小値・ビューポート依存値・最大値の三値設定
- メディアクエリなしで自然なスケーリングを実現

### 適用可能業種
全業種共通

### 実装メモ
```css
/* 飲食・ラグジュアリー系 大胆なH1 */
h1 { font-size: clamp(46px, 8vw, 92px); }

/* 美容・サービス系 標準H1 */
h1 { font-size: clamp(36px, 6vw, 72px); }

/* コーポレート・採用系 控えめH1 */
h1 { font-size: clamp(28px, 4.5vw, 56px); }

/* セクションH2 全業種共通 */
h2 { font-size: clamp(28px, 4vw, 50px); }
```

---

## 統計

- 登録事例数: 4
- 最終更新: 2026-06-20
