# Flow Layout Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: layouts

## 概要

Flow（利用の流れ・プロセス・ステップ）セクションのレイアウトパターンライブラリ。
申込から成果までのプロセスを可視化し、不安解消・行動促進するセクションのパターンを収録予定。

## 収録予定パターン

- FLOW-001: 横並び矢印ステップ型
- FLOW-002: 縦タイムライン型
- FLOW-003: 番号円+説明型
- FLOW-004: 交互左右型
- FLOW-005: アイコン+ステップ型
- FLOW-006: Before/After フロー型
- その他追加予定

---

## 実案件からの知見（2026-07-12 追加）

自社制作の実LP12件を実装コードベースで調査。うち **11件**に「利用の流れ・ステップ・プロセス」に相当するセクションが実在した（restaurant-lpのみ該当セクションなし）。以下、実装から裏付けが取れたパターンのみ記載する。

### FLOW-001: 横並び矢印ステップ型

**実例**: dental-clinic-lp, elearning-lp, lumia-lp

| LP | ファイル | ステップ数 | 矢印の実装 | 特徴 |
|---|---|---|---|---|
| dental-clinic-lp | `dental-clinic-lp/index.html`（CSS:363-384行, HTML:754-788行, `#flow`） | 5（WEB予約→来院・受付→カウンセリング・検査→治療開始→メンテナンス） | `.flow-step:not(:last-child)::after{content:"›";position:absolute;right:-8px;top:8px;font-size:22px}`（768px以上のみ表示） | `.flow-list{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}`、番号円`.flow-num{width:42px;height:42px;border-radius:50%;background:var(--primary);color:#fff;font-size:15px}`。760px以下は`grid-template-columns:1fr`に変わり、`.flow-step{display:flex;gap:16px;padding:16px 0;border-bottom:1px dashed var(--border)}`の点線区切り縦積みリストに変化（矢印・アイコンは非表示） |
| elearning-lp | `elearning-lp/style.css`（283-298行・636-637行）, HTML: `elearning-lp/index.html`（520-541行, `#cycle`） | 5（受講→学習→テスト→分析→成長、循環プロセスとして提示） | `.cyc-arr{color:var(--a);font-size:24px;margin:0 4px;padding-bottom:34px}`（テキストの「›」文字） | `.cyc-flow{display:flex;align-items:center;justify-content:center}`。円`.cyc-circle{width:118px;height:118px;border-radius:50%;background:linear-gradient(135deg,var(--p),#0073d1);box-shadow:0 8px 28px rgba(0,91,172,.28)}`、hoverで`scale(1.07)`。最終ステップのみ`.cyc-circle.accent{background:linear-gradient(135deg,var(--a),#0090cc)}`と色を変え「成長」を強調。モバイルは`flex-direction:column`＋矢印`display:none` |
| lumia-lp | `lumia-lp/index.html`（HTML:616-668行, `#flow`）, CSS: `lumia-lp/style.css`（1256-1362行） | 3（LINEで予約→カウンセリング→施術・スタイリング、所要時間バッジ付き） | `.flow__arrow::before{content:'';width:24px;height:24px;border-right:1.5px solid var(--clr-greige);border-bottom:1.5px solid var(--clr-greige);transform:rotate(45deg)}`（SVGでなくborderを45度回転させたシェブロン） | `<ol class="flow__list">`のセマンティックマークアップ。`display:flex;flex-direction:column`→768px以上で`row`。番号は円ではなく`.flow-step__number{font-family:var(--font-serif);font-size:3.5rem;font-weight:300;color:var(--clr-beige-mid)}`という大きなセリフ体の数字そのもの。所要時間バッジ`.flow-step__time{border-radius:99px;padding:3px 10px;border:1px solid var(--clr-border)}` |

**効いていたポイント**: 「›」矢印はテキスト文字・疑似要素・border回転の3通りの実装があり、SVGを使わずCSSだけで軽量に表現できる。lumia-lpの「円で囲まない大きな数字」は高級サロン特有の余白の使い方で差別化になる。

### FLOW-002: 縦タイムライン型

**実例**: finance-lp, business-design-academy-lp（モバイル版）

- **finance-lp**（`finance-lp/index.html` CSS:114-123行, HTML:298-335行, `#process`）: 左に番号アイコン円・右に説明の2カラム`.proc-item{display:grid;grid-template-columns:70px 1fr;gap:26px;padding:22px 0}`を6ステップ（相談→分析→設計→提案→改善→未来）縦に並べる。背景線`.proc-line-bg{left:34px;width:2px;background:var(--line)}`と進捗線`.proc-line-fill{left:34px;width:2px;height:0%;background:linear-gradient(180deg,var(--primary),var(--purple))}`を重ね、GSAP ScrollTriggerでスクロール量に応じて`height`を0%→100%にアニメーションさせる「線が伸びる」演出。アイコン円`.proc-icon{width:70px;height:70px;border-radius:50%;background:var(--surface);border:1px solid var(--line)}`、アクティブ時`.proc-icon.on{background:linear-gradient(140deg,var(--primary),var(--purple));box-shadow:0 14px 30px rgba(37,99,235,.3)}`。最後の「未来」だけオレンジ`#F59E0B`で色分け。
- **business-design-academy-lp**（`business-design-academy-lp/index.html` CSS:545-662行, HTML:1286-1323行, `#curriculum`）: PCは横スクロール型タイムライン（後述FLOW-008参照）だが、モバイルでは`.roadmap-vertical{padding-left:40px}`、線`::before{left:8px;width:2px}`、ドット`.roadmap-v-step::before{width:14px;height:14px;left:-36px}`の縦タイムラインに完全切替。

