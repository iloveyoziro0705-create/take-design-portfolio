# Button Library
> Design System Phase 9 — Button Component 完全ライブラリ
> 参考: Land-book / Lapa Ninja / One Page Love / Awwwards / Godly
> 収録パターン数: 45件
> 最終更新: 2026-07-04

---

## 凡例

| 項目 | 説明 |
|------|------|
| BUTTON-ID | ライブラリ識別子 |
| 名称 | ボタン名（日本語） |
| カテゴリ | ボタン種別 |
| 高さ | px値（推奨）|
| 角丸 | border-radius px値 |
| 利用業種 | 向いている業種 |
| 利用目的 | ボタンの役割 |
| 推奨Section | 配置すべきSection ID |
| スコア | 100点満点 |
| ランク | S+ / S / A+ / A / B / C |

---

## スコア評価軸（各10点 × 10項目 = 100点満点）

1. デザイン性
2. 再利用性
3. スマホ適性
4. 操作性（タップ/クリックしやすさ）
5. 可読性
6. ブランド表現
7. CV期待値
8. 実装容易性
9. 汎用性
10. アクセシビリティ

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 01 ｜ Filled Primary（塗りつぶし・Primary）
## ━━━━━━━━━━━━━━━━━━━━━

---

### BUTTON-001
**Primary Filled ラウンド 大（標準CTA）**

| 項目 | 内容 |
|------|------|
| 名称 | Primary Filled ラウンド 大 |
| カテゴリ | Filled Primary |
| 高さ | 56px |
| 角丸 | 8px |
| 最小幅 | 200px |
| 利用業種 | 全般 |
| 利用目的 | ページのメインCTA |
| デザイン特徴 | ブランドカラー塗りつぶし / 白テキスト / ホバーで10%暗く |
| フォント | 16px / Bold / letter-spacing 0.02em |
| 余白（内側）| 左右40px / 上下16px |
| ホバー | background 10%ダーク / transform scale(1.02) |
| アニメーション | transition 0.2s ease |
| レスポンシブ | SP: width 100% / 高さ52px |
| アクセシビリティ | focus-visible outline 2px offset 2px |
| 推奨Section | Hero / CTA / Pricing / Profile |
| スコア | **88** |
| ランク | **S** |

---

### BUTTON-002
**Primary Filled ラウンド 中（サブCTA）**

| 項目 | 内容 |
|------|------|
| 名称 | Primary Filled ラウンド 中 |
| カテゴリ | Filled Primary |
| 高さ | 48px |
| 角丸 | 8px |
| 利用業種 | 全般 |
| 利用目的 | セクション内サブCTA / ナビゲーション |
| デザイン特徴 | Primary色 / 白テキスト / やや小さめ |
| フォント | 15px / SemiBold |
| 余白（内側）| 左右32px / 上下12px |
| ホバー | background 10%ダーク |
| レスポンシブ | SP: 高さ44px |
| 推奨Section | Feature / Voice / Navigation |
| スコア | **85** |
| ランク | **S** |

---

### BUTTON-003
**Primary Filled ピル型 大（高CV・美容系最強）**

| 項目 | 内容 |
|------|------|
| 名称 | Primary Filled ピル型 大 |
| カテゴリ | Filled Primary |
| 高さ | 56px |
| 角丸 | 28px（ピル型）|
| 最小幅 | 240px |
| 利用業種 | 美容 / スクール / D2C / 全般 |
| 利用目的 | 高CV・メインCTA |
| デザイン特徴 | ピル型の柔らかさ / アクセントカラー / 影付き |
| フォント | 16px / Bold |
| shadow | 0 8px 24px rgba(Brand,0.4) |
| ホバー | translateY(-2px) / shadow強化 |
| レスポンシブ | SP: width 100% / 角丸 24px |
| 推奨Section | Hero / CTA / Pricing |
| スコア | **91** |
| ランク | **S+** |

---

### BUTTON-004
**Primary Filled ピル型 中**

| 項目 | 内容 |
|------|------|
| 名称 | Primary Filled ピル型 中 |
| カテゴリ | Filled Primary |
| 高さ | 48px |
| 角丸 | 24px |
| 利用業種 | 全般 |
| 利用目的 | セクション内CTA / カードCTA |
| デザイン特徴 | ピル型 / ブランドカラー / 軽い影 |
| ホバー | translateY(-1px) / shadow強化 |
| レスポンシブ | SP: 高さ44px |
| 推奨Section | Feature / Card / CTA |
| スコア | **86** |
| ランク | **S** |

---

### BUTTON-005
**Primary Filled スクエア（コーポレート・BtoB）**

| 項目 | 内容 |
|------|------|
| 名称 | Primary Filled スクエア 角丸なし |
| カテゴリ | Filled Primary |
| 高さ | 56px |
| 角丸 | 2〜4px |
| 利用業種 | コーポレート / 士業 / BtoB / 不動産 |
| 利用目的 | 信頼感・フォーマル感を出すCTA |
| デザイン特徴 | 角丸最小 / 直線的デザイン / 紺・グレー系配色 |
| ホバー | background 8%ダーク |
| 推奨Section | Hero / CTA（コーポレート系）|
| スコア | **80** |
| ランク | **A+** |

