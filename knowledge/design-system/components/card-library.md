# Card Library
> Design System Phase 9 — Card Component 完全ライブラリ
> 参考: Land-book / Lapa Ninja / One Page Love / Awwwards / Godly
> 収録パターン数: 55件
> 最終更新: 2026-07-04

---

## 凡例

| 項目 | 説明 |
|------|------|
| CARD-ID | ライブラリ識別子 |
| 名称 | カード名（日本語）|
| カテゴリ | Card種別 |
| 利用業種 | 向いている業種 |
| 利用目的 | カードの役割 |
| デザイン特徴 | 見た目の特徴 |
| 推奨Section | 配置するSection |
| スコア | 100点満点 |
| ランク | S+ / S / A+ / A / B / C |

---

## スコア評価軸（各10点 × 10項目 = 100点満点）

1. デザイン性
2. 再利用性
3. スマホ適性
4. 操作性
5. 可読性
6. ブランド表現
7. CV期待値
8. 実装容易性
9. 汎用性
10. アクセシビリティ

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 01 ｜ Feature Card（特徴カード）
## ━━━━━━━━━━━━━━━━━━━━━

---

### CARD-001
**Feature Card スタンダード（白・シャドウ）**

| 項目 | 内容 |
|------|------|
| 名称 | Feature Card 白背景 シャドウ標準 |
| カテゴリ | Feature Card |
| 利用業種 | 全般 |
| 利用目的 | 特徴・強み・サービス内容の提示 |
| 構成要素 | アイコン（上）+ 見出し + 説明文（3行以内）|
| デザイン特徴 | 白背景 / border-radius 12〜16px / shadow: 0 4px 20px rgba(0,0,0,0.08) |
| 余白（内側）| padding: 32〜40px |
| ホバー | translateY(-4px) / shadow強化 |
| アニメーション | transition 0.25s ease |
| レスポンシブ | SP: 縦1列スタック |
| 推奨Section | FEATURE-001 / FEATURE-011 |
| スコア | **88** |
| ランク | **S** |

---

### CARD-002
**Feature Card ダーク（ネイビー・チャコール）**

| 項目 | 内容 |
|------|------|
| 名称 | Feature Card ダーク背景 アクセントアイコン |
| カテゴリ | Feature Card |
| 利用業種 | SaaS / テック / 映像制作 |
| 利用目的 | 高品質感・テクノロジー感のある特徴提示 |
| 構成要素 | アクセントカラーアイコン + 白見出し + グレーテキスト |
| デザイン特徴 | background: #0f172a〜#1e293b / border: 1px solid rgba(255,255,255,0.08) |
| 余白 | padding: 32px |
| ホバー | border-color アクセントカラー / shadow glow |
| 推奨Section | FEATURE-003 / FEATURE-014 |
| スコア | **87** |
| ランク | **S** |

---

### CARD-003
**Feature Card Gradient Border（グラデ枠）**

| 項目 | 内容 |
|------|------|
| 名称 | Feature Card グラデーション枠線 |
| カテゴリ | Feature Card |
| 利用業種 | SaaS / ブランド / スタートアップ |
| 利用目的 | 高デザイン性の特徴カード |
| デザイン特徴 | border: 2px gradient（::before疑似要素）/ 白背景または半透明 |
| 実装 | background-clip: padding-box + ::before with gradient border |
| ホバー | gradient回転またはアニメーション |
| 推奨Section | FEATURE-016 / FEATURE-032 |
| スコア | **82** |
| ランク | **A+** |

---

### CARD-004
**Feature Card アイコン大（センター）**

| 項目 | 内容 |
|------|------|
| 名称 | Feature Card アイコン大 センター揃え |
| カテゴリ | Feature Card |
| 利用業種 | 全般 |
| 利用目的 | アイコンを主役にした視覚的特徴カード |
| 構成要素 | アイコン48〜64px（中央上）+ 見出し + 説明 |
| デザイン特徴 | 白背景 / センター揃え / アイコン背景円または正方形 |
| 推奨Section | FEATURE-006 / FEATURE-056 |
| スコア | **85** |
| ランク | **S** |

---

### CARD-005
**Feature Card 数字実績（KPI型）**

| 項目 | 内容 |
|------|------|
| 名称 | Feature Card 大数字 KPI型 |
| カテゴリ | Feature Card |
| 利用業種 | SaaS / コンサル / 士業 / スクール |
| 利用目的 | 実績数字を大きく見せる |
| 構成要素 | 大数字（48〜64px）+ 単位 + ラベル + 説明文 |
| デザイン特徴 | 数字はブランドカラーまたはグラデーション / 白カード |
| ホバー | 数字カウントアップアニメーション（Intersection Observer）|
| 推奨Section | FEATURE-017 / FEATURE-046 |
| スコア | **89** |
| ランク | **S** |

