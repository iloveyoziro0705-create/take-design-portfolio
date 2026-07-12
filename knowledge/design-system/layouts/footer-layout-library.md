# Footer Layout Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: layouts

## 概要

Footer（フッター）セクションのレイアウトパターンライブラリ。
LP・HP・WPで使えるフッター構成パターン。最終CVへの誘導・ブランド補強・法的情報整理を収録予定。

## 収録予定パターン

- FOOT-001: ミニマルLP型（コピーライト+リンク）
- FOOT-002: 4カラムサイトマップ型
- FOOT-003: CTA再掲+フッター型
- FOOT-004: SNSリンク強調型
- FOOT-005: 地域情報+地図型（店舗）
- FOOT-006: コーポレート多言語型
- その他追加予定

## 実案件からの知見（2026-07-12 追加）

12件の実制作LPを精査した結果、フッター構成は情報量によって明確に「ミニマル型」と「サイトマップ型」に二分されることが確認できた。またSNSリンク（FOOT-004）と多言語対応（FOOT-006）は12LP中1件も実例が見つからず、地方の店舗系・toC系LPでは実装されない傾向が明らかになった。

### FOOT-001: ミニマルLP型（コピーライト+リンク）

12LP中もっとも頻出する型。以下4LPはコピーライト1行のみの最小構成だった。

- **ai-school-lp/index.html**（L1388-1391／CSS L738-744）: `footer{border-top:1px solid var(--line-soft);padding:40px 0;text-align:center;font-size:13px;color:var(--sub-2)}`。中身は`© 2026 AIvoyance. All Rights Reserved.`の1行のみ。footer直後に`.fixed-cta`（固定CTA）を再掲。
- **finance-lp/index.html**（L476-479／CSS L183-185）: `<footer><p class="f-logo">FutureNest</p><p>© 2026...</p></footer>`のみ。`background:#111827;color:rgba(255,255,255,.5);padding:36px 0;font-size:13px`。ナビリンク・SNSアイコンなし。
- **mirai-ryo-lp/index.html**（L2269／CSS L435-436, 561）: `footer{background:#0f172a;color:#94a3b8;text-align:center;padding:40px 0 80px;font-size:13px}`。コピーライト1行のみ。モバイルでは`padding-bottom:112px`にさらに拡張（固定CTAとの重なり回避）。
- **restaurant-lp/index.html**（L381-383／CSS L210-216）: `footer{text-align:center;padding:40px 6%;background:#090909;color:#aaa;font-size:14px}`。`© 2026 Restaurant Name. All Rights Reserved.`のみで、ナビ・SNS・法的リンクすべて無し。12LP中最もミニマルな実装。

**バリエーション: リンク付き中央寄せ型**（グリッド化せず横並びリンクのみを追加）
- **beauty-salon-lp/index.html**（L2760-2772／CSS L1315-1326）: `.site-footer{background:var(--text);color:rgba(255,255,255,.6);text-align:center;padding:32px 24px 40px;font-size:12px;line-height:2}`。`.footer-logo{font-family:'Cormorant Garamond',serif;font-size:20px}`のロゴ、`.footer-links{display:flex;justify-content:center;gap:20px;flex-wrap:wrap}`にセクション内アンカー6件、住所・営業時間・定休日のテキストを縦に併記。
- **rapas-lp/index.html**（L1411-1422／CSS L701-711）: `.footer-inner{display:flex;justify-content:space-between;flex-wrap:wrap}`でロゴ・リンク・コピーライトを横並び1行に配置。`.footer-links{gap:20px}`にプライバシーポリシー/特定商取引法の2リンクのみ。
- **lumia-lp/index.html**（L878-902／CSS L1657-1755）: `.footer__inner{display:flex;flex-direction:column}`→768px以上で`flex-direction:row;justify-content:space-between`の左ロゴ・右ナビ2カラム。右`.footer__nav`にConcept/Menu/Voice/Flow/FAQ/Accessの6アンカー。下段`.footer__bottom`は`border-top:1px solid rgba(255,255,255,.08)`区切りでコピーライト＋プライバシーポリシー/特定商取引法リンク。

