# Pricing Layout Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: layouts

## 概要

Pricing（料金・プラン）セクションのレイアウトパターンライブラリ。
価格の見せ方・プラン比較・CVへの導線設計パターンを収録予定。

## 収録予定パターン

- PRICE-001: 3プランカード型（推奨プラン強調）
- PRICE-002: トグル切り替え型（月額/年額）
- PRICE-003: シングルプライス型
- PRICE-004: 比較表型（横スクロール）
- PRICE-005: カスタム見積もり誘導型
- PRICE-006: 無料/有料2択型
- その他追加予定

---

## 実案件からの知見（2026-07-12 追加）

自社制作の実LP12件を実装コードベースで調査。料金・プラン系のキーワードが実際にヒットしたのは **6件**（ai-school-lp, beauty-salon-lp, business-design-academy-lp, elearning-lp, finance-lp, lumia-lp）。dental-clinic-lpはナビゲーションに「料金表」リンクのみで実体なし、career-compass-lp/hoikushi-mikata-lp/rapas-lp/restaurant-lpは該当なし、mirai-ryo-lpは料金プランではなく費用比較表のみ（後述PRICE-008参照）。以下、実装から裏付けが取れたパターンのみ記載する。

### PRICE-001: 3プランカード型（推奨プラン強調）

**実例**: ai-school-lp, elearning-lp, finance-lp

| LP | ファイル | プラン数 | 推奨強調の実装 | カードCSS |
|---|---|---|---|---|
| ai-school-lp | `ai-school-lp/index.html`（HTML:1343-1356行, CSS:689-715行） | 3（うち中央「実践プラン」を推奨） | `.price-card.recommend`にリボン`.ribbon`（「おすすめ」、青紫グラデ背景・`border-radius:999px`・`padding:6px 18px`）を上部絶対配置。カード自体`border:1px solid rgba(59,130,246,.5)`＋薄い青紫グラデ背景＋`transform:translateY(-14px)`で持ち上げ | `.price-card{background:var(--glass);border:1px solid var(--line);border-radius:var(--radius);padding:34px 28px;backdrop-filter:blur(12px)}`。価格`.price{font-size:32px;font-weight:800}`はグラデーションを`background-clip:text`で文字着色。個別CTAボタンはなく、ページ下部の固定フローティングCTA（`.fixed-cta{position:fixed;right:22px;bottom:22px}`）に集約 |
| elearning-lp | `elearning-lp/style.css`（389-434行）, HTML: `elearning-lp/index.html`（935-1005行） | 3（Starter/Standard/Enterprise、EnterpriseはPRICE-005も兼ねる） | 中央Standardに`.pr-card.star`（`border-color:var(--p);box-shadow:var(--sh-lg)`）＋`.pr-badge`（「おすすめ」、`background:var(--p);border-radius:0 0 12px 12px`上端配置）。さらに`.pr-top`（価格ヘッダー部）の背景を`var(--p)`の濃青に反転、文字を白にして別格扱い | `.pr-card{border:1.5px solid var(--bd);border-radius:var(--r-lg)}`、hoverで`translateY(-6px);box-shadow:var(--sh-lg)`。価格`.pr-price{font-size:52px;font-weight:900;letter-spacing:-.04em}`。ヘッダー`.pr-top{padding:36px 32px 28px}`、本文`.pr-body{padding:32px}`。上部に共通バナー`.pr-trial-banner{padding:12px 26px;border-radius:999px;background:linear-gradient(90deg,rgba(0,91,172,.08),rgba(0,174,239,.1))}`で「初月無料トライアル」告知。プランごとにCTA文言を変化（「資料を受け取る」「デモを見る」「導入相談する」） |
| finance-lp | `finance-lp/index.html`（HTML:401-437行, CSS:151-166行） | 3（LIGHT/STANDARD/PROFESSIONAL、PROFESSIONALは「要相談」でPRICE-005兼用） | STANDARDに`.price-card.pop`（`border-color:var(--primary);box-shadow:0 20px 50px rgba(29,78,216,.14)`）＋`.price-ribbon`（「人気No.1」を`position:absolute;top:-14px;left:50%`で浮かせて配置） | `.price-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:32px 26px}`。価格`.price-amt{font-size:32px;font-weight:800;color:var(--primary)}`。チェックリスト項目にSVGチェックの緑丸背景アイコン（`background:rgba(34,197,94,.14)`）。CTAは全プラン共通`.price-cta`（アウトライン、`border-radius:999px`）、STANDARDのみ`.price-cta.solid`で塗りつぶし強調 |

