# FAQ Layout Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: layouts

## 概要

FAQ（よくある質問）セクションのレイアウトパターンライブラリ。
アコーディオン・2カラム・カテゴリ分類など、疑問解消セクションのパターンを収録予定。

## 収録予定パターン

- FAQ-001: シングルカラムアコーディオン型
- FAQ-002: 2カラムアコーディオン型
- FAQ-003: カテゴリタブ+アコーディオン型
- FAQ-004: 番号付きQA型
- FAQ-005: チャットUI型
- その他追加予定

## 実案件からの知見（2026-07-12 追加）

12件の実制作LPを精査した結果、**すべての実装がシングルカラム構成**であり、FAQ-002（2カラム）・FAQ-003（カテゴリタブ）・FAQ-005（チャットUI）に該当する実例は見つからなかった。一方でFAQ-001（シングルカラムアコーディオン型）は開閉の実装方式に4パターンのバリエーションがあることが確認できた。以下、実装方式ごとに実例を記録する。

### FAQ-001: シングルカラムアコーディオン型（実装バリエーション）

**(a) ネイティブ `<details><summary>` 型**（JS不要、最も軽量）
- **career-compass-lp/index.html**（L754-784／CSS L216-226）: `.faq-wrap{max-width:860px;display:grid;gap:12px}`、`details{background:#fff;border:1px solid var(--line);border-radius:18px;padding:22px 28px;box-shadow:var(--shadow-sm)}`、開いた状態は`details[open]{border-color:#dbeafe}`で枠色を変化。`summary::-webkit-details-marker{display:none}`でネイティブ三角を消し、`.sum-ic{width:32px;height:32px;border-radius:50%;background:var(--soft-blue)}`の丸アイコンを自前実装（`::after{content:"+"}`→開時`content:"−"`）。最初の1件のみ`open`属性でデフォルト展開。5問。
- **hoikushi-mikata-lp/index.html**（`#faq`, L570-599／CSS L204-215）: `details{background:#fff;border:1px solid var(--line);border-radius:18px;padding:18px 22px;box-shadow:0 6px 20px rgba(248,95,145,.07)}`。`summary::after{content:"+"}`→`details[open] summary::after{transform:rotate(45deg)}`で「+」を45度回転させ「×」に見せる（`transition:transform .2s`）。回答部`details p{background:var(--pink-soft);padding:14px 16px;border-radius:12px}`のピンク背景ボックスで視覚的に区切る。5問、1問目のみデフォルト展開。
- **lumia-lp/index.html**（`#faq`, L674-762／CSS L1367-1494）: カード化せず`.faq__list{border-top:1px solid var(--clr-border)}`＋各項目`border-bottom`のみの縦積みリスト（区切り線スタイル）。QラベルはCormorant Garamond serifでゴールド色。開閉アイコンは`::before/::after`の疑似要素2本線が`details[open]`で90deg回転しながらopacity 0になり「−」に見せる（`transition:transform .25s`）。6問。FAQセクション末尾に`.faq__cta{background:var(--clr-beige);border-radius:12px}`でLINE質問ボタンを再掲する「FAQ+CTA統合」構成（下記FAQ-009参照）。
- **mirai-ryo-lp/index.html**（`#faq`, L2217-2249／CSS L413-420）: `details{background:#fff;border:1px solid var(--line);border-radius:16px;padding:18px 22px;box-shadow:var(--shadow-sm)}`、`details+details{margin-top:11px}`。`.sum-ic::after{content:'+'}`→`details[open] .sum-ic::after{content:'−'}`という文字置換方式（JSなし）。回答部`details p{background:var(--bg);border-radius:12px;padding:15px}`。16問と大ボリューム、末尾に`.midCta`でCTA再掲。

**(b) JSクラストグル型（`onclick`/`classList`による開閉、単一開閉制御）**
- **beauty-salon-lp/index.html**（`onclick="toggleFaq(this)"`, L2573-2639／JS L2790-2796）: `.faq-item{background:#fff;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden}`。質問行に丸バッジ`.faq-q-badge`（28px、"Q"文字）と`+`アイコン`.faq-toggle{transition:transform .3s}`（`.faq-item.open`で`rotate(45deg)`）。回答は`.faq-a{display:none}`→`.open .faq-a{display:block}`。JS側で他の開いている項目を自動的に閉じる単一開閉制御。7問。
- **rapas-lp/index.html**（`#faq`, L1243-1356／CSS L605-631／JS L1449-1456）: `.faq-item{background:var(--card);border-radius:var(--r);box-shadow:var(--shadow-card);overflow:hidden}`をgap 14pxで縦積み。クリックでJSが`.faq-item`に`open`クラスをトグル（1つだけ開く排他制御）。`.faq-arrow`は`▼`テキストを`transition:transform .25s`で180度回転。回答表示はアニメーションなしの即時`display`切替。9問、末尾に`.inline-cta`でCTA再掲。

