# Photo Source Library — フォト素材ライブラリ

**バージョン**: 1.0
**作成日**: 2026-06-27
**管理ファイル**: knowledge/assets/photo-source-library.md

---

## このファイルの目的

LP・ホームページ・WordPress制作時に適切なフォト素材を素早く選定できる状態を作る。
業種別の推奨素材サイト・検索ワード・利用シーンを一元管理する。

---

## 基本ルール

- Claude Codeは画像生成を行わない
- 画像生成が必要な場合はChatGPTのみ使用する（`chatgpt-image-prompt-library.md` 参照）
- 使用前にライセンスを必ず確認する（商用利用可のものを使用すること）
- クライアント提供素材が存在する場合は必ずそちらを優先する

---

## 素材サイト一覧

### PHOTO-SRC-001 Unsplash

**URL**: https://unsplash.com/ja
**ライセンス**: Unsplashライセンス（商用利用可・帰属表示不要）
**特徴**:
- 高品質・自然な雰囲気の写真が豊富
- 海外写真が多い（日本人モデルは少なめ）
- 解像度が高く印刷にも使用可能

**推奨業種**: 美容・採用・飲食・店舗・コーポレート・SaaS

**業種別推奨検索ワード**:

| 業種 | 推奨検索ワード（英語） | 利用シーン |
|------|---------------------|---------|
| 美容 | `beauty salon` `spa treatment` `skincare woman` `massage` | FV・施術シーン・内観 |
| 採用 | `office team` `coworking` `business meeting` `working smile` | FV・社員紹介・オフィス |
| 飲食 | `restaurant interior` `food plating` `cafe coffee` `chef cooking` | FV・料理・店内 |
| 店舗 | `retail store` `boutique interior` `small business` | 内観・外観 |
| コーポレート | `business professional` `conference room` `modern office` | 会社概要・代表紹介 |
| SaaS | `laptop work` `dashboard screen` `remote work` `tech startup` | FV・利用シーン |

---

### PHOTO-SRC-002 Pexels

**URL**: https://www.pexels.com/ja-jp/
**ライセンス**: Pexelsライセンス（商用利用可・帰属表示不要）
**特徴**:
- 人物写真が特に豊富
- 動画素材も無料で利用可能
- 日本語検索対応
- アジア系モデルを探しやすい

**推奨業種**: 採用・医療・スクール・飲食

**業種別推奨検索ワード**:

| 業種 | 推奨検索ワード | 利用シーン |
|------|-------------|---------|
| 採用 | `team work` `diverse team` `office smile` `employee meeting` | スタッフ・チーム紹介 |
| 医療 | `doctor consultation` `clinic` `nurse` `physical therapy` | 院長・施術・設備 |
| スクール | `studying` `online learning` `classroom` `student happy` | 学習風景・受講生 |
| 飲食 | `food photography` `restaurant dish` `cooking` `meal` | 料理・食事シーン |
| 美容 | `facial treatment` `beauty care` `salon` `skin care` | 施術風景 |

---

### PHOTO-SRC-003 Pixabay

**URL**: https://pixabay.com/ja/
**ライセンス**: Pixabayライセンス（商用利用可・帰属表示不要）
**特徴**:
- 写真数が圧倒的に多い
- イラスト・ベクター・動画も豊富
- 背景素材・テクスチャが充実
- 日本語検索対応

**推奨業種**: 汎用・背景・素材全般

**推奨利用シーン**:

| 利用シーン | 推奨検索ワード |
|----------|-------------|
| 背景テクスチャ | `background texture` `abstract gradient` `soft pattern` |
| CTA背景 | `pink gradient` `soft background` `white clean` |
| 自然・風景 | `nature` `sky` `forest` `ocean` |
| 街・建物 | `city` `building` `urban` `architecture` |
| 季節素材 | `spring flower` `summer beach` `autumn leaves` `winter snow` |

---

### PHOTO-SRC-004 O-DAN

**URL**: https://o-dan.net/ja/
**ライセンス**: サイトごとに異なる（各素材のライセンスを個別確認すること）
**特徴**:
- Unsplash・Pexels・Pixabay等を横断検索可能
- 一度に複数サイトの素材を比較できる
- 日本語キーワードで検索可能
- 素材探しの起点として最適

**推奨利用シーン**:
- 探している素材のイメージが固まっていないとき最初に使う
- 複数サイトを比較して最適な素材を選びたいとき

---

### PHOTO-SRC-005 freepik

**URL**: https://www.freepik.com/
**ライセンス**: フリープラン（帰属表示必要）/ 有料プラン（帰属表示不要）
**特徴**:
- モデル写真・背景・合成素材が豊富
- 日本人・アジア系モデルが比較的見つかる
- フラットイラストも豊富

**推奨業種**: 美容・医療・スクール

---

## 業種別 推奨フォト素材構成

### 美容（サロン・エステ・ネイル）

