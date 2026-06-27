# ChatGPT Image Prompt Library — 画像生成プロンプトライブラリ

**バージョン**: 1.0
**作成日**: 2026-06-27
**管理ファイル**: knowledge/assets/chatgpt-image-prompt-library.md

---

## このファイルの目的

ChatGPTによるAI画像生成専用のプロンプトライブラリ。
フリー素材で対応できない「オリジナル感」や「特定シーン」が必要な場合に活用する。

---

## 絶対ルール

- **Claude Codeは画像生成を行わない**
- **画像生成はChatGPTのみ使用する**
- Claude Codeの担当：画像設計・素材選定・検索ワード作成・プロンプト作成・配置指示
- 生成した画像は必ずクライアントに確認を取ってから使用する
- 人物を含む画像は特に慎重に確認する（表情・自然さ）

---

## プロンプトID体系

```
IMAGE-PROMPT-[業種コード]-[連番]
業種コード: BT（美容）/ RC（採用）/ MD（医療）/ RS（飲食）/ SC（スクール）/ SS（SaaS）/ GN（汎用）
例: IMAGE-PROMPT-BT-001
```

---

## プロンプト保存フォーマット

```
### IMAGE-PROMPT-[ID]

**名称**: [わかりやすい名称]
**利用業種**: [業種名]
**利用シーン**: [LP内のどのセクションで使うか]
**画像タイプ**: [人物 / 空間 / 商品 / 抽象 / UI]
**推奨サイズ**: [1920×1080 / 1200×800 / 800×800 等]

**プロンプト（英語）**:
[英語プロンプト]

**ネガティブ要素**:
[含めたくない要素]

**配置想定**: [LPのどこに配置するか]
**Learning Reason**: [なぜこのプロンプトが有効か]
```

---

## 美容（Beauty）

### IMAGE-PROMPT-BT-001

**名称**: 美容サロン FVイメージ
**利用業種**: 美容サロン・エステ・ネイル
**利用シーン**: FVヒーロー画像・サービス紹介
**画像タイプ**: 空間・人物
**推奨サイズ**: 1920×1080

**プロンプト（英語）**:
```
A clean, luxurious beauty salon interior with soft natural lighting, white and beige tones, fresh flowers on the reception desk, a treatment bed with white linens, professional beauty equipment. Warm, inviting atmosphere. High-end photography style, shallow depth of field.
```

**ネガティブ要素**: cluttered, dark, messy, low quality, text, watermark

**配置想定**: FV背景・About セクション内観
**Learning Reason**: フリー素材の外国風サロンではなく、日本のサロンに近い清潔感・高級感を演出できる

---

### IMAGE-PROMPT-BT-002

**名称**: 施術中の丁寧なケアシーン
**利用業種**: エステ・フェイシャルサロン
**利用シーン**: サービス紹介・施術内容セクション
**画像タイプ**: 人物
**推奨サイズ**: 1200×800

**プロンプト（英語）**:
```
A professional aesthetician gently performing a facial treatment on a relaxed female client. Soft studio lighting, white treatment room, clean and clinical atmosphere. Close-up angle showing careful, skilled hands. Professional beauty photography.
```

**ネガティブ要素**: unprofessional, dark room, casual clothes, blurry, text

**配置想定**: サービスカード・施術内容セクション
**Learning Reason**: 施術の丁寧さ・プロ意識を伝える視覚的証拠として機能する

---

### IMAGE-PROMPT-BT-003

**名称**: Before/After 肌質改善イメージ（アフター）
**利用業種**: エステ・スキンケアサロン
**利用シーン**: 実績・効果紹介セクション
**画像タイプ**: 人物
**推奨サイズ**: 800×800

**プロンプト（英語）**:
```
Close-up portrait of a Japanese woman with beautiful, glowing, clear skin. Natural makeup, soft light from the side creating a luminous effect. Clean white background. Professional beauty photography.
```

**ネガティブ要素**: heavy makeup, dark spots, blemishes, harsh lighting, text, watermark

**配置想定**: 効果・実績セクション（クライアント提供Beforeと組み合わせ）
**Learning Reason**: スキンケア効果の「理想の状態」を視覚化し、申込動機を高める

---

## 採用（Recruit）

### IMAGE-PROMPT-RC-001

**名称**: 活気あるオフィスチームシーン
**利用業種**: 採用LP全般
**利用シーン**: FVヒーロー・職場環境紹介
**画像タイプ**: 人物・空間
**推奨サイズ**: 1920×1080

**プロンプト（英語）**:
```
A diverse team of young Japanese professionals working together in a bright modern office. Smiling, energetic atmosphere. Some people collaborating at a whiteboard, others at standing desks with laptops. Natural window light, clean open workspace. Authentic documentary style photography.
```

**ネガティブ要素**: posed, formal suits, dark office, old computers, text

**配置想定**: FV背景・職場環境セクション
**Learning Reason**: 「ここで働きたい」と思わせるリアルな職場感を演出する

---

### IMAGE-PROMPT-RC-002

