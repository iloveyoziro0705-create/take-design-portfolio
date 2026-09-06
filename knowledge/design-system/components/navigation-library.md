# Navigation Library
> Design System Phase 9 — Navigation Component 完全ライブラリ
> 参考: Land-book / Lapa Ninja / One Page Love / Awwwards / Godly
> 収録パターン数: 34件
> 最終更新: 2026-07-04

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 01 ｜ Desktop Header Navigation
## ━━━━━━━━━━━━━━━━━━━━━

---

### NAV-001
**Desktop Header 標準型（ロゴ左・リンク右）**

| 項目 | 内容 |
|------|------|
| 名称 | Desktop Header 標準 ロゴ左・メニュー右 |
| カテゴリ | Desktop Header |
| 高さ | 64〜80px |
| レイアウト | ロゴ（左）/ メニューリンク（中央または右）/ CTAボタン（右端）|
| デザイン特徴 | 白背景 / border-bottom: 1px #E5E7EB / または shadow-sm |
| スクロール挙動 | sticky top: 0 / 背景白（または透明→白） |
| 推奨Section | LP全般 |
| スコア | **88** |
| ランク | **S** |

---

### NAV-002
**Desktop Header 透明→スクロールで白（Transparent Sticky）**

| 項目 | 内容 |
|------|------|
| 名称 | Transparent Sticky Header |
| カテゴリ | Desktop Header |
| 高さ | 80px |
| デザイン特徴 | 初期: 背景透明 / テキスト白（背景画像の上）/ スクロール後: 白背景 + shadow-sm |
| 実装 | JS scroll event or CSS scroll-timeline |
| 推奨Section | Hero 背景画像型 |
| スコア | **87** |
| ランク | **S** |

---

### NAV-003
**Desktop Header センターロゴ型**

| 項目 | 内容 |
|------|------|
| 名称 | Center Logo Header |
| カテゴリ | Desktop Header |
| レイアウト | メニューリンク（左）/ ロゴ（中央）/ CTA（右）|
| 利用業種 | ブランド系 / アパレル / レストラン |
| 推奨Section | ブランドLP |
| スコア | **82** |
| ランク | **A+** |

---

### NAV-004
**Desktop Header CTA強調型（2ボタン）**

| 項目 | 内容 |
|------|------|
| 名称 | Header 2CTAボタン型 ログイン+登録 |
| カテゴリ | Desktop Header |
| レイアウト | ロゴ / メニュー / 「ログイン」（Ghost）+ 「無料登録」（Primary）|
| 利用業種 | SaaS / スクール |
| 推奨Section | SaaS LP |
| スコア | **89** |
| ランク | **S** |

---

### NAV-005
**Desktop Header Minimal（リンクなし）**

| 項目 | 内容 |
|------|------|
| 名称 | Minimal Header ロゴのみ |
| カテゴリ | Desktop Header |
| レイアウト | ロゴ（左）/ または ロゴ（中央）のみ |
| 利用目的 | LP専用（外部に逃がさない）/ 離脱防止 |
| 推奨Section | 高CV特化LP |
| スコア | **85** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 02 ｜ Mega Menu / Dropdown
## ━━━━━━━━━━━━━━━━━━━━━

---

### NAV-006
**Dropdown Menu 標準（hover/click）**

| 項目 | 内容 |
|------|------|
| 名称 | Dropdown Menu 標準 hover展開 |
| カテゴリ | Dropdown |
| デザイン特徴 | ホバーでドロップダウン表示 / 白背景カード / shadow-lg / 角丸8px / 項目ホバー時背景変化 |
| アニメーション | opacity 0→1 + translateY(-8px)→0 の 0.15s |
| 推奨Section | コーポレートサイト Header |
| スコア | **85** |
| ランク | **S** |

---

### NAV-007
**Mega Menu（大型展開メニュー）**

| 項目 | 内容 |
|------|------|
| 名称 | Mega Menu フルワイド展開 |
| カテゴリ | Mega Menu |
| デザイン特徴 | フルワイド展開 / 2〜4カラム構成 / カテゴリ見出し + 項目リスト + 画像またはアイコン |
| 利用業種 | ECサイト / 大規模コーポレート |
| 推奨Section | 大規模LP・コーポレート |
| スコア | **84** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 03 ｜ Mobile Navigation
## ━━━━━━━━━━━━━━━━━━━━━

---

### NAV-008
**Mobile Hamburger → Drawer（スライドイン）**

| 項目 | 内容 |
|------|------|
| 名称 | Hamburger → Drawer左スライド |
| カテゴリ | Mobile Nav |
| 高さ | Header: 56〜64px |
| デザイン特徴 | ☰アイコンタップ / 左から Drawer スライドイン / 背景 Overlay（semi-transparent）|
| アニメーション | translateX(-100%)→0 の 0.25s ease |
| スコア | **88** |
| ランク | **S** |

