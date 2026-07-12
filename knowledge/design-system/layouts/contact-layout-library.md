# Contact Layout Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: layouts

## 概要

Contact（お問い合わせ・申込フォーム）セクションのレイアウトパターンライブラリ。
フォームのUX・入力ハードル低減・CV率最大化のパターンを収録予定。

## 収録予定パターン

- CONT-001: シングルカラムフォーム型
- CONT-002: 2カラム（左情報/右フォーム）型
- CONT-003: ステップフォーム型（多段階）
- CONT-004: LINE誘導型
- CONT-005: 電話+フォーム並列型
- CONT-006: チャット風フォーム型
- その他追加予定

## 実案件からの知見（2026-07-12 追加）

12件の実制作LPを精査した結果、**実際に`<input>/<select>/<textarea>`を持つ「本物の申込フォーム」を実装しているLPは12件中2件（career-compass-lp, mirai-ryo-lp）のみ**であることが判明した。残る10件はLINE誘導・電話/WEB予約リンク・mailtoリンク・ダミーリンク（`href="#"`）のいずれかで着地させる設計になっている。この傾向自体が重要な知見のため、以下に実装ありのパターンと誘導型パターンを分けて記録する。

### CONT-002: 2カラム（左情報/右フォーム）型

- **career-compass-lp/index.html**（`.final-inner`, L787-814／CSS L229-244）: `display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center`。左`.final-copy`（見出し・説明文）、右`.contact-form`（白背景カード`border-radius:var(--r-lg);padding:40px;box-shadow:0 24px 64px rgba(0,0,0,.2)`という強い浮遊感のシャドウ）。背景は`linear-gradient(145deg,var(--blue-dark),var(--blue))`のダークブルーグラデーションに、円形装飾2つ（`border-radius:50%`のティール円とrgba(255,255,255,.05)の白円）。**入力項目**: 「お名前」「メールアドレス」「相談したい内容」の3項目のみ。各ラベルに`<span class="req">必須</span>`（青文字）のバリデーション表現。入力欄`.form-input{padding:13px 16px;border:1.5px solid var(--line);border-radius:12px;transition:.2s ease}`、フォーカス時`border-color:var(--blue);box-shadow:0 0 0 3px rgba(37,99,235,.08)`の青リング演出。フォーム末尾に`.form-note{font-size:12px;color:var(--sub)}`で「個人情報は日程調整のみに使用／勧誘は一切ありません」の安心訴求文（L810）。送信ボタンは`<button type="button">`（実送信処理JSはなし、フロントのみ）。12LP中唯一、フォームカラムを持つ実装。

### CONT-003: ステップフォーム型（多段階）

- **mirai-ryo-lp/index.html**（`#form`, L2159-2214／CSS L386, 472）: `.formLayout{display:grid;grid-template-columns:1fr 1fr;gap:48px}`（モバイルは1fr）の2カラム。**左**: `.lineCard{background:linear-gradient(135deg,#06c755,#00b548);border-radius:var(--r);padding:28px;color:#fff}`にLINE相談の訴求文＋チェックリスト＋ボタン。**右**: `form.formCard{background:#fff;border:1px solid var(--line);border-radius:20px;padding:32px;box-shadow:var(--shadow-sm)}`。上部に`.formTop{background:linear-gradient(135deg,var(--softBlue),#dbeafe);border-radius:14px}`の3項目訴求バー（30秒／完全無料／条件提案）。以下4ステップ構成、各ステップ頭に丸番号`.formStepNum{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--blue),#60a5fa)}`：①お名前(text)/年齢(select)/電話(tel) ②希望タイプ(select)/希望勤務地(select) ③いつから働けるか(select) ④相談内容(textarea)。入力欄`.field input,select,textarea{border-radius:12px;padding:13px 14px}`、フォーカス時`box-shadow:0 0 0 3px rgba(37,99,235,.1)`。送信ボタン下に「24時間以内に連絡」の注記。**LINEカードとステップフォームを横並びで併記し、ユーザーに入力ハードルの低い方を選ばせる**設計が特徴。12LP中最も作り込まれたフォーム実装。

### CONT-004: LINE誘導型

