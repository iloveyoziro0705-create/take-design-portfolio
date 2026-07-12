# Photo Composition Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: photo

## 概要

写真構図・撮影ディレクション・画像選定基準のライブラリ。
LP・HP・WordPress・ポートフォリオで使う写真の「構図ルール」「被写体配置」「カメラ距離」「ライティング」「色温度」を体系化予定。

## 収録予定カテゴリ

### 構図パターン
- PHO-COMP-001: 三分割法
- PHO-COMP-002: 日の丸構図
- PHO-COMP-003: 対角線構図
- PHO-COMP-004: フレーミング構図
- PHO-COMP-005: リーディングライン
- その他追加予定

### 被写体別ディレクション
- 人物（正面・斜め・横・後ろ姿）
- 料理・物販商品
- 建築・空間・インテリア
- 自然・風景
- UIスクリーン・デバイス

### 業種別推奨構図
- 美容・医療: 清潔感重視ライティング + バスト〜クローズアップ
- 飲食: ウォームライティング + クローズアップ + 斜め45度
- SaaS: デバイスモックアップ + 斜め俯瞰
- 採用・コーポレート: 広角 + 人物複数 + 明るい

## 参照先

`knowledge/design-system/photo/visual-composition-rules.md` — 構図の使い分けルール

---

## 実案件からの知見（2026-07-12 追加）

以下は `ai-school-lp` / `beauty-salon-lp` / `business-design-academy-lp` / `career-compass-lp` / `dental-clinic-lp` / `elearning-lp` / `finance-lp` / `hoikushi-mikata-lp` / `lumia-lp` / `mirai-ryo-lp` / `rapas-lp` / `restaurant-lp` の実LP12件のコード（CSS実装・画像フォルダ構成）を調査して抽出した実践知見。上記「収録予定」の体系化がまだ途中のため、実例ベースの一次情報として先行して記録する。

### 業種別・実案件での構図/アスペクト比の使われ方（実データ）

- **歯科クリニック（dental-clinic-lp）**: 清潔感重視。サービスカード写真は `aspect-ratio:4/3` を統一使用し `:hover` で `transform:scale(1.06)` にズーム。院長紹介ポートレートは縦長 `aspect-ratio:3/4`。Hero visual は `aspect-ratio:4/5`（縦長強調）＋ `filter:saturate(1.05) brightness(1.02)` で肌色を明るく健康的に補正。院内ギャラリー（`.clinic-gallery-item`）も `4/3` 統一＋`border-radius:var(--radius)`＋`box-shadow:var(--shadow-soft)`。画像ファイル名も `clinic-1〜5.jpg` `doctor.jpg` `service-{implant,ortho,whiten,perio,denture,...}.jpg` `voice-avatar-{1,2}.jpg` のように役割ベースで統一命名されている。
- **美容サロン（beauty-salon-lp）**: Hero画像は PC `aspect-ratio:3/2` → タブレット `3/4` → モバイル `4/5` とブレークポイントごとに縦横比を切り替える（横長→縦長へ）レスポンシブ設計。メニュー写真は `menu-01-basic.jpg` 等の連番命名。オーナー写真は `aspect-ratio:3/4`（PC）→ `3/2`（モバイル）。人物写真は軒並み `object-position: center top`（顔基準で上寄せトリミング）。
- **起業スクール（business-design-academy-lp）**: 大半の画像を `aspect-ratio:4/3` に統一（`hero-business.jpg` `problem-office-worker.jpg` `mentoring-session.jpg` 等）。ロードマップ図解のみワイド `16/6`、Before/Afterのビジョン変容比較画像は超ワイド `21/9`。学習カード画像は `16/9`。「通常カード=4:3、図解・比較=横長」という使い分けが一貫している。
- **保育士メディア（hoikushi-mikata-lp）**: `object-position: top` で顔基準トリミング。Final CTA画像は固定比率ではなく `min-height:380px; max-height:460px` のレンジ指定で高さのブレを許容。
- **飲食（restaurant-lp）**: Hero は `<img>` を使わず `background: linear-gradient(...), url("...") center/cover` の背景画像合成。コンセプト画像は `aspect-ratio` ではなく `height:560px` の固定高さ＋`border-radius:24px`。3カラムカードの写真も `height:260px` 固定。
- **AIスクール（ai-school-lp）**: Unsplash実写真を25枚以上、幅広い文脈（オフィス・PC作業・セミナー・ポートレート）で使用。動画プレビューのサムネイルは `filter: brightness(.75)` で暗くし、その上に白文字ラベルを重ねて可読性を確保するパターン。
- **求人・不動産・キャリア・美容室系（mirai-ryo-lp / rapas-lp / career-compass-lp / lumia-lp）**: 実写真を一切使わず、`aspect-ratio` 固定のブロック＋`linear-gradient`＋疑似要素（`::before`/`::after`）による幾何学的な装飾のみで図解を表現している。写真素材が未確定・不要なフェーズのLPでは、この「CSSのみのビジュアルプレースホルダー」構成も実用パターンとして成立する（具体的な実装手法は`visual-composition-rules.md`の「画像未着手プレースホルダー」参照）。

