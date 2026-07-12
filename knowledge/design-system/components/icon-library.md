# Icon Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: components

## 概要

アイコン使用ルール・推奨ライブラリ・業種別アイコンセットの定義ファイル。
一貫したアイコン表現でブランドの統一感を維持するための基準を収録予定。

## 収録予定内容

### 推奨アイコンライブラリ
- Heroicons（Tailwind CSS標準）
- Lucide React
- Phosphor Icons
- Font Awesome 6

### 使用ルール
- サイズ基準（16px / 20px / 24px / 32px）
- 色使い（テキストカラーと合わせる / アクセントカラー使用条件）
- ストローク幅の統一
- アイコンとテキストの並べ方

### 業種別推奨アイコンセット
- 美容: ダイヤ・花・鏡・ハサミ
- 医療: ハート・盾・聴診器・カレンダー
- SaaS: チェック・スタック・クラウド・グラフ
- 採用: 人・ビルディング・成長グラフ・ハンドシェイク
- 飲食: フォーク・星・時計・場所ピン

## 実案件からの知見（2026-07-12 追加）

12件のLPのアイコン実装を調査した結果、大きく2系統のアプローチが実際に使われていた。

### 系統1：インラインSVGストロークアイコン（高コスト帯・信頼訴求系案件で多用）

`dental-clinic-lp`（38件）, `business-design-academy-lp`（46件）, `career-compass-lp`（33件）, `elearning-lp`（34件）, `finance-lp`（14件）, `beauty-salon-lp`（19件）, `lumia-lp`（24件）で採用。共通仕様は `viewBox="0 0 24 24"` / `stroke-width:2〜2.5` / `stroke-linecap:round` / `stroke-linejoin:round` で、色は `fill:none; stroke: var(--primary)` のように**CSS変数でブランドカラーに統一**している。

```html
<!-- business-design-academy-lp/index.html（FAQアコーディオンの矢印アイコン） -->
<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 9 12 15 18 9"/>
</svg>
```

このアイコンを収める容器（アイコンサークル）のサイズは案件を跨いでほぼ収束していた：

```css
/* dental-clinic-lp/index.html */
.icon-circle{ width:56px; height:56px; border-radius:16px; background:var(--surface-blue);
  display:flex; align-items:center; justify-content:center; margin-bottom:18px; }
.icon-circle svg{ stroke:var(--primary); width:24px; height:24px; stroke-width:2; }
```

```css
/* rapas-lp/index.html（同型、コンテナ54px） */
.icon{ width:54px; height:54px; border-radius:16px; background:var(--softBlue);
  display:grid; place-items:center; color:var(--blue); margin-bottom:16px; font-size:24px }
```

→ **アイコンコンテナは54〜56px角丸スクエア（border-radius 16px）、内部SVGは24px、ストローク2px、色はブランドの薄色背景×濃色アイコン**という組み合わせが実務上の標準値として確立している。

### 系統2：絵文字／漢字一文字アイコン（人材・求人系の低コスト・親近感訴求案件）

`mirai-ryo-lp/index.html`（寮付き求人LP）はSVGをほぼ使わず（1件のみ）、代わりに**絵文字や漢字一文字**を同じ`.icon`コンテナに入れて代用していた。

```html
<div class="card fadeUp"><div class="icon">🏠</div><h3>住む場所が必要</h3>...</div>
<div class="card fadeUp"><div class="icon">⚡</div><h3>今すぐ働きたい</h3>...</div>
<div class="card"><div class="icon">初</div><h3>初期費用0円</h3>...</div>
<div class="card"><div class="icon">貯</div><h3>貯金しやすい</h3>...</div>
```

制作コストゼロで実装でき、カジュアル・人間味を出したい業種（求人・生活支援など）では違和感なく機能する。ただし「今後追加予定」リストが想定するHeroicons/Lucide等のアイコンライブラリとは異なる、日本のLP制作特有の割り切った手法として記録しておく価値がある。「予算・納期が厳しいがアイコンは欲しい」場合の代替手段として選択肢に加えられる。

### アコーディオン開閉アイコンの回転パターン

`business-design-academy-lp/index.html` のFAQでは、開閉状態を色反転＋回転で表現している：

```css
.faq-item.open .faq-arrow { background: var(--gold); border-color: var(--gold); transform: rotate(180deg); }
.faq-arrow svg { width:12px; height:12px; stroke: var(--gold); transition: stroke .25s ease; }
.faq-item.open .faq-arrow svg { stroke: var(--dark-text); }
```

シェブロン（`<polyline points="6 9 12 15 18 9"/>`）1個を`transform: rotate(180deg)`するだけで開閉状態を表現でき、専用の「開く/閉じるアイコン2種」を用意する必要がない点は実装効率が良い。

### まとめ

- SVGアイコンは24px・stroke-width 2〜2.5・stroke-linecap round で統一されており、色は必ずCSS変数（ブランドカラー）を参照
- アイコン格納コンテナは54〜56px角丸スクエア（16px）が事実上の標準
- 予算/トーンによっては絵文字・漢字一字で代替する手法も実案件で機能している
- 開閉系UIのアイコンは1種を回転させて使い回すのが定石
