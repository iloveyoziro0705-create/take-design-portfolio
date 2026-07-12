# CTA Layout Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: layouts

## 概要

CTA（Call To Action）セクションのレイアウトパターンライブラリ。
ボタン配置・フォーム誘導・緊急性演出など、CVに直結するセクションのパターンを収録予定。

## 収録予定パターン

- CTA-L-001: フルワイド帯型（背景色切り替え）
- CTA-L-002: 中央集中型（コピー+ボタン）
- CTA-L-003: 2分割型（左コピー/右フォーム）
- CTA-L-004: フローティング固定型（スクロール追従）
- CTA-L-005: カウントダウン×CTA型
- その他追加予定

## 参照先

既存CTAパターン（ボタン単体）: `knowledge/lp/cta-library.md`

## 実案件からの知見（2026-07-12 追加）

12件の実制作LP（ai-school-lp / beauty-salon-lp / business-design-academy-lp / career-compass-lp / dental-clinic-lp / elearning-lp / finance-lp / hoikushi-mikata-lp / lumia-lp / mirai-ryo-lp / rapas-lp / restaurant-lp）を精査し、実装済みのCTAパターンを収録する。上記「収録予定パターン」の番号体系（CTA-L-001〜005）を踏襲しつつ、実例のみで確認できた追加パターンをCTA-L-006以降として追記する。

### CTA-L-001: フルワイド帯型（背景色切り替え／背景画像＋オーバーレイ）

- **dental-clinic-lp/index.html**（`.cta-band`, L813-842／CSS L395-424）: `<section id="reserve">`内、`.cta-band-grid{grid-template-columns:1.3fr 1fr;gap:32px;align-items:end}`の2カラム（左テキスト+WEB予約ボタン/電話番号、右に写真）。`background:linear-gradient(120deg,var(--primary-dark),var(--primary))`、`border-radius:28px`、`padding:44px 44px 0`（下paddingを0にして写真を下端で切る演出）。電話ボタンは`border-radius:999px`の白ピル。「初診の方限定」バッジは`background:rgba(255,255,255,.16);border-radius:999px`。
- **restaurant-lp/index.html**（`.cta#reserve`, L361-365／CSS L184-200）: `background:linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.78)),url(...)center/cover`のフルブリード料理写真帯。見出しはserif`font-size:clamp(34px,5vw,64px);color:#f5e6c8`。「席数に限りがございます。デート・記念日・女子会のご予約はお早めに。」という緊急性訴求文を1行添える。ボタンは`background:#d8a76a;border-radius:999px;padding:16px 36px`、hoverで`background:#f0c98b;transform:translateY(-3px)`。
- **business-design-academy-lp/index.html**（`#final-cta`, L1554-1584／CSS L869-931）: `padding:160px 0`。背景に写真（`.final-cta-bg`）＋`rgba(11,15,25,.72)`の暗幕オーバーレイ、その上にテキストとボタン（`z-index:2`）。ボタンは金グラデーション`linear-gradient(135deg,var(--gold),var(--gold-light));border-radius:50px;box-shadow:0 8px 32px rgba(212,175,55,.35)`。
- **rapas-lp/index.html**（`#final-cta`, L1390-1408／CSS L658-699）: `background:linear-gradient(135deg,#1E3A5F 0%,#1565C0 50%,#1976D2 100%);padding:100px 0`。`::before/::after`で右上・左下に半透明円（`border-radius:50%;background:rgba(255,255,255,.05)`）を重ねる。`.final-cta-tag{border-radius:999px;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.35)}`のピル型バッジ「✨ 今すぐ在宅ワークをスタート」。

### CTA-L-002: 中央集中型（コピー+ボタン）

- **ai-school-lp/index.html**（`.final-cta#contact`, L1374-1391／CSS L724-750）: `text-align:center;padding:180px 0;position:relative;overflow:hidden`。背景に`radial-gradient(ellipse 60% 50% at 50% 40%, rgba(124,58,237,.22), transparent 70%)`のパープルグロー装飾（`.final-cta-glow`）。ボタンは`border-radius:999px;box-shadow:0 18px 45px rgba(59,130,246,.28)`、hoverで`transform:translateY(-3px);box-shadow:0 22px 55px rgba(124,58,237,.4)`。
- **finance-lp/index.html**（`.final#contact`, L456-474／CSS L177-181, 59-65）: `padding:150px 0`という極端に厚い余白でイラスト演出を強調。背景`linear-gradient(180deg,#FFF3E0 0%,#FFE8D6 45%,#FFEFEA 100%)`。`.blob{filter:blur(60px);opacity:.5;border-radius:50%}`のぼかし円を左上・右下に配置。中央SVGイラストの円要素に`class="breathe"`（`@keyframes breathe{0%,100%{scale(1)}50%{scale(1.03)}}`）で呼吸するような微アニメーション。CTAボタンは1個のみ「無料相談を予約する →」。
- **hoikushi-mikata-lp/index.html**（`.final-cta#cta`, L602-624／CSS L217-245）: 背景`radial-gradient(circle at 12% 16%, rgba(255,214,226,.85), transparent 24%), linear-gradient(135deg, var(--pink-soft), #fff)`。デスクトップは背景画像＋左46%幅にグラスモーフィズムパネル（`background:rgba(255,255,255,.88);backdrop-filter:blur(14px);border-radius:26px`）を重ねる構成、900px以下ではシンプルな中央集中1カラムに切替（`.final-cta-mobile`）。

### CTA-L-003: 2分割型（左コピー/右フォーム・ビジュアル）

