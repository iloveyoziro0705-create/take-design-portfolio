# ChatGPT Image Prompt Library — AI画像生成プロンプト辞典

**バージョン:** v1.0
**最終更新:** 2026-06-25
**管理者:** TAKE Design
**参照:** industry-asset-patterns.md / image-direction-rules.md

---

## 重要ルール

> **Claude Codeは画像生成を行わない。**
> 画像生成が必要な場合は **ChatGPT（DALL·E 3）のみ** を使用すること。
> Claude Codeの役割は「プロンプト設計」「素材指示」「配置指示」のみ。

---

## プロンプト設計の基本構造

```
[画像タイプ] + [被写体] + [詳細仕様] + [スタイル] + [ライティング] + [構図] + [サイズ指示]
```

### DALL·E 3 固有の注意点

```
- 日本語でプロンプトを入力しても動作する（英語推奨）
- ネガティブプロンプトは "without X" / "no X" の形式で記述
- アスペクト比は「1024x1024」「1792x1024」「1024x1792」の3種
- テキスト生成は精度が低い（画像内テキストは後でHTML/CSSで追加）
- 人物の顔・手は生成後に要チェック
```

---

## 美容サロン（IND-IMG-001）

### IMAGE-PROMPT-001: FV女性ポートレート

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-001 |
| **名称** | 美容サロン FV女性ポートレート |
| **利用業種** | 美容サロン / エステ / フェイシャル |
| **利用シーン** | FVメイン画像 / ヒーローセクション |
| **画像タイプ** | 人物ポートレート |
| **推奨サイズ** | 1024x1792（縦長）/ 1792x1024（横長FV） |

**プロンプト（英語）:**
```
Professional beauty salon photo, Japanese woman in her late 20s to early 30s, 
clear glowing skin with no heavy makeup, gentle warm smile, 
touching her cheek softly with one hand, 
soft diffused natural window light from the upper left, 
shallow depth of field with creamy bokeh background in pale rose-beige tones, 
wearing simple white or ivory top, 
shot with 85mm portrait lens, high resolution, 
professional beauty photography style, 
warm color temperature around 4000K, 
no text, no watermark
```

**プロンプト（日本語）:**
```
プロのビューティーサロン撮影写真、日本人女性20代後半〜30代前半、
透明感のある肌でナチュラルメイク、穏やかで温かい笑顔、
片手で頬に優しく触れているポーズ、
左上からの柔らかい自然光・拡散光、
浅いピントで背景はペールローズベージュのクリーミーなボケ、
シンプルな白かアイボリーのトップス着用、
85mm相当の中望遠で撮影、高解像度、
プロのビューティー写真スタイル、暖色系（4000K前後）、
テキストなし・透かしなし
```

**ネガティブ要素:** 過度なメイク / 不自然なポーズ / 暗い照明 / 手が歪んでいる / アジア系以外の人物

**配置想定:** FV右側（左テキスト構成）/ FVメイン背景

---

### IMAGE-PROMPT-002: 施術シーン

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-002 |
| **名称** | 美容サロン 施術シーン |
| **利用業種** | 美容サロン / エステ / スパ |
| **利用シーン** | サービス説明セクション / 雰囲気訴求 |
| **推奨サイズ** | 1792x1024（横長） |

**プロンプト:**
```
Relaxing beauty salon treatment scene, Japanese female esthetician 
performing gentle facial massage on a client lying on a treatment bed, 
warm soft lighting, clean private room with white and beige interior, 
professional spa atmosphere, high-end beauty salon aesthetic, 
natural and calm mood, no harsh shadows, 
documentary style photography, no text
```

**ネガティブ要素:** 痛そうな表情 / 不衛生な環境 / 過度なドラマチック演出

---

## 採用・求人（IND-IMG-002）

### IMAGE-PROMPT-003: チームワーク・オフィスシーン

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-003 |
| **名称** | 採用LP チームワークシーン |
| **利用業種** | 採用・求人 全般 |
| **利用シーン** | FV / スタッフ紹介 / 職場環境紹介 |
| **推奨サイズ** | 1792x1024（横長） |