---

### BUTTON-006
**Primary Filled アイコン右矢印付き**

| 項目 | 内容 |
|------|------|
| 名称 | Primary Filled 右矢印アイコン付き |
| カテゴリ | Filled Primary |
| 高さ | 56px |
| 角丸 | 8〜28px |
| 利用業種 | 全般 |
| 利用目的 | 「次へ」「詳しく見る」など行動誘導 |
| デザイン特徴 | テキスト＋→矢印アイコン（8px gap）|
| ホバー | icon translateX(4px) / button scale(1.01) |
| アニメーション | icon のみ動く 0.2s |
| 推奨Section | Hero / CTA / Feature |
| スコア | **88** |
| ランク | **S** |

---

### BUTTON-007
**Primary Filled アイコン左付き（LINE等）**

| 項目 | 内容 |
|------|------|
| 名称 | Primary Filled 左アイコン付き |
| カテゴリ | Filled Primary |
| 高さ | 56px |
| 角丸 | 8〜28px |
| 利用業種 | 全般 |
| 利用目的 | LINE・電話など特定行動への誘導 |
| デザイン特徴 | SVGアイコン（20〜24px）左 / テキスト右 / 8px gap |
| 推奨Section | CTA / Hero |
| スコア | **87** |
| ランク | **S** |

---

### BUTTON-008
**Primary Filled フルワイド（SP最強）**

| 項目 | 内容 |
|------|------|
| 名称 | Primary Filled width:100% フルワイド |
| カテゴリ | Filled Primary |
| 高さ | 56〜64px |
| 角丸 | 8〜12px |
| 利用業種 | 全般 |
| 利用目的 | スマホでの高タップ率CTA |
| デザイン特徴 | 幅100% / 高さ大きめ / アイコン付き推奨 |
| レスポンシブ | SP専用（PCでは幅制限）|
| 推奨Section | CTA（SP）/ Hero（SP）/ 固定バー |
| スコア | **90** |
| ランク | **S+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 02 ｜ Outlined（枠線）
## ━━━━━━━━━━━━━━━━━━━━━

---

### BUTTON-009
**Outlined Primary ラウンド（サブアクション）**

| 項目 | 内容 |
|------|------|
| 名称 | Outlined Primary ラウンド |
| カテゴリ | Outlined |
| 高さ | 56px |
| 角丸 | 8px |
| 利用業種 | 全般 |
| 利用目的 | サブCTA（主ボタンと並べる）|
| デザイン特徴 | border 2px Primary色 / テキスト Primary色 / 背景透明 |
| ホバー | background Primary色 10%透明 / テキスト Primary色 |
| 推奨Section | Hero（2ボタン）/ Pricing（プラン選択）|
| スコア | **84** |
| ランク | **S** |

---

### BUTTON-010
**Outlined Primary ピル型**

| 項目 | 内容 |
|------|------|
| 名称 | Outlined ピル型 Primary |
| カテゴリ | Outlined |
| 高さ | 56px |
| 角丸 | 28px |
| 利用業種 | 全般 |
| 利用目的 | サブCTA / 柔らかいサブ選択 |
| デザイン特徴 | border 2px / ピル型 / 優しい印象 |
| 推奨Section | Hero / CTA / Pricing |
| スコア | **82** |
| ランク | **A+** |

---

### BUTTON-011
**Outlined Dark（白背景 黒枠線）**

| 項目 | 内容 |
|------|------|
| 名称 | Outlined Dark 黒枠線 白背景 |
| カテゴリ | Outlined |
| 高さ | 56px |
| 角丸 | 4〜8px |
| 利用業種 | コーポレート / SaaS / ミニマルデザイン |
| 利用目的 | ミニマルなサブCTA |
| デザイン特徴 | border 1.5〜2px #000〜#333 / 白背景 / 黒テキスト |
| ホバー | background #000 / テキスト白 |
| 推奨Section | Hero / Feature / Navigation |
| スコア | **81** |
| ランク | **A+** |

---

### BUTTON-012
**Outlined White（ダーク背景用）**

| 項目 | 内容 |
|------|------|
| 名称 | Outlined White ダーク背景専用 |
| カテゴリ | Outlined |
| 高さ | 56px |
| 角丸 | 8〜28px |
| 利用業種 | SaaS / テック / 映像制作 |
| 利用目的 | ダーク背景でのサブCTA |
| デザイン特徴 | border 2px white / テキスト白 / 背景透明 |
| ホバー | background white 15% / テキスト白 |
| 推奨Section | Hero（ダーク）/ CTA（ダーク）|
| スコア | **83** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 03 ｜ Ghost / テキストリンク型
## ━━━━━━━━━━━━━━━━━━━━━

---

### BUTTON-013
**Ghost テキストのみ（最小CTA）**

