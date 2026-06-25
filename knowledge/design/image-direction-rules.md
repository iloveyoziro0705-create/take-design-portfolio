# Image Direction Rules — 画像ディレクション統一規則

**バージョン:** v1.0  
**最終更新:** 2026-06-25  
**管理者:** TAKE Design  
**参照:** visual-library.md / industry-visual-patterns.md / emotional-triggers.md

---

## 概要

このファイルは、LP制作における画像選定・AI生成・撮影ディレクションを統一するための規則集です。  
ストックフォト選定・Midjourney/Stable Diffusion生成・実際のフォト撮影、すべてこの規則に従うこと。

---

## PART 1: 感情連携マップ（Emotion × Visual）

各感情トリガーに対応するビジュアル仕様を定義。  
→ 詳細: `knowledge/lp/emotional-triggers.md`

| トリガーID | 感情 | ライティング | 表情 | 色温度 | 人物配置 | 背景 |
|-----------|------|------------|------|--------|---------|------|
| TRIG-001 | 共感・悩み訴求 | 柔らかい拡散光 | わずかに不安・考え込む | ニュートラル | 正面やや俯き | グレー・白 |
| TRIG-002 | 安心・信頼 | 自然光・窓際 | 穏やかな笑顔 | 暖色（3200K） | 斜め45°・目線あり | 白・アイボリー |
| TRIG-003 | 憧れ・理想 | 逆光・ハレーション | 遠くを見つめる・微笑 | 暖かいゴールド | 余白多め・引き気味 | ぼかし・自然 |
| TRIG-004 | 権威・実績 | 正面光・スタジオ | 真剣・自信 | クール（5500K） | 正面・目線あり | 白・グレー |
| TRIG-005 | 緊急・限定 | コントラスト強め | エネルギッシュ・明るい | 鮮やか・高彩度 | 動きある構図 | シンプル・無地 |
| TRIG-006 | 変化・ビフォーアフター | 明るい・クリア | 笑顔・自信回復 | 暖色から明るく | 変化を示す構成 | 清潔・明るい白 |
| TRIG-007 | 社会的証明 | 自然・リアル | リラックス・満足 | ナチュラル | グループ・並列 | 実際の店舗・職場 |
| TRIG-008 | 損失回避 | やや暗め・陰影 | 心配・後悔 | クール・青み | 一人・孤立感 | シンプル・余白 |
| TRIG-009 | 診断・発見 | 明るい・発見感 | 驚き・気づき | 明るいニュートラル | 目線カメラ外 | 抽象・チャート |
| TRIG-010 | ストーリー | 映画的・環境光 | 喜怒哀楽の変化 | 物語に沿う | シーンの一部 | 環境・状況説明 |

### 感情→ビジュアル変換ルール

```
安心感  → 自然光 → 笑顔 → 暖色（3200K〜4000K）
権威性  → 正面視線 → 白背景 → 実績数値を重ねる
憧れ    → 逆光 → 余白 → 上質感（ぼけ・高品質素材）
共感    → 同じ境遇の人物 → 生活感ある背景 → 中彩度
緊急性  → 鮮やか色 → エネルギッシュ構図 → 高コントラスト
変化    → Before（暗）→ After（明）の色温度変化
```

---

## PART 2: 業種別画像ディレクション

---

### IND-IMG-001: 美容サロン（ビューティー）

**ターゲット感情:** 憧れ・安心・変化（TRIG-003, TRIG-002, TRIG-006）

#### 人物撮影仕様

| 項目 | 仕様 |
|------|------|
| **表情** | 穏やかな笑顔・目線はカメラか遠く・口元が緩んでいる |
| **服装** | 白・アイボリー・ベージュのシンプルな服装 / サロン内は施術着 |
| **ポーズ** | 顔に手を添える・頬に触れる・リラックスした姿勢 |
| **背景** | 白・ベージュ・薄ピンク / ぼかし（f1.8〜2.8相当） |
| **ライティング** | 自然光 or ソフトボックス拡散光・影を最小化 |
| **構図** | 上半身〜顔アップ・三分割法・左右余白あり |
| **配色** | ローズ / チェリーブロッサム / ミルクホワイト / ゴールド |
| **世界観** | 上質・繊細・女性らしい・清潔感 |
| **カメラ距離** | ポートレート（50〜85mm相当・バストショット〜顔アップ） |
| **レンズ感** | 中望遠・浅いピント・背景ぼけ強め |

#### Stable Diffusion プロンプト

```
(beauty salon promotional photo), young japanese woman 25-35 years old, 
soft natural smile, clear glowing skin, no makeup or light natural makeup, 
touching cheek gently, white or beige background, soft diffused lighting, 
bokeh background, professional beauty shot, high quality skin texture, 
warm color temperature, 85mm portrait lens, shallow depth of field,
--ar 3:4 --style raw --q 2
```

