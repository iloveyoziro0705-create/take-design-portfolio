# Typography Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: typography

## 概要

フォント・タイポグラフィスケール・テキストスタイルの設計基準ライブラリ。
LP・HP・WordPress・SaaS・管理画面・ポートフォリオで共通利用できる文字体系を収録予定。

## 収録予定内容

### 推奨フォントセット

| 用途 | 日本語 | 英語/数字 |
|------|--------|---------|
| ヘッドライン | Noto Sans JP Bold | DM Sans Bold |
| 本文 | Noto Sans JP Regular | DM Sans Regular |
| アクセント（高級系） | Shippori Mincho | Cormorant Garamond |
| アクセント（モダン系） | BIZ UDPGothic | Inter |
| コード表示 | — | JetBrains Mono |

### タイポグラフィスケール
| トークン | サイズ | line-height | 用途 |
|---------|--------|-------------|------|
| text-xs | 12px | 1.5 | 注釈・法的表記 |
| text-sm | 14px | 1.6 | サブテキスト |
| text-base | 16px | 1.7 | 本文 |
| text-lg | 18px | 1.6 | リード文 |
| text-xl | 20px | 1.5 | 小見出し |
| text-2xl | 24px | 1.4 | サブヘッド |
| text-3xl | 30px | 1.3 | セクション見出し |
| text-4xl | 36px | 1.2 | ページ見出し |
| text-5xl | 48px | 1.1 | Hero副コピー |
| text-6xl | 60px | 1.0 | Hero主コピー |
| text-7xl | 72px | 1.0 | インパクト系 |

### 業種別フォント推奨

| 業種 | 推奨フォント | 雰囲気 |
|------|------------|--------|
| ラグジュアリー・美容高級 | Shippori Mincho + Cormorant | 格・上品 |
| 一般美容・スクール | Noto Sans JP + DM Sans | 親しみ・モダン |
| 医療・士業 | BIZ UDPGothic + Inter | 清潔・信頼 |
| SaaS・テック | Noto Sans JP + DM Sans | 機能・先進 |
| 飲食 | Noto Sans JP + Playfair Display | 食欲・温かみ |
| コーポレート | BIZ UDPGothic + Inter | 堅実・誠実 |

### テキストカラー基準
- メインテキスト: #111827（gray-900）
- サブテキスト: #6B7280（gray-500）
- リンク: ブランドカラー
- 注釈: #9CA3AF（gray-400）
- 白背景対応逆色: #FFFFFF

## 実案件からの知見（2026-07-12 追加）

12本の実LPの `<link>` タグ・`font-family`宣言から、実際に採用されたGoogle Fontsの組み合わせを業種別に収集した。

### 実際に採用されたフォント構成（案件名／業種別）

| LP（案件名／業種） | Google Fonts `<link>` 実指定 | 用途分担 |
|---|---|---|
| ai-school-lp（AIvoyance／AI・テック） | `Noto+Sans+JP:wght@400;500;700;900` + `Inter:wght@400;500;600;700;800;900` | 日本語見出し・本文=Noto Sans JP、数字・英字ラベル・コード周辺UI=`.en`クラスでInter明示切替。コード表示は`"SFMono-Regular", Menlo, Consolas, monospace` |
| elearning-lp（LearnCore／SaaS） | `Noto+Sans+JP:wght@500;700;900`のみ | 英字専用フォントを使わずNoto Sans JP一本化（既存ライブラリの「SaaS＝Noto Sans JP+DM Sans」という想定と異なり、実際はDM Sans不採用） |
| finance-lp（FutureNest／金融） | `Noto+Sans+JP:wght@400;500;700;900` + `Inter:wght@500;600;700;800` | ラベル・価格数字は`.en{font-family:"Inter"}`で明示的に英字フォント切替 |
| dental-clinic-lp（医療・歯科） | `Noto+Sans+JP:wght@400;500;700;900` + `Zen+Maru+Gothic:wght@500;700` | 見出し専用に`--font-h:'Zen Maru Gothic','Noto Sans JP'`を分離（本文`--font-b`とCSS変数で明確に分離）。既存ライブラリ推奨の「医療・士業＝BIZ UDPGothic」ではなく**丸ゴシックで柔らかい信頼感**を選択した実例 |
| beauty-salon-lp（美容・ラグジュアリー） | `Cormorant+Garamond:ital,wght@0,400;0,500;1,400` + `Noto+Sans+JP:wght@400;500;700` + `Noto+Serif+JP:wght@500;600` | 見出し英字=Cormorant Garamond（斜体含む）、和文見出し=Noto Serif JP、本文=Noto Sans JPの**3フォント構成**。ライブラリ推奨の「Shippori Mincho」ではなくNoto Serif JPを実採用 |
| lumia-lp（Hair Salon LUMIA／美容ラグジュアリー） | `Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400` + `Noto+Sans+JP:wght@300;400;500` | `--font-serif`/`--font-sans`のCSS変数分離。beauty-salon-lpより軽量ウェイト（300番台）中心で、より繊細な印象 |
| business-design-academy-lp（スクール／ダークコーポレート） | `Noto+Sans+JP:wght@300;400;500;700;900` | Noto Sans JP単体だが300〜900の全ウェイトを採用し、ウェイトの強弱だけで階層を作る構成 |
| career-compass-lp / mirai-ryo-lp / rapas-lp / hoikushi-mikata-lp（キャリア・求人・保育士採用系） | いずれも `Noto+Sans+JP:wght@400;500;700;900` のみ | 生活密着・実務系LPは日本語フォント一本化が定番。英字専用フォントは不使用 |
| restaurant-lp（飲食） | Google Fonts `<link>`なし。`font-family:serif`（システムフォントのジェネリック指定） | 唯一Webフォント非導入。見出しは`serif`総称のみで、環境依存のセリフ体（Times等）に委ねている。既存ライブラリ推奨の「Playfair Display」は実際には未導入 |