| 項目 | 内容 |
|------|------|
| 名称 | Ghost テキストのみ 下線付き |
| カテゴリ | Ghost |
| 高さ | 40px（実質テキスト高）|
| 利用業種 | 全般 |
| 利用目的 | 低優先度のリンク / 詳細ページ遷移 |
| デザイン特徴 | テキスト＋下線 or 下線なし / ブランドカラー or Primary |
| ホバー | 下線 / opacity 0.7 |
| 推奨Section | Navigation / FAQ / Footer |
| スコア | **74** |
| ランク | **A** |

---

### BUTTON-014
**Ghost アイコン＋テキスト（→ もっと見る）**

| 項目 | 内容 |
|------|------|
| 名称 | Ghost 矢印アイコン＋テキスト |
| カテゴリ | Ghost |
| 高さ | 44px |
| 利用業種 | 全般 |
| 利用目的 | 「もっと見る」「詳細を見る」などページ内遷移 |
| デザイン特徴 | テキスト＋→ / 下線 / ブランドカラー |
| ホバー | → translateX(4px) |
| 推奨Section | Feature / Voice / Blog |
| スコア | **78** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 04 ｜ Gradient（グラデーション）
## ━━━━━━━━━━━━━━━━━━━━━

---

### BUTTON-015
**Gradient 横（左→右 高デザイン性）**

| 項目 | 内容 |
|------|------|
| 名称 | Gradient Horizontal 左→右 |
| カテゴリ | Gradient |
| 高さ | 56px |
| 角丸 | 8〜28px |
| 利用業種 | 美容 / SaaS / スタートアップ / ブランド |
| 利用目的 | 高デザイン性CTA / インパクト重視 |
| デザイン特徴 | linear-gradient(135deg, Color1, Color2) / 白テキスト / shadow付き |
| ホバー | background-position shift または明度UP |
| 推奨Section | Hero / CTA |
| スコア | **87** |
| ランク | **S** |

---

### BUTTON-016
**Gradient Purple-Blue（SaaS定番）**

| 項目 | 内容 |
|------|------|
| 名称 | Gradient Purple→Blue SaaS定番 |
| カテゴリ | Gradient |
| 高さ | 56px |
| 角丸 | 8〜12px |
| 利用業種 | SaaS / テック / AI / スタートアップ |
| 利用目的 | テクノロジー感のある高品質CTA |
| デザイン特徴 | #6366f1→#06b6d4 / 白テキスト / shadow glow |
| ホバー | opacity 0.9 / glow強化 |
| 推奨Section | Hero / CTA |
| スコア | **86** |
| ランク | **S** |

---

### BUTTON-017
**Gradient Pink-Orange（美容・D2C）**

| 項目 | 内容 |
|------|------|
| 名称 | Gradient Pink→Orange 美容・D2C |
| カテゴリ | Gradient |
| 高さ | 56px |
| 角丸 | 28px（ピル推奨）|
| 利用業種 | 美容 / D2C / ウェルネス / コスメ |
| 利用目的 | 女性向け高CV・暖色系CTA |
| デザイン特徴 | #f472b6→#fb923c / ピル型 / shadow warm |
| ホバー | scale(1.03) / shadow強化 |
| 推奨Section | Hero / CTA / Pricing |
| スコア | **88** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 05 ｜ Dark / Glass / Neon
## ━━━━━━━━━━━━━━━━━━━━━

---

### BUTTON-018
**Dark Primary（ダーク背景用主ボタン）**

| 項目 | 内容 |
|------|------|
| 名称 | Dark Filled Primary ダーク背景専用 |
| カテゴリ | Dark |
| 高さ | 56px |
| 角丸 | 8〜12px |
| 利用業種 | SaaS / 映像制作 / クリエイター / テック |
| 利用目的 | ダーク系LPのメインCTA |
| デザイン特徴 | 白 or アクセントカラー背景 / 黒テキスト or 白テキスト |
| ホバー | scale(1.02) / brightness(1.1) |
| 推奨Section | Hero（ダーク）/ CTA-002 |
| スコア | **85** |
| ランク | **S** |

---

### BUTTON-019
**Glass Morphism（半透明ガラス）**

| 項目 | 内容 |
|------|------|
| 名称 | Glass Morphism 半透明 |
| カテゴリ | Glass |
| 高さ | 56px |
| 角丸 | 12〜16px |
| 利用業種 | 高級ホテル / クリエイター / ブランド |
| 利用目的 | 背景写真上でのオーバーレイボタン |
| デザイン特徴 | background rgba(255,255,255,0.15) / backdrop-filter blur(10px) / border rgba(255,255,255,0.3) / 白テキスト |
| ホバー | background rgba(255,255,255,0.25) |
| 推奨Section | Hero（背景写真）/ フルワイドセクション |
| スコア | **83** |
| ランク | **S** |

---

### BUTTON-020
**Neon Glow（発光ボーダー）**

| 項目 | 内容 |
|------|------|
| 名称 | Neon Glow 発光エフェクト |
| カテゴリ | Neon |
| 高さ | 56px |
| 角丸 | 4〜8px |
| 利用業種 | ゲーム / 映像 / イベント / ナイトクラブ |
| 利用目的 | 極めて強いインパクトが必要な場面 |
| デザイン特徴 | border 2px neonカラー / box-shadow 0 0 20px neonカラー / 黒背景 |
| ホバー | glow拡大 0 0 40px |
| 推奨Section | Hero（特殊業種）|
| スコア | **72** |
| ランク | **A** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 06 ｜ 日本LP特化 CTA Button
## ━━━━━━━━━━━━━━━━━━━━━