**効いていたポイント**: 「推奨プラン強調」の実装パターンは3件で共通して①リボン/バッジ、②ボーダー色変更、③box-shadow強調、④カードを持ち上げる(`translateY`)、の4手法の組み合わせ。elearning-lpのようにヘッダー部の背景色まで反転させると視覚的インパクトが最大化する。

### PRICE-003: シングルプライス型

**実例**: beauty-salon-lp, business-design-academy-lp

- **beauty-salon-lp**（`beauty-salon-lp/index.html` HTML:2240-2278行付近, CSS:748-860行）: 複数プラン比較ではなく「初回限定オファー」の通常価格vs特別価格の対比型。`.price-ribbon`（「初回限定価格」）をカード上端中央に絶対配置、`border-radius:0 0 12px 12px`のタブ形状。`.price-box{max-width:720px;border:2px solid var(--accent-light);padding:48px 48px 40px;border-radius:var(--radius-lg);box-shadow:var(--shadow)}`。旧価格`.price-old-num{font-size:24px}`＋取り消し線、新価格`.price-new-num{font-family:'Cormorant Garamond',serif;font-size:clamp(52px,10vw,80px)}`と大胆に大きく、`.price-off-badge`（「通常比50%OFF」）を赤背景バッジで併記。`.price-note`（`background:var(--bg-pink)`の囲み注記）で「当日の追加提案・契約勧誘は一切なし」と明記し勧誘不安を先回りして払拭。含まれる内容は`.price-includes`のチェック風3項目リスト。CTAはLINE予約ボタン`.btn-line`。
- **business-design-academy-lp**（`business-design-academy-lp/index.html` HTML:1432-1473行, CSS:749-808行）: 個別伴走型スクール1本の高単価カード。`.pricing-card{max-width:560px;margin:0 auto}`で中央1枚のみ。複数プラン比較がないため推奨バッジはなく、代わりにカード上部に`.pricing-card-top{height:5px;background:linear-gradient(90deg,var(--gold),var(--gold-light))}`のゴールド帯ラインで高級感演出。`background:var(--bg-dark);border-radius:28px;box-shadow:var(--shadow)`、`.pricing-card-body{padding:52px 52px 48px}`。価格`.pricing-price-num{font-size:3.5rem;font-weight:900;color:var(--gold);letter-spacing:-0.02em}`、税込表記`.pricing-price-tax{font-size:0.8rem;color:var(--muted)}`で小さく併記（¥800,000 / 税込¥880,000）。`.pricing-features{border-top:1px solid var(--line);padding-top:32px}`でゴールド色のチェックSVG付きリスト。CTA`.btn-gold{width:100%}`で「無料個別相談で詳細を聞く」。`.pricing-footnote{font-size:0.78rem}`で「無理な勧誘はありません」の安心材料。

**効いていたポイント**: シングルプライス型は高単価商材（business-design-academy-lp: 80万円）または初回限定オファー（beauty-salon-lp）で採用される。いずれも価格を大きく見せつつ、直後に「勧誘なし」の安心材料を明記する構成が共通しており、高額決断への心理的ハードルを下げる工夫として機能している。

### PRICE-005: カスタム見積もり誘導型

**実例**: elearning-lp（Enterpriseプラン）, finance-lp（PROFESSIONALプラン）

いずれもPRICE-001の3プランカード型の最上位プランとして統合されている。elearning-lpのEnterpriseは価格の代わりに「要問い合わせ」、finance-lpのPROFESSIONALは「要相談」を表示し、対象人数・対象者像（「〜200名」「オーダーメイド設計」等）を明記してCVを個別相談へ誘導する。単独セクションとしてではなく、標準プラン群の一部として自然に配置するのが実例からの知見。