---

### NAV-009
**Mobile Hamburger → フルスクリーンオーバーレイ**

| 項目 | 内容 |
|------|------|
| 名称 | Hamburger フルスクリーンオーバーレイ |
| カテゴリ | Mobile Nav |
| デザイン特徴 | タップ後に全画面 / 中央に大きなメニューリンク / 閉じるボタン（×）|
| 利用業種 | ブランド系 / デザイン系 |
| スコア | **83** |
| ランク | **S** |

---

### NAV-010
**Mobile Bottom Tab Navigation**

| 項目 | 内容 |
|------|------|
| 名称 | Bottom Tab Navigation スマホ底部固定 |
| カテゴリ | Mobile Nav |
| 高さ | 56〜64px |
| デザイン特徴 | 固定底部 / 4〜5つのアイコン + ラベル / アクティブ: ブランドカラー |
| セーフエリア | padding-bottom: env(safe-area-inset-bottom) |
| 推奨Section | PWA / アプリライクサイト |
| スコア | **85** |
| ランク | **S** |

---

### NAV-011
**Mobile Sticky Header（スクロール後出現）**

| 項目 | 内容 |
|------|------|
| 名称 | Mobile Sticky CTA Header |
| カテゴリ | Mobile Nav |
| デザイン特徴 | スクロール100px後に出現 / ロゴ + CTAボタン（コンパクト）|
| 推奨Section | 高CV特化LP |
| スコア | **86** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 04 ｜ Sticky Fixed Navigation
## ━━━━━━━━━━━━━━━━━━━━━

---

### NAV-012
**LP専用 スマホ固定ボタンバー（最強CV）**

| 項目 | 内容 |
|------|------|
| 名称 | スマホ固定CTAバー LP専用 |
| カテゴリ | Sticky CTA |
| 高さ | 64〜72px |
| デザイン特徴 | 画面最下部固定 / 「今すぐ相談」「無料で始める」など大きなCTAボタン / border-top shadow |
| セーフエリア | padding-bottom: env(safe-area-inset-bottom) |
| 推奨Section | LP全ページ |
| スコア | **93** |
| ランク | **S+** |

---

### NAV-013
**固定サイドバーCTA（PCデスクトップ）**

| 項目 | 内容 |
|------|------|
| 名称 | 固定サイドバーCTA PC |
| カテゴリ | Sticky CTA |
| デザイン特徴 | 右端固定 / 縦テキスト or アイコン / スクロールしても常に表示 |
| 推奨Section | LP |
| スコア | **82** |
| ランク | **A+** |

---

### NAV-014
**スクロールプログレスバー（読み進み表示）**

| 項目 | 内容 |
|------|------|
| 名称 | Scroll Progress Bar 読み進み表示 |
| カテゴリ | Progress Nav |
| デザイン特徴 | ページ最上部 / 幅: スクロール%に応じて伸びる / ブランドカラー |
| 推奨Section | ブログ / 長いLP |
| スコア | **78** |
| ランク | **A+** |

---

### NAV-015
**Section Dot Navigation（縦ドット）**

| 項目 | 内容 |
|------|------|
| 名称 | Section Dot Nav 縦ドット右固定 |
| カテゴリ | Dot Nav |
| デザイン特徴 | 右端固定 / 各Sectionに対応するドット / アクティブドットをブランドカラーで強調 |
| 推奨Section | フルページLP |
| スコア | **80** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 05 ｜ Breadcrumb / Pagination
## ━━━━━━━━━━━━━━━━━━━━━

---

### NAV-016
**Breadcrumb（パンくずリスト）**

| 項目 | 内容 |
|------|------|
| 名称 | Breadcrumb パンくずリスト |
| カテゴリ | Breadcrumb |
| デザイン特徴 | 「ホーム > カテゴリ > 現在ページ」/ セパレーター: 「/」または「>」/ 現在ページは非リンク |
| 実装 | structured data（JSON-LD）対応推奨 |
| 推奨Section | ブログ / コーポレート内部ページ |
| スコア | **81** |
| ランク | **A+** |

---

### NAV-017
**Pagination（ページネーション）**

| 項目 | 内容 |
|------|------|
| 名称 | Pagination ページネーション |
| カテゴリ | Pagination |
| デザイン特徴 | 「前へ」「1」「2」「3」「…」「次へ」/ アクティブページ: ブランドカラー背景 |
| スコア | **80** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 06 ｜ Footer Navigation
## ━━━━━━━━━━━━━━━━━━━━━

---

### NAV-018
**Footer 4カラム型（標準）**