---

### BUTTON-021
**LINE公式ボタン（日本LP最強）**

| 項目 | 内容 |
|------|------|
| 名称 | LINE公式ボタン 緑×白 |
| カテゴリ | LINE CTA |
| 高さ | 56〜64px |
| 角丸 | 8〜28px |
| 利用業種 | 美容 / 医療 / 飲食 / 採用 / 全般 |
| 利用目的 | LINE公式での問い合わせ・予約・集客 |
| デザイン特徴 | background #06C755（LINE緑）/ 白テキスト / LINEアイコン左 |
| フォント | 16〜18px / Bold |
| ホバー | #05a848（10%ダーク）|
| アニメーション | pulse アニメーション推奨（注目度UP）|
| レスポンシブ | SP: width 100% |
| 推奨Section | CTA-011 / CTA-013 / CTA-039 / Hero |
| スコア | **93** |
| ランク | **S+** |

---

### BUTTON-022
**電話クリックTELボタン（シニア・急ぎ層向け）**

| 項目 | 内容 |
|------|------|
| 名称 | クリックTEL 電話番号大表示ボタン |
| カテゴリ | 電話CTA |
| 高さ | 56〜72px |
| 角丸 | 8〜28px |
| 利用業種 | 医療 / 士業 / 不動産 / シニア向け全般 |
| 利用目的 | 電話での問い合わせ（即時）|
| デザイン特徴 | 電話アイコン左 / 大きい電話番号（20〜24px）/ 赤 or ブランドカラー |
| フォント | 電話番号は20〜24px / Bold |
| href | tel:XXXX-XXXX-XXXX |
| 推奨Section | CTA-018 / CTA-019 / CTA-022 |
| スコア | **88** |
| ランク | **S** |

---

### BUTTON-023
**「今すぐ無料相談する」定番型**

| 項目 | 内容 |
|------|------|
| 名称 | 「今すぐ無料相談する」日本LP定番 |
| カテゴリ | 無料相談CTA |
| 高さ | 64〜72px |
| 角丸 | 8〜36px |
| 利用業種 | 士業 / コンサル / 美容 / 医療 / スクール |
| 利用目的 | 「今すぐ」「無料」「相談」3点で背中を押す |
| デザイン特徴 | アクセントカラー（赤・オレンジ・緑など）/ 大テキスト / shadow強め |
| 文言例 | 「今すぐ無料相談する →」「無料で相談してみる」 |
| アニメーション | pulse推奨（1〜2秒ループ）|
| 推奨Section | CTA-039 / CTA-048 / Profile直後 |
| スコア | **92** |
| ランク | **S+** |

---

### BUTTON-024
**「無料で予約する」予約特化型**

| 項目 | 内容 |
|------|------|
| 名称 | 予約特化 「無料で予約する」 |
| カテゴリ | 予約CTA |
| 高さ | 64px |
| 角丸 | 8〜36px |
| 利用業種 | 美容 / 医療 / 飲食 / スクール / フィットネス |
| 利用目的 | カレンダー予約・Web予約への誘導 |
| デザイン特徴 | カレンダーアイコン左 / アクセントカラー / 大テキスト |
| 推奨Section | CTA-020 / CTA-039 / Flow最終ステップ |
| スコア | **89** |
| ランク | **S** |

---

### BUTTON-025
**「無料で資料請求する」資料請求型**

| 項目 | 内容 |
|------|------|
| 名称 | 資料請求特化 無料ダウンロード型 |
| カテゴリ | 資料請求CTA |
| 高さ | 56〜64px |
| 角丸 | 8〜16px |
| 利用業種 | BtoB / SaaS / 不動産 / スクール |
| 利用目的 | リード獲得（資料・PDF）|
| デザイン特徴 | ダウンロードアイコン or 封筒アイコン左 / ブランドカラー |
| 文言例 | 「無料で資料を受け取る」「今すぐダウンロード」 |
| 推奨Section | CTA-008 / Hero（BtoB）|
| スコア | **85** |
| ランク | **S** |

---

### BUTTON-026
**「まずは無料で試す」SaaS試用型**

| 項目 | 内容 |
|------|------|
| 名称 | SaaS無料トライアル 試用特化型 |
| カテゴリ | 試用CTA |
| 高さ | 56〜64px |
| 角丸 | 8〜12px |
| 利用業種 | SaaS / テック / アプリ |
| 利用目的 | クレカ不要・リスクゼロ感で登録ハードルを下げる |
| デザイン特徴 | ブランドカラー / ※クレジットカード不要の小テキストを下に |
| 文言例 | 「14日間無料で試す」「今すぐ無料で始める」 |
| 補足テキスト | ボタン下に「クレジットカード不要」8〜12px グレー |
| 推奨Section | Hero / CTA-001 / Pricing |
| スコア | **90** |
| ランク | **S+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 07 ｜ 業種別特化ボタン
## ━━━━━━━━━━━━━━━━━━━━━