- **beauty-salon-lp/index.html**: `<form>`/`<input>`は無し。予約導線は`<a href="#line-reserve" class="btn-line">`のLINE友達追加リンクのみ。CTAセクション（final-cta）にLINE予約メリット3カード（24時間受付／相談だけでもOK／勧誘なし）を併記し、価格box（¥5,980）と組み合わせて心理的ハードルを下げる。スクロール追従の`.float-line-cta`（LINEグリーン`rgba(6,199,85,.44)`のシャドウ、`floatLineBob`アニメーションで上下7pxバウンド）も常時表示。
- **lumia-lp/index.html**: `section.access#access`（L768-822）が実質的な問い合わせ導線。2カラム（左`.access__info`に`<dl>`でサロン名/住所/最寄駅/営業時間/定休日/電話、右`.access__map`にGoogle Maps embed iframe、`height:400`の**実際の**地図埋め込み）。フォーム項目は一切なく、予約は外部LINE公式アカウントリンク（`https://lin.ee/...`）とtel:リンクのみ。中間CTA`.cta-mid`とFinal CTA`.cta-final`双方にLINEボタン＋安心材料チェックリスト（「強引な勧誘は一切しません」等3項目）を配置。
- **hoikushi-mikata-lp/index.html**（`.final-cta#cta`, L602-624）: 「無料で口コミを見る」ボタンが`thanks.html`へ直接遷移するリンクのみで、実質サンクスページ即到達型（フォーム自体を経由しない最短導線）。

### CONT-005: 電話+予約ボタン並列型

- **dental-clinic-lp/index.html**（`#reserve`, L813-842）: フォームは存在しないが、「24時間WEB予約はこちら」ボタンと`tel:0312345678`リンクの2択を並列配置。加えてモバイル専用の`.sticky-cta`（画面下部固定、電話／WEB予約の2ボタン、`box-shadow:0 -6px 24px rgba(0,0,0,.1)`、768px以下のみ表示）で、通話とWEB予約の両方を常時到達可能にしている。

### CONT-007: mailtoリンク完結型 ※新規

- **business-design-academy-lp/index.html**（L1563, 1574, 1581）: `<form>`/`<input>`要素は無く、CTAは全て`mailto:i.love.yoziro0705@gmail.com?subject=無料個別相談のご予約`形式のリンクで完結。専用の「入力フォーム」セクション自体が存在せず、クリックでユーザーのメーラーが起動し、件名が自動セットされる設計。フォーム開発コストをかけず、コンサル/講座系の少人数運用LPで有効な最小構成。

### 特記事項: プレースホルダー実装（本番導入時は要差し替え）

- **ai-school-lp / finance-lp / rapas-lp**: CTAボタンのリンク先が`href="#"`のダミーで、実際のフォームや予約サイトへの接続は未実装。ポートフォリオ制作段階でこの状態のまま置かれているケースがあるため、実案件納品時は必ず実リンク（Googleフォーム・予約システムのURL等）に差し替える必要がある。
- **restaurant-lp/index.html**（`.map`, CSS L169-183）: `.map{height:420px;background:#222;border-radius:24px;display:flex;align-items:center;justify-content:center}`という、実際のGoogle Maps埋め込みではなく「Google Mapをここに埋め込み」というプレースホルダーテキストのみのダミーボックス。lumia-lpは同様の位置に実際の地図iframeを埋め込んでおり、対比として参考になる（地図を実装する場合はiframe埋め込みが望ましい）。

### 横断的な傾向まとめ

- **フォーム実装率**: 12LP中2LP（career-compass-lp: 3項目のシンプルフォーム、mirai-ryo-lp: LINE併記4ステップフォーム）のみが実入力フォームを持つ。それ以外は「フォームを作らない」判断が意図的になされており、LINE誘導・電話・mailtoの方がCVハードルが低いと判断されるケース（美容/整体/求人などtoC寄りの業種）で多い。
- **安心訴求の型**: フォーム直前・直後に「勧誘なし」「個人情報は◯◯のみに使用」等の一文を添えるLPが複数見られた（career-compass-lp, beauty-salon-lp, mirai-ryo-lp）。CVハードルを下げる定型テクニックとして再利用価値が高い。
