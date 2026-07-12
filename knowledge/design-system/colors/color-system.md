# Color System

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: colors

## 概要

カラーシステム・業種別推奨カラーパレット・色の使い分けルールのライブラリ。
LP・HP・WordPress・SaaS・管理画面・ポートフォリオで一貫したカラー設計基準を収録予定。

## 収録予定内容

### システムカラー（共通）

| ロール | トークン名 | 用途 |
|-------|---------|------|
| Primary | --color-primary | メインブランドカラー |
| Primary-dark | --color-primary-dark | ホバー・強調 |
| Secondary | --color-secondary | サブカラー |
| Accent | --color-accent | 目立たせたい箇所 |
| Background | --color-bg | ページ背景 |
| Surface | --color-surface | カード・パネル背景 |
| Text-primary | --color-text | 本文 |
| Text-sub | --color-text-sub | サブテキスト |
| Border | --color-border | 罫線 |
| Success | --color-success | 完了・チェック |
| Warning | --color-warning | 注意 |
| Error | --color-error | エラー |

### 業種別推奨カラーパレット

#### 美容・エステ（ラグジュアリー）
- Primary: #c9a96e（ゴールド）
- Secondary: #f5f0e8（クリーム）
- Accent: #1a1a1a（ブラック）

#### 美容・エステ（親しみ系）
- Primary: #e8a0b4（ピンク）
- Secondary: #fff5f8（薄ピンク）
- Accent: #c47ea0（濃ピンク）

#### 医療・クリニック
- Primary: #2563eb（ブルー）
- Secondary: #eff6ff（薄ブルー）
- Accent: #1e40af（濃ブルー）

#### SaaS・テック
- Primary: #7c3aed（パープル）
- Secondary: #f5f3ff（薄パープル）
- Accent: #4c1d95（濃パープル）

#### 飲食
- Primary: #ea580c（オレンジ）
- Secondary: #fff7ed（薄オレンジ）
- Accent: #9a3412（濃オレンジ）

#### 採用・HR
- Primary: #16a34a（グリーン）
- Secondary: #f0fdf4（薄グリーン）
- Accent: #14532d（濃グリーン）

#### コーポレート（スタンダード）
- Primary: #1e3a5f（ネイビー）
- Secondary: #f0f4f8（薄グレー）
- Accent: #c9a96e（ゴールド）

### カラー使用ルール

- **メインカラー使用率**: 10%以下（アクセントとして）
- **背景色**: 白 or 薄グレー（#f8f9fa以上の明度）
- **コントラスト比**: テキスト4.5:1以上（WCAG AA）
- **グラデーション**: 同系色2色で（補色グラデは上級者向け）
- **ダークモード**: セクションごとに背景切り替えで擬似ダークを表現

### グラデーション定義

