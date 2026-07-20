# component-guide.md — コンポーネント一覧

元LPに実在するコンポーネントのみを掲載する（存在しないコンポーネントを勝手に追加していない）。指定テンプレートにあった `FAQ` `Review（お客様の声）` `Comparison（比較表）` `Form（入力フォーム）` は元画像に**存在しないため未実装**。追加する場合は本ドキュメントの命名規則・トークンに準拠して拡張すること。

---

## 1. Header（ヘッダー）

| 項目 | 内容 |
|---|---|
| 用途 | ページ最上部、常時ロゴ+CTA+メニューを表示 |
| 構成 | Logo（マーク+社名+タグライン）／CTA-Compact（電話・見積り2分割ボタン）／Menu-Trigger（ハンバーガー） |
| Variants | Default（白背景）／Scrolled（将来的にスクロール時に影を追加する想定、今回は未実装） |
| サイズ | Height 72px（Desktop）／64px（Mobile） |
| ルール | 左右パディング`space.6`(24px)。Mobileではロゴのタグライン非表示、CTAは電話アイコンのみの正方形ボタンに縮小可（要判断、今回は横並び維持） |

## 2. Hero（ヒーローセクション）

| 項目 | 内容 |
|---|---|
| 用途 | エリア訴求・キャッチコピー・信頼バッジ・Before/After実績を1画面で提示 |
| 構成 | AreaBadge／Headline(2行)／SubCopy(2段落)／IconBadge×3／BeforeAfterCard |
| Variants | Desktop-Split（コピー45%+写真55%の2カラム）／Mobile-Stacked（コピー→写真の縦積み） |
| サイズ | Desktop高さ可変（コンテンツ依存）、写真は右カラム幅100%・比率3:4〜4:5 |
| ルール | 写真は白背景から`linear-gradient`でフェードして馴染ませる。コピー内の強調語のみOrangeにする（乱用しない、1見出しにつき1語まで） |

## 3. Button（ボタン）

| 項目 | 内容 |
|---|---|
| 用途 | 全CTAの基本単位 |
| Variants | `Primary`(Orange)／`Secondary`(Navy)／`Split-Compact`(Header用2分割)／`Split-Full`(Footer用2分割)／`Outline`(メニュー) |
| State | Default／Hover(translateY -2px+shadow強調)／Active(shadow減衰)／Disabled(opacity 0.5, shadow除去) |
| サイズ | Large=64px高（LINE/電話大型CTA）／Medium=56px高（フッター固定CTA）／Compact=48px高（ヘッダーCTA） |
| ルール | アイコン(左)+ラベル+矢印円(右)の3点構成を崩さない。ラベルの折返し禁止（`white-space: nowrap`または十分な`min-width`確保） |

## 4. Badge（バッジ）

| 項目 | 内容 |
|---|---|
| 用途 | 対応エリア表示、Before/Afterラベル |
| Variants | `AreaBadge`(Navy地・白文字・ピル)／`BeforeTag`(半透明グレー地)／`AfterTag`(Orange地) |
| サイズ | Height 32px、Padding横`space.4`(16px) |
| ルール | 常に単色ベタ塗り+白文字。グラデーションは使わない |

## 5. IconBadge（円形アイコンバッジ）

| 項目 | 内容 |
|---|---|
| 用途 | 「現地調査無料」「自社一貫施工」「地域密着対応」の3点訴求 |
| 構成 | 円(白地+Navy 1.5px枠)+ラインアイコン(Navy)+2行ラベル(強調語のみOrange) |
| Variants | 3種とも同一コンポーネントのテキスト/アイコン差し替えのみ（Variant切替ではなくインスタンス上書き） |
| サイズ | 直径72px（Desktop）／64px（Mobile） |
| ルール | 3つ横並びは常にAuto Layout(Horizontal, gap=`space.3`, 均等幅Fill) |

## 6. TrustCheckBadge（信頼チェックバッジ）