**名称**: 社員インタビューポートレート
**利用業種**: 採用LP・採用サイト
**利用シーン**: 先輩社員の声セクション
**画像タイプ**: 人物
**推奨サイズ**: 800×1000（縦型）

**プロンプト（英語）**:
```
Professional portrait of a young Japanese professional in their 20s-30s, casual business attire, warm genuine smile, photographed in a bright modern office environment with soft bokeh background. Natural, approachable expression. Documentary portrait style.
```

**ネガティブ要素**: formal stiff pose, heavy makeup, dark background, text, watermark

**配置想定**: 社員インタビューカード・声セクション
**Learning Reason**: 実在感のある社員像を演出し、求職者の「一緒に働くイメージ」を促進する

---

### IMAGE-PROMPT-RC-003

**名称**: 1日の仕事の流れ イメージ
**利用業種**: 採用LP（飲食・福祉・小売等）
**利用シーン**: 1日のスケジュールセクション
**画像タイプ**: 人物
**推奨サイズ**: 1200×800

**プロンプト（英語）**:
```
A friendly Japanese staff member in uniform, working cheerfully in a bright clean environment. Natural light, clean workspace. Candid photography style capturing genuine moment of work. Professional food service / retail setting.
```

**ネガティブ要素**: dirty, dark, tired expression, text, watermark

**配置想定**: 仕事内容・1日の流れセクション
**Learning Reason**: 実際の業務シーンをリアルに見せることで入社後のイメージギャップを防ぐ

---

## 医療（Medical）

### IMAGE-PROMPT-MD-001

**名称**: クリニック内観 清潔感
**利用業種**: クリニック・整体院・歯科
**利用シーン**: FV・院内紹介セクション
**画像タイプ**: 空間
**推奨サイズ**: 1920×1080

**プロンプト（英語）**:
```
A bright, clean, modern medical clinic interior with white walls, soft natural lighting, plants, comfortable waiting area with minimal furniture. Professional and welcoming atmosphere. Architectural interior photography.
```

**ネガティブ要素**: cluttered, old equipment, dark, cold harsh lighting, text

**配置想定**: FV背景・院内設備セクション
**Learning Reason**: 清潔感・安心感・モダンさを同時に伝えられる空間写真代替として機能する

---

### IMAGE-PROMPT-MD-002

**名称**: 丁寧なカウンセリングシーン
**利用業種**: クリニック・整体・カウンセリング
**利用シーン**: カウンセリング・相談セクション
**画像タイプ**: 人物
**推奨サイズ**: 1200×800

**プロンプト（英語）**:
```
A kind Japanese doctor or therapist in a white coat consulting with a patient in a bright clinical room. Warm, empathetic expression, leaning forward slightly. Patient looks relaxed and reassured. Soft natural lighting. Professional medical photography.
```

**ネガティブ要素**: cold expression, dark room, cluttered desk, text, watermark

**配置想定**: カウンセリングフロー・安心感セクション
**Learning Reason**: 「話を聞いてもらえる」という安心感を視覚的に証明する

---

## 飲食（Restaurant）

### IMAGE-PROMPT-RS-001

**名称**: 看板料理プロフェッショナル撮影風
**利用業種**: 飲食店・レストラン
**利用シーン**: FV・メニュー紹介
**画像タイプ**: 商品
**推奨サイズ**: 1200×800

**プロンプト（英語）**:
```
Professional food photography of [料理名を挿入] on a beautiful ceramic plate, elegant plating, shallow depth of field, dark wooden table, soft side lighting creating depth. Restaurant-quality presentation. Mouthwatering appetizing look.
```

**ネガティブ要素**: messy plating, harsh light, plastic plate, text, watermark

**配置想定**: FVヒーロー・メニューカード
**Learning Reason**: クライアント提供の写真が低品質な場合の補完。「食べたい」を視覚的に誘発する

---

### IMAGE-PROMPT-RS-002

**名称**: 温かな食事シーン
**利用業種**: レストラン・居酒屋・カフェ
**利用シーン**: 雰囲気・コンセプトセクション
**画像タイプ**: 人物・空間
**推奨サイズ**: 1920×1080

**プロンプト（英語）**:
```
A warm, cozy restaurant scene with Japanese people enjoying dinner together. Soft warm lighting, wooden interior, plates of beautiful food on the table, genuine laughter and conversation. Golden hour lighting effect. Lifestyle photography.
```

**ネガティブ要素**: empty restaurant, unhappy expressions, bright fluorescent light, text

**配置想定**: コンセプト・こだわりセクション
**Learning Reason**: 「来店したい・この空間で食べたい」という感情を誘発する

---

## スクール（School）

### IMAGE-PROMPT-SC-001

**名称**: 真剣に学ぶ受講生
**利用業種**: スクール・オンライン教育・資格取得
**利用シーン**: FV・カリキュラム紹介
**画像タイプ**: 人物
**推奨サイズ**: 1920×1080