**効いていたポイント**: finance-lpのスクロール連動で線が伸びる演出は「読み進める体験」自体を訴求に変える高度な手法。金融・コンサル等の重厚なプロセスを説明する業種に向く。

### FLOW-003: 番号円+説明型

**実例**: beauty-salon-lp, career-compass-lp, rapas-lp

| LP | ファイル | ステップ数 | 番号円CSS | 連結線 |
|---|---|---|---|---|
| beauty-salon-lp | `beauty-salon-lp/index.html`（CSS:631-684行・1350-1353行, HTML:2117-2158行） | 4（LINEで予約→来店・カウンセリング→施術→帰宅） | `.flow-num{width:56px;height:56px;border-radius:50%;background:var(--accent);box-shadow:0 4px 16px rgba(196,135,140,.35)}`、Cormorant Garamond 22px | `::before{position:absolute;top:28px;left:calc(12.5% + 28px);right:calc(12.5% + 28px);height:2px;background:var(--accent-light)}`。モバイルは`grid-template-columns:1fr;gap:32px`＋線`display:none`で左詰め横並びカードに変化 |
| career-compass-lp | `career-compass-lp/index.html`（CSS:209-214行, HTML:709-738行, `#flow`） | 4（申し込み→日程調整→オンライン相談→方向性整理） | `.step-num{width:44px;height:44px;border-radius:50%;background:var(--blue);color:#fff;font-size:14px}` | 連結線・矢印なし（`.flow-wrap{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}`のシンプルグリッドのみ） |
| rapas-lp | `rapas-lp/index.html`（CSS:398-441行・766-780行, HTML:993-1051行, `#steps`） | 5（申込み→説明確認→作業テスト→お仕事スタート→納品・完了） | `.step-circle{width:108px;height:108px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--primary-dark));box-shadow:0 6px 20px rgba(33,150,243,.32)}`、最終ステップのみ`.step-circle.last{background:linear-gradient(135deg,var(--cta),var(--cta-dark))}`とオレンジに変化 | `::before{top:56px;left:calc(10% + 8px);right:calc(10% + 8px);height:3px;background:linear-gradient(90deg,var(--primary),var(--cta))}`。900px台で3カラム＋線なし、さらに狭い幅で2カラムに変化 |

**効いていたポイント**: 連結線の有無は業種のトーンを左右する。career-compass-lpのように線を使わないシンプルなグリッドは落ち着いた相談系サービスに合い、beauty-salon-lp/rapas-lpのように線でつなぐと「一連の流れ」感が強調され行動を後押しする。最終ステップだけ色を変える（rapas-lp: オレンジ、mirai-ryo-lp: オレンジ）のは「完了」を印象づける定番テクニック。

### FLOW-005: アイコン+ステップ型

**実例**: hoikushi-mikata-lp, rapas-lp, elearning-lp

- **hoikushi-mikata-lp**（`hoikushi-mikata-lp/index.html` CSS:194-199行・337-349行, HTML:538-551行, "HOW TO USE"）: 円やアイコンを使わずタイポグラフィのみで表現するミニマル型。4カラム`.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}`のカード`.step{background:#fff;border-radius:22px;box-shadow:var(--shadow);padding:26px}`内に、円形装飾なしの`.step-num{color:var(--pink);font-weight:900;font-size:13px;letter-spacing:.05em}`（「STEP 01」等のテキストラベル）のみ配置。モバイルでは`.step{display:grid;grid-template-columns:52px 1fr}`となり番号(2行分`grid-row:1/span 2`)+タイトル・本文の横並びカードに変形。
- **rapas-lp**: 円内に絵文字アイコン`.step-circle-icon{font-size:28px}`（📩📋✏️🚀📦）＋`STEP 0X`ラベルを組み合わせ、各ステップを直感的に区別（詳細はFLOW-003参照）。
- **elearning-lp**: 円`.cyc-circle`の中身をSVGアイコン（ノート・チェック・グラフ等）にして各ステップを視覚的に区別（詳細はFLOW-001参照）。

**効いていたポイント**: hoikushi-mikata-lpのように円もアイコンも使わずタイポグラフィだけで見せる手法は、情報量が多いページでノイズを減らし軽快に見せたいときに有効。逆に絵文字/SVGアイコンは直感的な理解速度を上げたいtoC向けサービスに向く。