| 箇所 | 推奨素材 | 優先取得先 | 検索ワード |
|------|---------|----------|----------|
| FV背景 | 施術イメージ・清潔感ある空間 | クライアント提供 → Unsplash | `beauty salon` `spa interior` |
| サービス紹介 | 施術風景 | クライアント提供 → Pexels | `facial treatment` `massage` |
| 内観 | 清潔感ある店内 | クライアント提供 → Unsplash | `salon interior` `beauty room` |
| スタッフ | 笑顔のスタッフ | クライアント提供 → Pexels | `beautician` `salon staff` |
| Before/After | 施術前後の比較 | クライアント提供のみ | — |
| CTA背景 | ソフトグラデーション | Pixabay | `pink gradient` `soft background` |

### 採用

| 箇所 | 推奨素材 | 優先取得先 | 検索ワード |
|------|---------|----------|----------|
| FV背景 | 生き生きと働く社員・チーム | クライアント提供 → Pexels | `team work` `office smile` |
| 社員紹介 | 自然な仕事風景・個人写真 | クライアント提供 → Pexels | `working professional` `employee` |
| オフィス | 明るいオフィス環境 | クライアント提供 → Unsplash | `modern office` `workspace` |
| 働く風景 | 実際の業務シーン | クライアント提供 → Pexels | `business meeting` `coworking` |
| インタビュー | 話している社員 | クライアント提供 → Pexels | `interview conversation` `work talk` |

### 医療（クリニック・整体・歯科）

| 箇所 | 推奨素材 | 優先取得先 | 検索ワード |
|------|---------|----------|----------|
| FV | 清潔感ある院内・白背景 | クライアント提供 → Unsplash | `clinic interior` `medical clean` |
| 院長 | プロフィール写真 | クライアント提供のみ | — |
| 施術風景 | プロフェッショナルな施術 | クライアント提供 → Pexels | `physical therapy` `treatment` |
| 設備 | 最新機器・清潔感 | クライアント提供 → Unsplash | `medical equipment` `dental chair` |
| 受付 | 明るい受付・笑顔スタッフ | クライアント提供 → Pexels | `reception desk` `medical staff` |
| 相談シーン | 患者と話す医師 | Pexels | `doctor patient consultation` |

### 飲食

| 箇所 | 推奨素材 | 優先取得先 | 検索ワード |
|------|---------|----------|----------|
| FV | 看板料理のアップ・美しい盛り付け | クライアント提供 → Unsplash | `food photography` `gourmet dish` |
| 料理 | 各メニューの料理写真 | クライアント提供 → Pexels | `japanese food` `restaurant meal` |
| 店内 | 雰囲気ある空間・テーブルセット | クライアント提供 → Unsplash | `restaurant interior` `dining room` |
| 外観 | 外観・看板 | クライアント提供のみ | — |
| シェフ | 料理する職人 | クライアント提供 → Pexels | `chef cooking` `kitchen chef` |
| 食事シーン | 楽しそうに食べる客 | Pexels | `people dining` `restaurant guests` |

### スクール・教育

| 箇所 | 推奨素材 | 優先取得先 | 検索ワード |
|------|---------|----------|----------|
| FV | 真剣に学ぶ受講生 | クライアント提供 → Pexels | `studying` `online learning` |
| 学習風景 | グループ・個別学習 | クライアント提供 → Pexels | `classroom` `e-learning` |
| 講師 | 教えている講師 | クライアント提供のみ | — |
| 受講生 | 笑顔で学ぶ姿・成果を出した姿 | クライアント提供 → Pexels | `student happy` `learning success` |
| オンライン授業 | PCでオンライン受講 | Unsplash | `online class` `video call learning` |

### SaaS・BtoB

| 箇所 | 推奨素材 | 優先取得先 | 検索ワード |
|------|---------|----------|----------|
| FV | ダッシュボード表示のPC・タブレット | クライアント提供 → Unsplash | `dashboard laptop` `saas product screen` |
| UI紹介 | プロダクトのスクリーンショット | クライアント提供のみ | — |
| 利用シーン | ビジネスマンがツールを使う | Pexels | `business software use` `team using app` |
| ビジネス人物 | プロフェッショナルな人物 | Unsplash | `business professional` `executive` |

---

## 素材使用前チェックリスト

- [ ] 商用利用可のライセンスか確認した
- [ ] 帰属表示が必要な場合は表示設定した
- [ ] 解像度が十分か確認した（最低1200px幅以上推奨）
- [ ] 人物写真の場合、モデルリリース有りのものを使用している
- [ ] 日本語版LPに違和感のない素材か確認した（海外風すぎないか）
- [ ] 業種・ブランドイメージに合っているか確認した
- [ ] クライアント提供素材がないか最初に確認した

---

## Learning Reason

**Why**: LP・HP制作時に素材探しで時間がかかりすぎる問題を解消するため。業種別の最適素材と検索ワードをナレッジ化し、ゼロから探す時間を削減する。
**応用先**: すべての業種のLP・HP・WordPress制作時の素材選定フェーズ
