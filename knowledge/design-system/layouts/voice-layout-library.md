# Voice Layout Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: layouts

## 概要

Voice（お客様の声・テスティモニアル・口コミ）セクションのレイアウトパターンライブラリ。
信頼と共感を最大化するソーシャルプルーフセクションのパターンを収録予定。

## 収録予定パターン

- VOICE-001: 3カラムカード型
- VOICE-002: 横スクロールスライダー型
- VOICE-003: 大引用型（1件フィーチャー）
- VOICE-004: SNS風カード型
- VOICE-005: ビフォーアフター付き声型
- VOICE-006: 動画インタビュー型
- その他追加予定

---

## 実案件からの知見（2026-07-12 追加）

自社制作の実LP12件（ai-school-lp, beauty-salon-lp, business-design-academy-lp, career-compass-lp, dental-clinic-lp, elearning-lp, finance-lp, hoikushi-mikata-lp, lumia-lp, mirai-ryo-lp, rapas-lp, restaurant-lp）を実装コードベースで調査。うち **10件**に「お客様の声」に相当するセクションが実在した（business-design-academy-lp, elearning-lpは統計訴求のみで個人証言型セクションなし）。以下、実装から裏付けが取れたパターンのみ記載する。

### VOICE-001: 3カラムカード型（最頻出パターン）

**実例**: finance-lp, restaurant-lp, rapas-lp, career-compass-lp, beauty-salon-lp, lumia-lp（6/10件と圧倒的最多）

**共通レイアウト**: `display:grid;grid-template-columns:repeat(3,1fr)` の3カラムグリッド。gap 20〜24px。カード内は「アバター＋名前・属性」→「引用文」→（あれば）星評価/タグ、の縦積み構成。

業種によってアバターの表現方法とカード装飾がまったく異なる。実例を並べると設計の幅がわかる。

| LP | ファイル | アバター表現 | 星評価 | カード特徴 |
|---|---|---|---|---|
| finance-lp | `finance-lp/index.html`（CSS:135-141行, HTML:358-383行） | イラストSVG/画像、`width:104px;height:104px;margin:0 auto 18px`で中央配置 | なし | `.voice-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:30px 26px;text-align:center}`。セクション背景は`linear-gradient(180deg,#EAFBF1 0%,#FFF8EF 100%)`。顔写真を避けイラストで匿名性・安心感を演出（金融相談という業種特性） |
| restaurant-lp | `restaurant-lp/index.html`（CSS:156-168行, HTML:332-348行） | なし（テキストのみ、匿名レビュー） | `.stars{color:#d8a76a}`ゴールド系★★★★★ | `.voice-card{background:#0f0f0f;padding:32px;border-radius:20px;border:1px solid rgba(255,255,255,.08)}`。セクション背景`.voice{background:#181818}`のダーク基調。最もミニマルな実装 |
| rapas-lp | `rapas-lp/index.html`（CSS:551-603行, HTML:1193-1238行） | 絵文字アバター👩👨🧓を`width:48px;height:48px;border-radius:50%`の色付き円に配置（例`background:#EBF5FF`） | `.voice-stars{color:#F59E0B;font-size:13px}` | `.voice-card{background:var(--card);border-radius:var(--r-lg);padding:32px 28px;box-shadow:var(--shadow-card);border:1.5px solid var(--border);transition:transform .22s,box-shadow .22s}`、hoverで`translateY(-4px)`。左上に巨大引用符`.voice-quote{font-size:48px;color:var(--primary-light);position:absolute;top:20px;left:24px;font-family:Georgia,serif}`。「主婦」「副業」「シニア」等の多様な属性を絵文字で直感的に見せる |
| career-compass-lp | `career-compass-lp/index.html`（CSS:190-198行, HTML:629-669行） | 頭文字アバター`.voice-av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--teal))}` | なし（相談サービスのため評価制度なし） | `.voice-card{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:36px;box-shadow:var(--shadow-sm)}`。`.voice-quote-mark{font-size:44px;color:#dbeafe;font-weight:900;font-family:Georgia,serif}`で薄水色の巨大引用符。属性表記が二段（「20代 会社員」＋小さく「営業職/副業未経験」）でペルソナ解像度が高い |
| beauty-salon-lp | `beauty-salon-lp/index.html`（CSS:978-1056行, HTML:2393-2469行〜、5件） | Lucideアイコン`user-circle`を丸背景`.voice-avatar{width:36px;height:36px;border-radius:50%;background:var(--bg-beige)}`（他LPより小さめ） | 総合評価`.voice-score{font-family:'Cormorant Garamond',serif;font-size:42px}`+`.voice-stars{color:#f59e0b;font-size:24px}`＋個別カード`.voice-stars-sm{font-size:14px}`の二重構成 | `.voice-card{background:var(--white);border:1px solid var(--border);border-radius:var(--radius);padding:24px;box-shadow:var(--shadow-sm)}`。`.voice-story`で「来店前の悩み→決め手→施術後の変化」を3段階のミニストーリー化（`background:var(--bg-beige)`のボックス内）し、「勧誘なし」不安を先回りして払拭 |
| lumia-lp | `lumia-lp/index.html`（HTML:499-574行）、CSS: `lumia-lp/style.css`（1091-1205行） | 実写真`.voice-card__avatar{width:52px;height:52px;border-radius:50%;object-fit:cover;border:2px solid var(--clr-border)}` | Google口コミ風総合評価バッジ（スコア「4.9」`font-size:3rem`セリフ体＋星5つ`.star--full{color:#E8B84B}`＋「口コミ127件」）＋個別`.voice-card__stars{color:#E8B84B}` | `.voice-card{background:var(--clr-white);border-radius:var(--radius-lg);padding:var(--sp-8) var(--sp-6);border:1px solid var(--clr-border)}`、hoverで`translateY(-4px);box-shadow:var(--shadow-md)`。カード下部に施術メニュータグ（`border-top:1px solid`で区切り） |