#### Midjourney プロンプト

```
/imagine young Japanese woman at beauty salon, radiant clear skin, 
gentle warm smile touching her face, soft natural window light, 
white minimalist background, professional beauty photography, 
warm rose-beige tones, 85mm lens bokeh, ultra high detail skin --ar 3:4 --v 6 --style raw
```

#### NG パターン

- 過度なメイクアップ（素肌の良さが伝わらない）
- 暗い・影の多い照明
- 複数人の賑やかな構図（個別ケアの価値が下がる）
- 水着・過度な露出

---

### IND-IMG-002: 採用・求人

**ターゲット感情:** 安心・共感・憧れ（TRIG-002, TRIG-001, TRIG-003）

#### 人物撮影仕様

| 項目 | 仕様 |
|------|------|
| **表情** | 自信ある笑顔・目線はカメラ正面・仕事への誇り |
| **服装** | 実際の制服・スーツ・仕事着（リアリティ重視） |
| **ポーズ** | 職場環境での自然なポーズ・仕事中のシーン |
| **背景** | 実際のオフィス・職場・作業環境（実在感） |
| **ライティング** | 自然光 or 職場環境光・リアルな雰囲気 |
| **構図** | 環境を含めたミディアムショット〜全身 |
| **配色** | 企業カラー / ネイビー / クリーン |
| **世界観** | 誠実・チームワーク・成長・活き活き |
| **カメラ距離** | 環境を含む（24〜50mm相当・ウエストショット〜全身） |
| **レンズ感** | 標準〜広角・環境含む・適度な深度 |

#### Stable Diffusion プロンプト

```
(corporate recruitment photo), japanese professional man/woman 25-40 years old,
confident warm smile, looking at camera, wearing business casual attire,
modern office background with natural light, team collaboration scene,
professional corporate photography, authentic workplace feeling,
natural color grading, 35mm lens, medium depth of field,
--ar 16:9 --style photographic
```

#### Midjourney プロンプト

```
/imagine Japanese professional at modern office, confident smile looking at camera,
business casual clothing, bright collaborative workspace, authentic work environment,
corporate recruitment photography, natural warm lighting, team spirit atmosphere,
35mm lens environmental portrait --ar 16:9 --v 6
```

#### NG パターン

- モデル感が強すぎる（リアリティが失われる）
- 過度にポーズを決めた写真
- 暗い・殺風景なオフィス
- 性別・年齢が偏った集合写真

---

### IND-IMG-003: 医療・クリニック

**ターゲット感情:** 信頼・安心・権威（TRIG-002, TRIG-004）

#### 人物撮影仕様

| 項目 | 仕様 |
|------|------|
| **表情** | 穏やか・誠実・真剣（笑顔は温かく）|
| **服装** | 白衣・スクラブ・清潔感のある制服 |
| **ポーズ** | 正面〜斜め45°・腕を組む・書類持つ・話す姿勢 |
| **背景** | 白・グレー・診察室 / 整理整頓された医療環境 |
| **ライティング** | スタジオ光・均一・清潔感のある白系 |
| **構図** | バストショット〜上半身・目線あり |
| **配色** | 白 / ライトブルー / グレー / ネイビー |
| **世界観** | 清潔・誠実・専門性・安心感 |
| **カメラ距離** | バストショット（50〜85mm相当） |
| **レンズ感** | 中望遠・クリアな描写・背景は適度にぼけ |

#### Stable Diffusion プロンプト

```
(medical clinic professional photo), japanese doctor/nurse 30-50 years old,
warm professional smile, white medical coat, clean hospital or clinic background,
studio lighting, trustworthy and caring expression,
medical professional photography, clean white and light blue tones,
85mm portrait, professional headshot quality,
--ar 3:4 --style photographic --q 2
```

#### Midjourney プロンプト

```
/imagine Japanese doctor in white coat, warm trustworthy smile, 
clean modern clinic background, professional studio lighting,
medical professional portrait photography, light blue and white tones,
authority and caring combined expression, 85mm lens --ar 3:4 --v 6
```

#### NG パターン

- 痛そう・怖いイメージの施術写真
- 過度に病院らしい殺風景な背景
- 不鮮明・解像度の低い写真
- 過度なレタッチで不自然な肌

---

### IND-IMG-004: 飲食・レストラン

**ターゲット感情:** 食欲・憧れ・体験（TRIG-003, TRIG-007）

#### 料理撮影仕様