---

### BUTTON-027
**美容サロン予約ボタン（ピンク・女性向け）**

| 項目 | 内容 |
|------|------|
| 名称 | 美容サロン予約ボタン ピンク系 |
| カテゴリ | 美容特化 |
| 高さ | 64px |
| 角丸 | 32px（ピル型推奨）|
| 利用業種 | 美容院 / エステ / ネイル / 美容クリニック |
| 配色 | #f472b6〜#ec4899 / 白テキスト |
| 文言例 | 「今すぐ予約する」「初回限定で予約する」 |
| ホバー | scale(1.03) / shadow warm |
| 推奨Section | CTA-040 / CTA-039 |
| スコア | **88** |
| ランク | **S** |

---

### BUTTON-028
**医療予約ボタン（青・清潔感）**

| 項目 | 内容 |
|------|------|
| 名称 | 医療クリニック予約ボタン 清潔感ブルー |
| カテゴリ | 医療特化 |
| 高さ | 64px |
| 角丸 | 8〜12px |
| 利用業種 | クリニック / 病院 / 歯科 |
| 配色 | #0ea5e9〜#0284c7 / 白テキスト |
| 文言例 | 「無料カウンセリングを予約する」「初診を予約する」 |
| 推奨Section | CTA-020 / CTA-039 |
| スコア | **87** |
| ランク | **S** |

---

### BUTTON-029
**ECカートボタン（購入・オレンジ）**

| 項目 | 内容 |
|------|------|
| 名称 | EC カートに入れる / 今すぐ購入 |
| カテゴリ | EC特化 |
| 高さ | 56px |
| 角丸 | 4〜8px |
| 利用業種 | EC / D2C / 物販 |
| 配色 | #f97316〜#ea580c / 白テキスト（Amazonオレンジ参考）|
| 文言例 | 「カートに入れる」「今すぐ購入する」 |
| 推奨Section | Pricing / CTA |
| スコア | **85** |
| ランク | **S** |

---

### BUTTON-030
**採用エントリーボタン（ネイビー・誠実）**

| 項目 | 内容 |
|------|------|
| 名称 | 採用エントリーボタン ネイビー誠実系 |
| カテゴリ | 採用特化 |
| 高さ | 56px |
| 角丸 | 8〜12px |
| 利用業種 | 採用 / HR |
| 配色 | #1e3a8a〜#1d4ed8 / 白テキスト |
| 文言例 | 「応募する」「エントリーはこちら」 |
| 推奨Section | CTA / Hero（採用LP）|
| スコア | **82** |
| ランク | **A+** |

---

### BUTTON-031
**スクール無料体験ボタン（緑・安心）**

| 項目 | 内容 |
|------|------|
| 名称 | スクール無料体験申込ボタン 安心グリーン |
| カテゴリ | スクール特化 |
| 高さ | 64px |
| 角丸 | 8〜28px |
| 利用業種 | スクール / 塾 / 習い事 |
| 配色 | #16a34a〜#15803d / 白テキスト |
| 文言例 | 「無料体験に申し込む」「体験レッスンを予約する」 |
| 推奨Section | CTA-006 / CTA-039 |
| スコア | **86** |
| ランク | **S** |

---

### BUTTON-032
**不動産相談ボタン（茶・土地感）**

| 項目 | 内容 |
|------|------|
| 名称 | 不動産 無料相談ボタン |
| カテゴリ | 不動産特化 |
| 高さ | 56px |
| 角丸 | 4〜8px |
| 利用業種 | 不動産 / 建築 / リフォーム |
| 配色 | #92400e〜#b45309（温かみある茶系）または紺系 |
| 文言例 | 「無料で相談する」「物件を探す」 |
| 推奨Section | CTA / Hero |
| スコア | **79** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 08 ｜ 特殊エフェクト
## ━━━━━━━━━━━━━━━━━━━━━

---

### BUTTON-033
**Pulse アニメーション（注目・緊急性）**

| 項目 | 内容 |
|------|------|
| 名称 | Pulse アニメーション 注目ボタン |
| カテゴリ | アニメーション |
| 高さ | 56〜64px |
| 角丸 | 8〜28px |
| 利用業種 | 全般（緊急性・限定感が必要な場合）|
| 利用目的 | 「今すぐ」感を視覚的に演出 |
| デザイン特徴 | box-shadow pulse アニメーション / ブランドカラー ripple |
| CSS | @keyframes pulse { 0%{box-shadow:0 0 0 0 rgba(Brand,0.4)} 70%{box-shadow:0 0 0 10px rgba(Brand,0)} } |
| 推奨Section | CTA-007 / CTA-010 / CTA-032 |
| スコア | **86** |
| ランク | **S** |

---

### BUTTON-034
**Shimmer（光が流れる）**

| 項目 | 内容 |
|------|------|
| 名称 | Shimmer 光が流れるエフェクト |
| カテゴリ | アニメーション |
| 高さ | 56px |
| 角丸 | 8〜28px |
| 利用業種 | 美容 / 高級ブランド / EC |
| 利用目的 | プレミアム感・特別感の演出 |
| デザイン特徴 | ::after 疑似要素で光の筋が左→右に流れる |
| CSS | linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent) / animation shimmer 2s infinite |
| 推奨Section | Hero / Pricing（限定プラン）|
| スコア | **82** |
| ランク | **A+** |

