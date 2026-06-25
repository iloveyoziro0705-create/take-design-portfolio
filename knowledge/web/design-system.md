# デザインシステム辞典

## 概要
LP・ホームページ・WordPressサイト制作で共通利用するデザイントークンとコンポーネントを定義する。

---

## Learning Reason（各デザイントークン追加時に必須記録）

新規トークン・パレット・コンポーネントを追加する際は、追加箇所の末尾に以下を記録すること。

```markdown
## Learning Reason
### 保存理由
[なぜこのデザイントークンをシステムに追加したか（実案件での発見・効果の根拠）]
### 再利用価値
[このトークンが適用できる業種・ブランドトーンの範囲]
### 特に優れている点
[可読性・CVR・ブランド整合性の観点で優れている点]
### 他案件への応用先
[適用推奨の業種・コンセプト・ターゲット層]
```

---

## タイポグラフィ

### フォントスタック

#### 日本語 + 英字 組み合わせパターン

| パターン名 | 見出し | 本文 | ラベル/英字 | 用途 |
|-----------|--------|------|------------|------|
| ラグジュアリー | Noto Serif JP | Noto Sans JP | Jost / Cormorant Garamond | 美容・ホテル・ブランド |
| モダン | Noto Serif JP | Noto Sans JP | Montserrat | レストラン・建築 |
| クリーン | Noto Sans JP | Noto Sans JP | Inter | IT・SaaS・コーポレート |
| フレンドリー | Noto Sans JP | Noto Sans JP | Poppins | 教育・採用・福祉 |
| 伝統・信頼 | Noto Serif JP | Noto Sans JP | EB Garamond | 士業・金融・医療 |

### Google Fontsインポート（推奨テンプレート）

```html
<!-- ラグジュアリー系 -->
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@500;600;700&display=swap" rel="stylesheet">

<!-- モダン系 -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@500;700&display=swap" rel="stylesheet">

<!-- クリーン系 -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
```

### フォントサイズスケール

```css
:root {
  --text-xs:   12px;
  --text-sm:   14px;
  --text-base: 16px;
  --text-md:   17px;
  --text-lg:   18px;
  --text-xl:   20px;
  --text-2xl:  24px;
  --text-3xl:  30px;
  --text-4xl:  36px;
  --text-5xl:  48px;
  --text-6xl:  60px;
  --text-7xl:  72px;
  --text-fluid-h1: clamp(40px, 7vw, 88px);
  --text-fluid-h2: clamp(28px, 4vw, 50px);
  --text-fluid-h3: clamp(20px, 2.5vw, 32px);
}
```

### 行間規定

| 用途 | line-height |
|------|------------|
| 見出し | 1.2 〜 1.45 |
| リード文・本文 | 1.8 〜 2.0 |
| ラベル・キャプション | 1.4 |
| ボタン | 1.0 |

---

## カラーシステム

### ベースカラーパレット（業種別）

```css
/* 美容・サロン系 ラグジュアリー */
--lux-bg:      #faf7f3;
--lux-surface: #ffffff;
--lux-text:    #4a403b;
--lux-sub:     #7c6f68;
--lux-accent:  #d7b49e;
--lux-gold:    #c8a56a;
--lux-gold-lt: #ead8b7;
--lux-soft:    #f1e5dc;
--lux-deep:    #3b2f2a;

/* IT・テック系 */
--tech-bg:     #0f172a;
--tech-surface:#1e293b;
--tech-text:   #e2e8f0;
--tech-sub:    #94a3b8;
--tech-accent: #6366f1;
--tech-accent2:#0ea5e9;

/* 医療・ウェルネス系 */
--med-bg:      #f0fff4;
--med-surface: #ffffff;
--med-text:    #14532d;
--med-sub:     #166534;
--med-accent:  #2eb88a;
--med-accent2: #06b6d4;

/* 採用・福祉系 */
--hr-bg:       #fff8f2;
--hr-surface:  #ffffff;
--hr-text:     #4a3728;
--hr-sub:      #7c5c48;
--hr-accent:   #f97316;
--hr-accent2:  #fb923c;

/* 金融・信頼系 */
--fin-bg:      #f8f9fb;
--fin-surface: #ffffff;
--fin-text:    #172b4d;
--fin-sub:     #344563;
--fin-accent:  #1a3a5c;
--fin-accent2: #2e7d32;
```

### カラー使用原則
- 背景: 5% 以下の彩度（アイボリー・オフホワイト）
- テキスト: `#1a1a1a` 〜 `#4a403b`（黒すぎない）
- アクセント: セクション全体の 10% 以内
- CTA: 必ずアクセントカラーと異なる「行動色」を使用

---

## スペーシングシステム

```css
:root {
  --space-2:   2px;
  --space-4:   4px;
  --space-8:   8px;
  --space-12:  12px;
  --space-16:  16px;
  --space-20:  20px;
  --space-24:  24px;
  --space-32:  32px;
  --space-40:  40px;
  --space-48:  48px;
  --space-64:  64px;
  --space-80:  80px;
  --space-96:  96px;
  --space-120: 120px;
  --space-160: 160px;
}

/* セクション padding 規定 */
.section        { padding: 96px 0; }
.section--lg    { padding: 120px 0; }
.section--sm    { padding: 64px 0; }

/* コンテナ幅 */
.container      { width: min(1140px, 90%); margin: 0 auto; }
.container--sm  { width: min(800px, 90%); margin: 0 auto; }
.container--lg  { width: min(1280px, 90%); margin: 0 auto; }
```