### FOOT-002: 4カラムサイトマップ型

- **dental-clinic-lp/index.html**（L846-888／CSS L427-441）: `.footer-grid{grid-template-columns:1.3fr 1fr 1fr 1.3fr;gap:32px}`（クリニック情報／診療案内リンク／お役立ち情報リンク／診療時間テーブル）。860px以下で2カラム、560px以下で1カラムに段階的リフロー。診療時間は曜日別`<table class="hours-table">`をフッター内に再掲。背景`var(--primary-dark)`、`padding:56px 0 96px`（下部固定バーとの重なり回避で厚め）。
- **elearning-lp/index.html**（L1081-1106／CSS L484-501, 611, 638）: `.ft-g{grid-template-columns:1.7fr 1fr 1fr 1fr;gap:48px}`（ロゴ+説明文／サービス／サポート／会社情報の4カラム）。960px以下2カラム、640px以下1カラム。リンクは`color:rgba(255,255,255,.36)`→hoverで`#fff`。`.ft-btm`に「Illustration by Storyset」のクレジット表記あり。CTA再掲は`.fixed-cta`が別途担当。

### FOOT-003: CTA再掲+フッター型（固定CTAとの重なり回避設計）

フッター自体にCTAボタンを埋め込むのではなく、**フッター直後（または画面固定）にCTAを配置し、フッターのpadding-bottomを拡張して重なりを回避する**設計が複数LPで共通して見られた。

- **hoikushi-mikata-lp/index.html**（`footer`, L629-638／CSS L248-255, 308）: `padding:36px 0 108px`。CSSコメントで`/* extra bottom padding so fixed-cta doesn't overlap */`と明記。`.footer-inner{display:flex;flex-direction:column;align-items:center;gap:10px}`の1カラム中央寄せ、ナビは3リンクのみ。
- **dental-clinic-lp/index.html**: フッター直後（L890-899）に`.sticky-cta{position:fixed;bottom:0}`（電話／WEB予約の2ボタン、`box-shadow:0 -6px 24px rgba(0,0,0,.1)`）、768px以下のみ表示。
- **career-compass-lp/index.html**（L818-822／CSS L246-247）: `footer{padding:48px 0 100px}`。下部paddingが100pxと大きいのは、直後の固定`.fixed-cta`（`right:20px;bottom:20px`）と重ならないようにするための余白。

### 特記事項: SNSリンク・多言語対応は実例なし

- FOOT-004（SNSリンク強調型）・FOOT-006（コーポレート多言語型）に該当する実装は、12LPいずれにも見つからなかった。すべて日本語単一言語かつSNSアイコンなしのフッターだった。地方店舗系（美容室・レストラン・歯科）や個人向け講座・求人LPでは、SNS運用リンクよりも予約・電話・LINE誘導を優先する設計判断が一貫していたと考えられる。実案件でSNS導線が必要な場合は、既存の`.footer-links`パターン（beauty-salon-lp, lumia-lp）にアイコンリンクを追加する形で拡張可能。

### FOOT-005: 地域情報+地図型（店舗）関連の補足

- **restaurant-lp/index.html**（`.access`, L349-360／CSS L169-183）: フッターとは別セクションだが、`.access{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}`で左に住所/最寄駅/営業時間/定休日を`<br>`区切りテキストで列挙、右`.map{height:420px;background:#222;border-radius:24px}`は実際の地図ではなく「Google Mapをここに埋め込み」のプレースホルダー。
- **lumia-lp/index.html**（`.access#access`, L768-822）: 同様の2カラムだが、右側は実際のGoogle Maps embed iframe（`height:400`）。地図を実装する際はlumia-lpの構成を参照するのが望ましい（restaurant-lpはプレースホルダーのまま残っているため要差し替え）。
- **dental-clinic-lp/index.html**: フッター内に曜日別診療時間`<table>`を再掲する形で地域情報を補強しており、地図iframeではなく「診療時間の一覧性」を優先する設計だった。