**(c) JS高さアニメーション型（`max-height`/`height`の実測トランジション、より滑らかな開閉演出）**
- **business-design-academy-lp/index.html**（L1476-1552／CSS L810-867／JS L1609-1629）: `.faq-body{height:0;overflow:hidden;transition:height 0.35s ease}`。クリック時、開いている項目は全て`height:'0'`に戻し、対象項目は`body.style.height = inner.offsetHeight + 'px'`で実測値をセットして開く。矢印`.faq-arrow{border:1.5px solid rgba(212,175,55,.4);border-radius:50%}`が`transform:rotate(180deg)`＋背景goldに変化。リサイズ時に開いている項目の高さを再計算する処理あり（L1670-1674）。6問。
- **elearning-lp/index.html**（`#faq`, L1008-1023／CSS L437-461）: `div.fq`+`role="button"`+`aria-expanded`属性でアクセシビリティ対応。`.fa-wrap{max-height:0;overflow:hidden;transition:max-height .4s ease}`→`.fi.open .fa-wrap{max-height:300px}`。script.jsで単一開閉制御。Q番号バッジ`.fq-i{34x34px;border-radius:9px;background:rgba(0,91,172,.09)}`。

### FAQ-008: 常時展開・非アコーディオン型（アコーディオンなしの単純羅列）※新規

- **ai-school-lp/index.html**（L1358-1372／CSS L716-722）: `.faq-list{max-width:860px;display:grid;gap:14px}`、各項目は`.glass`スタイル（`background:var(--glass);border:1px solid var(--line);border-radius:18px;padding:26px 30px;backdrop-filter:blur(10px)}`のガラスモーフィズムカード。質問文`.faq-q{font-weight:800}`のみ太字で、開閉なしにQ/Aとも常時表示。4件。
- **finance-lp/index.html**（L440-453／CSS L169-174）: `.faq-list{max-width:760px;display:grid;gap:12px}`、`.faq-item{background:var(--bg);border:1px solid var(--line);border-radius:16px;padding:24px 28px}`。丸バッジ`.q-badge`（24px、background:var(--primary)、"Q"）を質問頭に配置し、回答`.faq-a{padding-left:36px}`でバッジ位置に揃える。4問と最小構成。
- **restaurant-lp/index.html**（L366-380／CSS L201-209）: `.faq-item{border-bottom:1px solid rgba(255,255,255,.12);padding:24px 0}`という最もシンプルな実装。開閉アイコンやJS処理は一切なし、3問のみ。
- 使い分けの傾向: 問数が少なく（3〜4問）情報の重要度が高くない場合はアコーディオン化のコストを省き、常時表示にする判断が複数LPで見られた。

### FAQ-009: FAQ+CTA統合型（FAQ末尾にCTAを再掲）※新規

- **lumia-lp/index.html**（L756-759）: FAQセクション末尾に`.faq__cta{background:var(--clr-beige);border-radius:var(--radius-lg)}`でLINE質問ボタンを配置。
- **mirai-ryo-lp/index.html**、**rapas-lp/index.html**: いずれもFAQ末尾に`.midCta`／`.inline-cta`を再掲し、「疑問が解消したら即行動」の導線を作っている。
- 効いていたポイント: FAQで不安を解消した直後の心理的モメンタムを逃さず、そのままCTAに接続する設計が3LPで共通していた。

### 特記事項: FAQセクションが存在しないケース

- **dental-clinic-lp/index.html**: FAQセクション自体が実装されておらず、フッター内に`<li><a href="#">よくある質問</a></li>`（L871）というリンクテキストのみが存在する（実体のコンテンツなし）。予約系LPでは価格・保険適用等の疑問より、CTAへの直線的な導線を優先した設計と考えられる。

### 未確認パターン（参考情報）

FAQ-002（2カラムアコーディオン型）・FAQ-003（カテゴリタブ+アコーディオン型）・FAQ-005（チャットUI型）は、今回精査した12LPのいずれにも実例が見つからなかった。FAQ数が多い（10問以上）LP（mirai-ryo-lp=16問）でもカテゴリ分けはせず単一リストで通しており、実案件では「シンプルな単一カラム」が一貫して選ばれている。