| 項目 | 仕様 |
|------|------|
| **表情（料理）** | 湯気・光沢・みずみずしさ・新鮮さ |
| **スタイリング** | 余白を活かす・彩りの対比・高さを出す |
| **ポーズ（人物）** | 食事を楽しんでいる・会話している・笑顔 |
| **背景** | 木目・大理石・リネン / レストランの雰囲気 |
| **ライティング** | 自然光 or ディフューザー拡散・影の方向統一 |
| **構図** | 真上（真俯瞰）/ 斜め45°（フード写真の定番） |
| **配色** | 食材の自然色 / アースカラー / 白 |
| **世界観** | 豊かさ・美食・体験・こだわり |
| **カメラ距離** | 料理アップ〜テーブル環境（35〜100mm） |
| **レンズ感** | マクロ〜標準・料理に浅いピント |

#### Stable Diffusion プロンプト（料理）

```
(restaurant food photography), beautiful japanese cuisine presentation,
steaming hot food with perfect lighting, bokeh background,
marble or wood table surface, professional food styling,
natural window light with diffuser, vibrant fresh ingredients,
overhead or 45 degree angle shot, high quality food photography,
appetizing warm tones,
--ar 4:3 --style photographic --q 2
```

#### Midjourney プロンプト（料理）

```
/imagine stunning japanese restaurant food, perfectly plated dish,
steam rising, warm natural lighting, bokeh wood table background,
professional food photography, 45 degree angle, appetizing colors,
michelin star plating quality --ar 4:3 --v 6 --style raw
```

#### NG パターン

- 暗い・くすんだ色調
- 料理が冷めているような見た目
- 散らかったテーブル・雑然とした背景
- 過度なフィルター・不自然な色補正

---

### IND-IMG-005: スクール・教育

**ターゲット感情:** 成長・安心・達成（TRIG-003, TRIG-002, TRIG-006）

#### 人物撮影仕様

| 項目 | 仕様 |
|------|------|
| **表情** | 集中した顔・気づいた顔・達成感の笑顔 |
| **服装** | カジュアル〜ビジカジ（学習環境に合わせて） |
| **ポーズ** | PC操作・ノートを書く・発表する・グループ議論 |
| **背景** | 明るいスタジオ / モダンな学習環境 / ホワイトボード |
| **ライティング** | 明るい・清潔感・フレッシュ感 |
| **構図** | 環境を含めたミディアム〜全身・動きある構図 |
| **配色** | ブルー / グリーン / 白 / イエロー（学びの色） |
| **世界観** | 向上心・可能性・挑戦・サポート感 |
| **カメラ距離** | ミディアム（35〜50mm相当・腰上〜全身） |
| **レンズ感** | 標準・自然な描写・環境感重視 |

#### Stable Diffusion プロンプト

```
(online school educational photo), japanese student 20-40 years old,
focused expression studying on laptop, modern bright study environment,
educational photography, natural daylight, engaged learning moment,
clean blue and white tones, professional educational marketing photo,
35mm lens, medium depth of field, motivational atmosphere,
--ar 16:9 --style photographic
```

#### Midjourney プロンプト

```
/imagine Japanese adult student at modern learning environment,
focused concentration on laptop, bright spacious study room,
educational photography, natural window light, growth and achievement mood,
blue and white clean tones, motivational learning atmosphere --ar 16:9 --v 6
```

#### NG パターン

- つまらなそうな・退屈な表情
- 暗い・古い学習環境
- 年齢層がターゲットと合わない
- 詰め込み・プレッシャー感のある演出

---

### IND-IMG-006: SaaS / BtoB

**ターゲット感情:** 信頼・効率・権威（TRIG-004, TRIG-002）

#### 人物撮影仕様

| 項目 | 仕様 |
|------|------|
| **表情** | 自信ある・落ち着いた・プロフェッショナル |
| **服装** | スーツ〜ビジカジ（業界に合わせて） |
| **ポーズ** | データ確認・会議・PC操作・説明する姿勢 |
| **背景** | モダンオフィス / 会議室 / 抽象的なブルー |
| **ライティング** | クリーン・均一・ビジネスライク |
| **構図** | バスト〜環境含む・グラフ・UIを重ねる |
| **配色** | ネイビー / ブルー / グレー / ホワイト |
| **世界観** | 信頼・効率・革新・確実性 |
| **カメラ距離** | バスト〜ウエスト（50〜85mm） |
| **レンズ感** | 中望遠〜標準・クリアな描写 |

#### Stable Diffusion プロンプト

```
(B2B SaaS business photo), japanese business professional 30-45 years old,
confident professional expression, business suit or smart casual,
modern office with large monitors and data displays,
corporate photography, clean studio lighting, navy and white tones,
professional headshot quality, trustworthy business atmosphere,
50mm lens, sharp focus,
--ar 16:9 --style photographic
```

