# Industry Asset Patterns — 業種別素材構成辞典

**バージョン:** v1.0
**最終更新:** 2026-06-25
**管理者:** TAKE Design
**参照:** photo-source-library.md / chatgpt-image-prompt-library.md / industry-visual-patterns.md

---

## 概要

LP・HP・WordPress制作時に、業種別に必要な素材を一覧化する。
制作開始前にこのファイルで「必要素材」「調達方法」「優先度」を確認すること。

**調達方法の略記:**
- `CLIENT` → クライアントから提供してもらう（最優先）
- `PHOTO` → フリー素材サイト（photo-source-library.md参照）
- `CHATGPT` → ChatGPT（DALL·E 3）で生成（chatgpt-image-prompt-library.md参照）
- `ILLUS` → イラスト素材（illustration-source-library.md参照）
- `ICON` → アイコン（icon-source-library.md参照）
- `CSS` → CSSのみで対応（画像不要）

---

## IND-ASSET-001: 美容サロン

### 必要素材一覧

| # | 素材名 | 配置場所 | 優先度 | 推奨調達方法 | 補足 |
|---|--------|---------|--------|------------|------|
| 1 | **FV女性ポートレート** | FVメイン | ★★★ | CLIENT → CHATGPT | 笑顔・バストショット・清潔感 |
| 2 | **施術シーン** | サービス紹介 | ★★★ | CLIENT → CHATGPT | サロン内の実際の施術 |
| 3 | **サロン内観** | 施設紹介 | ★★★ | CLIENT → CHATGPT | 個室・清潔感・プライベート感 |
| 4 | **スタッフ写真** | スタッフ紹介 | ★★★ | CLIENT | 実際のスタッフが最も効果的 |
| 5 | **Before/After** | 実績訴求 | ★★★ | CLIENT | 薬機法・景表法に注意（要確認） |
| 6 | **口コミ者アイコン** | 口コミセクション | ★★ | CSS（イニシャル）/ CHATGPT | 顔写真ない場合はイニシャルアイコン |
| 7 | **CTA背景** | CTAセクション | ★★ | CSS（グラデーション）/ PHOTO | ローズ系グラデでも代替可能 |
| 8 | **OGP画像** | SNSシェア用 | ★★ | FV画像流用 + テキスト合成 | 1200×630px |
| 9 | **ファビコン** | ブラウザタブ | ★ | CLIENT（ロゴ）/ ICON | ロゴのシンボルマーク |
| 10 | **特徴アイコン** | 強み・特徴セクション | ★★ | ICON（Lucide） | sparkles / shield-check / star |

### ChatGPT生成が必要な素材

```
FV女性ポートレート    → IMAGE-PROMPT-001を使用
施術シーン           → IMAGE-PROMPT-002を使用
スタッフ写真（補助）  → IMAGE-PROMPT-001を流用・調整
```

### フリー素材検索ワード

```
Unsplash:
- "skincare woman natural light"
- "beauty treatment spa"
- "glowing skin portrait"

Pexels:
- "beauty salon woman"
- "skin care treatment"
```

---

## IND-ASSET-002: 採用・求人

### 必要素材一覧

| # | 素材名 | 配置場所 | 優先度 | 推奨調達方法 | 補足 |
|---|--------|---------|--------|------------|------|
| 1 | **社員・スタッフ写真（複数）** | FV / スタッフ紹介 | ★★★ | CLIENT | 実在感が最重要・顔出し推奨 |
| 2 | **オフィス・職場環境** | FV補助 / 職場紹介 | ★★★ | CLIENT → CHATGPT | 実際の職場が信頼度を上げる |
| 3 | **チームワーク・協力シーン** | FVメイン / 雰囲気訴求 | ★★★ | CLIENT → CHATGPT | グループ笑顔・協力感 |
| 4 | **働く風景（仕事中）** | 1日の流れ / 仕事紹介 | ★★ | CLIENT → CHATGPT | 職種に合わせた実際の業務シーン |
| 5 | **インタビュー写真** | スタッフ声 / インタビュー | ★★ | CLIENT | バストショット・リラックス感 |
| 6 | **特徴・待遇アイコン** | 待遇・福利厚生 | ★★ | ICON（Lucide） | briefcase / clock / trending-up |
| 7 | **数値グラフィック** | 実績数値 | ★★ | CSS（カウントアップ）| CSSアニメで代替可能 |
| 8 | **OGP画像** | SNSシェア用 | ★★ | FV画像流用 | 1200×630px |

### ChatGPT生成が必要な素材