| 項目 | 内容 |
|------|------|
| 名称 | Footer 4カラム 標準 |
| カテゴリ | Footer |
| レイアウト | 4カラム: ロゴ+説明 / リンク / リンク / SNS+ニュースレター |
| デザイン特徴 | 暗背景（#111827）/ 白テキスト / リンクホバーでブランドカラー |
| 推奨Section | コーポレートLP |
| スコア | **85** |
| ランク | **S** |

---

### NAV-019
**Footer シンプル1行型（LP用）**

| 項目 | 内容 |
|------|------|
| 名称 | Footer 1行シンプル LP用 |
| カテゴリ | Footer |
| レイアウト | コピーライト（左）/ 最小リンク（右）: プライバシーポリシー / 特商法 |
| 利用目的 | LP専用フッター（離脱最小化）|
| 推奨Section | LP |
| スコア | **84** |
| ランク | **S** |

---

### NAV-020
**Footer CTA付き（フッター直前CTA）**

| 項目 | 内容 |
|------|------|
| 名称 | Footer CTA統合型 |
| カテゴリ | Footer |
| 構成 | フッター上部: 大きなCTAエリア / 下部: 通常フッター |
| 推奨Section | LP最終エリア |
| スコア | **87** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 07 ｜ Sidebar Navigation
## ━━━━━━━━━━━━━━━━━━━━━

---

### NAV-021
**Sidebar 左固定型（ダッシュボード）**

| 項目 | 内容 |
|------|------|
| 名称 | Sidebar Left Fixed ダッシュボード型 |
| カテゴリ | Sidebar |
| 幅 | 240〜280px |
| デザイン特徴 | ロゴ + 縦メニュー / アクティブ: 背景ブランドカラー薄め / アイコン付き |
| スコア | **82** |
| ランク | **A+** |

---

### NAV-022
**Sidebar 折りたたみ型（Collapsible）**

| 項目 | 内容 |
|------|------|
| 名称 | Sidebar Collapsible 折りたたみ |
| カテゴリ | Sidebar |
| デザイン特徴 | 開: 240px（ロゴ+テキスト）/ 閉: 64px（アイコンのみ）/ トグルボタン |
| スコア | **80** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 08 ｜ Anchor / In-page Navigation
## ━━━━━━━━━━━━━━━━━━━━━

---

### NAV-023
**アンカーリンク Section Jump（LP内）**

| 項目 | 内容 |
|------|------|
| 名称 | アンカーリンク Section Jump LP内 |
| カテゴリ | Anchor Nav |
| 実装 | scroll-behavior: smooth / offset: header高さ分（scroll-margin-top）|
| 推奨Section | 長めのLP内ナビゲーション |
| スコア | **83** |
| ランク | **S** |

---

### NAV-024
**In-page Sticky Tab（ページ内セクションタブ）**

| 項目 | 内容 |
|------|------|
| 名称 | In-page Sticky Tab Section切替 |
| カテゴリ | In-page Nav |
| デザイン特徴 | スクロールで sticky になるセクションタブ / アクティブセクションを自動ハイライト |
| 推奨Section | サービス詳細LP |
| スコア | **84** |
| ランク | **S** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 09 ｜ 日本LP特化ナビゲーション
## ━━━━━━━━━━━━━━━━━━━━━

---

### NAV-025
**LP専用 電話番号固定ヘッダー**

| 項目 | 内容 |
|------|------|
| 名称 | LP電話番号固定ヘッダー |
| カテゴリ | LP特化 |
| デザイン特徴 | 電話番号大（BtoC）/ 「受付時間: 9:00〜18:00」補足 / Clickableリンク |
| 推奨Section | 医療・士業・リフォームLP |
| スコア | **87** |
| ランク | **S** |

---

### NAV-026
**LP専用 LINE + 電話 2ボタン固定バー**

| 項目 | 内容 |
|------|------|
| 名称 | LINE + 電話 2ボタン固定バー |
| カテゴリ | LP特化 |
| 高さ | 64〜72px |
| デザイン特徴 | LINEボタン（緑）50% + 電話ボタン（ブランドカラー）50% |
| 推奨Section | BtoC LP（美容・医療・士業）|
| スコア | **91** |
| ランク | **S+** |

---

### NAV-027
**スクロールアップボタン（戻る矢印）**

| 項目 | 内容 |
|------|------|
| 名称 | Scroll To Top Button 右下固定 |
| カテゴリ | Utility Nav |
| サイズ | 44〜48px（円形）|
| デザイン特徴 | 右下固定 / 上矢印 / スクロール300px後に出現 / ホバー: ブランドカラー |
| スコア | **79** |
| ランク | **A+** |

---

### NAV-028
**お気に入り/比較 フローティングバー（EC）**