---

### CARD-006
**Feature Card Bento Grid（非対称）**

| 項目 | 内容 |
|------|------|
| 名称 | Bento Grid Card 非対称 大小混在 |
| カテゴリ | Feature Card |
| 利用業種 | SaaS / スタートアップ / テック |
| 利用目的 | 大小カードのグリッドで視覚的メリハリを作る |
| デザイン特徴 | CSS Grid / 大カード（2col span）+ 小カード / 統一した角丸16〜20px |
| 推奨Section | FEATURE-016 / FEATURE-032 |
| スコア | **87** |
| ランク | **S** |

---

### CARD-007
**Feature Card ホバー詳細展開型**

| 項目 | 内容 |
|------|------|
| 名称 | Feature Card ホバー時に詳細テキスト展開 |
| カテゴリ | Feature Card |
| 利用業種 | SaaS / テック |
| 利用目的 | 通常はアイコン＋見出しのみ、ホバーで詳細説明を表示 |
| デザイン特徴 | 通常: アイコン+見出し / ホバー: 説明文フェードイン / 背景色変化 |
| 実装 | max-height 0→auto / opacity 0→1 / transition |
| 推奨Section | FEATURE-038 |
| スコア | **79** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 02 ｜ Voice Card（お客様の声カード）
## ━━━━━━━━━━━━━━━━━━━━━

---

### CARD-008
**Voice Card 星評価＋顔写真 スタンダード**

| 項目 | 内容 |
|------|------|
| 名称 | Voice Card 星評価 顔写真 標準型 |
| カテゴリ | Voice Card |
| 利用業種 | 全般 |
| 利用目的 | お客様の声・レビューの提示 |
| 構成要素 | 星（★5）+ 口コミ文 + 顔写真（円形）+ 名前・属性 |
| デザイン特徴 | 白カード / 星は#FBBF24（ゴールド）/ 角丸12〜16px |
| 余白 | padding: 28〜32px |
| ホバー | translateY(-2px) / shadow強化 |
| 推奨Section | VOICE-001 / VOICE-007 |
| スコア | **90** |
| ランク | **S+** |

---

### CARD-009
**Voice Card 大引用符型（CTA直前）**

| 項目 | 内容 |
|------|------|
| 名称 | Voice Card 大引用符 1件フォーカス |
| カテゴリ | Voice Card |
| 利用業種 | 全般 |
| 利用目的 | 最も強力な1件の声をCTA直前で見せる |
| 構成要素 | 大引用符（64px）+ 口コミ本文 + 顔写真 + 名前 |
| デザイン特徴 | ブランドカラーの大引用符 / 白または薄い背景 / テキスト大きめ |
| 推奨Section | VOICE-035 |
| スコア | **89** |
| ランク | **S** |

---

### CARD-010
**Voice Card Before/After 比較型**

| 項目 | 内容 |
|------|------|
| 名称 | Voice Card Before/After 写真＋体験談 |
| カテゴリ | Voice Card |
| 利用業種 | 美容 / ダイエット / スクール |
| 利用目的 | 変化・成果の可視化で強力な説得 |
| 構成要素 | Before写真 + After写真 + 名前・年代 + 体験談テキスト |
| デザイン特徴 | 白カード / Before:グレー調 / After:カラー / 矢印区切り |
| 推奨Section | VOICE-025 / VOICE-039 |
| スコア | **91** |
| ランク | **S+** |

---

### CARD-011
**Voice Card Google口コミ風**

| 項目 | 内容 |
|------|------|
| 名称 | Google口コミ風カード Googleアイコン付き |
| カテゴリ | Voice Card |
| 利用業種 | 飲食 / 美容 / 医療 / 全般 |
| 利用目的 | 第三者プラットフォームのお墨付き感を演出 |
| 構成要素 | Googleアイコン + 星 + 口コミ文 + 顔写真 + 名前 |
| デザイン特徴 | 白カード / Googleロゴカラー使用 / Google Maps風スタイル |
| 推奨Section | VOICE-019 |
| スコア | **86** |
| ランク | **S** |

---

### CARD-012
**Voice Card 吹き出し（チャット風）**

| 項目 | 内容 |
|------|------|
| 名称 | Voice Card 吹き出し型 チャット風 |
| カテゴリ | Voice Card |
| 利用業種 | 美容 / スクール / フィットネス |
| 利用目的 | 親近感・会話感で読みやすい口コミ |
| 構成要素 | 顔写真（左）+ 吹き出し（右）+ 名前・属性（下）|
| デザイン特徴 | 吹き出し形（before: triangle）/ 薄いブランドカラー背景 |
| 推奨Section | VOICE-016 / VOICE-038 |
| スコア | **85** |
| ランク | **S** |