**プロンプト（英語）**:
```
A focused Japanese adult student studying intently on a laptop in a bright modern coworking space or home office. Notebooks beside them, coffee on the desk, concentrated but engaged expression. Natural daylight, productive atmosphere. Authentic lifestyle photography.
```

**ネガティブ要素**: bored expression, messy environment, old computer, dark room, text

**配置想定**: FV・学習環境セクション
**Learning Reason**: 受講者が「自分もこうなれる」と具体的にイメージできる学習シーンを提供する

---

### IMAGE-PROMPT-SC-002

**名称**: 受講後の成功・達成イメージ
**利用業種**: スクール・資格取得・転職支援
**利用シーン**: 実績・成果セクション・CTA前
**画像タイプ**: 人物
**推奨サイズ**: 1200×800

**プロンプト（英語）**:
```
A happy, confident Japanese professional in their 30s in a modern office or business setting, looking accomplished and fulfilled. Professional business casual attire, genuine smile of success. Bright optimistic lighting. Aspirational lifestyle photography.
```

**ネガティブ要素**: overly formal, dark mood, text, watermark

**配置想定**: 卒業生の成功事例・CTA前の最終後押し
**Learning Reason**: 「受講後の理想の自分」を視覚化してCV意欲を高める

---

## SaaS・BtoB

### IMAGE-PROMPT-SS-001

**名称**: ダッシュボード利用シーン
**利用業種**: SaaS・業務ツール・BtoB
**利用シーン**: FV・機能紹介
**画像タイプ**: UI・人物
**推奨サイズ**: 1920×1080

**プロンプト（英語）**:
```
A professional looking at a large monitor displaying a clean, modern business dashboard with charts and data visualization. Modern open office background, shallow depth of field. The screen shows colorful graphs and metrics. Professional business photography.
```

**ネガティブ要素**: messy desk, old monitor, dark office, text on screen readable, watermark

**配置想定**: FVヒーロー・製品紹介セクション
**Learning Reason**: 実際のUIスクリーンショットが提供されない場合の視覚的補完

---

### IMAGE-PROMPT-SS-002

**名称**: ビジネスチームのコラボシーン
**利用業種**: SaaS・BtoB・コーポレート
**利用シーン**: 導入事例・活用シーンセクション
**画像タイプ**: 人物
**推奨サイズ**: 1200×800

**プロンプト（英語）**:
```
Japanese business professionals having a productive meeting in a modern glass conference room. Laptops open, digital whiteboard in background showing project data. Engaged discussion, professional business casual attire. Corporate documentary photography.
```

**ネガティブ要素**: formal suits, bored expressions, cluttered room, text, watermark

**配置想定**: 導入事例・チーム活用セクション
**Learning Reason**: 「自社でも使っているイメージ」を持たせ、BtoBの購買決定を後押しする

---

## 汎用（General）

### IMAGE-PROMPT-GN-001

**名称**: OGP用 ブランドイメージ
**利用業種**: 全業種
**利用シーン**: OGP画像・SNSシェア用
**画像タイプ**: 抽象・ブランド
**推奨サイズ**: 1200×630

**プロンプト（英語）**:
```
A clean, professional branded image with [ブランドカラーを挿入] gradient background, subtle geometric patterns or abstract shapes, space for text overlay in the center. Modern minimalist design. Corporate identity visual.
```

**ネガティブ要素**: text, logos, busy patterns, low contrast, watermark

**配置想定**: OGPメタ画像・SNSカバー画像
**Learning Reason**: OGP画像がない場合にブランドイメージに合った代替を素早く生成できる

---

### IMAGE-PROMPT-GN-002

**名称**: CTAセクション背景
**利用業種**: 全業種
**利用シーン**: 最終CTAセクション背景
**画像タイプ**: 抽象
**推奨サイズ**: 1920×600

**プロンプト（英語）**:
```
Abstract gradient background in [色を指定: warm gold / soft blue / deep navy / soft pink] tones, subtle light effects and soft bokeh. Clean, professional, minimal. Suitable as a website section background with text overlay.
```

**ネガティブ要素**: too busy, text, people, objects, low quality

**配置想定**: 最終CTA背景・フォームセクション背景
**Learning Reason**: フリー素材のグラデーション背景よりブランドカラーに忠実な背景を生成できる

---

## プロンプト使用上の注意

1. `[　]` 内は制作する案件に合わせて必ず書き換える
2. 英語プロンプトで生成する（ChatGPTの画像生成は英語が精度が高い）
3. 人物を含む場合は必ずクライアントに確認を取る
4. 生成画像に文字・テキストが含まれていたら再生成する
5. 1回で完璧でなくてよい。3〜5回試行して最良を選ぶ
6. 生成結果が良かった場合はプロンプトに「※成功実績あり」を追記して更新する

---

## Learning Reason（ファイル全体）

**Why**: フリー素材では対応できない「日本人モデル」「特定の業種シーン」「ブランドカラーに合った背景」等をChatGPTで補完するため。プロンプトをストック化することで毎回ゼロから考えずに画像設計できる状態を作る。
**応用先**: フリー素材では不足するシーンの補完・クライアント提供素材なしでの制作