**効いていたポイント**: 3カラムカード型は業種を問わず最も再現性が高いが、「顔写真をどう扱うか（実写/イラスト/絵文字/頭文字/アイコン）」が業種の心理的ハードルを決める最重要変数。金融・相談系（finance-lp, career-compass-lp）は匿名性重視、美容系（lumia-lp）は実写真で信頼性最大化、多様な働き方訴求（rapas-lp）は絵文字で属性の多様さを瞬時に伝える、という使い分けが実装から読み取れる。

### VOICE-004: SNS風カード型

**実例**: mirai-ryo-lp（`mirai-ryo-lp/index.html` CSS:358-370行, HTML:1985-2035行、「SNS Voice」セクション）

**レイアウト**: 3カラム`.voiceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}`。カード`.voiceCard{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:20px;box-shadow:var(--shadow-sm);transition:.25s}`、hoverで`translateY(-4px)`。アバターは丸型`.voiceAvatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--green))}`に頭文字。星`.voiceStars{color:var(--orange);letter-spacing:2px}`。名前表記が「Kさん」「Aさん」のようなSNS投稿風の匿名表記。

**効いていたポイント**: 実名でも顔写真でもなく「Kさん」表記＋頭文字アバターにすることで、SNSの生の声を集めたような信頼感（第三者性）を演出しつつ個人情報リスクを回避している。

### VOICE-005: ビフォーアフター付き声型

**実例**: mirai-ryo-lp（`mirai-ryo-lp/index.html` CSS:233-239行・369行, HTML:1985-2035行付近、`.branchVoice`）

**レイアウト**: 単一の吹き出し型カード`.branchVoice{background:linear-gradient(135deg,#fff,var(--soft));border:1px solid color-mix(in srgb, var(--accent) 16%, #fff);border-radius:24px;padding:24px;display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:start;box-shadow:var(--shadow-sm)}`。アバターは角丸正方形`.branchVoiceAvatar{width:54px;height:54px;border-radius:18px;background:linear-gradient(135deg,var(--accent),var(--accent2))}`に頭文字。カード内に`.voiceBeforeAfterMini{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0}`の2分割ミニカードで「応募前」→「応募後3ヶ月」を対比表示。実コード（1985-2035行）では貯金額の変化（例: 「貯金3万円。ネットカフェ生活」→「貯金42万円。個室寮で生活が安定」）をタグ`.vbaTag{background:var(--softOrange);color:var(--orangeDark);border-radius:7px;padding:3px 9px;font-size:11px;font-weight:900}`（応募後は`style="background:var(--softGreen);color:var(--greenDark)"`で赤系→緑系に変化）で可視化。モバイルは`.branchVoice{grid-template-columns:1fr}`, `.voiceBeforeAfterMini{grid-template-columns:1fr}`で縦積み化。

**効いていたポイント**: 単なる感想文ではなく「Before数値→After数値」を色（オレンジ=課題→グリーン=解決）で対比させることで、成果の変化がテキストを読まなくても一瞬で伝わる。求人・スクール・コンサルなど「変化」を売る業種で特に有効。

### VOICE-007（新規）: ドキュメンタリー風交互配置型（大判写真＋ストーリー）

**実例**: ai-school-lp（`ai-school-lp/index.html` CSS:583-634行, HTML:1243-1293行）