---

### CARD-013
**Voice Card SNS投稿風（Twitter/X）**

| 項目 | 内容 |
|------|------|
| 名称 | Twitter/X 投稿風カード |
| カテゴリ | Voice Card |
| 利用業種 | D2C / SaaS / アプリ |
| 利用目的 | SNSでの自然な口コミ感を演出 |
| 構成要素 | X(Twitter)アイコン + 顔写真 + ユーザー名 + 投稿文 |
| デザイン特徴 | Twitterブランドカラー（#1DA1F2）または黒 / SNS風UI |
| 推奨Section | VOICE-018 |
| スコア | **82** |
| ランク | **A+** |

---

### CARD-014
**Voice Card Wall of Love（Masonry）**

| 項目 | 内容 |
|------|------|
| 名称 | Wall of Love Masonry Grid 大量表示 |
| カテゴリ | Voice Card |
| 利用業種 | SaaS / D2C / アプリ |
| 利用目的 | 大量の口コミで圧倒的な社会的証明を作る |
| 構成要素 | 複数の口コミカード（高さバラバラ）をMasonryに配置 |
| デザイン特徴 | CSS Columns または Masonry / 各カードは白・軽い shadow |
| 推奨Section | VOICE-010 |
| スコア | **86** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 03 ｜ Pricing Card（料金カード）
## ━━━━━━━━━━━━━━━━━━━━━

---

### CARD-015
**Pricing Card スタンダード 3プラン**

| 項目 | 内容 |
|------|------|
| 名称 | Pricing Card 標準 3プラン横並び |
| カテゴリ | Pricing Card |
| 利用業種 | SaaS / スクール / コンサル |
| 構成要素 | プラン名 + 価格（大）+ 特徴リスト（✓）+ CTAボタン |
| デザイン特徴 | 白カード / 推奨プランのみボーダーまたはスケールUP / shadow |
| 推奨プラン強調 | border: 2px ブランドカラー または scale(1.05) + badge |
| 推奨Section | FEATURE-047 / Pricing Section |
| スコア | **88** |
| ランク | **S** |

---

### CARD-016
**Pricing Card Featured（推奨プラン強調）**

| 項目 | 内容 |
|------|------|
| 名称 | Pricing Card Featured 推奨プラン |
| カテゴリ | Pricing Card |
| 利用業種 | SaaS / スクール |
| 利用目的 | 3プランの中央を際立たせて中価格帯を選ばせる |
| デザイン特徴 | ブランドカラー背景（他は白）/ 白テキスト / 「人気No.1」バッジ / scale(1.05)〜1.08 |
| 推奨Section | Pricing Section |
| スコア | **91** |
| ランク | **S+** |

---

### CARD-017
**Pricing Card 料金表 シンプル（日本LP型）**

| 項目 | 内容 |
|------|------|
| 名称 | Pricing Card 日本LP料金表 シンプル |
| カテゴリ | Pricing Card |
| 利用業種 | 美容 / 医療 / 士業 / スクール |
| 利用目的 | シンプルな料金一覧の提示 |
| 構成要素 | メニュー名 + 価格（右揃え）+ ボーダー区切り |
| デザイン特徴 | 白背景 / テーブルまたはdl形式 / シンプルボーダー区切り |
| 推奨Section | Pricing / Feature |
| スコア | **82** |
| ランク | **A+** |

---

### CARD-018
**Pricing Card 年払い/月払い 切替型**

| 項目 | 内容 |
|------|------|
| 名称 | Pricing Card 月払い・年払いトグル切替 |
| カテゴリ | Pricing Card |
| 利用業種 | SaaS |
| 利用目的 | 年払い割引を見せて年払いを誘導 |
| 構成要素 | トグルスイッチ（月/年）+ 年払い時「XX%OFF」バッジ + 価格表示 |
| 実装 | JavaScript でprice切替 + badge表示 |
| 推奨Section | Pricing Section |
| スコア | **85** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 04 ｜ Profile Card（プロフィールカード）
## ━━━━━━━━━━━━━━━━━━━━━

---

### CARD-019
**Profile Card スタッフ一覧（写真上）**

| 項目 | 内容 |
|------|------|
| 名称 | Profile Card スタッフ一覧 写真上 情報下 |
| カテゴリ | Profile Card |
| 利用業種 | 美容 / 医療 / スクール / 採用 |
| 構成要素 | 写真（上・正方形またはアスペクト3:4）+ 名前 + 役職 + 一言 |
| デザイン特徴 | 白カード / 角丸12px / ホバーで写真overlay（SNSリンク）|
| ホバー | 写真上に半透明overlay + 詳細リンクまたはSNSアイコン |
| 推奨Section | PROFILE-015 / PROFILE-041 |
| スコア | **87** |
| ランク | **S** |