---

## ボーダーラジウス

```css
:root {
  --radius-sm:  8px;
  --radius-md:  16px;
  --radius-lg:  24px;
  --radius-xl:  32px;
  --radius-pill: 999px;
}
```

---

## シャドウシステム

```css
:root {
  --shadow-sm:  0 2px 8px rgba(0,0,0,.06);
  --shadow-md:  0 8px 24px rgba(0,0,0,.08);
  --shadow-lg:  0 16px 48px rgba(0,0,0,.10);
  --shadow-xl:  0 24px 70px rgba(0,0,0,.12);
  --shadow-card: 0 4px 20px rgba(0,0,0,.07);
}
/* カラー付きシャドウ（CTAボタン用）*/
.shadow-gold    { box-shadow: 0 8px 24px rgba(200,165,106,.35); }
.shadow-green   { box-shadow: 0 8px 24px rgba(6,199,85,.35); }
.shadow-orange  { box-shadow: 0 8px 24px rgba(249,115,22,.35); }
.shadow-blue    { box-shadow: 0 8px 24px rgba(37,99,235,.35); }
```

---

## グリッドシステム

```css
/* 2カラム */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
/* 3カラム */
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
/* 4カラム */
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }

/* モバイル: 全て1カラムへ */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
/* タブレット */
@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
}
```

---

## アニメーション