| 項目 | 内容 |
|---|---|
| 用途 | 「相見積もり歓迎」「相談のみOK」「強引な営業なし」 |
| 構成 | Creamピル背景+Orangeチェックアイコン+テキスト |
| サイズ | Height 40px、Radius `full` |
| ルール | CTAボタン直下、必ず3点セットで使用（1〜2個での単独使用はしない） |

## 7. BeforeAfterCard（施工実績比較カード）

| 項目 | 内容 |
|---|---|
| 用途 | 施工前後のビジュアル訴求 |
| 構成 | 白カード(radius lg, shadow card)内に画像2枚を横並び+中央に円形矢印アイコンをオーバーラップ |
| Variants | なし（固定構成） |
| サイズ | 画像比率1:1、カード内padding `space.2`(8px) |
| ルール | BEFORE=グレータグ／AFTER=Orangeタグを画像左上に固定配置 |

## 8. ServiceCard（対応工事カード）＝ Card / Feature 共通コンポーネント

| 項目 | 内容 |
|---|---|
| 用途 | 6種の対応工事（外構・造成・舗装・解体撤去・擁壁・排水管）を等価に提示 |
| 構成 | 写真(4:3, 上2角のみradius lg) + IconCircle(写真下端に左寄せでオーバーラップ) + Title(Bold) + Description(2〜3行) |
| Variants | アイコン・写真・テキストのみ異なる6インスタンス（Variant Propertyは持たず、単一Componentのインスタンス差し替え） |
| サイズ | カード幅：Desktop 3列時 約284px／Tablet 2列時 約410px／Mobile 1列時 Fill |
| ルール | 6枚は必ず同一の内部Auto Layout構造（写真比率・padding・gap）を維持し、テキスト量差による高さのブレは`min-height`で吸収する |

## 9. SectionTitle（セクション見出し）

| 項目 | 内容 |
|---|---|
| 用途 | 「対応工事」など各セクションの導入見出し |
| 構成 | 左飾り線＋テキスト＋右飾り線（Auto Layout Horizontal, 中央揃え, 飾り線はFill） |
| サイズ | テキスト28〜32px、飾り線は太さ1px |
| ルール | セクション上部`space.16`(64px)、見出し下`space.8`(32px)のマージンを固定 |

## 10. StatBand / StatCard（実績スタッツ帯）

| 項目 | 内容 |
|---|---|
| 用途 | 施工実績・創業年数・対応スピードを裏付けとして提示 |
| 構成 | Naviベタ背景の全幅帯の中にStatCard×3（月桂樹アイコン+ラベル+大数字+補足） |
| サイズ | 帯の縦Padding `space.14`(56px)、StatCard間gap `space.8`(32px) |
| ルール | 3カードは常に均等幅（Fill）、数字フォントは全カードで同一サイズに統一（内容により強弱をつけない） |

## 11. StickyFooterCTA（下部固定フッターCTA）

| 項目 | 内容 |
|---|---|
| 用途 | スクロール中どのタイミングでも行動できる最終CTA |
| 構成 | Split-Full Button（左Navy「電話で相談する」／右Orange「無料見積り・相談する」） |
| サイズ | Height 56px、画面幅いっぱい |
| ルール | Mobileでは`position: sticky; bottom: 0;`で常時表示。Desktopではページ末尾の静的セクションとして表示（フロート化しない） |

## 12. Navigation / Menu-Trigger

| 項目 | 内容 |
|---|---|
| 用途 | ハンバーガーメニュー開閉トリガー |
| 構成 | 3本線アイコン+「MENU」ラベルの縦積み |
| サイズ | 48×48px |
| ルール | 展開後のドロワー内容は元画像に情報がないため本ドキュメントでは未定義（実装時に別途要件確認） |

---

## 未実装（元LPに存在しないため今回スコープ外）

| コンポーネント | 状況 |
|---|---|
| FAQ | 元画像になし。追加する場合はAccordion+`radius.lg`+`shadow.card`で新設計が必要 |
| Review（お客様の声） | 元画像になし |
| Comparison（比較表） | 元画像になし |
| Form（入力フォーム） | 元画像になし。LINE誘導のみでフォーム自体は本LP外（別ページ想定） |
