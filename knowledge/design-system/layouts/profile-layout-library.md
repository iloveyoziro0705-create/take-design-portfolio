# Profile Layout Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: layouts

## 概要

Profile（プロフィール・代表紹介・チーム）セクションのレイアウトパターンライブラリ。
人物の信頼性・専門性・親近感を伝えるセクションのパターンを収録予定。

## 収録予定パターン

- PROF-001: 左写真/右プロフィール型
- PROF-002: 大写真+オーバーレイテキスト型
- PROF-003: チームグリッド型
- PROF-004: 経歴タイムライン型
- PROF-005: 実績バッジ付きプロフィール型
- PROF-006: インタビュー形式型
- その他追加予定

---

## 実案件からの知見（2026-07-12 追加）

自社制作の実LP12件を実装コードベースで調査。専用の「プロフィール・代表紹介・講師紹介・スタッフ紹介」セクションが実在したのは **dental-clinic-lp, career-compass-lp, lumia-lpの3件のみ**（他9件は「スタッフ」「講師」等の単語が本文中に散発的に出現するのみで専用セクションはなし）。3件はいずれも「1名フィーチャー・左写真/右プロフィールの2カラム型」という共通レイアウトを取りながら、資格・経歴の見せ方が業種ごとに明確に分岐していた。チームグリッド型・経歴タイムライン型・インタビュー形式型は12LP中どこにも実例が見つからなかった。

### PROF-001: 左写真/右プロフィール型（実例3件）

| LP | ファイル | 写真の形状 | 資格・経歴の見せ方 | カード/レイアウトCSS |
|---|---|---|---|---|
| dental-clinic-lp | `dental-clinic-lp/index.html`（CSS:327-351行, HTML:694-752行） | `.doctor-photo{border-radius:14px;overflow:hidden;aspect-ratio:3/4}`＋`object-fit:cover`（角丸長方形、丸型ではない） | **チェックリスト形式**: `.doctor-cred li`の箇条書き、各行にstroke幅3のチェックSVG＋テキスト（例「日本歯科大学 卒業」「インビザライン認定ドクター」「厚生労働省認定 臨床研修指導医」）を5項目 | `.dv-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}`（900px以下で1カラム）で右隣に「患者様の声」カードが並ぶ2枚看板構成。`.doctor-inner{display:grid;grid-template-columns:1fr 1.1fr;gap:22px}`。外枠`.dv-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg)（22px）;padding:36px}`（box-shadowなし）。名前`.doctor-name{font-size:19px;font-weight:700}`＋ローマ字`.romaji{font-size:11px;color:var(--primary)}`。引用ブロック`.doctor-quote{font-size:12.5px;line-height:1.9;background:var(--surface-blue)（#eff6ff）;border-radius:10px;padding:14px 16px}` |
| career-compass-lp | `career-compass-lp/index.html`（CSS:176-188行・275-288行, HTML:582-626行） | 実写真ではなく人物イラストSVG（目・眉・ノートPCを描いたシンプルな線画、青〜緑グラデーション） | **ストーリー＋タグ形式**: Q&A形式の経歴3段落（「なぜ副業に取り組んだのか」「どんな失敗や迷いがあったのか」「相談で大切にしていること」）＋末尾にキーワードタグ5個（会社員／副業経験／Web制作／SNS運用／動画制作）。資格バッジではなく共感ストーリーで訴求 | `.profile-wrap{display:grid;grid-template-columns:.85fr 1.15fr;background:#fff;border:1px solid var(--line);border-radius:var(--r-lg);box-shadow:var(--shadow);overflow:hidden}`、900px以下で`grid-template-columns:1fr`。写真エリア`.profile-photo-area{background:linear-gradient(145deg,var(--soft-blue),var(--soft-teal));padding:48px 36px;min-height:480px}`（モバイルは`padding:32px 24px;min-height:240px`）。本文`.profile-body{padding:52px 48px}`。ロールバッジ`.profile-role{background:var(--soft-blue);border:1px solid #dbeafe;border-radius:999px;padding:6px 16px;font-weight:900}`。タグ`.profile-tags span{background:var(--bg);border:1px solid var(--line);border-radius:999px;padding:7px 14px;font-size:13px}` |
| lumia-lp | `lumia-lp/index.html`（HTML:452-496行）, CSS: `lumia-lp/style.css`（980-1079行） | `.profile__image-wrap{aspect-ratio:6/7;overflow:hidden;border-radius:var(--radius-lg)（12px）}`＋`object-fit:cover;object-position:center top`（角丸長方形） | **タグバッジ形式**: `.profile__creds`内に`.cred-tag{padding:4px 12px;background:var(--clr-beige);border:1px solid var(--clr-border);border-radius:4px}`（角丸4pxの小さめタグ）を3つ横並び（「美容師免許取得」「ヘアケアマイスター認定」「髪質改善スペシャリスト」）。本文は2段落の経歴文＋末尾に本人の言葉としての引用ブロック | `.profile__card{display:grid;grid-template-columns:2fr 3fr;gap:clamp(3rem,6vw,6rem)}`、768px未満で1カラム。名前`.profile__name{font-family:var(--font-serif);font-size:clamp(1.75rem,3vw,2.5rem)}`＋英語名併記。引用ブロック`.profile__quote{margin-top:2rem;padding:1.5rem 2rem;background:var(--clr-beige);border-left:3px solid var(--clr-gold);border-radius:0 8px 8px 0}`（左ボーダー3pxのゴールドアクセント） |

**効いていたポイント**: 3件とも「左写真/右プロフィール」の骨格は共通だが、資格・経歴の見せ方が業種の信頼性の作り方をそのまま反映している。医療系（dental-clinic-lp）は「チェックリストで実績を積み上げる」権威型、美容系（lumia-lp）は「タグバッジ＋引用文」で技術力と人柄を両立、副業相談系（career-compass-lp）は「失敗談を含む共感ストーリー」で対等な親近感を演出。写真も dental-clinic-lp/lumia-lp は実写真の角丸長方形（丸型ではない）、career-compass-lp は匿名性を保つイラストという明確な使い分けがある。

### 業種別の使い分け・共通パーツの知見

- **写真の形状**: 3件とも顔写真を丸型トリミングにせず、`border-radius`が12〜22px程度の角丸長方形または`aspect-ratio`指定にしている。丸型アバターは声セクション（VOICE系）で使われる一方、プロフィールセクションでは「人物の全体像を見せる」角丸長方形が実例上の標準。
- **資格・経歴の見せ方の使い分け**: 医療・専門資格が重要な業種はチェックリスト形式（dental-clinic-lp）、技術系サービス業はタグバッジ形式（lumia-lp）、共感重視の相談系サービスはストーリー文章＋キーワードタグ形式（career-compass-lp）。
- **併設パターン**: dental-clinic-lpはプロフィールカードの隣に「お客様の声」カードを並べるレイアウト（`.dv-grid`）を採用し、権威付け（プロフィール）と信頼の声（Voice）を同一視野に収めて相乗効果を狙っている。詳細はvoice-layout-library.mdのVOICE-008を参照。
- **未実例のパターン**: チームグリッド型（複数名を並列表示）、経歴タイムライン型、大写真+オーバーレイテキスト型、インタビュー形式型は12LP中どこにも実装例がなかった。今後スタッフ多数の業種（美容室のスタイリスト複数名、学習塾の講師陣など）の案件があれば優先的に実例収集したい。
