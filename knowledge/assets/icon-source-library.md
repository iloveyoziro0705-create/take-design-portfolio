# Icon Source Library — アイコン素材ライブラリ

**バージョン**: 1.0
**作成日**: 2026-06-27
**管理ファイル**: knowledge/assets/icon-source-library.md

---

## このファイルの目的

LP・ホームページ・WordPress制作時に適切なアイコンを選定・実装できる状態を作る。
アイコンセット別の特性・推奨業種・実装方法を標準化する。

---

## 基本ルール

- アイコンは必ず同一セット内で統一する（混在禁止）
- デフォルト標準採用: Lucide Icons
- サイズ・カラーはデザイントークンに合わせて設定する
- SVGアイコンはインライン実装（色・サイズをCSSで変更可能）を推奨

---

## アイコンセット一覧

### ICON-SRC-001 Lucide Icons ★標準採用

**URL**: https://lucide.dev/
**ライセンス**: MIT License（商用利用可・帰属表示不要）
**形式**: SVG / React / Vue / Figma
**アイコン数**: 1500+（随時追加）

**特徴**:
- シンプル・クリーン・統一感が高い
- LP・HP・WordPress全業種に対応
- ラインスタイルで視認性が高い
- サイズ・strokeWidthが調整可能

**推奨業種**: LP・HP・WordPress 全業種共通

**実装方法**:
```html
<!-- CDN（最も簡単） -->
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="アイコン名" class="icon"></i>
<script>lucide.createIcons();</script>

<!-- SVGインライン -->
<!-- lucide.devでアイコンをコピーしてHTMLに直接貼り付け -->
```

**CSS設定例**:
```css
[data-lucide] {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 1.5;
  fill: none;
}
```

**推奨サイズ**:

| 用途 | 推奨サイズ |
|------|----------|
| 本文中アイコン | 16px / 20px |
| リストアイコン（チェック・矢印） | 20px |
| カードアイコン | 32px / 40px |
| セクション見出しアイコン | 32px / 48px |
| FV装飾アイコン | 48px / 64px |

**業種別推奨アイコン**:

| 業種 | 推奨アイコン名 | 用途 |
|------|-------------|------|
| 美容 | `sparkles` `heart` `star` `scissors` `leaf` | サービス特徴・メニュー |
| 採用 | `users` `briefcase` `trending-up` `building` `handshake` | 職場環境・待遇 |
| 医療 | `heart-pulse` `shield-check` `stethoscope` `activity` `clock` | 安心感・サービス |
| 飲食 | `utensils` `clock` `map-pin` `star` `phone` | 営業情報・メニュー |
| スクール | `graduation-cap` `book-open` `video` `check-circle` `award` | カリキュラム・実績 |
| SaaS | `zap` `shield` `bar-chart` `settings` `users` `check` | 機能・メリット |
| 全業種共通 | `check-circle` `arrow-right` `phone` `mail` `map-pin` `clock` | CTA・連絡先・基本情報 |

---

### ICON-SRC-002 Heroicons

**URL**: https://heroicons.com/
**ライセンス**: MIT License（商用利用可・帰属表示不要）
**形式**: SVG / React / Vue
**アイコン数**: 300+

**特徴**:
- Tailwind CSS チームが制作
- Outline / Solid / Mini の3スタイル
- SaaS・管理画面・ダッシュボードに最適
- 明確で認識しやすいデザイン

**推奨業種**: SaaS・BtoB・管理画面・IT系サービス

**スタイル使い分け**:

| スタイル | 用途 |
|---------|------|
| Outline | 本文中・リスト・一般的な用途 |
| Solid | 強調・アクティブ状態・CTA付近 |
| Mini | 小さいスペース・インライン |

**実装方法**:
```html
<!-- SVGをheroicons.comからコピーしてHTMLに貼り付け -->
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="24" height="24">
  <!-- SVGパスをheroicons.comからコピー -->
</svg>
```

---

### ICON-SRC-003 Tabler Icons

**URL**: https://tabler.io/icons
**ライセンス**: MIT License（商用利用可・帰属表示不要）
**形式**: SVG / Web Font / React / Vue / Figma
**アイコン数**: 5000+（最大規模）

**特徴**:
- アイコン数が最多クラス
- 2px strokeの統一スタイル
- LP・HPの特殊なアイコン需要に対応しやすい
- Web Font版も利用可能

**推奨業種**: LP・HP 全般（特殊アイコンが必要な場合）

**推奨利用シーン**:
- Lucideに目的のアイコンがない場合の代替
- 業種固有の専門アイコンが必要な場合
- 大量のアイコンが必要なカテゴリ一覧ページ