---

### BUTTON-035
**スマホ固定バーボタン（常時表示）**

| 項目 | 内容 |
|------|------|
| 名称 | スマホ下部固定バー CTA |
| カテゴリ | 固定UI |
| 高さ | 56〜60px |
| 角丸 | 0（バー型）または 8px（バー内）|
| 利用業種 | 美容 / 医療 / 全般 |
| 利用目的 | スクロール中も常にCTAが見える状態を作る |
| デザイン特徴 | position fixed / bottom 0 / width 100% / アクセントカラー |
| CSS | position:fixed; bottom:0; left:0; width:100%; z-index:100 |
| 推奨Section | CTA-034（スマホ固定バー）|
| スコア | **93** |
| ランク | **S+** |

---

### BUTTON-036
**3D Shadow ボタン（押し込み感）**

| 項目 | 内容 |
|------|------|
| 名称 | 3D Shadow 押し込み感ボタン |
| カテゴリ | 特殊デザイン |
| 高さ | 56px |
| 角丸 | 8px |
| 利用業種 | ゲーム / アプリ / EC |
| デザイン特徴 | box-shadow 下方向 4〜6px / クリック時 translateY(2px) shadow縮小 |
| CSS | box-shadow: 0 6px 0 darken(Brand,20%); active: translateY(4px), box-shadow:0 2px 0 |
| 推奨Section | Hero / Pricing |
| スコア | **77** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 09 ｜ サイズバリエーション
## ━━━━━━━━━━━━━━━━━━━━━

---

### BUTTON-037
**XL ヒーロー専用（最大CTA）**

| 項目 | 内容 |
|------|------|
| 名称 | XL Hero専用 最大CTA |
| カテゴリ | サイズ: XL |
| 高さ | 72〜80px |
| 角丸 | 8〜40px |
| フォント | 18〜20px / Bold |
| 余白 | 左右56px |
| 利用目的 | Hero唯一のCTA。圧倒的な存在感 |
| 推奨Section | Hero |
| スコア | **87** |
| ランク | **S** |

---

### BUTTON-038
**SM インライン・補助ボタン**

| 項目 | 内容 |
|------|------|
| 名称 | Small インラインボタン |
| カテゴリ | サイズ: SM |
| 高さ | 36px |
| 角丸 | 4〜18px |
| フォント | 13〜14px |
| 余白 | 左右20px |
| 利用目的 | テキスト内・タグ的・二次アクション |
| 推奨Section | Feature / Navigation / Card |
| スコア | **75** |
| ランク | **A** |

---

### BUTTON-039
**XS タグ的ボタン（絞り込み・カテゴリ）**

| 項目 | 内容 |
|------|------|
| 名称 | XS タグ的ボタン |
| カテゴリ | サイズ: XS |
| 高さ | 28〜32px |
| 角丸 | 4〜16px |
| フォント | 12px |
| 余白 | 左右12px |
| 利用目的 | カテゴリ絞り込み / タグフィルター |
| 推奨Section | Blog / Portfolio / FAQ |
| スコア | **72** |
| ランク | **A** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 10 ｜ 特殊用途
## ━━━━━━━━━━━━━━━━━━━━━

---

### BUTTON-040
**2ボタン並列（主＋副）**

| 項目 | 内容 |
|------|------|
| 名称 | 2ボタン並列 Primary＋Secondary |
| カテゴリ | 複合 |
| 高さ | 56px × 2 |
| レイアウト | 横並び / 間隔16px |
| 利用業種 | SaaS / コーポレート / スクール |
| 利用目的 | 確信層（Primary）と検討層（Secondary）を同時に受け皿にする |
| 組み合わせ例 | 「今すぐ申込む」（Filled）＋「詳しく見る」（Outlined）|
| レスポンシブ | SP: 縦並びスタック |
| 推奨Section | Hero / CTA-021 / Pricing |
| スコア | **89** |
| ランク | **S** |

---

### BUTTON-041
**Social Login ボタン（Google等）**

| 項目 | 内容 |
|------|------|
| 名称 | Social Login Google/Apple ボタン |
| カテゴリ | 認証 |
| 高さ | 52px |
| 角丸 | 8px |
| 利用業種 | SaaS / アプリ / EC |
| デザイン特徴 | 白背景 / border #dadce0 / Googleカラーアイコン左 |
| 推奨Section | ログイン / 登録フォーム |
| スコア | **80** |
| ランク | **A+** |

---

### BUTTON-042
**Loading State ボタン（送信中）**

| 項目 | 内容 |
|------|------|
| 名称 | Loading State スピナー付き |
| カテゴリ | State |
| 高さ | 56px |
| 利用業種 | 全般（フォーム送信時）|
| デザイン特徴 | スピナーアイコン左 / テキスト「送信中...」/ opacity 0.7 / cursor disabled |
| 実装 | disabled属性 + loading class |
| 推奨Section | Contact Form / CTA Form |
| スコア | **83** |
| ランク | **S** |