---

### CARD-020
**Profile Card 横並び（写真左・情報右）**

| 項目 | 内容 |
|------|------|
| 名称 | Profile Card 横並び 写真左 情報右 |
| カテゴリ | Profile Card |
| 利用業種 | 士業 / コンサル / スクール |
| 構成要素 | 写真（左・円形またはスクエア）+ 名前・役職・資格・一言 |
| デザイン特徴 | 白カード / 横並び2カラム / 角丸12px |
| 推奨Section | PROFILE-017 / PROFILE-026 |
| スコア | **84** |
| ランク | **S** |

---

### CARD-021
**Profile Card チーム小カード**

| 項目 | 内容 |
|------|------|
| 名称 | Profile Card チーム小カード 4カラム対応 |
| カテゴリ | Profile Card |
| 利用業種 | コーポレート / スタートアップ |
| 構成要素 | 円形写真 + 名前 + 役職 のみ（シンプル）|
| デザイン特徴 | 最小限 / 白背景または無背景 / ホバーでボーダー |
| 推奨Section | PROFILE-016 / PROFILE-040 |
| スコア | **79** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 05 ｜ Flow / Step Card
## ━━━━━━━━━━━━━━━━━━━━━

---

### CARD-022
**Flow Card 縦ステップ（番号＋コンテンツ）**

| 項目 | 内容 |
|------|------|
| 名称 | Flow Card 縦ステップ 番号大＋説明 |
| カテゴリ | Flow Card |
| 利用業種 | 全般 |
| 利用目的 | 手順・フローの各ステップを視覚化 |
| 構成要素 | 番号（大・円形）+ 見出し + 説明文（任意：写真）|
| デザイン特徴 | 番号はブランドカラー円形 / 縦ライン接続（before要素）|
| 推奨Section | FLOW-001 / FLOW-002 |
| スコア | **87** |
| ランク | **S** |

---

### CARD-023
**Flow Card 横ステップ（アイコン＋矢印）**

| 項目 | 内容 |
|------|------|
| 名称 | Flow Card 横ステップ アイコン＋矢印接続 |
| カテゴリ | Flow Card |
| 利用業種 | SaaS / 全般 |
| 利用目的 | 横展開のフロー表示 |
| 構成要素 | アイコン（円背景）+ 矢印 + 見出し + 説明 |
| デザイン特徴 | 横並び / 矢印（SVGまたはCSS）/ アイコンはブランドカラー |
| レスポンシブ | SP: 縦1列 |
| 推奨Section | FLOW-006 / FLOW-021 |
| スコア | **86** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 06 ｜ Blog / Article Card
## ━━━━━━━━━━━━━━━━━━━━━

---

### CARD-024
**Blog Card 標準（サムネイル上）**

| 項目 | 内容 |
|------|------|
| 名称 | Blog Card 標準型 サムネイル上 |
| カテゴリ | Blog Card |
| 利用業種 | メディア / コーポレート / スクール |
| 構成要素 | サムネイル画像 + カテゴリバッジ + タイトル + 日付 + 著者 |
| デザイン特徴 | 白カード / 角丸12px / 画像は上部16:9比率 |
| ホバー | 画像ズームイン(scale 1.05) / title色変化 |
| 推奨Section | Blog / News Section |
| スコア | **84** |
| ランク | **S** |

---

### CARD-025
**Blog Card 横並び（画像左・テキスト右）**

| 項目 | 内容 |
|------|------|
| 名称 | Blog Card 横並び 画像左・テキスト右 |
| カテゴリ | Blog Card |
| 利用業種 | メディア / コーポレート |
| 構成要素 | 画像（左小）+ カテゴリ・タイトル・日付（右）|
| デザイン特徴 | 横並び / 画像aspect-ratio 1:1 または 4:3 |
| 推奨Section | Blog / News / サイドバー |
| スコア | **80** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 07 ｜ Glass / Morphism Card
## ━━━━━━━━━━━━━━━━━━━━━

---

### CARD-026
**Glass Card（半透明グラスモーフィズム）**

| 項目 | 内容 |
|------|------|
| 名称 | Glass Morphism Card 半透明 |
| カテゴリ | Glass Card |
| 利用業種 | 高級ブランド / SaaS / クリエイター |
| 利用目的 | 背景写真の上に重ねるプレミアムカード |
| デザイン特徴 | background: rgba(255,255,255,0.1〜0.2) / backdrop-filter: blur(12〜20px) / border: 1px solid rgba(255,255,255,0.2) / border-radius: 16〜24px |
| 適用条件 | 背景に画像・動画・グラデーションが必要 |
| 推奨Section | Hero（背景写真上）|
| スコア | **84** |
| ランク | **S** |

