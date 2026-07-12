# Spacing Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: spacing

## 概要

余白（マージン・パディング・ギャップ・セクション間距離）の設計基準ライブラリ。
LP・HP・WordPress・SaaS・管理画面で一貫した余白体系を維持するための基準を収録予定。

## 収録予定内容

### スペーシングスケール（Tailwind CSS準拠）
| トークン | 値 | 用途 |
|---------|-----|------|
| sp-1 | 4px | 最小余白（アイコン周囲）|
| sp-2 | 8px | 要素内余白（小）|
| sp-3 | 12px | 要素内余白（中）|
| sp-4 | 16px | 基本パディング |
| sp-6 | 24px | セクション内余白 |
| sp-8 | 32px | グループ間余白 |
| sp-12 | 48px | セクション間（小）|
| sp-16 | 64px | セクション間（中）|
| sp-24 | 96px | セクション間（大）|
| sp-32 | 128px | ページレベル余白 |

### セクション別余白基準
- Hero: padding-top 80〜120px / padding-bottom 80〜120px
- Feature: padding 64〜96px
- Voice: padding 64px
- CTA: padding 80〜120px（強調）
- Footer: padding 40〜60px

### コンテナ幅
- max-width: 1200px（標準）/ 1440px（ワイド）/ 960px（コンパクト）
- 横余白: px-4（モバイル）/ px-8（タブレット）/ px-12（デスクトップ）

### 余白の設計哲学
- セクション間 > セクション内 > コンポーネント内（階層原則）
- 重要なCTAは上下余白を標準の1.5倍に
- モバイルは全余白を60〜70%に縮小

## 実案件からの知見（2026-07-12 追加）

12本の実LPコードから、`padding`実値・コンテナ幅実値を業種別に収集した。

### スペーシングスケールの実運用を確認（lumia-lp）

既存ライブラリのsp-1〜sp-32トークンは、`lumia-lp/style.css:44-54`（Hair Salon LUMIA）で実際にCSSカスタムプロパティとして定義・使用されていることを確認：

```css
/* lumia-lp/style.css:44-54 */
--sp-1:   0.25rem;  /* 4px */
--sp-2:   0.5rem;   /* 8px */
--sp-3:   0.75rem;  /* 12px */
--sp-4:   1rem;     /* 16px */
--sp-6:   1.5rem;   /* 24px */
--sp-8:   2rem;     /* 32px */
--sp-12:  3rem;     /* 48px */
--sp-16:  4rem;     /* 64px */
--sp-20:  5rem;     /* 80px ← 既存ライブラリのスケールに未収録。sp-16とsp-24の中間として実用上便利 */
--sp-24:  6rem;     /* 96px */
--sp-32:  8rem;     /* 128px */
```
使用例: `.zigzag{padding:var(--sp-16) 0}`（セクション間・大）、`.owner-message{padding:var(--sp-8) var(--sp-6)}`（カード内余白）。**sp-20（80px）の追加を今後のスケール改訂時に検討する価値あり。**

### セクション別 `padding` 実値一覧（業種・案件別）

| LP（案件名／業種） | デスクトップ | モバイル | 備考 |
|---|---|---|---|
| ai-school-lp（AIvoyance／AI・テック） | `150px 0` | `100px 0`（≤768px想定） | 全LP中最大。ダーク背景×濃い余白で高級感演出 |
| elearning-lp（LearnCore／SaaS） | `--sp:160px`（`--sp-lg:200px`は大型セクション用） | `--sp:100px`（≤1024px）→`80px`（≤768px） | カスタムプロパティ切替で2段階レスポンシブ |
| career-compass-lp（キャリア・HR） | `140px 0` | `80px 0` | |
| finance-lp（FutureNest／金融） | `130px 0`（`.sec`） | `88px 0` | |
| mirai-ryo-lp（求人・寮付き求人） | `120px 0` | 明記コンテナ幅のみ変更（`94%`）、padding値は不変 | |
| business-design-academy-lp（スクール／ダークコーポレート） | `120px 0` | `80px 0` | |
| ai-school-lp/finance-lp以外の平均値 | ― | ― | 96px前後が中央値 |
| dental-clinic-lp（医療・歯科） | `96px 0` | `60px 0` | |
| hoikushi-mikata-lp（保育士向け・採用HR） | `96px 0` | `72px 0` | |
| restaurant-lp（飲食） | `96px 6%`（左右%指定） | 明記あり（`.section{padding:...}`が別途上書き） | 唯一左右をpx固定でなく`%`で指定 |
| rapas-lp（求人・人材） | `88px 0` | `64px 0` | |
| beauty-salon-lp（美容・ラグジュアリー） | `80px 0` | `56px 0` | 全LP中最小。余白よりコンテンツ密度優先 |

→ ライブラリの「Feature: padding 64〜96px」という目安は実案件の中央値と一致するが、**SaaS/AI系は160px級まで広げる／美容サロンは80px級まで詰める**という業種による振れ幅が実データから明確に確認できた。今後は業種別の推奨レンジとして反映できる。

### コンテナ幅の実値（`width: min(Npx, M%)` パターンが主流）

固定`max-width`ではなく`width:min(数値px, 数値%)`で「大画面では固定幅・小画面では%で追従」させる書き方が10/12案件で採用されていた（Tailwind非使用の素のCSSでのレスポンシブコンテナ手法として定着している）:

| LP | コンテナ幅 | ナビ幅（別指定の場合） |
|---|---|---|
| ai-school-lp | `width:min(1160px,90%)`（`.container`）/ `min(1360px,92%)`（`.container-lg`、大型セクション用） | ― |
| business-design-academy-lp | `width:min(1200px,90%)` | ― |
| elearning-lp | `width:min(1200px,92%)`（`.wrap`） | 同じ`.wrap`をヘッダーでも共用 |
| mirai-ryo-lp | `width:min(1120px,92%)` | `width:min(1180px,94%)` |
| hoikushi-mikata-lp | `width:min(1120px,90%)` | `width:min(1180px,92%)` |
| rapas-lp / career-compass-lp | `width:min(1100px,92%〜90%)` | ― |
| finance-lp | `width:min(1100px,90%)`（`.wrap`）／`min(760px,90%)`（`.wrap-nar`、狭幅セクション用） | `width:min(1160px,92%)` |
| beauty-salon-lp | `max-width:1080px`固定＋`padding:0 24px` | ― |
| dental-clinic-lp | `max-width:1160px`固定＋`padding:0 24px` | 同一コンテナをヘッダーにも流用 |

- **狭幅コンテナ**（本文中心・FAQ・CTA文言など）は`max-width:760〜880px`のレンジで再現性高く登場（finance-lp `.wrap-nar` 760px、elearning-lp/hoikushi-mikata-lp/ai-school-lpのFAQリスト 820〜860px）。既存ライブラリの「960px（コンパクト）」よりもう一段狭い帯（760〜880px）を「本文・FAQ幅」として追加で持つと実態に近い。
- `.section-header`/`.title`等の見出しブロックは`max-width:620〜860px`＋`margin:0 auto`が定番（中央寄せリード文の幅）。

### 案件間の一貫性についての所感

業種を問わず「コンテナ幅1100〜1200px＋モバイルは90〜92%」がデファクトになっており、既存ライブラリの「max-width: 1200px（標準）」という記載は実データと高く一致する。一方「960px（コンパクト）」「1440px（ワイド）」の実例は12案件中では確認できなかった（今後ワイド構成の案件が来た場合の参考値として残す）。