---

### BUTTON-043
**Disabled State ボタン**

| 項目 | 内容 |
|------|------|
| 名称 | Disabled State 非活性ボタン |
| カテゴリ | State |
| 高さ | 56px |
| 利用業種 | 全般 |
| デザイン特徴 | background #d1d5db / テキスト #9ca3af / cursor not-allowed |
| アクセシビリティ | aria-disabled="true" |
| 推奨Section | Form / Pricing |
| スコア | **76** |
| ランク | **A** |

---

### BUTTON-044
**Icon Only ボタン（アイコン単独）**

| 項目 | 内容 |
|------|------|
| 名称 | Icon Only 正方形ボタン |
| カテゴリ | アイコン |
| サイズ | 44×44px（最小タップ目安）|
| 角丸 | 8〜50% |
| 利用業種 | 全般 |
| 利用目的 | SNS / 閉じる / 検索 / メニューなど |
| アクセシビリティ | aria-label必須 |
| 推奨Section | Navigation / Footer / Modal |
| スコア | **78** |
| ランク | **A+** |

---

### BUTTON-045
**Floating Action Button（右下固定）**

| 項目 | 内容 |
|------|------|
| 名称 | FAB Floating Action Button 右下固定 |
| カテゴリ | 固定UI |
| サイズ | 56×56px（円形）|
| 角丸 | 50% |
| 利用業種 | 全般（LINE・チャット・スクロールトップ）|
| 利用目的 | 常時表示の補助CTA |
| デザイン特徴 | position fixed / right 24px / bottom 24px / ブランドカラー / shadow強め |
| 推奨Section | CTA-036 |
| スコア | **82** |
| ランク | **A+** |

---

## ランク別サマリー

### S+ ランク（90点以上）
| ID | 名称 | スコア |
|----|------|--------|
| BUTTON-021 | LINE公式ボタン | 93 |
| BUTTON-035 | スマホ固定バーボタン | 93 |
| BUTTON-023 | 「今すぐ無料相談する」 | 92 |
| BUTTON-026 | SaaS無料トライアル | 90 |
| BUTTON-008 | Primary フルワイド | 90 |
| BUTTON-003 | Primary ピル型 大 | 91 |

### S ランク（83〜89点）
| ID | 名称 | スコア |
|----|------|--------|
| BUTTON-040 | 2ボタン並列 | 89 |
| BUTTON-024 | 予約特化ボタン | 89 |
| BUTTON-017 | Gradient Pink-Orange | 88 |
| BUTTON-006 | 右矢印アイコン付き | 88 |
| BUTTON-007 | 左アイコン付き | 87 |
| BUTTON-022 | 電話クリックTEL | 88 |
| BUTTON-027 | 美容サロン予約 | 88 |
| BUTTON-028 | 医療予約（ブルー）| 87 |
| BUTTON-015 | Gradient 横 | 87 |
| BUTTON-037 | XL Hero専用 | 87 |
| BUTTON-001 | Primary Filled 大 | 88 |
| BUTTON-033 | Pulse アニメーション | 86 |
| BUTTON-031 | スクール無料体験 | 86 |
| BUTTON-004 | Primary ピル型 中 | 86 |
| BUTTON-016 | Gradient Purple-Blue | 86 |
| BUTTON-025 | 資料請求ボタン | 85 |
| BUTTON-002 | Primary Filled 中 | 85 |
| BUTTON-029 | ECカートボタン | 85 |
| BUTTON-018 | Dark Primary | 85 |
| BUTTON-009 | Outlined Primary | 84 |
| BUTTON-042 | Loading State | 83 |
| BUTTON-019 | Glass Morphism | 83 |
| BUTTON-012 | Outlined White | 83 |


---

## take-design-portfolio 実務ログからの統合知見（2026-07-12 追加分）

> 以下は実案件12件のLP制作から得られた実装知見（旧 take-design-portfolio/knowledge 側の記録）。上記ライブラリと重複しない実装レベルの具体例・検証結果として保持する。

## 実案件からの知見（2026-07-12 追加）

12件の実LP（ai-school-lp, beauty-salon-lp, business-design-academy-lp, career-compass-lp, dental-clinic-lp, elearning-lp, finance-lp, hoikushi-mikata-lp, lumia-lp, mirai-ryo-lp, rapas-lp, restaurant-lp）のインラインCSS／外部CSSを実地調査し、実際に使われていたボタン実装パターンを記録する。

### 形状：ピル型（border-radius: 999px）が主流

CTAボタンは角丸長方形よりも完全な「ピル型」が優勢。実測値：

- `finance-lp/index.html` `.btn { border-radius: 999px; padding: 16px 32px; }`
- `ai-school-lp/index.html` `.btn { border-radius: 999px; min-width: 220px; padding: 17px 32px; }`
- `restaurant-lp/index.html` `.btn { border-radius: 999px; padding: 16px 36px; background: #d8a76a; }`
- `career-compass-lp/index.html` `.fixed-cta { border-radius: 999px; padding: 14px 24px; }`