---

### CARD-027
**Dark Glass Card（ダーク半透明）**

| 項目 | 内容 |
|------|------|
| 名称 | Dark Glass Card ダーク半透明 |
| カテゴリ | Glass Card |
| 利用業種 | テック / 映像 / ゲーム |
| デザイン特徴 | background: rgba(0,0,0,0.4〜0.6) / backdrop-filter: blur(16px) / border: 1px solid rgba(255,255,255,0.1) / 白テキスト |
| 推奨Section | Hero（ダーク背景）|
| スコア | **82** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 08 ｜ Gradient Card
## ━━━━━━━━━━━━━━━━━━━━━

---

### CARD-028
**Gradient Card（背景グラデーション）**

| 項目 | 内容 |
|------|------|
| 名称 | Gradient Background Card |
| カテゴリ | Gradient Card |
| 利用業種 | SaaS / スタートアップ / 美容 |
| デザイン特徴 | background: linear-gradient(135deg, Color1, Color2) / 白テキスト / 角丸16px |
| 活用場面 | 特定の機能・プランを目立たせたい |
| 推奨Section | Feature / Pricing |
| スコア | **83** |
| ランク | **S** |

---

### CARD-029
**Gradient Border Card（外枠グラデ）**

| 項目 | 内容 |
|------|------|
| 名称 | Gradient Border Only Card |
| カテゴリ | Gradient Card |
| 利用業種 | SaaS / ブランド |
| デザイン特徴 | 白背景 / 外枠のみグラデーション / ::before疑似要素でグラデ枠 |
| ホバー | グラデーション回転アニメーション |
| 推奨Section | Feature / Pricing |
| スコア | **80** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 09 ｜ Interactive Card
## ━━━━━━━━━━━━━━━━━━━━━

---

### CARD-030
**Flip Card（表裏）**

| 項目 | 内容 |
|------|------|
| 名称 | Flip Card ホバーで裏面表示 |
| カテゴリ | Interactive Card |
| 利用業種 | スクール / 採用 / サービス紹介 |
| 利用目的 | 表：写真/アイコン / 裏：詳細説明 |
| デザイン特徴 | CSS perspective + rotateY(180deg) / backface-visibility: hidden |
| 適用条件 | ホバー操作できるPC向けコンテンツ |
| レスポンシブ | SP: クリックで切替（または展開表示）|
| 推奨Section | Profile / Feature / Staff |
| スコア | **76** |
| ランク | **A** |

---

### CARD-031
**Expand Card（クリックで展開）**

| 項目 | 内容 |
|------|------|
| 名称 | Expand Card クリック展開 |
| カテゴリ | Interactive Card |
| 利用業種 | FAQ / 全般 |
| 利用目的 | 概要→詳細への段階的情報提供 |
| デザイン特徴 | 通常状態でタイトルのみ / クリックで詳細テキスト展開 / max-height animation |
| 推奨Section | FAQ / Feature |
| スコア | **80** |
| ランク | **A+** |

---

### CARD-032
**Hover State Card（ホバーで内容変化）**

| 項目 | 内容 |
|------|------|
| 名称 | Hover State Card 背景色変化型 |
| カテゴリ | Interactive Card |
| 利用業種 | 全般 |
| 利用目的 | ホバー時に背景色・テキスト色を変えて選択感を演出 |
| デザイン特徴 | 通常: 白背景・黒テキスト / ホバー: ブランドカラー背景・白テキスト |
| 実装 | :hover セレクターのみ（JS不要）|
| 推奨Section | Feature / Pricing / Service |
| スコア | **83** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 10 ｜ 特化型カード（業種別）
## ━━━━━━━━━━━━━━━━━━━━━

---

### CARD-033
**案件/実績 ケーススタディカード**

| 項目 | 内容 |
|------|------|
| 名称 | ケーススタディ 実績カード |
| カテゴリ | 実績Card |
| 利用業種 | コンサル / 制作会社 / SaaS |
| 構成要素 | クライアントロゴ + 課題 + 施策 + 成果数字 |
| デザイン特徴 | 白カード / 成果数字はブランドカラー大 |
| 推奨Section | VOICE-030 / Feature |
| スコア | **85** |
| ランク | **S** |

---

### CARD-034
**受賞・資格バッジカード**