```css
/* フェードインアップ（スクロール連動） */
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .6s ease, transform .6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: none;
}

/* スクロール連動JS */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

---

## レスポンシブブレークポイント

```css
/* モバイルファースト */
/* xs: 0〜 */
@media (min-width: 480px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

---

## カードコンポーネント

### 基本カード（汎用）
```css
.card {
  background: #fff;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  padding: 32px;
  transition: transform .25s, box-shadow .25s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}
```

### カードバリエーション

#### アイコン+テキストカード（機能説明・特徴3点など）
```html
<div class="card card--feature">
  <div class="card-icon">
    <svg><!-- アイコン --></svg>
  </div>
  <h3 class="card-title">見出し</h3>
  <p class="card-body">説明テキスト</p>
</div>
```
```css
.card--feature {
  text-align: center;
}
.card-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--accent-lt, #f0f4ff);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
.card-title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: 8px;
}
.card-body {
  font-size: var(--text-base);
  color: #666;
  line-height: 1.8;
}
```

#### ボーダーアクセントカード（左ラインあり）
```css
.card--bordered-left {
  border-left: 4px solid var(--accent);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding-left: 24px;
  box-shadow: none;
  background: #fafafa;
}
```

#### ダークカード（SaaS・テック系）
```css
.card--dark {
  background: #1e293b;
  color: #e2e8f0;
  box-shadow: 0 8px 32px rgba(0,0,0,.3);
}
.card--dark .card-title { color: #fff; }
.card--dark .card-body  { color: #94a3b8; }
```

### 業種別カード推奨スタイル
| 業種 | スタイル | radius |
|-----|--------|--------|
| 美容・サロン | 白背景・薄ゴールドシャドウ | 16px |
| SaaS・IT | ダークカード or 白背景+青アクセント | 12px |
| 医療 | 白背景・薄グリーンアクセント | 20px |
| 採用 | 白背景・オレンジアクセント左ライン | 12px |
| 飲食 | 白背景 or ベージュ背景 | 12px |

---

## ボタンコンポーネント

### 基本ボタン仕様
```css
/* ベース（全ボタン共通） */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 40px;
  border-radius: var(--radius-pill);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: .03em;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: transform .2s, box-shadow .2s, opacity .2s;
  white-space: nowrap;
}
.btn:hover {
  transform: translateY(-3px);
}
.btn:active {
  transform: translateY(0);
}

/* プライマリ（メインCTA） */
.btn-primary {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 8px 24px rgba(var(--accent-rgb), .35);
}
.btn-primary:hover {
  box-shadow: 0 12px 32px rgba(var(--accent-rgb), .45);
}

/* セカンダリ（サブCTA） */
.btn-secondary {
  background: transparent;
  color: var(--accent);
  border: 2px solid var(--accent);
}
.btn-secondary:hover {
  background: var(--accent);
  color: #fff;
}

/* ゴースト（最低ハードルCTA） */
.btn-ghost {
  background: transparent;
  color: #666;
  border: 1.5px solid #ddd;
  font-weight: 600;
  font-size: 14px;
}

/* 大サイズ（FV等のメインCTA） */
.btn-lg {
  padding: 20px 56px;
  font-size: 18px;
}

/* 小サイズ（ナビ内・バッジ隣など） */
.btn-sm {
  padding: 10px 24px;
  font-size: 14px;
}

/* フルwidth（モバイル用） */
.btn-block {
  width: 100%;
  display: flex;
}
```

### CTAボタン下の安心文言
```html
<div class="btn-wrapper">
  <a href="#" class="btn btn-primary btn-lg">今すぐ無料で始める</a>
  <p class="btn-assurance">
    <span>✓ クレジットカード不要</span>
    <span>✓ いつでも解約可能</span>
    <span>✓ 14日間無料</span>
  </p>
</div>
```
```css
.btn-wrapper { text-align: center; }
.btn-assurance {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 12px;
  font-size: 13px;
  color: #888;
}
```

---

## 見出しコンポーネント

### セクション見出し（標準）
```html
<div class="section-header">
  <p class="section-tag">FEATURE</p>
  <h2 class="section-title">主要機能</h2>
  <p class="section-desc">業務に必要な機能がすべて揃っています</p>
</div>
```
```css
.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.section-tag {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .2em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 12px;
}
.section-title {
  font-size: var(--text-fluid-h2);
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 16px;
  color: var(--text-main, #1a1a1a);
}
.section-desc {
  font-size: var(--text-base);
  color: #666;
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
}
```

### タグライン+見出し+サブ（FV用）
```css
.fv-heading {
  font-size: var(--text-fluid-h1);
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -.02em;
}
.fv-subheading {
  font-size: clamp(16px, 2vw, 22px);
  color: #555;
  line-height: 1.7;
  margin-top: 16px;
}
```

### 装飾見出しパターン（業種別）
| パターン | CSS例 | 業種 |
|---------|------|------|
| 下線アクセント | `border-bottom: 3px solid var(--accent)` | 美容・サロン |
| 縦ライン+余白 | `border-left: 4px solid var(--accent); padding-left: 16px` | 採用・医療 |
| 背景ハイライト | `background: linear-gradient(transparent 60%, var(--accent-lt) 40%)` | スクール |
| ゴールドグラデ | `background: linear-gradient(135deg, #c8a56a, #e8d5a0); -webkit-background-clip: text; color: transparent` | 高級美容・ブランド |

---

## 背景・セクションデザイン

### セクション背景パターン
```css
/* ①白（デフォルト） */
.bg-white { background: #fff; }

/* ②アイボリー（セクション区切り） */
.bg-ivory { background: #faf8f5; }

/* ③薄グレー（カードが映える背景） */
.bg-gray { background: #f5f7fa; }

/* ④ダーク（CTA・ヒーローセクション） */
.bg-dark { background: #1a1a1a; color: #fff; }

/* ⑤アクセント薄め（強調セクション） */
.bg-accent-lt { background: var(--accent-lt, #f0f4ff); }

/* ⑥グラデーション（FV・最終CTA） */
.bg-gradient {
  background: linear-gradient(135deg, var(--color-from) 0%, var(--color-to) 100%);
}

/* ⑦画像+暗幕（FV背景） */
.bg-hero {
  background: url('./images/hero.jpg') center/cover no-repeat;
  position: relative;
}
.bg-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.45);
}
```

### セクション交互配色パターン（LP標準）
```
Section 1: #fff（FV）
Section 2: #faf8f5（課題共感）
Section 3: #fff（解決策・機能）
Section 4: #1a1a1a（実績・数字）  ← ダーク差し込み
Section 5: #fff（導入事例）
Section 6: #f5f7fa（価格プラン）
Section 7: #1a1a1a（最終CTA）
```

---

## 比較表コンポーネント

### 競合比較表（機能比較）
```html
<div class="comparison-table-wrap">
  <table class="comparison-table">
    <thead>
      <tr>
        <th></th>
        <th class="self">自社ツール</th>
        <th>競合A</th>
        <th>競合B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>機能X</td>
        <td class="self"><span class="check">✓</span></td>
        <td><span class="cross">✗</span></td>
        <td><span class="check check--gray">✓</span></td>
      </tr>
      <tr>
        <td>価格</td>
        <td class="self">¥3,000/月</td>
        <td>¥8,000/月</td>
        <td>¥5,500/月</td>
      </tr>
    </tbody>
  </table>
</div>
```
```css
.comparison-table-wrap {
  overflow-x: auto;  /* スマホ横スクロール */
  border-radius: 12px;
  box-shadow: var(--shadow-md);
}
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 560px;
}
.comparison-table th, .comparison-table td {
  padding: 16px 20px;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
  font-size: 15px;
}
.comparison-table th:first-child,
.comparison-table td:first-child {
  text-align: left;
  font-weight: 600;
  color: #555;
}
/* 自社列ハイライト */
.comparison-table .self {
  background: #f0f4ff;
  font-weight: 700;
  color: #4a6cf7;
}
.comparison-table thead .self {
  background: #4a6cf7;
  color: #fff;
}
.check { color: #22c55e; font-size: 20px; font-weight: 900; }
.cross { color: #ef4444; font-size: 20px; }
.check--gray { color: #94a3b8; }
```

### 料金プラン比較表（3段プラン）
```html
<div class="pricing-grid">
  <div class="pricing-card">
    <p class="plan-name">Starter</p>
    <p class="plan-price">¥3,000<span>/月</span></p>
    <ul class="plan-features">
      <li>機能A</li>
      <li>機能B</li>
      <li class="disabled">機能C（Proのみ）</li>
    </ul>
    <a href="#" class="btn btn-secondary">無料で始める</a>
  </div>
  <div class="pricing-card pricing-card--recommend">
    <p class="recommend-badge">おすすめ</p>
    <p class="plan-name">Pro</p>
    <p class="plan-price">¥8,000<span>/月</span></p>
    <ul class="plan-features">...</ul>
    <a href="#" class="btn btn-primary">無料トライアル</a>
  </div>
  <div class="pricing-card">
    <p class="plan-name">Enterprise</p>
    <p class="plan-price">要相談</p>
    <a href="#" class="btn btn-ghost">お問い合わせ</a>
  </div>
</div>
```
```css
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}
@media (max-width: 767px) {
  .pricing-grid { grid-template-columns: 1fr; }
}
.pricing-card {
  background: #fff;
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: var(--shadow-card);
  text-align: center;
  position: relative;
}
.pricing-card--recommend {
  border: 2px solid var(--accent);
  transform: scale(1.04);
}
.recommend-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 16px;
  border-radius: 999px;
}
.plan-name { font-size: 16px; color: #888; margin-bottom: 8px; font-weight: 600; }
.plan-price { font-size: 40px; font-weight: 800; color: var(--text-main); margin-bottom: 24px; }
.plan-price span { font-size: 16px; color: #888; }
.plan-features { list-style: none; text-align: left; margin-bottom: 28px; display: flex; flex-direction: column; gap: 10px; }
.plan-features li { font-size: 14px; color: #555; padding-left: 20px; position: relative; }
.plan-features li::before { content: '✓'; position: absolute; left: 0; color: #22c55e; font-weight: 700; }
.plan-features .disabled { color: #ccc; }
.plan-features .disabled::before { content: '—'; color: #ccc; }
```

---

## 実績表示コンポーネント（数字・ソーシャルプルーフ）

### 数字実績カード（4点）
```html
<div class="stats-grid">
  <div class="stat-item">
    <p class="stat-num">10,000<span>社</span></p>
    <p class="stat-label">累計導入企業数</p>
  </div>
  <div class="stat-item">
    <p class="stat-num">98.5<span>%</span></p>
    <p class="stat-label">継続利用率</p>
  </div>
  <div class="stat-item">
    <p class="stat-num">40<span>%</span></p>
    <p class="stat-label">平均工数削減率</p>
  </div>
  <div class="stat-item">
    <p class="stat-num">4.8<span>/5</span></p>
    <p class="stat-label">ユーザー満足度</p>
  </div>
</div>
```
```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  text-align: center;
}
@media (max-width: 767px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
}
.stat-num {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 900;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 8px;
}
.stat-num span {
  font-size: 0.5em;
  font-weight: 700;
  color: var(--text-main);
}
.stat-label {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}
```

### 導入企業ロゴバンド
```html
<div class="logo-band-section">
  <p class="logo-band-label">導入企業実績</p>
  <div class="logo-band">
    <img src="./images/logo-company-a.png" alt="○○株式会社">
    <img src="./images/logo-company-b.png" alt="△△株式会社">
    <!-- 以下繰り返し -->
  </div>
</div>
```
```css
.logo-band-section { text-align: center; padding: 48px 0; }
.logo-band-label { font-size: 12px; color: #aaa; letter-spacing: .15em; text-transform: uppercase; margin-bottom: 24px; }
.logo-band {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(24px, 4vw, 56px);
  flex-wrap: wrap;
  filter: grayscale(100%);
  opacity: .55;
  transition: opacity .3s;
}
.logo-band:hover { opacity: .8; }
.logo-band img {
  height: clamp(24px, 3vw, 40px);
  width: auto;
  object-fit: contain;
}
```

---

## 口コミ・レビューコンポーネント

### 口コミカード（スター+コメント型）
```html
<div class="review-card">
  <div class="review-stars">
    <span>★★★★★</span>
    <span class="review-score">5.0</span>
  </div>
  <blockquote class="review-body">
    「〇〇を使い始めてから、毎月の作業が○時間短縮されました。
    担当の方のサポートも丁寧で、導入後も安心して使えています。」
  </blockquote>
  <div class="review-author">
    <img src="./images/avatar-01.jpg" alt="田中様" class="review-avatar">
    <div>
      <p class="review-name">田中 様</p>
      <p class="review-meta">○○株式会社 / マーケティング部長</p>
    </div>
  </div>
</div>
```
```css
.review-card {
  background: #fff;
  border-radius: 16px;
  padding: 28px;
  box-shadow: var(--shadow-card);
}
.review-stars {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.review-stars span:first-child { color: #f59e0b; font-size: 18px; }
.review-score { font-size: 14px; font-weight: 700; color: #f59e0b; }
.review-body {
  font-size: 15px;
  line-height: 1.8;
  color: #555;
  margin: 0 0 20px;
  quotes: "「" "」";
}
.review-body::before { content: open-quote; }
.review-body::after  { content: close-quote; }
.review-author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.review-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}
.review-name { font-size: 15px; font-weight: 700; }
.review-meta { font-size: 12px; color: #999; margin-top: 2px; }
```

### 業種別口コミ注意点
| 業種 | 重要ポイント | NGパターン |
|-----|-----------|----------|
| BtoB/SaaS | 企業名+役職+成果数字（三点セット） | 匿名「A社様」 |
| 美容・サロン | 実名 or イニシャル+ビフォーアフター | 顔写真なし+「効果には個人差」のみ |
| 医療・クリニック | 薬機法準拠（「効果を実感」等NG） | 症状改善の断定表現 |
| 採用LP | 現役スタッフの写真+名前+年齢+職種 | イラストアイコン+匿名 |

---

## FAQコンポーネント

### アコーディオンFAQ
```html
<div class="faq-list">
  <div class="faq-item">
    <button class="faq-question" aria-expanded="false">
      <span>Q.</span>
      <span class="faq-q-text">セキュリティはどうなっていますか？</span>
      <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer" hidden>
      <p>A. ISO27001認証を取得しており、通信はSSL/TLS暗号化で保護されています。...</p>
    </div>
  </div>
  <!-- 繰り返し -->
</div>

<script>
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    const answer = btn.nextElementSibling;
    answer.hidden = expanded;
    btn.querySelector('.faq-icon').textContent = expanded ? '+' : '−';
  });
});
</script>
```
```css
.faq-list { max-width: 760px; margin: 0 auto; }
.faq-item {
  border-bottom: 1px solid #e8e8e8;
}
.faq-question {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-main, #1a1a1a);
}
.faq-question span:first-child {
  color: var(--accent);
  font-weight: 800;
  flex-shrink: 0;
}
.faq-q-text { flex: 1; line-height: 1.5; }
.faq-icon {
  flex-shrink: 0;
  font-size: 22px;
  color: var(--accent);
  line-height: 1;
  transition: transform .2s;
}
.faq-question[aria-expanded="true"] .faq-icon { transform: rotate(45deg); }
.faq-answer {
  padding: 0 0 20px 28px;
  font-size: 15px;
  color: #555;
  line-height: 1.85;
}
```

### BtoB必須FAQ 3点セット
```
① 「セキュリティはどうなっていますか？」
   → ISO27001/SOC2/プライバシーマーク取得状況・暗号化・バックアップ方針を明示

② 「既存ツール（Slack/kintone/Salesforce等）と連携できますか？」
   → 主要連携ツール一覧・API提供状況・CSV取込の可否を明示

③ 「導入後のサポート体制はどうなっていますか？」
   → チャット/メール/電話の対応時間・オンボーディング支援の有無を明示
```

---

## CTA周辺設計

### CTA前コンテキスト文
ユーザーをCTAに誘導する直前の「背中を押す」コンテキストが重要。

```html
<!-- CTA前のコンテキストブロック -->
<div class="cta-context">
  <h3>今すぐ始めてみませんか？</h3>
  <p>導入企業の87%が「最初の1週間で効果を実感」と回答。クレジットカード不要で今日から試せます。</p>
</div>
<!-- ↓ CTA -->
<a href="#" class="btn btn-primary btn-lg">無料トライアルを始める</a>
<p class="btn-assurance">✓ 14日間無料 ✓ CC不要 ✓ いつでも解約</p>
```

### CTA安心文言パターン（業種別）
| 業種 | 安心文言 |
|-----|---------|
| SaaS | 「クレジットカード不要」「○日間無料」「いつでも解約可能」 |
| 採用 | 「履歴書不要」「しつこい連絡なし」「採用担当が直接対応」 |
| 美容・サロン | 「強引な勧誘なし」「施術前にカウンセリング」「完全個室」 |
| 医療 | 「初診無料」「当日予約OK」「保険診療対応」 |
| スクール | 「受講前の無料相談あり」「返金保証○日間」「分割払い可」 |
| BtoB | 「無料デモあり」「導入サポート込み」「稟議書用資料提供」 |

### CTAセクション全体レイアウト（最終CTA用）
```html
<section class="section-final-cta bg-dark">
  <div class="container">
    <!-- ①コンテキスト -->
    <div class="cta-context fade-in">
      <p class="cta-eyebrow">さあ、始めましょう</p>
      <h2>○○を変える第一歩を</h2>
      <p class="cta-lead">まずは無料で体験。導入の判断はそれから。</p>
    </div>

    <!-- ②メインCTA -->
    <div class="cta-actions fade-in">
      <a href="#" class="btn btn-primary btn-lg">無料で試してみる</a>
      <a href="#" class="btn btn-ghost">資料をダウンロード</a>
    </div>

    <!-- ③安心文言 -->
    <ul class="cta-guarantees fade-in">
      <li>✓ クレジットカード不要</li>
      <li>✓ 14日間無料トライアル</li>
      <li>✓ いつでもキャンセル可能</li>
    </ul>
  </div>
</section>
```
```css
.section-final-cta {
  padding: 96px 24px;
  text-align: center;
}
.cta-eyebrow {
  font-size: 12px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
  font-weight: 700;
}
.section-final-cta h2 {
  font-size: var(--text-fluid-h2);
  color: #fff;
  margin-bottom: 16px;
}
.cta-lead { font-size: 17px; color: rgba(255,255,255,.7); margin-bottom: 40px; }
.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.cta-guarantees {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  font-size: 13px;
  color: rgba(255,255,255,.55);
}
```

---

## 13. フォームコンポーネント（GAP-002対応）

**用途**: お問い合わせ・資料DL・無料体験申込・採用エントリー・予約フォーム

### 基本フォーム構造

```html
<!-- 汎用フォーム（3〜5項目・最も高CVな構成） -->
<section class="section-form" id="form">
  <div class="container container--narrow">
    <div class="form-header">
      <p class="form-eyebrow">FREE / 無料</p>
      <h2 class="form-title">○○を無料で受け取る</h2>
      <p class="form-desc">フォームに入力するだけ。1分で完了します。</p>
    </div>

    <form class="lp-form" action="#" method="post">
      <!-- テキスト入力 -->
      <div class="form-group">
        <label class="form-label" for="name">
          お名前 <span class="form-required">必須</span>
        </label>
        <input class="form-input" type="text" id="name" name="name"
          placeholder="例: 山田 太郎" required autocomplete="name">
      </div>

      <!-- メールアドレス -->
      <div class="form-group">
        <label class="form-label" for="email">
          メールアドレス <span class="form-required">必須</span>
        </label>
        <input class="form-input" type="email" id="email" name="email"
          placeholder="例: taro@example.com" required autocomplete="email">
      </div>

      <!-- 電話番号（任意） -->
      <div class="form-group">
        <label class="form-label" for="tel">
          電話番号 <span class="form-optional">任意</span>
        </label>
        <input class="form-input" type="tel" id="tel" name="tel"
          placeholder="例: 090-1234-5678" autocomplete="tel">
      </div>

      <!-- セレクト -->
      <div class="form-group">
        <label class="form-label" for="inquiry">
          お問い合わせ内容 <span class="form-required">必須</span>
        </label>
        <div class="form-select-wrap">
          <select class="form-select" id="inquiry" name="inquiry" required>
            <option value="" disabled selected>選択してください</option>
            <option value="service">サービスについて</option>
            <option value="price">料金について</option>
            <option value="other">その他</option>
          </select>
        </div>
      </div>

      <!-- テキストエリア -->
      <div class="form-group">
        <label class="form-label" for="message">
          メッセージ <span class="form-optional">任意</span>
        </label>
        <textarea class="form-textarea" id="message" name="message"
          rows="4" placeholder="ご質問・ご要望をご記入ください"></textarea>
      </div>

      <!-- プライバシーポリシー同意 -->
      <div class="form-group form-group--checkbox">
        <label class="form-checkbox-label">
          <input type="checkbox" name="privacy" required>
          <span class="form-checkbox-text">
            <a href="/privacy" target="_blank" rel="noopener">プライバシーポリシー</a>に同意する
          </span>
        </label>
      </div>

      <button type="submit" class="btn btn-primary btn-block form-submit">
        無料で受け取る →
      </button>
      <p class="form-assurance">✓ 送信後、3営業日以内にご連絡します</p>
    </form>
  </div>
</section>
```

### フォームCSS

```css
/* フォーム共通 */
.section-form { padding: 80px 24px; background: var(--bg-sub, #f8f9fa); }
.container--narrow { max-width: 540px; margin: 0 auto; }

.form-header { text-align: center; margin-bottom: 40px; }
.form-eyebrow {
  font-size: 12px; letter-spacing: .15em; text-transform: uppercase;
  color: var(--accent); font-weight: 700; margin-bottom: 8px;
}
.form-title { font-size: clamp(22px, 4vw, 28px); font-weight: 700; margin-bottom: 8px; }
.form-desc { font-size: 14px; color: var(--text-sub); }

/* フォームグループ */
.form-group { margin-bottom: 20px; }
.form-label {
  display: flex; align-items: center; gap: 8px;
  font-size: 14px; font-weight: 600; margin-bottom: 6px; color: var(--text-main);
}
.form-required {
  font-size: 11px; background: #e53e3e; color: #fff;
  padding: 2px 6px; border-radius: 3px; font-weight: 600;
}
.form-optional {
  font-size: 11px; background: #a0aec0; color: #fff;
  padding: 2px 6px; border-radius: 3px; font-weight: 600;
}

/* 入力フィールド */
.form-input,
.form-select,
.form-textarea {
  width: 100%; padding: 12px 16px;
  border: 1.5px solid #d1d5db; border-radius: 8px;
  font-size: 15px; color: var(--text-main);
  background: #fff; transition: border-color .2s, box-shadow .2s;
  box-sizing: border-box;
}
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none; border-color: var(--accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent);
}
.form-textarea { resize: vertical; min-height: 100px; }

/* セレクトラッパー（矢印表示） */
.form-select-wrap { position: relative; }
.form-select-wrap::after {
  content: '▼'; position: absolute; right: 14px; top: 50%;
  transform: translateY(-50%); font-size: 10px; color: var(--text-sub);
  pointer-events: none;
}
.form-select { appearance: none; cursor: pointer; }

/* チェックボックス */
.form-group--checkbox { margin-top: 8px; }
.form-checkbox-label {
  display: flex; align-items: flex-start; gap: 10px; cursor: pointer;
}
.form-checkbox-label input[type="checkbox"] {
  width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px;
  accent-color: var(--accent);
}
.form-checkbox-text { font-size: 13px; color: var(--text-sub); }
.form-checkbox-text a { color: var(--accent); text-decoration: underline; }

/* 送信ボタン・安心文言 */
.form-submit { margin-top: 24px; font-size: 17px; font-weight: 700; }
.form-assurance {
  text-align: center; font-size: 13px; color: var(--text-sub); margin-top: 12px;
}
```

### フォームバリエーション別ガイド

| 業種 | 推奨項目 | 備考 |
|------|---------|------|
| 美容サロン | 名前・電話・希望メニュー・希望日時 | 電話番号を必須にする |
| 採用LP | 名前・電話・希望勤務地 | 項目を絞って低ハードル |
| 医療系 | 名前・電話・希望日時・症状 | 「受診前相談」のニュアンスで |
| スクール | 名前・メール・受講目的 | 資料DLとセット |
| SaaS | 会社名・名前・メール・役職 | 4項目まで（5項目以上でCV激減） |
| 飲食宴会 | 名前・電話・人数・希望日 | 電話番号必須・希望日をカレンダーUIで |

---

## 14. タブ切り替えコンポーネント（GAP-004対応）

**用途**: 料金プラン切り替え・メニューカテゴリ・スタッフ一覧フィルター・FAQカテゴリ

### タブ（横型・.tabs）

```html
<!-- 料金プラン切り替えタブ -->
<div class="tabs-wrap">
  <div class="tabs" role="tablist">
    <button class="tab tab--active" role="tab" aria-selected="true" data-target="plan-monthly">
      月払い
    </button>
    <button class="tab" role="tab" aria-selected="false" data-target="plan-annual">
      年払い <span class="tab-badge">20%OFF</span>
    </button>
    <button class="tab" role="tab" aria-selected="false" data-target="plan-enterprise">
      法人
    </button>
  </div>

  <div class="tab-panel" id="plan-monthly" role="tabpanel">
    <!-- 月払いコンテンツ -->
  </div>
  <div class="tab-panel tab-panel--hidden" id="plan-annual" role="tabpanel">
    <!-- 年払いコンテンツ -->
  </div>
  <div class="tab-panel tab-panel--hidden" id="plan-enterprise" role="tabpanel">
    <!-- 法人コンテンツ -->
  </div>
</div>

<script>
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    document.querySelectorAll('.tab').forEach(t => {
      t.classList.remove('tab--active');
      t.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('tab-panel--hidden'));
    tab.classList.add('tab--active');
    tab.setAttribute('aria-selected', 'true');
    document.getElementById(target).classList.remove('tab-panel--hidden');
  });
});
</script>
```

### ピルタブ（カテゴリフィルター・.pill-tabs）

```html
<!-- メニューカテゴリフィルター -->
<div class="pill-tabs" role="tablist">
  <button class="pill-tab pill-tab--active" data-filter="all">すべて</button>
  <button class="pill-tab" data-filter="lunch">ランチ</button>
  <button class="pill-tab" data-filter="dinner">ディナー</button>
  <button class="pill-tab" data-filter="drink">ドリンク</button>
</div>
```

### タブCSS

```css
/* タブ共通 */
.tabs-wrap { margin: 40px 0; }
.tabs {
  display: flex; border-bottom: 2px solid #e2e8f0;
  margin-bottom: 32px; overflow-x: auto; scrollbar-width: none;
}
.tabs::-webkit-scrollbar { display: none; }

.tab {
  flex-shrink: 0; padding: 12px 24px;
  font-size: 15px; font-weight: 600; color: var(--text-sub);
  background: none; border: none; cursor: pointer;
  border-bottom: 2px solid transparent; margin-bottom: -2px;
  transition: color .2s, border-color .2s;
  white-space: nowrap;
}
.tab:hover { color: var(--accent); }
.tab--active { color: var(--accent); border-bottom-color: var(--accent); }
.tab-badge {
  font-size: 11px; background: #22c55e; color: #fff;
  padding: 2px 6px; border-radius: 10px; margin-left: 6px; font-weight: 700;
}

/* タブパネル */
.tab-panel { animation: fadeIn .25s ease; }
.tab-panel--hidden { display: none; }

/* ピルタブ */
.pill-tabs {
  display: flex; gap: 8px; flex-wrap: wrap;
  margin-bottom: 32px;
}
.pill-tab {
  padding: 8px 20px; border-radius: 100px;
  font-size: 14px; font-weight: 600;
  background: #f1f5f9; color: var(--text-sub);
  border: 1.5px solid transparent; cursor: pointer;
  transition: all .2s;
}
.pill-tab:hover { border-color: var(--accent); color: var(--accent); }
.pill-tab--active {
  background: var(--accent); color: #fff; border-color: var(--accent);
}

/* スマホ対応 */
@media (max-width: 768px) {
  .tab { padding: 10px 16px; font-size: 14px; }
  .pill-tabs { gap: 6px; }
  .pill-tab { padding: 7px 16px; font-size: 13px; }
}
```

### タブ使用場面ガイド

| 場面 | 推奨タイプ | 備考 |
|------|----------|------|
| 料金プラン（月払い/年払い） | `.tabs` 横型 | SaaSで最頻出 |
| メニューカテゴリ | `.pill-tabs` | 飲食・美容で使用 |
| FAQカテゴリ | `.pill-tabs` | 多業種で使用 |
| スタッフ一覧フィルター | `.pill-tabs` | 採用・医療で使用 |
| Before/After切り替え | `.tabs` 横型 | スクール・整体で使用 |

---

## 15. カルーセルコンポーネント（GAP-001対応）

**用途**: スタッフ紹介・口コミ・実績写真・メニュー写真のスライド表示（特にFV-013向け）

### 基本カルーセル構造

```html
<!-- 口コミ・スタッフカルーセル -->
<div class="carousel-wrap">
  <div class="carousel" id="mainCarousel">
    <div class="carousel-track" id="carouselTrack">
      <div class="carousel-slide">
        <!-- スライド1コンテンツ -->
        <div class="review-card">...</div>
      </div>
      <div class="carousel-slide">
        <!-- スライド2コンテンツ -->
      </div>
      <div class="carousel-slide">
        <!-- スライド3コンテンツ -->
      </div>
    </div>
  </div>

  <!-- ナビゲーション矢印 -->
  <button class="carousel-btn carousel-btn--prev" aria-label="前へ">&#8249;</button>
  <button class="carousel-btn carousel-btn--next" aria-label="次へ">&#8250;</button>

  <!-- ドット指示器 -->
  <div class="carousel-dots">
    <span class="carousel-dot carousel-dot--active"></span>
    <span class="carousel-dot"></span>
    <span class="carousel-dot"></span>
  </div>
</div>

<script>
(function() {
  const track = document.getElementById('carouselTrack');
  const slides = track.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  let current = 0;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('carousel-dot--active', i === current));
  }

  document.querySelector('.carousel-btn--prev').addEventListener('click', () => goTo(current - 1));
  document.querySelector('.carousel-btn--next').addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  // 自動再生（5秒間隔）
  setInterval(() => goTo(current + 1), 5000);
})();
</script>
```

### カルーセルCSS

```css
/* カルーセル本体 */
.carousel-wrap { position: relative; overflow: hidden; }
.carousel { overflow: hidden; border-radius: 12px; }
.carousel-track {
  display: flex;
  transition: transform .4s cubic-bezier(.4, 0, .2, 1);
}
.carousel-slide { flex: 0 0 100%; min-width: 0; }

/* 複数表示（PC: 3枚同時） */
@media (min-width: 768px) {
  .carousel-track--multi .carousel-slide { flex: 0 0 33.333%; }
}

/* ナビゲーション矢印 */
.carousel-btn {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 44px; height: 44px; border-radius: 50%;
  background: rgba(255,255,255,.9); border: 1.5px solid #e2e8f0;
  font-size: 22px; color: var(--text-main); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
  transition: background .2s, box-shadow .2s;
  z-index: 2;
}
.carousel-btn:hover { background: #fff; box-shadow: 0 4px 16px rgba(0,0,0,.15); }
.carousel-btn--prev { left: 12px; }
.carousel-btn--next { right: 12px; }

/* ドット */
.carousel-dots {
  display: flex; justify-content: center; gap: 8px;
  margin-top: 20px;
}
.carousel-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #d1d5db; cursor: pointer; transition: all .25s;
}
.carousel-dot--active { background: var(--accent); width: 24px; border-radius: 4px; }

/* スマホ: 矢印を小さく */
@media (max-width: 480px) {
  .carousel-btn { width: 36px; height: 36px; font-size: 18px; }
  .carousel-btn--prev { left: 4px; }
  .carousel-btn--next { right: 4px; }
}
```

### カルーセル用途別ガイド

| 用途 | 設定 | 使用業種 |
|------|------|---------|
| 口コミスライド | 1枚表示 / 自動5秒 | 全業種 |
| スタッフ紹介 | PC3枚 / SP1枚 / 矢印あり | 美容・採用・医療 |
| 料理写真ギャラリー | PC3枚 / SP1枚 / 自動なし | 飲食 |
| 実績写真 | PC2枚 / SP1枚 / 矢印あり | 建設・内装 |
| FV背景スライド（FV-013） | 全画面 / 自動4秒 / ドットのみ | 採用LP |

---

## ビジュアルデザイン参照規則

LP制作時、画像・写真・ビジュアル選定は以下のナレッジを必ず参照すること。

### 参照ファイル一覧（Visual Design SST）

| ファイル | 用途 | 参照タイミング |
|---------|------|-------------|
| `knowledge/design/visual-library.md` | 44の汎用ビジュアルパターン（VISUAL-001〜044）| FV画像選定時・ビジュアル要素選定時 |
| `knowledge/design/fv-visual-library.md` | 12のFVレイアウトパターン（FV-VISUAL-001〜012）| FV設計時（必須） |
| `knowledge/design/industry-visual-patterns.md` | 6業種×ビジュアル仕様（IND-V-001〜006）| 業種確定後（必須） |
| `knowledge/design/image-direction-rules.md` | 業種別撮影ディレクション・AI生成プロンプト | 画像選定・生成・ディレクション時 |

### ビジュアル設計フロー

```
1. 業種確定 → industry-visual-patterns.md でIND-V-XXXを参照
2. FVレイアウト選定 → fv-visual-library.md でFV-VISUAL-XXXを選択
3. 使用ビジュアル要素選定 → visual-library.md でVISUAL-XXXを確認
4. 画像生成/選定 → image-direction-rules.md でプロンプト・仕様を確認
5. 感情連携確認 → emotional-triggers.md でTRIG-XXXとの整合を取る
```

### 感情×ビジュアル クイックマップ

| 感情トリガー | 推奨ビジュアル | 光 | 色温度 |
|------------|-------------|-----|-------|
| TRIG-001（共感） | 同じ境遇の人物 | 拡散光 | ニュートラル |
| TRIG-002（安心） | 笑顔・自然光 | 窓際自然光 | 暖色 3200K |
| TRIG-003（憧れ） | 逆光・余白多め | 逆光・ハレーション | ゴールド暖色 |
| TRIG-004（権威） | 正面視線・白背景 | スタジオ正面光 | クール 5500K |
| TRIG-005（緊急） | 動きある構図 | コントラスト強め | 高彩度 |
| TRIG-006（変化） | Before→After構成 | 明るい・クリア | 暗→明変化 |

---

## 統計・メモ

- **コンポーネント定義数**: タイポグラフィ・カラー・スペーシング・カード・ボタン・見出し・背景・比較表・実績表示・口コミ・FAQ・CTA周辺設計・フォーム・タブ・カルーセル（全15カテゴリ）
- **GAP補強**: 2026-06-24 GAP-001（カルーセル）/ GAP-002（フォーム）/ GAP-004（タブ）を追加
- Phase 3 育成開始条件: LP辞典100パターン到達後
- 最終更新: 2026-06-25（Visual Library System追加 / ビジュアル設計SST確立）
