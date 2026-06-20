# UIパターン辞典

## 概要
LP・ホームページ・WordPressサイトで繰り返し使用するUIコンポーネントパターンを管理する。

---

## Learning Reason（各UIパターン追加時に必須記録）

新規UIパターンを追加する際は、パターン末尾に以下を記録すること。

```markdown
## Learning Reason
### 保存理由
[なぜこのUIコンポーネントをパターン化したか（実装効率・CV効果・発見経緯）]
### 再利用価値
[このUIがどの業種・ページタイプに何度適用できるか]
### 特に優れている点
[情報整理・視認性・CVR貢献の観点で優れている点]
### 他案件への応用先
[適用推奨の業種・セクション・用途]
```

---

## UI-001: セクションヘッダー（装飾型）

**用途**: ラグジュアリー・ブランド系のセクション見出し

```html
<div class="section-head">
  <div class="ornament"></div>      <!-- 縦線装飾 -->
  <span class="label">CONCEPT</span> <!-- 英字ラベル -->
  <h2>日本語見出し</h2>
  <p class="lead">リード文をここに</p>
</div>
```

```css
.section-head { text-align: center; margin-bottom: 64px; }
.ornament {
  width: 1px; height: 54px;
  background: linear-gradient(var(--gold), transparent);
  margin: 0 auto 18px;
}
.label {
  font-family: 'Jost', sans-serif;
  color: var(--gold);
  letter-spacing: .24em;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
  display: block;
}
```

---

## UI-002: セクションヘッダー（ナンバリング型）

**用途**: ステップ・プロセス・順序が重要なセクション

```html
<div class="section-head">
  <span class="num">01</span>
  <h2>見出しテキスト</h2>
</div>
```

```css
.num {
  font-family: 'Jost', sans-serif;
  font-size: 72px;
  color: var(--accent);
  opacity: .15;
  line-height: 1;
  display: block;
  margin-bottom: -20px;
}
```

---

## UI-003: 特徴カード（3列グリッド）

**用途**: 強み・サービス・特徴の3〜4項目表示

```html
<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon"><!-- SVG or emoji --></div>
    <h3>特徴タイトル</h3>
    <p>説明文（2〜3行）</p>
  </div>
  <!-- × 3 -->
</div>
```

```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.feature-card {
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  box-shadow: var(--shadow-card);
  text-align: center;
  transition: transform .3s, box-shadow .3s;
}
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}
.feature-icon {
  width: 64px; height: 64px;
  background: var(--soft);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 20px;
  font-size: 28px;
}
@media (max-width: 768px) {
  .feature-grid { grid-template-columns: 1fr; }
}
```

---

## UI-004: 数字実績カード

**用途**: 実績・統計の強調表示

```html
<div class="stats-grid">
  <div class="stat-item">
    <span class="stat-num">1,500<span class="stat-unit">名+</span></span>
    <span class="stat-label">累計来店数</span>
  </div>
</div>
```

```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--soft);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.stat-item {
  background: var(--surface);
  padding: 40px 24px;
  text-align: center;
}
.stat-num {
  font-family: 'Jost', sans-serif;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 600;
  color: var(--deep);
  display: block;
}
.stat-unit {
  font-size: .5em;
  color: var(--gold);
}
.stat-label {
  font-size: 13px;
  color: var(--sub);
  letter-spacing: .1em;
  margin-top: 8px;
  display: block;
}
```

---

## UI-005: お客様の声カード

**用途**: 口コミ・レビューの表示

```html
<div class="review-card">
  <div class="stars">★★★★★</div>
  <p class="review-text">「具体的な口コミテキスト...」</p>
  <div class="reviewer">
    <img src="avatar.jpg" alt="お客様のお写真">
    <div>
      <span class="name">田中 〇〇 様</span>
      <span class="meta">30代 / 東京都</span>
    </div>
  </div>
</div>
```

```css
.review-card {
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-card);
  position: relative;
}
.review-card::before {
  content: "\201C";
  font-size: 80px;
  color: var(--gold);
  opacity: .25;
  position: absolute;
  top: 12px; left: 20px;
  line-height: 1;
  font-family: serif;
}
.stars { color: #f59e0b; font-size: 18px; margin-bottom: 16px; }
.review-text {
  font-size: 15px;
  line-height: 1.9;
  color: var(--text);
  margin-bottom: 20px;
}
.reviewer { display: flex; align-items: center; gap: 12px; }
.reviewer img {
  width: 48px; height: 48px;
  border-radius: 50%;
  object-fit: cover;
}
.name { font-weight: 700; font-size: 14px; display: block; }
.meta { font-size: 12px; color: var(--sub); display: block; }
```

---

## UI-006: ステップ（応募・申込の流れ）

**用途**: 手続きのステップ表示

```html
<div class="steps">
  <div class="step">
    <div class="step-num">01</div>
    <div class="step-content">
      <h3>ステップタイトル</h3>
      <p>説明文</p>
    </div>
  </div>
</div>
```

```css
.steps { display: flex; flex-direction: column; gap: 0; }
.step {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  position: relative;
  padding-bottom: 40px;
}
.step:not(:last-child)::before {
  content: "";
  position: absolute;
  left: 27px; top: 56px;
  width: 2px;
  height: calc(100% - 56px);
  background: linear-gradient(var(--accent), transparent);
}
.step-num {
  width: 56px; height: 56px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Jost', sans-serif;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
}
```

---

## UI-007: FAQ アコーディオン

**用途**: よくある質問セクション

```html
<details class="faq-item">
  <summary class="faq-q">質問テキスト</summary>
  <div class="faq-a">回答テキスト</div>
</details>
```

```css
.faq-item {
  border-bottom: 1px solid var(--soft);
  overflow: hidden;
}
.faq-q {
  padding: 24px 0;
  font-weight: 700;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}
.faq-q::after {
  content: "+";
  font-size: 24px;
  color: var(--accent);
  transition: transform .3s;
}
details[open] .faq-q::after { transform: rotate(45deg); }
.faq-a {
  padding: 0 0 24px;
  color: var(--sub);
  line-height: 1.9;
}
```

---

## UI-008: タグ・バッジ

**用途**: 強調テキスト・新着・おすすめ等のラベル

```css
.badge { display: inline-block; padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; }
.badge--new      { background: #ef4444; color: white; }
.badge--recommend{ background: #f59e0b; color: white; }
.badge--free     { background: #10b981; color: white; }
.badge--limited  { background: #8b5cf6; color: white; }
.badge--outline  { border: 1.5px solid var(--accent); color: var(--accent); background: transparent; }
```

---

## UI-009: 区切り線・デコレーター

```css
/* 中央ライン型 */
.divider-center {
  width: 60px; height: 2px;
  background: var(--gold);
  margin: 20px auto;
}

/* グラデーション型 */
.divider-gradient {
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  margin: 80px 0;
}

/* 波型 */
.wave-divider svg { width: 100%; display: block; }
```

---

## UI-010: 固定ヘッダー（スクロール変化型）

```css
.header {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 20px 6%;
  transition: background .3s, box-shadow .3s;
}
.header.scrolled {
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(0,0,0,.08);
  padding: 12px 6%;
}
```

```javascript
window.addEventListener('scroll', () => {
  document.querySelector('.header')
    .classList.toggle('scrolled', window.scrollY > 80);
});
```

---

## 統計・メモ

- 登録UIパターン数: 10
- 最終更新: 2026-06-20