| 項目 | 内容 |
|------|------|
| 名称 | 受賞・資格バッジカード |
| カテゴリ | 資格Card |
| 利用業種 | 士業 / 医療 / 美容 |
| 構成要素 | バッジ/アイコン + 資格名 + 発行機関 + 取得年 |
| デザイン特徴 | 白カード / バッジは視認性高く / グレーボーダー |
| 推奨Section | PROFILE-033 / PROFILE-030 |
| スコア | **84** |
| ランク | **S** |

---

### CARD-035
**メニュー・商品カード（飲食・EC）**

| 項目 | 内容 |
|------|------|
| 名称 | 商品・メニューカード 飲食・EC |
| カテゴリ | 商品Card |
| 利用業種 | 飲食 / EC / D2C |
| 構成要素 | 商品画像（上）+ 商品名 + 価格 + CTAボタン |
| デザイン特徴 | 白カード / 画像1:1または3:4 / 価格はアクセントカラー |
| ホバー | 画像ズーム + 購入ボタン出現 |
| 推奨Section | Pricing / EC Product |
| スコア | **86** |
| ランク | **S** |

---

### CARD-036
**採用 職種カード**

| 項目 | 内容 |
|------|------|
| 名称 | 採用 職種・求人カード |
| カテゴリ | 採用Card |
| 利用業種 | 採用 |
| 構成要素 | 職種名 + 雇用形態タグ + 業務内容（2〜3行）+ 「詳細を見る」リンク |
| デザイン特徴 | 白カード / 雇用形態はバッジ型 / ホバーでボーダー色変化 |
| 推奨Section | 採用LP / PROFILE-044 |
| スコア | **82** |
| ランク | **A+** |

---

### CARD-037
**FAQ カード（一問一答）**

| 項目 | 内容 |
|------|------|
| 名称 | FAQ カード 一問一答 |
| カテゴリ | FAQ Card |
| 利用業種 | 全般 |
| 構成要素 | Q（太字・ブランドカラー）+ A（通常文字）|
| デザイン特徴 | 白カード / Qは「Q.」ラベル付き / Aは「A.」ラベル |
| 推奨Section | FAQ Section |
| スコア | **83** |
| ランク | **S** |

---

### CARD-038
**Timeline カード（縦型）**

| 項目 | 内容 |
|------|------|
| 名称 | Timeline Card 縦型 年代バッジ |
| カテゴリ | Timeline Card |
| 利用業種 | コーポレート / 採用 / プロフィール |
| 構成要素 | 年代バッジ（左）+ コンテンツカード（右）+ 縦線 |
| デザイン特徴 | 左に縦線 / 年代は円形バッジ / カードは白・shadow軽め |
| 推奨Section | PROFILE-023 / FLOW Section |
| スコア | **82** |
| ランク | **A+** |

---

### CARD-039
**SNS Feed カード（Instagram風）**

| 項目 | 内容 |
|------|------|
| 名称 | Instagram風 SNS Feed カード |
| カテゴリ | SNS Card |
| 利用業種 | D2C / 美容 / 飲食 |
| 構成要素 | 正方形画像 + いいね数 + コメント数 (ホバー) |
| デザイン特徴 | 画像1:1 / ホバーで半透明overlay + いいね・コメントアイコン |
| 推奨Section | VOICE-020 |
| スコア | **79** |
| ランク | **A+** |

---

### CARD-040
**Notice / Alert カード**

| 項目 | 内容 |
|------|------|
| 名称 | Notice・Alert インフォカード |
| カテゴリ | Alert Card |
| 利用業種 | 全般 |
| 利用目的 | 重要なお知らせ・注意事項の告知 |
| デザイン特徴 | 左ボーダー4px（色でtype区別：青info/緑success/黄warning/赤error）/ 薄い背景色 |
| 実装 | type別にclass切り替え |
| 推奨Section | Hero上部 / フォーム上部 |
| スコア | **80** |
| ランク | **A+** |

---

### CARD-041
**Stat / KPI ミニカード（ダッシュボード風）**

| 項目 | 内容 |
|------|------|
| 名称 | Stat KPI ミニカード |
| カテゴリ | KPI Card |
| 利用業種 | SaaS / コーポレート |
| 構成要素 | アイコン + 数字（大）+ ラベル + 増減率 |
| デザイン特徴 | 白カード / 増減率は緑(↑)/赤(↓) / コンパクト |
| 推奨Section | Feature / Hero直下 |
| スコア | **81** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 11 ｜ Card Container / Wrapper
## ━━━━━━━━━━━━━━━━━━━━━

---

### CARD-042
**Card Grid 3カラム（標準）**