一方、`rapas-lp/index.html` は `.btn { border-radius: var(--r); }`（`--r: 16px`）とやや角丸長方形寄りで、業種・ブランドトーンに応じて16px角丸とピル型の2系統が使い分けられている。

### Hover：translateY + box-shadow拡大がほぼ全案件共通

ほぼ全てのプライマリボタンで「上に2〜4px浮かせつつ影を拡大」というホバー表現が使われている。ブランドカラーに合わせたrgba影色が特徴。

```css
/* rapas-lp/index.html */
.btn-cta {
  background: linear-gradient(135deg, var(--cta) 0%, var(--cta-dark) 100%);
  color: #fff;
  box-shadow: 0 6px 24px rgba(249,115,22,.38);
}
.btn-cta:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(249,115,22,.48); }
```

```css
/* ai-school-lp/index.html */
.btn-primary { background: var(--grad-solid); color: #fff; box-shadow: 0 18px 45px rgba(59,130,246,.28); }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 22px 55px rgba(124,58,237,.4); }
```

`mirai-ryo-lp/index.html` の `.reason-card:hover`, `beauty-salon-lp/index.html` の `.ba-card:hover` 等、カードのホバーにも同じ「translateY + shadow拡大」が使われており、ボタンとカードでホバー言語が統一されている案件が多い。

### グラデーション塗り + 単色アウトラインの2系統構成

多くの案件で「プライマリ＝斜め45度グラデーション塗り／セカンダリ＝アウトライン」の組み合わせが採用されている。

- `rapas-lp/index.html`: `.btn-cta`（グラデーション）/ `.btn-ghost`（白背景+2px枠線）/ `.btn-line`（LINE公式カラー `#06C755` 単色塗り、LINE登録導線専用）
- `lumia-lp/style.css`: `.btn--line`（塗り） / `.btn--ghost`（`border: 1.5px solid` transparent bg）。サイズバリアントは `.btn--sm/--lg/--xl` で `padding` と `font-size` のみ差し替え
- `finance-lp/index.html`, `career-compass-lp/index.html`, `dental-clinic-lp/index.html`: いずれも `.btn-primary`（塗り）/ `.btn-outline`（枠線）の2種構成

日本のLPでは「LINE登録」を主要CVとする案件（rapas-lp, mirai-ryo-lp）で、LINE公式グリーン（`#06C755`）をそのまま採用したボタンが独立したバリアントとして定義されている点は再利用価値が高い。

### BTN-006 フローティングCTAボタン：実装パターンあり

固定フッターCTA（画面右下 or 全幅下部固定）が4案件で確認できた。共通して「ピル型・ブランドカラー・強い影・スクロールで表示/非表示」という設計。

```css
/* career-compass-lp/index.html */
.fixed-cta{position:fixed;right:20px;bottom:20px;z-index:60;background:var(--blue);
  color:#fff;border-radius:999px;padding:14px 24px;font-weight:900;font-size:14px;
  box-shadow:0 8px 32px rgba(37,99,235,.36);transition:.2s ease}
.fixed-cta:hover{transform:translateY(-2px)}
@media(max-width:960px){ .fixed-cta{left:16px;right:16px;text-align:center} }
```

```css
/* hoikushi-mikata-lp/index.html：スクロール連動の表示制御（opacity + pointer-events） */
.fixed-cta {
  position: fixed; right: 18px; bottom: 22px; z-index: 60;
  background: linear-gradient(135deg, var(--pink), #ff8ab0);
  border-radius: 999px; padding: 13px 22px;
  box-shadow: 0 12px 32px rgba(248,95,145,.38);
  opacity: 0; pointer-events: none;
  transition: opacity .3s ease, transform .3s ease;
  transform: translateY(8px);
}
.fixed-cta.show { opacity: 1; pointer-events: auto; transform: translateY(0); }
```

`rapas-lp/index.html` の `.floating-btn` も同型（グラデーション+`box-shadow:0 4px 18px rgba(249,115,22,.38)`）。モバイルでは `.floating-cta-text`（付随テキスト）を `display:none` にしてボタンのみ全幅表示にする調整が共通していた。

### ステップフォームの送信ボタン

`mirai-ryo-lp/index.html` の複数ステップ相談フォームでは、送信ボタンにインラインスタイルで `width:100%; font-size:16px; padding:18px` を追加指定し、他のボタンより一回り大きくして視認性を強調していた（実装は `.btn` クラス + `style=""` の併用）。

### 業種別カラーの実測値（裏付け）

- 医療・歯科: `dental-clinic-lp/index.html` `--primary:#2563eb`
- 金融: `finance-lp/index.html` `--primary: var(--primary)`（青系、`.btn-primary` box-shadow `rgba(29,78,216,.24)`）
- 保育・子育て: `hoikushi-mikata-lp/index.html` `--pink: #f85f91`
- 飲食: `restaurant-lp/index.html` ボタン背景 `#d8a76a`（ゴールドベージュ、食欲色というより高級感訴求）
- CTA共通オレンジ: `rapas-lp/index.html` `--cta: #F97316`（業種を問わず「今すぐ行動」を促す色として単独のCTA変数を持つ設計が複数案件で共通）
