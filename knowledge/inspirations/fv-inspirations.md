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

## FVINS-005: 縦書きFVコピー × 施術シーン写真（和の品格）

**出典**: Hériter（ヘリテ）/ 2026-06-20-heriter-beauty-salon.md  
**業種タグ**: #beauty #salon #japanese #heritage #natural  
**LP-Rank**: B（70/100）  
**参考箇所**: FVコピー表現・タイポグラフィ設計

### 参考要素
- 縦書きメインコピー「毎日のために 心地のよいスタイルを」が和の品格と温かみを同時表現
- フランス語ブランド名（Hériter）と縦書き日本語コピーの対比で「洋×和」の独自世界観
- 施術シーン（スタイリスト + お客様）の写真が「どんな空間で施術を受けるか」をFVで即座に伝える
- コピーは「日常」訴求（特別な日ではなく毎日のために）でリピート来店の動機を形成

### 適用可能業種
美容サロン・日本料理・旅館・茶道・和雑貨・老舗ブランド全般

### 実装メモ
```css
/* 縦書きコピーの基本設定 */
.fv-copy-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: 'Noto Serif JP', serif;
  font-size: clamp(20px, 3vw, 38px);
  letter-spacing: .18em;
  line-height: 1.9;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,.3);
}
/* モバイルでは横書きに */
@media (max-width: 767px) {
  .fv-copy-vertical {
    writing-mode: horizontal-tb;
    font-size: clamp(18px, 5vw, 28px);
  }
}
```

---

## FVINS-006: 英語哲学型FVコピー × ミニマリスト施術写真

**出典**: Invincible Hair MADA / 2026-06-20-mada-beauty-salon.md  
**業種タグ**: #beauty #salon #monochrome #minimal #stylish #philosophy  
**LP-Rank**: A（80/100）  
**参考箇所**: FVコピー表現・世界観設計（GEN-001シリーズ唯一のFV満点事例）

### 参考要素
- 「BE YOURSELF. FOR ALWAYS.」全大文字英語短文2連で哲学的価値観を即座に表明
- ピリオド（.）で1文ずつ完結させることで重みと断言の印象を強める
- モノクロ背景 + コーラルアクセントというシンプルな配色がコピーを際立たせる
- 業種説明・悩み共感型コピーを使わないことでターゲットのセルフスクリーニングが成立

### 適用可能業種
美容サロン（スタイリッシュ系）・アパレル・フィットネス・ライフスタイルブランド・コーポレート（ブランド系）

### 実装メモ
```css
/* 英語哲学コピーのスタイル */
.fv-title-philosophy {
  font-family: 'Jost', 'Montserrat', 'Inter', sans-serif;
  font-size: clamp(42px, 7vw, 90px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: #fff;
  line-height: 1.15;
}
/* 補足の日本語コピー */
.fv-subtitle-ja {
  font-family: 'Noto Serif JP', serif;
  font-size: clamp(13px, 1.8vw, 17px);
  letter-spacing: .12em;
  color: rgba(255,255,255,.8);
  margin-top: 20px;
  line-height: 2;
}
```

---

## 統計

- 登録事例数: 6（美容室LP 辞典統合 2026-06-22 時点）
- 最終更新: 2026-06-22（FVINS-005〜006 追加 / 美容室LP辞典統合）