### FLOW-007（新規）: 日付・経過日数付きタイムライン型

**実例**: mirai-ryo-lp（`mirai-ryo-lp/index.html` CSS:376-383行・461-464行, HTML:2133-2156行, 「応募後の流れ」）

**レイアウト**: 横並び5カラムのタイムライン型`.timeline{display:grid;grid-template-columns:repeat(5,1fr)}`。日付ラベル入りの円（ドット）を横一直線の帯でつなぐ。連結線`::before{position:absolute;left:8%;right:8%;top:44px;height:4px;border-radius:999px;background:linear-gradient(90deg,var(--blue),var(--green),var(--orange))}`という3色グラデーション。日付円`.timeDot{width:88px;height:88px;border-radius:50%;background:#fff;border:4px solid var(--blue);box-shadow:var(--shadow-sm)}`で、3番目は`border-color:var(--green)`、4・5番目は`border-color:var(--orange)`と枠色を段階的に変化させ時間経過を表現。円内には「今日」「1日目」「3日目」「4日目」「1週間後」という具体的な経過日数を直接テキストで表示（一般的な番号1/2/3ではなく実際の経過時間）。モバイルは`.timeline{grid-template-columns:1fr;gap:16px}`、連結線は縦向き（`left:43px;top:20px;bottom:20px;width:4px`）に切替、`.timeItem{display:grid;grid-template-columns:88px 1fr}`で横並びカード化。

**効いていたポイント**: 「STEP1」ではなく「今日」「1日目」という実際の時間軸を見せることで、応募後の生活が具体的にイメージでき、不安の払拭に直結する。求人・入寮・入学など「時間経過に対する不安」がある業種で有効。枠線の色を青→緑→オレンジと変化させることで進行の高揚感を演出。

### FLOW-008（新規）: 横スクロール⇔縦タイムライン切替ハイブリッド型

**実例**: business-design-academy-lp（`business-design-academy-lp/index.html` CSS:545-662行, HTML:1286-1323行, `#curriculum`「7STEPロードマップ」）

**レイアウト**: PCでは横スクロール型タイムライン`.roadmap-track{display:flex;min-width:max-content;padding:40px 20px}`（7ステップ）。連結線は`::before`で`top:50%;height:2px;background:linear-gradient(90deg,var(--gold),var(--gold-light))`。ドット`.roadmap-dot{width:16px;height:16px;border-radius:50%;background:var(--gold);border:3px solid var(--bg-dark);box-shadow:0 0 0 3px var(--gold)}`。カード`.roadmap-card{border-radius:16px;padding:20px 16px;width:162px}`はhoverで`translateY(-4px)`。横スクロールバー自体もゴールドにカスタム（`::-webkit-scrollbar-thumb{background:var(--gold)}`）。SPでは`.roadmap-scroll{display:none}`／`.roadmap-vertical{display:flex}`と完全に別マークアップへ切替、縦ドットタイムライン（FLOW-002参照）になる。

**効いていたポイント**: PC/SPで同一データを全く異なるマークアップ（横スクロール vs 縦積み）で出し分ける実装は工数がかかるが、ステップ数が多い（7以上）場合にPCで詰め込みすぎず、かつSPでの縦読み体験も両立できる。高単価スクール系のような情報量の多い商材に適する。

### 参考: AIワークフロー可視化型（利用フローではなくプロダクトデモ）

**実例**: ai-school-lp（`ai-school-lp/index.html` CSS:838-848行, HTML:1139-1157行, `#workflowFlow`）

厳密な「申込みの流れ」ではないが、LIVE DEMOセクション内でAIの処理フロー（質問→AIが考える→アウトプット→改善の4ステップ）を「アイコン丸+ラベル→線→丸」の横並びで可視化する実装がある。`.flow-icon{width:62px;height:62px;border-radius:50%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12)}`、アクティブ時`.flow-node.on .flow-icon{background:var(--grad-solid);box-shadow:0 0 30px rgba(124,124,255,.55);transform:scale(1.08)}`。線`.flow-line{width:64px;height:1px;background:rgba(255,255,255,.12)}`の`::after`をJSでscaleXアニメーションさせ、進行中は「考え中」ドット3つが明滅する。プロダクト自体の仕組みを説明したいAI/SaaS系LPで応用できる。

### 業種別の使い分け

- **矢印/連結線の有無**: 相談系（career-compass-lp）は線なしのシンプルグリッド、施術・作業系（beauty-salon-lp, rapas-lp, dental-clinic-lp）は線でつないで「一連の流れ」を強調。
- **タイムライン系の使いどころ**: 縦タイムライン（finance-lp）は重厚なコンサル・金融プロセス、日付付きタイムライン（mirai-ryo-lp）は入寮・入学など時間経過への不安対策、横スクロール⇔縦切替（business-design-academy-lp）はステップ数が多い高単価商材。
- **最終ステップの色分け**: rapas-lp・mirai-ryo-lpともに「完了」ステップをオレンジに変えるのが共通パターン。