#### Midjourney プロンプト

```
/imagine Japanese business professional at modern tech office,
confident calm expression, looking at multiple monitors with data dashboards,
corporate SaaS company atmosphere, clean modern lighting,
navy blue and white professional tones, business efficiency and trust --ar 16:9 --v 6
```

#### NG パターン

- 過度にカジュアルすぎる
- ストックフォト感が強すぎる（不自然なポーズ）
- ブランドカラーと合わない色調
- 古いPC・旧式のオフィス環境

---

## PART 3: 汎用撮影ディレクション規則

### 3-1. 人物写真 共通規則

| カテゴリ | 基準 |
|---------|------|
| **解像度** | 最低2000px以上（横幅）/ Web用は1920px目安 |
| **ファイル形式** | JPEG（写真）/ PNG（透過・ロゴ）/ WebP（配信用） |
| **色空間** | sRGB（Web表示用） |
| **レタッチ基準** | 自然な肌感を維持・過度な美白・スムース処理禁止 |
| **多様性** | 年齢・性別・体型の多様性を意識（ターゲット一致優先） |

### 3-2. ストックフォト選定基準

```
優先度1: 日本人モデル使用・日本の環境（リアリティ優先）
優先度2: アジア系モデル（自然な印象）
優先度3: 欧米モデル（グローバル感が必要な業種のみ）

NG条件:
- 過度にポーズを決めた不自然な写真
- 画像内にテキスト・ウォーターマークが残る
- 古い年代感（PC・家具・ファッション）
- 解像度不足
```

### 3-3. AI生成画像 使用ガイドライン

**使用可能なケース:**
- プレースホルダー（撮影前の仮素材）
- 背景・テクスチャ・抽象的な素材
- イラスト・アイコン的な用途

**使用注意ケース:**
- 人物メイン（手・顔の歪みに注意）
- 実在店舗・施設の表現（誤解を招く可能性）
- 医療関連（薬機法・景表法に注意）

**生成後のチェックリスト:**
- [ ] 手の指の本数・形が自然か
- [ ] 文字・ロゴが歪んでいないか
- [ ] 表情が不自然でないか
- [ ] 背景に不自然な歪みがないか
- [ ] 著作権・肖像権のリスクがないか

---

## PART 4: FV画像仕様早見表

FV（ファーストビュー）に使用する画像の最低仕様。

| 業種 | 推奨アスペクト | 最低解像度 | 主被写体 | 視線方向 |
|------|-------------|----------|---------|---------|
| 美容 | 3:4 / 1:1 | 1200×1600px | 笑顔女性・顔アップ | カメラ or 遠く |
| 採用 | 16:9 / 4:3 | 1920×1080px | 職場環境+人物 | カメラ正面 |
| 医療 | 3:4 / 16:9 | 1200×1600px | 医師・看護師バスト | カメラ正面 |
| 飲食 | 4:3 / 1:1 | 1600×1200px | 料理・店内 | 俯瞰 or 45° |
| スクール | 16:9 / 4:3 | 1920×1080px | 学習中の人物 | 斜め or 集中顔 |
| SaaS | 16:9 | 1920×1080px | UI + 人物 | カメラ or 画面 |

---

## PART 5: カラーグレーディング参照値

| 業種 | ハイライト | シャドウ | 彩度 | 色温度 | 仕上がりイメージ |
|------|---------|--------|------|-------|--------------|
| 美容 | +10〜+15 | -5〜0 | +5〜+10 | 暖色（+200K） | 柔らかく上品 |
| 採用 | +5〜+10 | -10〜-5 | 0〜+5 | ニュートラル | クリーン・誠実 |
| 医療 | +5〜+10 | -5〜0 | -5〜0 | クール（-100K） | 清潔・信頼 |
| 飲食 | +10〜+20 | 0〜+5 | +10〜+20 | 暖色（+300K） | 食欲をそそる |
| スクール | +10〜+15 | -10〜-5 | +5〜+10 | 明るい（+100K） | 活き活き・フレッシュ |
| SaaS | 0〜+5 | -10〜-15 | -5〜0 | クール（-200K） | プロフェッショナル |

---

## PART 6: ID管理

| ID | 用途 |
|----|------|
| IND-IMG-001 | 美容サロン画像ディレクション |
| IND-IMG-002 | 採用・求人画像ディレクション |
| IND-IMG-003 | 医療・クリニック画像ディレクション |
| IND-IMG-004 | 飲食・レストラン画像ディレクション |
| IND-IMG-005 | スクール・教育画像ディレクション |
| IND-IMG-006 | SaaS/BtoB画像ディレクション |

---

## 更新履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| v1.0 | 2026-06-25 | 初版作成 |