| 項目 | 内容 |
|------|------|
| 名称 | Card Grid Container 3カラム標準 |
| カテゴリ | Card Container |
| レイアウト | display: grid / grid-template-columns: repeat(3, 1fr) / gap: 24〜32px |
| レスポンシブ | tablet: 2列 / SP: 1列 |
| 推奨Section | Feature / Voice / Profile |
| スコア | **88** |
| ランク | **S** |

---

### CARD-043
**Card Grid 4カラム**

| 項目 | 内容 |
|------|------|
| 名称 | Card Grid Container 4カラム |
| カテゴリ | Card Container |
| レイアウト | repeat(4, 1fr) / gap: 20〜24px |
| レスポンシブ | tablet: 2列 / SP: 1列 |
| 推奨Section | Feature（多数）/ Staff |
| スコア | **84** |
| ランク | **S** |

---

### CARD-044
**Card Carousel（スライダー）**

| 項目 | 内容 |
|------|------|
| 名称 | Card Carousel スワイプスライダー |
| カテゴリ | Card Container |
| 利用目的 | SP対応スライダー / 3件見えカルーセル |
| 実装ライブラリ | Swiper.js / Splide / CSS Scroll Snap |
| デザイン特徴 | overflow-x: scroll + scroll-snap / または Swiper |
| レスポンシブ | SP: 1.2〜1.5件見え（次が少し見える設計）|
| 推奨Section | Voice / Feature |
| スコア | **87** |
| ランク | **S** |

---

### CARD-045
**Card Masonry（高さバラバラグリッド）**

| 項目 | 内容 |
|------|------|
| 名称 | Card Masonry Grid |
| カテゴリ | Card Container |
| 実装 | CSS columns: 3 / column-gap: 24px / break-inside: avoid |
| 利用目的 | テキスト量バラバラの口コミ等を自然に並べる |
| 推奨Section | Voice（Wall of Love）|
| スコア | **83** |
| ランク | **S** |

---

## ランク別サマリー

### S+ ランク（90点以上）
| ID | 名称 | スコア |
|----|------|--------|
| CARD-008 | Voice Card 星評価 標準 | 90 |
| CARD-010 | Voice Card Before/After | 91 |
| CARD-016 | Pricing Card Featured | 91 |

### S ランク（83〜89点）
| ID | 名称 | スコア |
|----|------|--------|
| CARD-005 | Feature Card 数字実績 | 89 |
| CARD-009 | Voice Card 大引用符 | 89 |
| CARD-015 | Pricing Card 3プラン | 88 |
| CARD-001 | Feature Card 白・シャドウ | 88 |
| CARD-042 | Card Grid 3カラム | 88 |
| CARD-002 | Feature Card ダーク | 87 |
| CARD-006 | Feature Card Bento Grid | 87 |
| CARD-019 | Profile Card スタッフ一覧 | 87 |
| CARD-022 | Flow Card 縦ステップ | 87 |
| CARD-023 | Flow Card 横ステップ | 86 |
| CARD-014 | Voice Card Wall of Love | 86 |
| CARD-035 | 商品・メニューカード | 86 |
| CARD-011 | Voice Card Google口コミ風 | 86 |
| CARD-004 | Feature Card アイコン大 | 85 |
| CARD-018 | Pricing Card 月/年切替 | 85 |
| CARD-033 | 実績カード | 85 |
| CARD-012 | Voice Card 吹き出し | 85 |
| CARD-044 | Card Carousel | 87 |
| CARD-043 | Card Grid 4カラム | 84 |
| CARD-024 | Blog Card 標準 | 84 |
| CARD-020 | Profile Card 横並び | 84 |
| CARD-034 | 受賞バッジカード | 84 |
| CARD-026 | Glass Card | 84 |
| CARD-028 | Gradient Card | 83 |
| CARD-032 | Hover State Card | 83 |
| CARD-037 | FAQ カード | 83 |
| CARD-045 | Card Masonry | 83 |


---

## take-design-portfolio 実務ログからの統合知見（2026-07-12 追加分）

> 以下は実案件12件のLP制作から得られた実装知見（旧 take-design-portfolio/knowledge 側の記録）。上記ライブラリと重複しない実装レベルの具体例・検証結果として保持する。

## 実案件からの知見（2026-07-12 追加）

12件の実LPを調査し、実際に使われていたカード実装を記録する。

### 基本構造：border 1px + border-radius 16〜18px + 小さめshadow

業種を問わず、標準カードは「薄い枠線＋角丸16〜18px＋控えめな影」の組み合わせがベースラインになっている。

```css
/* mirai-ryo-lp/index.html */
.card{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:28px;
  box-shadow:var(--shadow-sm);transition:.25s}
.card:hover{transform:translateY(-5px);box-shadow:var(--shadow)}
```