```
チームワークシーン    → IMAGE-PROMPT-003を使用
スタッフポートレート  → IMAGE-PROMPT-004を使用
オフィス環境（補助）  → IMAGE-PROMPT-003を流用
```

### フリー素材検索ワード

```
Pexels:
- "team work office professional"
- "business people smiling collaboration"
- "diverse team meeting"

Unsplash:
- "office workspace modern"
- "coworkers happy"
```

---

## IND-ASSET-003: 医療・クリニック

### 必要素材一覧

| # | 素材名 | 配置場所 | 優先度 | 推奨調達方法 | 補足 |
|---|--------|---------|--------|------------|------|
| 1 | **院長ポートレート** | FV / 院長紹介 | ★★★ | CLIENT | 白衣・正面・権威感 |
| 2 | **施術・診察シーン** | サービス紹介 | ★★★ | CLIENT → CHATGPT | 痛くない・安心な印象 |
| 3 | **院内・設備写真** | 施設紹介 | ★★★ | CLIENT → CHATGPT | 清潔感・最新設備 |
| 4 | **受付・受付スタッフ** | アクセス / 安心感 | ★★ | CLIENT | 笑顔・フレンドリー |
| 5 | **相談・カウンセリングシーン** | カウンセリング紹介 | ★★ | CLIENT → CHATGPT | 寄り添い・傾聴感 |
| 6 | **資格・認定バッジ** | 実績 / 信頼 | ★★★ | CLIENT（テキスト）/ ICON | アイコン+テキストで代替可能 |
| 7 | **症状チェックイラスト** | 症状訴求 | ★ | ILLUS（unDraw health系）| 写真より中立的 |
| 8 | **特徴アイコン** | 強み紹介 | ★★ | ICON（Lucide） | shield-check / heart-pulse |

### ChatGPT生成が必要な素材

```
院長ポートレート（補助）→ IMAGE-PROMPT-005を使用
クリニック内観         → IMAGE-PROMPT-006を使用
```

### フリー素材検索ワード

```
Pexels:
- "doctor patient consultation"
- "medical professional clinic"
- "healthcare nurse"

Unsplash:
- "medical clinic modern"
- "doctor white coat"
```

### 薬機法・景表法チェック

```
使用前に必ず確認:
□ 「治る」「完治」などの表現が画像内にないか
□ Before/After使用する場合、個人差の表記があるか
□ 効果を保証するような画像の使い方になっていないか
□ 厚生労働省の医療広告ガイドラインに抵触しないか
```

---

## IND-ASSET-004: 飲食・レストラン

### 必要素材一覧

| # | 素材名 | 配置場所 | 優先度 | 推奨調達方法 | 補足 |
|---|--------|---------|--------|------------|------|
| 1 | **シグネチャー料理（複数）** | FV / メニュー | ★★★ | CLIENT（最優先）→ CHATGPT | 実際の料理が圧倒的に効果的 |
| 2 | **店内・ダイニング雰囲気** | FV背景 / 内観 | ★★★ | CLIENT → CHATGPT | 照明・雰囲気・席の様子 |
| 3 | **外観・ファサード** | アクセス / 来店誘導 | ★★★ | CLIENT | Googleマップ連携でも可 |
| 4 | **シェフ・料理人** | こだわり訴求 | ★★ | CLIENT → CHATGPT | 調理中のシーン / ポートレート |
| 5 | **食事シーン（お客様）** | 雰囲気・体験訴求 | ★★ | CLIENT → CHATGPT | 楽しそうな食事シーン |
| 6 | **食材・素材写真** | こだわり / ストーリー | ★ | CLIENT → PHOTO | 新鮮な食材・産地感 |
| 7 | **メニュー写真（全品）** | メニューページ | ★★★ | CLIENT | 全メニューの撮影が理想 |
| 8 | **OGP画像** | SNSシェア | ★★★ | シグネチャー料理流用 | 食欲をそそる1枚 |

### ChatGPT生成が必要な素材

```
シグネチャー料理     → IMAGE-PROMPT-007を使用（クライアント素材がない場合）
店内雰囲気（補助）  → IMAGE-PROMPT-008を使用
シェフポートレート   → IMAGE-PROMPT-004を流用・調整（「chef coat」追加）
```

### フリー素材検索ワード

```
Unsplash:
- "restaurant food photography"
- "japanese food plating"
- "fine dining plate"
- "cafe interior warm light"

Pexels:
- "chef cooking kitchen"
- "restaurant atmosphere"
```

---

## IND-ASSET-005: スクール・教育