**プロンプト:**
```
Corporate recruitment photo, diverse group of Japanese professionals 
aged 25-40 in a modern bright office, 
genuinely smiling and collaborating around a table or workstation, 
natural window lighting, contemporary workspace with plants and white furniture, 
authentic candid feel, not overly posed, 
business casual clothing, 
warm and energetic atmosphere, professional photography, no text
```

**ネガティブ要素:** 過度にポーズを決めたストックフォト感 / 殺風景なオフィス / 外国人のみ

---

### IMAGE-PROMPT-004: 個人スタッフポートレート

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-004 |
| **名称** | 採用LP スタッフポートレート |
| **利用業種** | 採用・求人 |
| **利用シーン** | スタッフ紹介 / インタビューセクション |
| **推奨サイズ** | 1024x1024（正方形）/ 1024x1792（縦長） |

**プロンプト:**
```
Corporate headshot, Japanese professional man or woman in their late 20s to 30s, 
confident and approachable smile looking directly at camera, 
business casual attire, 
soft studio lighting with white or light gray background, 
professional LinkedIn-style portrait, 
sharp focus on face, shallow background, 
trustworthy and energetic expression, no text
```

---

## 医療・クリニック（IND-IMG-003）

### IMAGE-PROMPT-005: 院長・医師ポートレート

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-005 |
| **名称** | クリニック 医師ポートレート |
| **利用業種** | 医療 / クリニック / 歯科 / 整体 |
| **利用シーン** | 院長紹介 / FV権威バッジ / 信頼セクション |
| **推奨サイズ** | 1024x1024（正方形）/ 1024x1792（縦長） |

**プロンプト:**
```
Medical professional portrait, Japanese doctor in white coat, 
male or female aged 40-55, 
warm and trustworthy smile with professional confidence, 
looking directly at camera, 
clean studio lighting with white or soft gray background, 
stethoscope around neck, 
medical clinic setting subtle in background, 
high resolution professional medical photography, 
authoritative yet caring expression, no text
```

**ネガティブ要素:** 怖い・冷たい表情 / 古い医療設備 / 暗い照明

---

### IMAGE-PROMPT-006: クリニック内観

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-006 |
| **名称** | クリニック 内観・空間 |
| **利用業種** | 医療 / クリニック |
| **利用シーン** | 施設紹介 / 安心感訴求 |
| **推奨サイズ** | 1792x1024（横長） |

**プロンプト:**
```
Modern medical clinic interior, clean and bright examination room, 
white and light blue color scheme, 
comfortable modern examination table, 
medical equipment neatly arranged, 
natural light from window, 
professional healthcare facility atmosphere, 
no people, architectural photography style, 
high resolution, no text
```

---

## 飲食・レストラン（IND-IMG-004）

### IMAGE-PROMPT-007: シグネチャー料理

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-007 |
| **名称** | レストラン シグネチャー料理 |
| **利用業種** | 飲食 / レストラン / カフェ |
| **利用シーン** | FVメイン / メニュー紹介 |
| **推奨サイズ** | 1024x1024（正方形）/ 1792x1024（横長） |

**プロンプト:**
```
Professional food photography, beautifully plated Japanese cuisine, 
main dish on elegant white ceramic plate, 
steam rising gently, 
garnished with fresh herbs and colorful seasonal ingredients, 
shot from 45-degree angle, 
soft natural diffused window light from the side, 
marble or dark wood surface, 
bokeh background with warm restaurant ambiance, 
appetizing warm color tones, 
high-end food styling, no text
```

**ネガティブ要素:** 暗い色調 / 冷めているような見た目 / 散らかったテーブル / 過度なフィルター

---

### IMAGE-PROMPT-008: 店内雰囲気

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-008 |
| **名称** | レストラン 内観・雰囲気 |
| **利用業種** | 飲食 / レストラン |
| **利用シーン** | FV背景 / 雰囲気訴求 |
| **推奨サイズ** | 1792x1024（横長） |

**プロンプト:**
```
Restaurant interior photography, cozy upscale Japanese restaurant, 
warm ambient lighting with pendant lights, 
wooden furniture and elegant table settings with candles, 
minimal guests or empty for ambiance shot, 
intimate private dining atmosphere, 
golden warm tones, 
professional architectural photography, no text
```