```css
/* beauty-salon-lp/index.html（.reason-card / .ba-card / .menu-card 共通） */
.reason-card {
  background: var(--white); border: 1px solid var(--border); border-radius: var(--radius);
  padding: 32px 24px; text-align: center; box-shadow: var(--shadow-sm);
  transition: transform .2s, box-shadow .2s;
}
.reason-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
```

`dental-clinic-lp/index.html` の `.service-card` も同型（`border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;transition:.3s cubic-bezier(.16,.84,.44,1)`）。border-radius変数は案件ごとに16px/18px/24pxとブレがあるが、「1px枠線＋角丸＋淡い影」という設計原則自体は12案件中CARD実装のある全案件で一致していた。

### Hoverはtranslate + shadow強化が基本、案件によってはバウンス系イージング

`beauty-salon-lp/index.html` は通常の `ease` ではなく `cubic-bezier(.34,1.56,.64,1)`（オーバーシュートするバウンス感）を採用し、より上品で弾力のあるホバーを演出している：

```css
/* beauty-salon-lp/index.html */
.reason-card:hover, .voice-card:hover, .ba-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 4px 16px rgba(196,135,140,.13), 0 20px 56px rgba(60,42,39,.10);
  transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .35s ease;
}
/* 画像付きカードでは画像自体もホバーで拡大 */
.menu-card-img > img { transition: transform .5s ease; }
.menu-card:hover .menu-card-img > img { transform: scale(1.05); }
```

二重box-shadow（近距離の濃い影＋遠距離の淡い影を重ねる）は `beauty-salon-lp` 特有の高級感演出として複数カードで再利用されていた。

### テスティモニアルカード：星評価はテキスト文字「★」で十分

SVGアイコンや画像を使わず、単純にUnicode文字 `★★★★★` をアンバー系カラーで着色するだけの実装が採用されていた。実装コストが最小で再利用性が高い。

```css
/* business-design-academy-lp/index.html */
.voice-stars { color: #F59E0B; font-size: 13px; margin-top: 3px; }
```
```html
<div class="voice-stars">★★★★★</div>
```

`beauty-salon-lp/index.html` の `.ba-card` はヘッダー部に44px円形アバター＋名前を配置し、`.ba-improvement` 内に施術改善タグ（後述バッジ参照）を並べる「Before/After訴求つきテスティモニアルカード」という業種特化パターンも持つ。

### プライスカード：おすすめリボンバッジ（絶対配置ノッチ）

料金カードの「おすすめ」訴求は、カード上端中央に絶対配置した台形/リボン型バッジで表現するパターンが有効だった。

```css
/* elearning-lp/style.css */
.pr-badge{
  position:absolute; top:-1px; left:50%; transform:translateX(-50%);
  background:var(--p); color:#fff; font-size:11.5px; font-weight:700;
  padding:5px 24px; border-radius:0 0 12px 12px; /* 上端は角丸なし、下端のみ角丸で"タブ"状に見せる */
  letter-spacing:.06em; white-space:nowrap;
}
```

同ファイルの `.pr-card.star .pr-top { background:var(--p); } .pr-card.star .pr-top * { color:#fff!important; }` のように、「おすすめ」プランだけヘッダー部を反転配色にして視線誘導する手法も確認できた。

### アイコン付きフィーチャーカード（CARD-001）の実測サイズ

アイコンを載せる正方形コンテナは、54〜56px・角丸16px・淡色背景という値がほぼ共通していた（詳細はicon-libraryを参照）。

- `mirai-ryo-lp/index.html`: `.icon{width:54px;height:54px;border-radius:16px;background:var(--softBlue);...}`
- `dental-clinic-lp/index.html`: `.icon-circle{width:56px;height:56px;border-radius:16px;background:var(--surface-blue);...}`

### 求人・案件カード（業種特化パターン）

`mirai-ryo-lp/index.html` は「寮付き求人」LPで、`.jobImg`（サムネイル）+ `.jobBody`（詳細）+ `.jobPay`（給与、大きめフォント19px+）+ `.jobActions .btn`（応募ボタン、モバイルで`width:100%`）という求人専用カード構成を持つ。人材・求人系LPの再利用テンプレートとして有用。

### まとめ：業種を越えて共通する「カードの型」

- 枠線1px + border-radius 16〜18px + box-shadow（小）が土台
- ホバーで `translateY(-4px〜-6px)` + shadow強化（トランジション .2s〜.35s）
- アイコン付きカードのアイコン枠は 54〜56px角丸スクエア
- 星評価はSVGでなくテキスト`★`で十分機能する
- 「おすすめ」訴求は絶対配置のリボン/タブバッジで表現するのが効果的