### PRICE-007（新規）: メニュー価格表グリッド型（美容室系）

**実例**: lumia-lp（`lumia-lp/index.html` HTML:363-449行, CSS: `lumia-lp/style.css` 883-971行）

**レイアウト**: プランカードではなく、カテゴリ別サービスメニュー（Cut/Color/Treatment/Set Menu）を並べる比較表型。`.menu__grid{grid-template-columns:1fr}`がスマホ基準で、768px以上で2列、1024px以上で4列（`repeat(4,1fr)`）にレスポンシブ変化。Set Menuカードのみ`.menu-card--popular{border-color:var(--clr-gold)}`＋`.menu-card__badge`（「人気No.1」、`top:-12px;left:50%`の絶対配置バッジ、金色背景）。カード`.menu-card{padding:var(--sp-8) var(--sp-6)（=32px 24px）;border-radius:var(--radius-lg)（=12px）;border:1px solid var(--clr-border)}`。価格`.menu-card__price{font-family:var(--font-serif);font-size:var(--fs-base)（=1rem）;font-weight:500}`、税込表記`.menu-card__tax{font-size:var(--fs-xs)（=0.75rem）;color:var(--clr-text-sub)}`をメニュー名の隣に小さく併記。個別カードにCTAボタンはなく、末尾の注記`.menu__note`から「詳細はLINEにてご相談ください」と別セクションのLINE予約ボタンに誘導。

**効いていたポイント**: 美容室特有の「〜」（変動あり）表記を多用し「※ 料金は髪の長さ・量により変動する場合があります」と注記。プランを選ばせるのではなく、価格自体をメニュー表として淡々と並べセリフ体フォントで高級感を出しつつ、他業種のプランカード型より情報密度を上げる構成。施術メニューが多岐にわたる業種（美容室・エステ・整体等）に適する。

### PRICE-008（新規）: 費用比較表型（自社サービス vs 代替案）

**実例**: mirai-ryo-lp（`mirai-ryo-lp/index.html` HTML:790-816行）

**レイアウト**: プラン選択やCTAボタンを持たない特殊型。厳密な料金・プランセクションではなく、「一人暮らし」vs「住み込み求人」の費用比較テーブル（`.tableBox`内の`.row`）で、家賃・初期費用・家具家電・赴任交通費・保証人の5項目を`.bad`（赤字想定の一人暮らし費用）と`.good`（住み込みのメリット、例「0円〜」）で対比。下部の`.grid4`カード群（家賃0円/初期費用0円/貯金しやすい/全国で働ける）で費用メリットを補足。

**効いていたポイント**: 無料の求人紹介サービスなど「自社に料金プランが存在しない」業態でも、競合・代替手段との費用対比を見せることで「実質的にお得」という訴求ができる。プラン比較の発想を「自社プランどうし」ではなく「自社 vs 代替案」に転用した応用パターン。

### 該当セクションなし

career-compass-lp, hoikushi-mikata-lp, rapas-lp, restaurant-lp（相談無料・求人紹介無料・飲食予約等、料金表自体が不要な業態）。dental-clinic-lpはナビゲーションに「料金表」リンクがあるが`href="#"`で実体なし。

### 業種別の使い分け

- **プランカード型（PRICE-001）**: SaaS/スクール/金融相談などサービス階層が複数あるBtoB・高関与商材（elearning-lp, ai-school-lp, finance-lp）。
- **シングルプライス型（PRICE-003）**: 高単価1商材（business-design-academy-lp）または初回限定オファー訴求（beauty-salon-lp）。
- **メニュー価格表型（PRICE-007）**: 施術・サービスメニューが多岐にわたる美容系（lumia-lp）。
- **費用比較表型（PRICE-008）**: 自社に料金プランがない無料サービス（mirai-ryo-lp）で「代替案との比較優位」を見せたい場合。
- **共通する安心材料の型**: 高単価・高関与商材（business-design-academy-lp, beauty-salon-lp, finance-lp）はいずれも価格の直後・直下に「勧誘なし」「相談は無料」等の注記を明記し、決断の心理的ハードルを下げる工夫が徹底されている。