### 業種別 aspect-ratio 早見表（実案件から集計）

| 用途 | aspect-ratio | 備考 |
|---|---|---|
| 医療・クリニックの人物ポートレート | `3/4` | 縦長。信頼感・清潔感を強調 |
| サービス紹介カード写真（業種問わず標準） | `4/3` | 最頻出パターン |
| Hero visual（縦長を強調したい場合） | `4/5` | 美容・医療系Heroで採用 |
| Hero（横長・PC基準） | `3/2` | レスポンシブでモバイル時 `4/5` 等に切替 |
| 学習・SaaS系カード画像 | `16/9` | 動画的なワイド感 |
| ロードマップ・比較図解 | `16/6` 〜 `21/9` | 横スクロール的な情報量を持たせたい場合の超ワイド |

### ホバーインタラクションの定番実装

サービスカード・ギャラリー系で最頻出のパターン（dental-clinic-lp等で実装確認）:

```css
.service-card .photo{aspect-ratio:4/3;overflow:hidden;}
.service-card .photo img{width:100%;height:100%;object-fit:cover;transition:.5s;}
.service-card:hover .photo img{transform:scale(1.06);}
```

`scale(1.06)` が拡大率の定番値（実案件で複数採用）。`1.1`以上にすると画像の粗が見えやすく崩れやすいため非推奨。親要素に`overflow:hidden`を必ずセットし、拡大時のはみ出しをクリップする。

---

## Pinterest調査からの知見（2026-07-12 追加）

Pinterest「美容室　LP」検索の50件を目視分析（詳細な調査手法・母集団の注意点は[[hero-layout-library]]末尾の「Pinterest調査からの知見」参照）。美容室の人物写真は目的によって構図が明確に分かれることを確認した。

| 目的 | 構図の傾向 | 使用シーン |
|---|---|---|
| 集客即効性（オープン告知・割引訴求） | カメラ目線・微笑み・バストアップ〜顔クローズアップ、明るくソフトなライティング | HERO-056（グランドオープン告知型） |
| ブランディング（世界観・技術力訴求） | 横顔・後ろ姿・手元や髪の部分クローズアップなど「見せすぎない」構図、低彩度でフィルム調のカラーグレーディング | HERO-057（エディトリアル雑誌風美容室Hero型） |

既存の「美容・医療: 清潔感重視ライティング + バスト〜クローズアップ」という業種別推奨構図は、上記表の「集客即効性」寄りの傾向にほぼ一致する。一方で、ブランディング重視のサロンでは意図的に顔を見せきらない構図が採られるケースが一定数（6件）確認できたため、業種だけでなく「集客即効性 or ブランディング」という目的軸でも構図を使い分けるべきという知見を追加する。

### 飲食店LP調査（2026-07-12 同日追加実施）

Pinterest「飲食店　LP」検索50件を追加分析。飲食店は美容室以上に「完成品 vs 調理工程」で構図が明確に分かれることを確認した。

| 訴求対象 | 構図の傾向 | 使用シーン |
|---|---|---|
| 完成した料理そのもの | 真上 or 斜め45度、フラットで影を抑えた明るい撮影、白背景/木目背景 | HERO-052（飲食×料理クローズアップ型）・HERO-058（メニュー価格グリッド提示型） |
| 調理工程・職人の手元 | 浅い被写界深度、ドラマチックな陰影・スポットライト的な集中光、湯気/炎/粉の質感を強調 | HERO-059（職人密着クローズアップ型） |

既存の業種別推奨構図表に「飲食: ウォームライティング + クローズアップ + 斜め45度」とあるが、これは主に「完成品訴求」寄りの構図であり、職人技をブランディング軸に据えるLPでは意図的にドラマチックな陰影・超クローズアップの調理シーンを採用する方が効果的という使い分けを追加する。