| 名称 | 定義 |
|------|------|
| grad-brand | linear-gradient(135deg, var(--primary), var(--primary-dark)) |
| grad-warm | linear-gradient(135deg, #f97316, #ef4444) |
| grad-cool | linear-gradient(135deg, #3b82f6, #8b5cf6) |
| grad-dark | linear-gradient(135deg, #1e293b, #0f172a) |
| grad-gold | linear-gradient(135deg, #c9a96e, #a07840) |

## 実案件からの知見（2026-07-12 追加）

12本の実LP（`index.html`内`:root`カスタムプロパティ）から実際に採用されたカラーパレットを抽出した。TAKE CRAFT本体のブランドカラーも含め、案件名→実hex値の対応表として記録する。

### TAKE CRAFT ブランドカラー（本体サイト、参考値）

- bg: `#1E1E1E` / surface: `#252525` / text: `#F5F5F5` / sub: `#8B8B8B` / accent: `#2563EB`
- チャコールグレー基調・広い余白・ブルーは10%程度のアクセントという運用ルール（ルート`index.html`）

### 案件名 → primary / secondary / accent 実hex値 対応表

| 案件名（フォルダ） | 業種 | primary | secondary/bg | accent/その他 | 出典 |
|---|---|---|---|---|---|
| AIvoyance（ai-school-lp） | AI・テック（ダークUI） | `--blue:#3b82f6` | `--bg:#050505` / `--surface:#101010`,`#161616` | `--purple:#7c3aed`、`--grad: linear-gradient(100deg,#6fa2ff,#a78bfa 55%,#ff9ddc)` | ai-school-lp/index.html:12-30 |
| FutureNest（finance-lp） | 金融 | `--primary:#1D4ED8` | `--bg:#FAFAFA` / `--surface:#FFFFFF` | `--accent:#2563EB`、`--purple:#8B7CF0`、`--success:#22C55E`、`--warning:#F59E0B` | finance-lp/index.html:12-20 |
| dental-clinic-lp（歯科クリニック） | 医療・クリニック | `--primary:#2563eb` | `--bg:#ffffff` / `--surface:#f5f7fa` | `--primary-dark:#1e40af`、`--surface-blue:#eff6ff`,`#e0ecff`、`--success:#10b981` | dental-clinic-lp/index.html:64-80 |
| LearnCore（elearning-lp） | SaaS・BtoB e-Learning | `--p:#005BAC` | `--bg:#F8FAFC` / `--surf:#EBF5FF` | `--a:#00AEEF`（アクセントブルー）、`--pd:#00438A`、`--sc:#22C55E`、`--er:#EF4444` | elearning-lp/style.css:6-17 |
| mirai-ryo-lp（寮付き求人・多ブランチ構成） | 求人・生活支援（ブランチごとにアクセント切替） | `--blue:#2563eb` | `--bg:#f8fafc` | ブランチ別: income=`--orange:#ff6b35`、dorm=blue+green、woman=`#ec4899`+`#8b5cf6`、restart=`#1e3a8a` | mirai-ryo-lp/index.html:12-20, 179-183 |
| rapas-lp（人材紹介） | 求人・人材 | `--primary:#2196F3` | `--bg:#FAFBFF` / `--bg-gray:#F4F7FB` | `--cta:#F97316`（オレンジの別系統CTAカラーを主軸ブルーと併用）、`--primary-dark:#1565C0` | rapas-lp/index.html:13-33 |
| career-compass-lp（キャリア相談） | キャリア・HR | `--blue:#2563eb` | `--bg:#f8fafc` | `--teal:#14b8a6`（ブルー×ティールの2アクセント構成） | career-compass-lp/index.html:12-28 |
| hoikushi-mikata-lp（保育士転職・保育士のミカタ） | 採用・HR（保育士特化） | `--pink:#f85f91` | `--pink-soft:#fff4f7` | `--pink-d:#e04578`、`--yellow:#ffbd3a`。**既存ライブラリの「採用・HR＝グリーン」推奨とは異なり、保育士＝女性比率が高い職種特性からピンクを採用した実例** | hoikushi-mikata-lp/index.html:13-24 |
| beauty-salon-lp（美容サロン） | 美容・エステ | `--accent:#c4878c`（ダスティローズ） | `--bg:#faf8f6` / `--bg-pink:#f7eeee` / `--bg-beige:#f3ebe2` | `--accent-light:#e8bbbe`、`--accent-dark:#a36268`。既存ライブラリの「親しみ系ピンク#e8a0b4」より落ち着いたくすみカラー | beauty-salon-lp/index.html:13-24 |
| Hair Salon LUMIA（lumia-lp） | 美容・ラグジュアリー | `--clr-gold:#C9A96E` | `--clr-black:#1A1A1A` / `--clr-beige:#F5F0E8` | `--clr-gold-light:#E8D5B0`、`--clr-greige:#CFC5B4`,`#A8997E`。既存ライブラリの「ラグジュアリー美容＝ゴールド#c9a96e」とほぼ完全一致（このLPが原型と推測される） | lumia-lp/style.css:9-24 |
| business-design-academy-lp（ビジネスデザインスクール） | スクール・ダークコーポレート | `--gold:#D4AF37` | `--bg-dark:#0B0F19` / `--bg-section:#111827` | `--gold-light:#F5D76E`、`--cta:#F59E0B`（CTAのみオレンジ寄りに差別化） | business-design-academy-lp/index.html:13-27 |
| restaurant-lp（レストランオープン） | 飲食 | `#d8a76a`（ゴールド、CSS変数化されておらず直書き） | `#0f0f0f`（黒背景） | ホバー時`#f0c98b`、見出し文字色`#f5e6c8`。**既存ライブラリの「飲食＝オレンジ#ea580c＋白背景」とは対照的な、黒背景×ゴールドの高級レストラン演出** | restaurant-lp/index.html:15-53 |

### 実データからの気づき

- **業種別推奨パレットと実案件が一致するケース**: 歯科クリニック（医療ブルー`#2563eb`系）、Hair Salon LUMIA（ラグジュアリーゴールド`#c9a96e`系）はライブラリの推奨値とほぼ完全一致。既存の推奨パレットがこの2案件の実装をベースに整理されたものである可能性が高い。
- **業種別推奨パレットと実案件が乖離するケース**:
  - SaaS（LearnCore）はライブラリ推奨の「パープル系`#7c3aed`」ではなく、実際は「ブルー系`#005BAC`」を採用（教育・信頼性を重視したため）。AI/テック系（AIvoyance）の方がダーク背景×ブルー/パープルグラデーションというライブラリのSaaS想定に近い配色だった。
  - 採用・HR（hoikushi-mikata-lp）はライブラリ推奨の「グリーン`#16a34a`」ではなく「ピンク`#f85f91`」。職種の女性比率などターゲット属性によって業種テンプレートを機械的に適用せず調整すべき実例。
  - 飲食（restaurant-lp）はライブラリ推奨の「オレンジ×白背景」ではなく「黒背景×ゴールド」。同じ飲食でも「オープン告知の親しみ訴求」か「高級レストランのブランディング」かで真逆の配色になりうる。
- **1案件内で複数アクセントを切り替える設計**（mirai-ryo-lp）: `.branchLP`クラスに応じて`--accent`/`--accent2`/`--soft`を丸ごと差し替える設計は、1つのLPが複数のペルソナ（収入面重視／寮生活重視／女性向け／再スタート）向けセクションを持つ場合に有効なパターンとして今後のマルチターゲットLPに転用できる。
  ```css
  /* mirai-ryo-lp/index.html:179-183 */
  .branchLP{--accent:var(--blue);--accent2:var(--green);--soft:var(--softBlue)}
  .branchLP.income{--accent:var(--orange);--accent2:#f59e0b;--soft:#fff7ed}
  .branchLP.woman{--accent:#ec4899;--accent2:#8b5cf6;--soft:#fdf2f8}
  .branchLP.restart{--accent:#1e3a8a;--accent2:var(--green);--soft:#eef6ff}
  ```
- **CTA専用カラーをprimaryと分離する案件が複数存在**（rapas-lp: primary青+cta橙、business-design-academy-lp: gold+cta橙、finance-lp: primary/accentは同系ブルーだがpurpleを差し色に併用）。既存ライブラリの「Accent」ロールをCTAボタン専用として明確に運用する価値がある。