---

## スクール・教育（IND-IMG-005）

### IMAGE-PROMPT-009: オンライン学習シーン

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-009 |
| **名称** | スクール オンライン学習シーン |
| **利用業種** | スクール / 教育 / オンライン講座 |
| **利用シーン** | FVメイン / サービス説明 |
| **推奨サイズ** | 1792x1024（横長） |

**プロンプト:**
```
Online learning photography, Japanese adult student aged 25-40, 
focused and engaged while studying on laptop at a bright modern desk, 
natural daylight from window, 
clean organized workspace with notebook and coffee, 
motivated and concentrated expression, 
fresh and energetic atmosphere, 
casual business attire, 
editorial photography style, no text
```

**ネガティブ要素:** 退屈・つまらなそうな表情 / 暗い・古い環境 / 子供っぽい演出

---

### IMAGE-PROMPT-010: 受講生の達成感

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-010 |
| **名称** | スクール 達成・成功シーン |
| **利用業種** | スクール / 教育 |
| **利用シーン** | 実績セクション / 口コミ近く |
| **推奨サイズ** | 1024x1024（正方形） |

**プロンプト:**
```
Success and achievement photo, Japanese professional aged 25-35, 
bright confident smile expressing achievement and pride, 
looking at camera with energy and positivity, 
modern office or bright workspace background, 
business casual clothing, 
warm natural light, 
motivational and inspiring mood, 
professional lifestyle photography, no text
```

---

## SaaS / BtoB（IND-IMG-006）

### IMAGE-PROMPT-011: UIダッシュボードモックアップ

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-011 |
| **名称** | SaaS ダッシュボードUI |
| **利用業種** | SaaS / BtoB / テック |
| **利用シーン** | FV製品画像 / 機能紹介 |
| **推奨サイズ** | 1792x1024（横長） |

**プロンプト:**
```
Modern SaaS dashboard UI screenshot on laptop screen, 
clean and minimal data visualization interface, 
blue and white color scheme with data charts, graphs, and metrics, 
professional business analytics dashboard, 
laptop on a sleek modern desk, 
soft studio lighting, 
dark or navy background, 
tech startup aesthetic, 
high resolution UI mockup photography, no text on screen
```

**ネガティブ要素:** 古いUI感 / 読みにくいチャート / 暗すぎる / ロゴ・ブランド写り込み

---

### IMAGE-PROMPT-012: ビジネスプロフェッショナル

| 項目 | 内容 |
|------|------|
| **ID** | IMAGE-PROMPT-012 |
| **名称** | SaaS ビジネスプロ |
| **利用業種** | SaaS / BtoB / コーポレート |
| **利用シーン** | FV / 信頼セクション / 導入事例 |
| **推奨サイズ** | 1024x1024（正方形）/ 1792x1024（横長） |

**プロンプト:**
```
Corporate professional portrait, Japanese business executive aged 35-50, 
confident and trustworthy expression, 
modern business attire (suit or smart casual), 
multiple monitors with data displays in background, 
clean modern tech office environment, 
professional studio-style lighting, 
navy blue tones, 
authoritative and competent presence, 
corporate photography style, no text
```

---

## プロンプト活用ガイド

### ChatGPTへの渡し方

```
1. ChatGPTを開く（DALL·E 3搭載バージョン）
2. プロンプトをそのままコピペして送信
3. 生成後に以下を確認:
   - 手・指の本数が自然か
   - 顔の造形が崩れていないか
   - 画像内に意図しないテキストがないか
   - 業種的にNGな表現がないか（薬機法・景表法）
4. 問題なければダウンロード（PNG推奨）
5. 必要に応じてリサイズ・最適化して使用
```

### プロンプト改変テンプレート

```
[元プロンプト] + 以下を末尾に追加:

追加ディレクション:
"The image should feel [warm/cool/energetic/calm]"
"Color palette should be [describe colors]"
"The overall mood is [emotional tone]"
"Shot on [camera type] with [lens] lens feel"
"Post-processing style: [minimal/cinematic/editorial]"
```

---

## 更新履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| v1.0 | 2026-06-25 | 初版作成。6業種×12プロンプト整備 |