| 項目 | 内容 |
|------|------|
| 名称 | お気に入り・比較 フローティングバー |
| カテゴリ | EC Nav |
| デザイン特徴 | 選択した商品数表示 + 「比較する」「お気に入り一覧」ボタン |
| 推奨Section | EC商品リスト |
| スコア | **77** |
| ランク | **A+** |

---

## ━━━━━━━━━━━━━━━━━━━━━
## CATEGORY 10 ｜ Special Navigation
## ━━━━━━━━━━━━━━━━━━━━━

---

### NAV-029
**Step Indicator（ステッパー）**

| 項目 | 内容 |
|------|------|
| 名称 | Step Indicator ステッパー |
| カテゴリ | Stepper |
| デザイン特徴 | 「1.情報入力」「2.確認」「3.完了」の横並びステップ / 完了済: ブランドカラー / 現在: 強調 / 未完: グレー |
| 推奨Section | Multi-Step Form / 購入フロー |
| スコア | **85** |
| ランク | **S** |

---

### NAV-030
**Language / Currency スイッチャー**

| 項目 | 内容 |
|------|------|
| 名称 | Language Switcher 言語切替 |
| カテゴリ | Global Nav |
| デザイン特徴 | 国旗アイコン + 言語名 / セレクト or ドロップダウン |
| 推奨Section | グローバルLP Header |
| スコア | **74** |
| ランク | **A** |

---

### NAV-031
**Cookie Consent Banner**

| 項目 | 内容 |
|------|------|
| 名称 | Cookie Consent Banner |
| カテゴリ | Consent |
| デザイン特徴 | 画面下部固定 / 「同意」「拒否」ボタン / 小テキスト |
| 推奨Section | 全ページ下部（GDPR対応）|
| スコア | **76** |
| ランク | **A** |

---

### NAV-032
**Announcement Bar（お知らせバー）**

| 項目 | 内容 |
|------|------|
| 名称 | Announcement Bar お知らせバー |
| カテゴリ | Bar |
| 高さ | 40〜48px |
| デザイン特徴 | ヘッダー上部 / ブランドカラー背景 / 白テキスト / 「×」閉じるボタン右端 |
| テキスト例 | 「🎉 期間限定: 今なら30%OFF → 詳しくはこちら」 |
| 推奨Section | LP全般 |
| スコア | **84** |
| ランク | **S** |

---

### NAV-033
**Floating Action Button（FAB）**

| 項目 | 内容 |
|------|------|
| 名称 | FAB Floating Action Button |
| カテゴリ | FAB |
| サイズ | 56×56px（円形）|
| デザイン特徴 | 右下固定 / shadow-lg / ブランドカラー / アイコン中央 / ホバー: scale(1.1) |
| 推奨Section | チャット / スクロールアップ / LINE |
| スコア | **82** |
| ランク | **A+** |

---

### NAV-034
**カテゴリ絞り込みバー（水平スクロール）**

| 項目 | 内容 |
|------|------|
| 名称 | カテゴリ絞り込みバー 水平スクロール |
| カテゴリ | Filter Bar |
| 高さ | 48px |
| デザイン特徴 | Chip型ボタン横並び / SP: 水平スクロール / アクティブ: ブランドカラー |
| 推奨Section | Blog / FAQ / Portfolio |
| スコア | **83** |
| ランク | **S** |

---

## ランク別サマリー

### S+ ランク（90点以上）
| ID | 名称 | スコア |
|----|------|--------|
| NAV-012 | スマホ固定CTAバー LP専用 | 93 |
| NAV-026 | LINE + 電話 2ボタン固定バー | 91 |

### S ランク（83〜89点）
| ID | 名称 | スコア |
|----|------|--------|
| NAV-004 | Header 2CTAボタン型 | 89 |
| NAV-001 | Desktop Header 標準 | 88 |
| NAV-008 | Hamburger → Drawer | 88 |
| NAV-002 | Transparent Sticky Header | 87 |
| NAV-020 | Footer CTA統合型 | 87 |
| NAV-025 | LP電話番号固定ヘッダー | 87 |
| NAV-011 | Mobile Sticky Header | 86 |
| NAV-006 | Dropdown Menu 標準 | 85 |
| NAV-010 | Bottom Tab Navigation | 85 |
| NAV-018 | Footer 4カラム | 85 |
| NAV-029 | Step Indicator | 85 |
| NAV-005 | Minimal Header | 85 |
| NAV-007 | Mega Menu | 84 |
| NAV-019 | Footer 1行シンプル | 84 |
| NAV-024 | In-page Sticky Tab | 84 |
| NAV-032 | Announcement Bar | 84 |
| NAV-009 | フルスクリーンオーバーレイ | 83 |
| NAV-023 | アンカーリンク | 83 |
| NAV-034 | カテゴリ絞り込みバー | 83 |