### 必要素材一覧

| # | 素材名 | 配置場所 | 優先度 | 推奨調達方法 | 補足 |
|---|--------|---------|--------|------------|------|
| 1 | **学習風景（受講生）** | FV / サービス紹介 | ★★★ | CLIENT → CHATGPT | PC前・集中・明るい環境 |
| 2 | **講師ポートレート** | 講師紹介 / 権威訴求 | ★★★ | CLIENT | 実在講師の信頼感が高い |
| 3 | **受講生の笑顔・達成感** | 口コミ / 実績 | ★★★ | CLIENT → CHATGPT | Before/After的な変化を示す |
| 4 | **オンライン授業シーン** | サービス紹介 | ★★ | CLIENT → CHATGPT | Zoom等の画面が見えるシーン |
| 5 | **カリキュラム・資料** | カリキュラム紹介 | ★★ | CLIENT | 実際の教材・画面キャプチャ |
| 6 | **卒業生・修了証** | 実績訴求 | ★★ | CLIENT | リアルな証明書・修了式シーン |
| 7 | **特徴アイコン** | 特徴・強み | ★★ | ICON（Lucide） | graduation-cap / book-open / zap |
| 8 | **フロー図イラスト** | 学習フロー説明 | ★ | ILLUS（unDraw education）| 写真より説明的 |

### ChatGPT生成が必要な素材

```
学習風景         → IMAGE-PROMPT-009を使用
達成・成功シーン → IMAGE-PROMPT-010を使用
講師ポートレート → IMAGE-PROMPT-004を流用・調整
```

### フリー素材検索ワード

```
Pexels:
- "student studying laptop online"
- "adult learning education"
- "professional development course"

Unsplash:
- "online learning home office"
- "study focus concentration"
```

---

## IND-ASSET-006: SaaS / BtoB

### 必要素材一覧

| # | 素材名 | 配置場所 | 優先度 | 推奨調達方法 | 補足 |
|---|--------|---------|--------|------------|------|
| 1 | **UI・ダッシュボード画面** | FVメイン / 機能紹介 | ★★★ | CLIENT（実画面スクショ）→ CHATGPT | 実製品の画面が最も効果的 |
| 2 | **利用シーン（PCとプロ）** | FV / 導入イメージ | ★★★ | CLIENT → CHATGPT | ビジネスプロがPCを使うシーン |
| 3 | **ビジネス人物（代表・担当）** | 導入事例 / 会社紹介 | ★★ | CLIENT | 信頼感のあるプロフィール写真 |
| 4 | **導入企業ロゴ** | 社会的証明バー | ★★★ | CLIENT | グレースケールで統一が基本 |
| 5 | **機能説明図・フロー図** | 機能紹介 | ★★★ | CSS+SVG / ILLUS（unDraw）| イラストの方が伝わりやすい |
| 6 | **データグラフ・チャート** | 実績数値 | ★★ | CSS+Chart.js / CHATGPT | CSSアニメで代替可能 |
| 7 | **機能アイコン（各機能）** | 機能一覧 | ★★★ | ICON（Lucide / Heroicons）| 各機能を象徴するアイコン |
| 8 | **OGP画像** | SNSシェア | ★★ | UI画像 + ロゴ合成 | 1200×630px |

### ChatGPT生成が必要な素材

```
UIダッシュボードモックアップ → IMAGE-PROMPT-011を使用
ビジネスプロフェッショナル   → IMAGE-PROMPT-012を使用
```

### フリー素材検索ワード

```
Unsplash:
- "business professional laptop"
- "modern office technology"
- "data analytics dashboard"

StockSnap:
- "business meeting"
- "startup office"
```

---

## 素材調達優先順位マトリクス

| 素材タイプ | 第1優先 | 第2優先 | 第3優先 |
|-----------|--------|--------|--------|
| 人物写真 | CLIENT（実在感最高）| CHATGPT（業種プロンプト）| PHOTO（日本人注意）|
| 空間・環境 | CLIENT（実際の場所）| CHATGPT | PHOTO |
| 料理・商品 | CLIENT（本物が最強）| CHATGPT | PHOTO |
| 説明・フロー | ILLUS（unDraw等）| ICON+CSS | CHATGPT |
| アイコン | ICON（Lucide標準）| CSS | ILLUS |
| 背景・テクスチャ | CSS（グラデーション）| PHOTO（Pixabay）| CHATGPT |

---

## 更新履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| v1.0 | 2026-06-25 | 初版作成。6業種×素材一覧整備 |
