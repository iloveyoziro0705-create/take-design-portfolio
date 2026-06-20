# デザインシステム辞典

## 概要
LP・ホームページ・WordPressサイト制作で共通利用するデザイントークンとコンポーネントを定義する。

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

## 統計・メモ

- Phase 3 育成開始条件: LP辞典100パターン到達後
- 最終更新: 2026-06-20