**レイアウト**: カード型ではなく大判写真＋長文テキストの交互配置型。`.voice-doc-item{display:grid;grid-template-columns:.8fr 1.2fr;gap:60px;align-items:center;margin-bottom:130px}`。奇数/偶数で左右反転（`.rev`クラスで`grid-template-columns:1.2fr .8fr`、写真に`order:2`）。写真は`.voice-photo{border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--line);box-shadow:0 40px 100px rgba(0,0,0,.5)}`、`img{height:460px;filter:saturate(1.05)}`という大判高さ460pxの人物写真。属性は`.voice-tag{padding:7px 16px;border-radius:999px;background:rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.3)}`のピルバッジ。成果数値は`.voice-result`でグラスモーフィズム風カード（`backdrop-filter:blur(12px);border-radius:16px`）に格納し、数値部分（例「+40%」）はグラデーションテキスト（`background-clip:text;color:transparent`）。

**効いていたポイント**: 3件のみを大きく縦に並べる「量より質」構成。カード羅列にせず1人ずつ物語として読ませることで、高単価スクール商材の説得力を担保している。定量的な成果訴求（グラデーション数値）と組み合わせるのが鍵。

### VOICE-008（新規）: 専門家プロフィール併設リスト型

**実例**: dental-clinic-lp（`dental-clinic-lp/index.html` CSS:326-360行, HTML:717-749行）

**レイアウト**: `.dv-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}`（900px以下で1カラム）で左に医師紹介カード、右に声カードを配置する「Doctor & Voice split」構成。声カード自体は3カラムグリッドではなく縦積みリスト`.voice-item{display:flex;gap:14px;padding-bottom:22px;margin-bottom:22px;border-bottom:1px solid var(--border)}`（最後の要素のみ`border-bottom:none`）。カード外枠は`.dv-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:36px}`。顔写真は丸型52px`.voice-avatar-photo{width:52px;height:52px;border-radius:50%;overflow:hidden}`（実写真`voice-avatar-1.jpg`等使用）、写真が無い声は頭文字を`.voice-avatar-letter`のグラデーション円で代替。星評価は`.voice-stars{color:#f59e0b;font-size:14px;letter-spacing:2px}`で4.5評価（★★★★☆）も表現可能なテキストベース実装。属性タグに人型SVGアイコン付き。

**効いていたポイント**: 医師の権威付け（隣のプロフィールカード）と患者の生の声を同一視野・同一グリッド行に収めることで、専門性と信頼性を同時に補強。`aggregateRating`構造化データ（4.9、レビュー276件）と連動させ検索結果にも評価を表示させる設計。

### VOICE-009（新規）: 項目別カテゴリ評価型

**実例**: hoikushi-mikata-lp（`hoikushi-mikata-lp/index.html` CSS:164-176行, HTML:427-470行）

**レイアウト**: 個人の証言ではなく「人間関係」「残業」「給与」「園長先生」「休みやすさ」「保育方針」など評価項目別にレビューを可視化する特殊構成。①3カラムのアイコンカード`.review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}`（6項目、絵文字アイコン♡⏱¥☘☕📘）。②縦積みの吹き出しリスト`.floating-reviews{display:grid;gap:14px}`、吹き出し`.review-bubble{background:#fff;border:1px solid var(--line);border-radius:22px;padding:20px;box-shadow:var(--shadow)}`。星`.stars{color:var(--yellow);letter-spacing:2px;font-size:17px}`は項目ごとに独立評価（例: 人間関係★★★★★、残業★★★★☆）。背景はピンク系グラデーション`radial-gradient(circle at 12% 12%, rgba(255,214,226,.6), transparent 20%), linear-gradient(180deg,#fff,var(--pink-soft))`。

**効いていたポイント**: 個人の顔写真を出さず「カテゴリ別の集合知」として見せることで、口コミプラットフォームとしての客観性・網羅性を演出（保育士向け求人口コミサービスという業態特性を反映した設計）。

### 業種別の使い分け・共通パーツの知見

- **アバター表現の使い分け**: 実写真（lumia-lp美容室, dental-clinic-lp歯科）＝信頼性最優先の業種。イラスト/絵文字/頭文字（finance-lp金融, career-compass-lpキャリア相談, rapas-lp副業, mirai-ryo-lp求人）＝匿名性配慮または属性の多様さを直感的に見せたい業種。
- **星評価の色**: ゴールド/オレンジ系（`#f59e0b`, `#E8B84B`, `#d8a76a`）がほぼ全LPで共通。飲食・美容など高級感を出す業種は特に明示的にゴールドを使う。
- **巨大引用符の装飾**（rapas-lp `.voice-quote`, career-compass-lp `.voice-quote-mark`）: Georgiaセリフ体で48px前後、カード左上または上部に配置し薄い色にすることで「声」であることを視覚的に示す軽量な手法。
- **ダークテーマ**: restaurant-lp（`#0f0f0f`/`#181818`）とai-school-lp（ダークグラス）は高級・先端イメージの業種でダーク背景の声セクションを採用。他業種（美容・金融・医療）は白背景基調。
- **ホバーアニメーション**: `translateY(-4px)`＋`box-shadow`強調がrapas-lp, lumia-lp, mirai-ryo-lp（SNS Voice）で共通して使われる定番の浮き上がり演出。