- **career-compass-lp/index.html**（`.final-inner`, L787-814／CSS L229-244）: `display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center`。左`.final-copy`（見出し・説明文）、右`.contact-form`（白背景カード`border-radius:var(--r-lg);padding:40px;box-shadow:0 24px 64px rgba(0,0,0,.2)`）。背景は`linear-gradient(145deg,var(--blue-dark),var(--blue))`のダークブルーグラデーションに円形装飾2つ。
- **elearning-lp/index.html**（`.cta-g#contact`, L1026-1078／CSS L466-479, 533-536）: `grid-template-columns:1fr 1fr;gap:72px`。左`.cta-txt`（見出し+「資料請求」「デモを見る」の2択CTAボタン）、右`.cta-dash`は自作SVGの管理画面ダッシュボードモック（受講率82%等の数値をSVG textで描画）。背景`linear-gradient(135deg,var(--pd) 0%,var(--p) 55%,#0073d1 100%)`。960px以下で1カラム化しダッシュボードは非表示。

### CTA-L-004: フローティング固定型（スクロール追従）

12LP中9LPで画面固定CTAが実装されており、最頻出パターンであることが確認できた。実装は3系統に分かれる。

- **常時固定表示型**: ai-school-lp `.fixed-cta`（右下固定、L745-750）、business-design-academy-lp `.fixed-cta`（PC）/`.fixed-cta-bar`（900px以下でSP専用に切替）、career-compass-lp `.fixed-cta`（右下、フッターpadding-bottom:100pxで重なり回避）、finance-lp `.fixed-cta`（768px以下は`left:16px;right:16px`でフル幅バー化）、dental-clinic-lp `.sticky-cta`（画面下部、電話/WEB予約の2ボタン、`box-shadow:0 -6px 24px rgba(0,0,0,.1)`、768px以下のみ）、lumia-lp `.fixed-cta`（`min-width:1024px`で非表示＝モバイル専用）。
- **スクロール連動フェードイン型**: elearning-lp `.fixed-cta`（初期`transform:translateY(80px);opacity:0`→scrollY>400で`.show`クラス付与）、hoikushi-mikata-lp `.fixed-cta`（初期`opacity:0;transform:translateY(8px)`→scrollY>500で`.show`、`transition:opacity .3s ease, transform .3s ease`）、rapas-lp `#floating-cta`（初期`transform:translateY(100%)`→`.visible`で`translateY(0)`、`transition:transform .35s cubic-bezier(.22,1,.36,1)`、scrollY>100pxでJS付与）。
- **バウンドアニメーション付き型**: beauty-salon-lp `.float-line-cta`（スクロール480px以降かつフッター手前で表示、`animation:floatLineBob 2.8s ease-in-out infinite`で上下7pxバウンド、`box-shadow:0 8px 32px rgba(6,199,85,.44)`のLINEグリーン）。
- 共通の工夫: フッター直前に固定CTAが重なる場合、フッターの`padding-bottom`を80〜112px程度まで拡張して回避している（hoikushi-mikata-lpはCSSに`/* extra bottom padding so fixed-cta doesn't overlap */`と明記）。

### CTA-L-006: 中間反復型CTA（本文中に同一パターンを複数回挿入）※新規

- **career-compass-lp/index.html**（`.mid-cta`, L569-579・L742-752／CSS L171-174）: `background:var(--soft-blue);border:1px solid #dbeafe;border-radius:var(--r-lg);padding:56px 48px;text-align:center`の帯を、Profile直前と終盤FAQ直前の2箇所に反復配置。
- **rapas-lp/index.html**（`.inline-cta`, 例L1008, 1052, 1111, 1351／CSS L123-137）: `background:var(--cta-light)`（`#FFF7ED`）、`border:1.5px solid rgba(249,115,22,.25);border-radius:24px;padding:40px 32px`を各セクション末尾に繰り返し配置する「絨毯爆撃型」導線。
- **mirai-ryo-lp/index.html**（`.midCta`, 例L1932, 2036, 2094, 2148, 2241／CSS L431-434）: `background:linear-gradient(135deg,var(--softBlue),#dbeafe);border-radius:20px;padding:32px 36px;display:flex;justify-content:space-between`の横1行帯（モバイルは`flex-direction:column`）。
- 効いていたポイント: 長尺LP（2000行超）では読了前に離脱するユーザーが多いため、セクションごとに小型CTAを挟むことで「今すぐ行動」のタイミングを複数用意している。

### CTA-L-007: タイプ別カラー分岐CTA帯 ※新規

- **mirai-ryo-lp/index.html**（`.branch-cta-band`, L1175, 1366, 1557, 1748／CSS L656-682）: `border-radius:32px;padding:40px 44px`の大型帯だが、求人タイプごとにインラインstyleで背景グラデーションを切り替える（例: L1175はオレンジ系`linear-gradient(135deg,var(--orange),#f59e0b);box-shadow:0 24px 60px rgba(255,107,53,.28)`、L1557はピンク〜紫`#ec4899,#8b5cf6`）。左`.bcta-left`に見出し、右`.bcta-btns{display:flex;gap:10px;flex-wrap:wrap}`にボタン群。複数の求人・プランを扱うLPで、各カテゴリの世界観をCTA帯の色でも表現する工夫。

### CTA-L-008: 価格提示×安心材料併記型 ※新規

- **beauty-salon-lp/index.html**（`.final-cta-price`, L2716-2720／CSS L1639-1663）: `border:1.5px solid var(--accent-light);border-radius:var(--radius);padding:20px 32px`の価格提示box（初回¥5,980）の上に`.line-benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}`で「24時間受付／相談だけでもOK／勧誘なし」の3カード安心材料を配置。価格の安さと不安解消を同時に見せることでCV障壁を下げる設計。
- **dental-clinic-lp/index.html**（`.cta-band`内, L813-842）: 安心材料3項目をチェックアイコン付きで横並び表示（緊急性演出ではなく安心訴求型のCTA）。