### 業種別フォント選定の傾向（実データからの再集計）

- **日本語一本化が多数派**: 12案件中8案件（career-compass, mirai-ryo, rapas, hoikushi-mikata, elearning, business-design-academy 等）がNoto Sans JP単体で完結しており、既存ライブラリが業種ごとに提示する「英語/数字フォント」の使い分けは、実案件では**ラグジュアリー系（美容2件）とテック系（AI・金融2件）でのみ**明確に実践されていた。実務・生活密着系（求人・保育士・キャリア）では文字の統一感を優先し英字フォントを増やさない判断が一貫していた。
- **医療系はBIZ UDPGothicではなくZen Maru Gothic**: ライブラリ記載の推奨（BIZ UDPGothic + Inter）は歯科クリニックLPでは採用されず、丸みのある「Zen Maru Gothic」を見出しに採用し清潔感より親しみやすさを優先した。今後医療系案件で「堅め」か「柔らかめ」かをヒアリングで確認する必要がある。
- **飲食系はWebフォント非導入という選択肢もある**: restaurant-lpはダーク背景×薪火写真の世界観を優先し、あえてWebフォントを追加せずシステムのserifに任せる軽量構成にした実例。

### 実測フォントサイズ・fluid typeスケール（`clamp()`実値）

固定pxではなく`clamp(min, vw, max)`によるフルード型スケールがHero見出し・セクション見出しの主流実装だった：

| 用途 | 実値の例 | 出典 |
|---|---|---|
| Hero h1（最大級） | `clamp(34px,5.2vw,66px)` | mirai-ryo-lp |
| Hero h1（標準） | `clamp(32px,3.6vw,50px)` / `clamp(32px,4.8vw,54px)` | elearning-lp / rapas-lp |
| セクション見出し h2 | `clamp(27px,3.8vw,46px)` | mirai-ryo-lp |
| セクション見出し（中規模） | `clamp(26px,3.6vw,44px)` | elearning-lp `.ttl` |
| カード内見出し h3 | `clamp(22px,2.8vw,34px)` | elearning-lp |
| 統計数値（インパクト数字） | `clamp(44px,5.5vw,72px)` | elearning-lp `.stat-num` |
| CTA見出し | `clamp(30px,4.4vw,54px)` | elearning-lp `.cta-ttl` |
| 汎用セクション見出し（控えめ） | `clamp(24px,3.6vw,32px)` | dental-clinic-lp |

→ Hero h1は`min 32〜34px / max 50〜66px`の帯に収束しており、既存ライブラリの`text-6xl(60px)`〜`text-7xl(72px)`という固定値目安とほぼ整合。ただし実案件は固定pxでなく**clamp()によるフルード指定がデファクト**である点をライブラリの基本方針として明記する価値がある。

### 見出し／本文フォントの変数分離パターン

`dental-clinic-lp`（`--font-h` / `--font-b`）、`lumia-lp`（`--font-serif` / `--font-sans`）のように、**見出し用と本文用のCSS変数を明確に分離して管理する**書き方が、フォント使い分けを行う案件では共通していた。今後新規LPでも「見出しフォント変数／本文フォント変数」を`:root`で最初に定義するテンプレート化が有効。
