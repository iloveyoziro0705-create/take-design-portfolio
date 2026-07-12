# Button Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: components

## 概要

ボタンコンポーネントのデザイン・実装パターンライブラリ。
プライマリ・セカンダリ・ゴースト・フローティングなど全種類を収録予定。

## 収録予定パターン

### スタイル別
- BTN-001: プライマリボタン（塗り・角丸）
- BTN-002: セカンダリボタン（アウトライン）
- BTN-003: ゴーストボタン（透明背景・白枠）
- BTN-004: テキストリンクボタン
- BTN-005: アイコン付きボタン
- BTN-006: フローティングCTAボタン（固定）

### サイズ別
- Large / Medium / Small / Full-Width

### 状態別
- Default / Hover / Active / Disabled / Loading

### 業種別推奨カラー
- 美容: ピンク系・ゴールド系
- 医療: 青・緑（信頼）
- SaaS: ブランドカラー
- 飲食: オレンジ・赤（食欲）
- 採用: 企業カラー

## 実案件からの知見（2026-07-12 追加）

12件の実LP（ai-school-lp, beauty-salon-lp, business-design-academy-lp, career-compass-lp, dental-clinic-lp, elearning-lp, finance-lp, hoikushi-mikata-lp, lumia-lp, mirai-ryo-lp, rapas-lp, restaurant-lp）のインラインCSS／外部CSSを実地調査し、実際に使われていたボタン実装パターンを記録する。

### 形状：ピル型（border-radius: 999px）が主流

CTAボタンは角丸長方形よりも完全な「ピル型」が優勢。実測値：

- `finance-lp/index.html` `.btn { border-radius: 999px; padding: 16px 32px; }`
- `ai-school-lp/index.html` `.btn { border-radius: 999px; min-width: 220px; padding: 17px 32px; }`
- `restaurant-lp/index.html` `.btn { border-radius: 999px; padding: 16px 36px; background: #d8a76a; }`
- `career-compass-lp/index.html` `.fixed-cta { border-radius: 999px; padding: 14px 24px; }`

一方、`rapas-lp/index.html` は `.btn { border-radius: var(--r); }`（`--r: 16px`）とやや角丸長方形寄りで、業種・ブランドトーンに応じて16px角丸とピル型の2系統が使い分けられている。

### Hover：translateY + box-shadow拡大がほぼ全案件共通

ほぼ全てのプライマリボタンで「上に2〜4px浮かせつつ影を拡大」というホバー表現が使われている。ブランドカラーに合わせたrgba影色が特徴。

```css
/* rapas-lp/index.html */
.btn-cta {
  background: linear-gradient(135deg, var(--cta) 0%, var(--cta-dark) 100%);
  color: #fff;
  box-shadow: 0 6px 24px rgba(249,115,22,.38);
}
.btn-cta:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(249,115,22,.48); }
```

```css
/* ai-school-lp/index.html */
.btn-primary { background: var(--grad-solid); color: #fff; box-shadow: 0 18px 45px rgba(59,130,246,.28); }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 22px 55px rgba(124,58,237,.4); }
```

`mirai-ryo-lp/index.html` の `.reason-card:hover`, `beauty-salon-lp/index.html` の `.ba-card:hover` 等、カードのホバーにも同じ「translateY + shadow拡大」が使われており、ボタンとカードでホバー言語が統一されている案件が多い。

### グラデーション塗り + 単色アウトラインの2系統構成

多くの案件で「プライマリ＝斜め45度グラデーション塗り／セカンダリ＝アウトライン」の組み合わせが採用されている。

- `rapas-lp/index.html`: `.btn-cta`（グラデーション）/ `.btn-ghost`（白背景+2px枠線）/ `.btn-line`（LINE公式カラー `#06C755` 単色塗り、LINE登録導線専用）
- `lumia-lp/style.css`: `.btn--line`（塗り） / `.btn--ghost`（`border: 1.5px solid` transparent bg）。サイズバリアントは `.btn--sm/--lg/--xl` で `padding` と `font-size` のみ差し替え
- `finance-lp/index.html`, `career-compass-lp/index.html`, `dental-clinic-lp/index.html`: いずれも `.btn-primary`（塗り）/ `.btn-outline`（枠線）の2種構成

日本のLPでは「LINE登録」を主要CVとする案件（rapas-lp, mirai-ryo-lp）で、LINE公式グリーン（`#06C755`）をそのまま採用したボタンが独立したバリアントとして定義されている点は再利用価値が高い。

### BTN-006 フローティングCTAボタン：実装パターンあり

固定フッターCTA（画面右下 or 全幅下部固定）が4案件で確認できた。共通して「ピル型・ブランドカラー・強い影・スクロールで表示/非表示」という設計。

```css
/* career-compass-lp/index.html */
.fixed-cta{position:fixed;right:20px;bottom:20px;z-index:60;background:var(--blue);
  color:#fff;border-radius:999px;padding:14px 24px;font-weight:900;font-size:14px;
  box-shadow:0 8px 32px rgba(37,99,235,.36);transition:.2s ease}
.fixed-cta:hover{transform:translateY(-2px)}
@media(max-width:960px){ .fixed-cta{left:16px;right:16px;text-align:center} }
```

```css
/* hoikushi-mikata-lp/index.html：スクロール連動の表示制御（opacity + pointer-events） */
.fixed-cta {
  position: fixed; right: 18px; bottom: 22px; z-index: 60;
  background: linear-gradient(135deg, var(--pink), #ff8ab0);
  border-radius: 999px; padding: 13px 22px;
  box-shadow: 0 12px 32px rgba(248,95,145,.38);
  opacity: 0; pointer-events: none;
  transition: opacity .3s ease, transform .3s ease;
  transform: translateY(8px);
}
.fixed-cta.show { opacity: 1; pointer-events: auto; transform: translateY(0); }
```

`rapas-lp/index.html` の `.floating-btn` も同型（グラデーション+`box-shadow:0 4px 18px rgba(249,115,22,.38)`）。モバイルでは `.floating-cta-text`（付随テキスト）を `display:none` にしてボタンのみ全幅表示にする調整が共通していた。

### ステップフォームの送信ボタン

`mirai-ryo-lp/index.html` の複数ステップ相談フォームでは、送信ボタンにインラインスタイルで `width:100%; font-size:16px; padding:18px` を追加指定し、他のボタンより一回り大きくして視認性を強調していた（実装は `.btn` クラス + `style=""` の併用）。

### 業種別カラーの実測値（裏付け）

- 医療・歯科: `dental-clinic-lp/index.html` `--primary:#2563eb`
- 金融: `finance-lp/index.html` `--primary: var(--primary)`（青系、`.btn-primary` box-shadow `rgba(29,78,216,.24)`）
- 保育・子育て: `hoikushi-mikata-lp/index.html` `--pink: #f85f91`
- 飲食: `restaurant-lp/index.html` ボタン背景 `#d8a76a`（ゴールドベージュ、食欲色というより高級感訴求）
- CTA共通オレンジ: `rapas-lp/index.html` `--cta: #F97316`（業種を問わず「今すぐ行動」を促す色として単独のCTA変数を持つ設計が複数案件で共通）