**実装方法**:
```html
<!-- CDN（Web Font） -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
<i class="ti ti-アイコン名"></i>

<!-- またはSVGをタブラーサイトからコピー -->
```

---

### ICON-SRC-004 Phosphor Icons

**URL**: https://phosphoricons.com/
**ライセンス**: MIT License（商用利用可・帰属表示不要）
**形式**: SVG / Web Font / React / Vue / Figma
**アイコン数**: 1200+

**特徴**:
- 6つのウェイト（Thin / Light / Regular / Bold / Fill / Duotone）
- 親しみやすく温かみのあるデザイン
- BtoCに適した柔らかい雰囲気
- Duotoneスタイルが高品質

**推奨業種**: 美容・医療・スクール・採用・親しみやすい印象にしたい全業種

**ウェイト使い分け**:

| ウェイト | 用途 |
|---------|------|
| Light / Thin | 繊細・高級感を出したいセクション |
| Regular | 一般的な用途 |
| Bold | 強調・CTA付近 |
| Fill | アクティブ状態・強調 |
| Duotone | 装飾的なアイコン・ビジュアル強調 |

---

### ICON-SRC-005 Font Awesome

**URL**: https://fontawesome.com/
**ライセンス**: 無料版（帰属表示不要）・有料版
**形式**: Web Font / SVG / React
**アイコン数**: 2000+（無料版）/ 28000+（有料版）

**特徴**:
- 最も普及しているアイコンセット
- ブランドアイコン（SNSロゴ等）が充実
- WordPressテーマに標準搭載されることが多い

**推奨利用シーン**:
- WordPressで既に読み込まれている場合
- SNSアイコン（Instagram・LINE・X等）が必要な場合
- ブランドロゴアイコンが必要な場合

---

## 実装ガイドライン

### サイズ定義（design-system.md と連動）

```css
.icon-sm  { width: 16px; height: 16px; }
.icon-md  { width: 24px; height: 24px; }  /* デフォルト */
.icon-lg  { width: 32px; height: 32px; }
.icon-xl  { width: 48px; height: 48px; }
.icon-2xl { width: 64px; height: 64px; }
```

### 配色ルール

```css
/* カラートークンに合わせて設定 */
.icon-primary  { color: var(--accent); }
.icon-secondary { color: var(--text-muted); }
.icon-white    { color: #ffffff; }
.icon-success  { color: #22c55e; }
.icon-warning  { color: #f59e0b; }
```

### リスト・特徴セクションでの使い方

```html
<!-- チェックリスト型 -->
<li class="feature-item">
  <i data-lucide="check-circle" class="icon-md icon-primary"></i>
  <span>特徴テキスト</span>
</li>

<!-- カード型 -->
<div class="feature-card">
  <div class="icon-wrapper">
    <i data-lucide="shield-check" class="icon-xl icon-primary"></i>
  </div>
  <h3>安心・安全</h3>
  <p>説明文</p>
</div>
```

### CTA前セクションでの使い方

```html
<!-- 安心ポイント -->
<div class="trust-icons">
  <span><i data-lucide="shield-check"></i> 無料相談</span>
  <span><i data-lucide="clock"></i> 即日対応</span>
  <span><i data-lucide="star"></i> 満足度98%</span>
</div>
```

---

## アイコンセット選定フロー

```
業種・デザイン方向性を確認
        ↓
┌─────────────────────────────┐
│ どの印象を出したいか？         │
└─────────────────────────────┘
   シンプル・汎用             → Lucide（標準採用）
   SaaS・IT・管理画面         → Heroicons
   特殊アイコンが必要          → Tabler Icons
   親しみやすい・温かみ         → Phosphor Icons
   SNSアイコン・WP既存         → Font Awesome
```

---

## 注意点

1. **1ページ1セット**: 同一ページで複数のアイコンセットを混在させない
2. **strokeWidthの統一**: 同じセット内でもstrokeWidthは統一する
3. **サイズの一貫性**: 同じ役割のアイコンは同じサイズで統一する
4. **色の一貫性**: アイコンの色はデザイントークンの変数で管理する
5. **代替テキスト**: 意味を持つアイコンには必ず `aria-label` を付ける

---

## Learning Reason

**Why**: アイコンの選定・実装基準を持つことで、デザインの統一感を高め、制作速度を向上させるため。Lucideをデフォルト標準にすることでブレを排除する。
**応用先**: すべてのLP・HP・WordPress制作時のアイコン実装フェーズ
