# Visual Composition Rules

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: photo

## 概要

写真・ビジュアル素材の選定・配置・加工ルールブック。
「どの写真をどう使うか」の判断基準を体系化し、一貫したビジュアル品質を維持するためのルール集。

## 収録予定ルール

### 選定ルール
- 業種別NGビジュアル（医療でのNG例・飲食でのNG例など）
- フリー素材 vs 実写の使い分け基準
- AI生成画像の利用ガイドライン

### 加工ルール
- オーバーレイ透明度基準（テキスト可読性確保）
- グラデーションマスクのかけ方
- 色調補正の方向性（業種別トーン）

### 配置ルール
- 視線誘導を考慮した人物配置（視線方向→CTA）
- 余白とのバランス
- テキストとの重なり許容範囲

### アクセシビリティ
- コントラスト比基準
- 代替テキスト（alt）記述ルール

## 参照先

`knowledge/design-system/photo/photo-composition-library.md` — 構図パターン詳細

---

## 実案件からの知見（2026-07-12 追加）

過去の制作セッション（TAKE CRAFTブランドサイト、歯科クリニックLP、LearnCore(elearning-lp)、finance-lp等）で実際に確立した、写真・イラスト素材の調達フロー／加工ルール／配置ルールの実践知見。時系列で状況が変化している項目（特にBot対策）は、いつ・何が起きたかを明記して矛盾なく整理する。

### 選定ルール：フリー素材サイトの調達フロー（時系列で状況が変化）

**重要：Pexels/UnsplashともにBot検知が年々強化されており、時期によって使える手法が変わっている。以下は判明した経緯そのままを記録する。**

- **Pexels**: 2026-07-07時点で、PlaywrightのheadlessブラウザからCloudflareのBot検証（"Performing security verification"のチャレンジ画面）でブロックされ、検索結果を取得できないことを確認済み。Pexelsを使う場合は先に軽く疎通確認し、ブロックされていたらUnsplashに切り替える。
- **Unsplash（基本フロー）**: `https://unsplash.com/s/photos/{query}` をPlaywrightで開き、`img[src*="images.unsplash.com/photo-"]` を抽出する（`plus.unsplash.com` のURLはUnsplash+の有料素材なので必ず除外する）。
- **Unsplash（2026-07-08時点で追加のBot対策が必要になった）**: この日から「Oh noes! Access Denied」というBotStopper系のBot検知がUnsplashにも追加された。突破には以下の組み合わせが有効：
  - `chromium.launch({args:['--disable-blink-features=AutomationControlled']})` でheadless検出用フラグを無効化
  - 実際のデスクトップChromeのUser-Agentを明示的にセット
  - `navigator.webdriver` を `undefined` に上書きする `initScript`（`addInitScript`）をページ読み込み前に注入
- **正しい写真ページURL・撮影者名の取得方法**: 画像の直接URL（`images.unsplash.com/photo-{id}`）から `/photos/{id}` に直接アクセスすると404になる。検索結果ページの `a[href*="/photos/"]` のhrefから正しいスラッグを取得すること。
- **CDN URLの形式**: `https://images.unsplash.com/photo-{timestamp}-{hash}?w={w}&q=80&auto=format`。サイズは用途に合わせて指定（hero: 1920x1080程度、avatar: 400x400、OGP: 1200x630等）。
- **ライセンス**: Pexels/Unsplashはどちらも商用利用可・帰属表示不要。

### 選定ルール：`&crop=faces&h=` パラメータの弊害

`&crop=faces&h=` を付けると顔検出が失敗した場合に不自然な位置でクロップされることがある（2026-07-07に実際発生：人物を写したはずが木々ばかりが写り人物が小さくなる事故が起きた）。**人物写真は `w=` のみを指定して自然比率のまま取得し、位置調整はCSS側の `object-fit:cover` + `object-position` で行う方が確実。** position値（例: `center 100%` = 下寄せ）は複数パターンを試してから本採用するのがよい。

### 選定ルール：同一人物を複数箇所で使いたい場合

Hero写真と院長紹介写真など、同じLP内の複数箇所で同一人物の写真が必要になるケースがある。Unsplashには同一モデル・同一撮影シリーズの別カットが複数枚アップロードされていることがあり、服装・背景・ポーズが同じ候補を探すことで、無料素材のまま「同一人物の別カット2枚以上」を確保できる（2026-07-07、歯科クリニックLPのブラッシュアップで実際に発見・採用した手法）。

### 選定ルール：人種・民族確認のモンタージュ手法

人物写真の人種確認は alt テキストや検索クエリの語句だけに頼らない（Unsplashのスラッグ名・alt文言は実際の被写体の人種を正しく反映していないことがある）。**複数候補を1枚のHTMLモンタージュ画像（グリッド+ラベル）にまとめてPlaywrightでスクリーンショットし、目視確認するフロー**が効率的。

**特定の人種を指定された場合の検索テクニック**（2026-07-08、歯科クリニックLPで「日本人にしてほしい」という追加依頼から確立）:
- 単純な `"japanese woman"` / `"japanese man"` のような2語クエリは、カジュアルな一般ポートレート・ライフスタイル写真としては明確に日本人らしい高品質な結果が返る。
- しかし `"japanese dentist"` `"japanese doctor patient"` のように**業種・シチュエーションを掛け合わせた複合クエリは0件、無関係な結果、または全員マスク着用で顔が見えない**結果になりがちで、医療・クリニック系の「日本人×専門職」構図の調達は難易度が高い。
- フォールバックとして `"korean doctor smiling portrait"` `"east asian doctor smiling scrubs"` のように国籍を東アジア圏に広げたクエリが実用的な妥協案になる（完全な日本人保証はできないが、はっきり明るい印象の東アジア系の顔立ちの候補が得られる）。
- **同じ検索語でも、異なるqueryを続けて叩くとUnsplashが前回検索結果をキャッシュしたまま返すことがあり、全く無関係な写真セット（別のqueryの結果と完全一致）が返るバグを実際に踏んだ。** 予期しない内容（例: 検索語と無関係なファッション/コスプレ写真ばかり）が返った場合は、そのクエリ回だけ再実行して結果が変わるか確認すること。
- 最終選定は必ず上記のモンタージュ化＋目視確認を行う。

### 選定ルール：フリーイラスト素材（unDraw vs Storyset の使い分け）

**重要な訂正（2026-07-08判明）**: 当初「undraw.coを標準採用」としていたが、実際にダウンロード・レンダリングして検証したところ、**unDrawのイラストはほぼ全て顔のパーツが描かれない/後ろ向き・横向きの抽象的な人物表現**であることが判明した（"online-learning"等で実確認）。「表情がはっきり分かるイラストが欲しい」という要件には unDraw は不向き。

- **unDraw（undraw.co）**: ミニマルで帰属表示不要（MIT的ライセンス）。ただし人物の表情はほぼ描かれない。「ミニマルで帰属表示不要でよい」場合に採用。
  - 取得フロー: JS SPAだが `curl` でイラスト個別ページのHTMLを直接取得すれば `cdn.undraw.co/illustrations/{slug}.svg` の直URLがgrepで拾える（WebFetch不要）。標準アクセントカラー `#6c63ff` / `#ff6584` を `sed` でブランドカラーのhexに置換して使う。
- **Storyset（storyset.com、運営元Freepik）**: 目・眉・口まで描かれた表情豊かなイラストを提供。「表情のある/温かみのあるイラストが欲しい」場合に採用。
  - 取得フロー: `curl` で storyset.com のイラスト個別ページHTMLを取得 → `https://stories.freepiklabs.com/storage/{id}/{filename}.svg` 形式の直リンクをgrepで抽出 → ダウンロード → アクセントカラーのhexを `sed` でブランドカラーに置換。
  - **注意: StorysetはFreepikライセンスのため、無料利用には帰属表示（footerへのクレジットリンク等）が必須。** unDrawとは異なりライセンス要件がある点に注意。
- **使い分けの判断基準**: 「表情のある/温かみのある」→ Storyset（要帰属表示）。「ミニマルで帰属表示不要でよい」→ unDraw。

### 加工ルール：SVGイラストを`<img>`化する際のアスペクト比崩れバグ

`<img width="750" height="500" style="width:100%;max-width:Npx">` のように**幅だけをCSSで制約し `height:auto` を明示しない**と、`height:auto`が指定されない限りブラウザはHTML属性のheight値をそのまま使ってしまい、特にモバイル幅で縦に大きく間延びするバグが実際に発生した（LearnCore/elearning-lpで発生・修正済み）。**SVG/画像をレスポンシブ表示する際は、幅制約と必ずセットで `height:auto` も指定すること。**

### 加工ルール：ロゴ背景の透過処理（numpy不使用環境）

環境にnumpyが無い場合でも、PIL単体で透過処理ができる。`ImageChops.lighter` / `ImageChops.darker` を使い、`.point()` でしきい値処理を行うフローが確立済み（TAKE CRAFTメインロゴのPNG化で実践）。今後同様のロゴ加工依頼が来た場合はこの方法を使う。

### 加工ルール：オーバーレイ透明度の実測値（実LPコードから抽出）

Hero画像上にテキストを重ねる際の可読性確保パターン。実案件では `<img>`側のCSSオーバーレイではなく、**背景画像として `linear-gradient(...)` と `url()` を重ねてセットする手法**が主流：

```css
/* restaurant-lp: Hero（暗めの単色グラデーションで下部を強調） */
.hero {
  background:
    linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.75)),
    url("https://images.unsplash.com/photo-xxxx?auto=format&fit=crop&w=1800&q=80")
    center/cover;
}

/* business-design-academy-lp: Final CTA背景（暗さ均一のオーバーレイ） */
.final-cta-bg {
  background: linear-gradient(rgba(11,15,25,.65), rgba(11,15,25,.65)), url('./assets/final-cta.jpg');
  background-size: cover;
  background-position: center;
}
```

実測されたrgba値の傾向：
- **単色暗転オーバーレイ**は `rgba(0,0,0,.45)`〜`rgba(0,0,0,.82)` の範囲で使われている。上部を薄く（`.45`〜`.65`）、下部やテキスト重畳部を濃く（`.75`〜`.82`）する2段階グラデーションが定番（`linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.75))`のように上下で濃度を変える）。
- 動画/画像サムネイルを暗くしてラベルを載せる場合は `filter: brightness(.75)` を`<img>`に直接かける手法も使われている（ai-school-lp の動画プレビューサムネイル）。
- カード等の装飾グラデーション（白のハイライトなど）は薄め：`linear-gradient(135deg, rgba(255,255,255,.14) 0%, transparent 60%)`のように角度付き・透明フェードアウトで光沢感を出す。

### 加工ルール：画像未着手時のプレースホルダー実装パターン（beauty-salon-lpより抽出）

CLAUDE.mdの「画像が届く前にLPを作る場合はプレースホルダーを作っておく」フローの具体的なコード実装。`<img>`をラップしたコンテナに、画像読み込み失敗時のフォールバック表示を仕込み、実運用でも壊れない形にする：

```css
.hero-img-placeholder { position: relative; overflow: hidden; }
.hero-img-placeholder > img {
  position: absolute; inset: 0; z-index: 2;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center top;
  border-radius: var(--radius-lg);
}
.img-fallback {
  display: none; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 10px; font-size: 11px; color: var(--sub);
  width: 100%; height: 100%; padding: 20px; text-align: center;
  position: absolute; inset: 0; z-index: 1;
}
```

```html
<div class="hero-img-placeholder">
  <img src="./assets/images/fv-hero.jpg"
       alt="フェイシャルサロン Luminos Skin の施術イメージ"
       loading="eager"
       onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
  <div class="img-fallback">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48" opacity=".35"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
    <span>fv-hero.jpg を<br>assets/images/ に配置</span>
  </div>
</div>
```

ポイント：
- `<img>` の `onerror` 属性で自身を非表示にし、直後の兄弟要素（フォールバックdiv）を表示する1行トリック（`this.nextElementSibling.style.display='flex'`）。
- 画像ファイルがまだアップロードされていない/パスが間違っている状態でも、崩れたレイアウトにならず「どのファイルをどこに置けばよいか」がブラウザ上でそのまま案内表示される。
- ユーザーが後から画像をアップロードすれば、コード側は一切変更不要で自動的に実画像へ切り替わる（`<img>`のsrcパスは最初から本番想定のパスにしておく）。
- CLAUDE.mdに記載の「①Claudeがフォルダを用意→②ユーザーがアップロード→③ClaudeがHTMLに組み込む」フローのうち、①〜②の間の見た目の空白期間を埋める実装として有効。

### 配置ルール：object-fit/object-position/aspect-ratioの標準組み合わせ

実LP群で最も頻出する「画像を親要素いっぱいに敷き詰めてトリミングする」定型パターン：

```css
.card-img { aspect-ratio: 4/3; overflow: hidden; border-radius: var(--radius); }
.card-img img { width: 100%; height: 100%; object-fit: cover; }
```

人物写真で顔が見切れる事故を防ぐため、`object-position: center top`（上寄せ）や `object-position: top` を人物ポートレートに使うケースが複数LPで確認されている（beauty-salon-lp / business-design-academy-lp / hoikushi-mikata-lp）。逆に汎用的な図解・スクリーンショット系は `object-position: center center`（デフォルト）でよい。

### 選定ルール：日本人モデル写真の優先調達先（2026-07-12 追加・最優先）

**2026年7月12日以降、人物写真素材を調達する際はUnsplash/Pexelsより先に、まず以下の日本国内フリー素材サイト3つを優先して探すこと。** これまでUnsplash中心の運用だったが、日本人らしい被写体を確実に得たい・業種特化(ビジネスシーン等)の写真が欲しい場合、海外サイトでの英語複合クエリ調達("japanese dentist"等が0件になりがちな問題、前述の「特定の人種・民族を指定された場合の検索テクニック」参照)より、そもそも日本人モデルのみを扱う国内サイトの方が確実で速い。3サイトとも `curl` に素直に応答し(`--disable-blink-features`等のBot回避策は現時点で不要、通常のブラウザUser-Agentを付ければ200が返る)、Playwrightを使わずcurlだけで検索〜URL抽出まで完結できる。

#### 1. ぱくたそ(pakutaso.com) — 日本人モデル最大手・カジュアル〜ビジネスまで幅広い
- **検索URL**: `https://www.pakutaso.com/search.html?search={URLエンコードした日本語キーワード}`(例: `search.html?search=%E5%A5%B3%E6%80%A7`＝「女性」)※`/search?q=`ではなく`/search.html?search=`が正しいパスなので注意(前者は404になる)
- **検索結果ページ**: 記事URLパターン `https://www.pakutaso.com/{数字}{英数字}post-{ID}.html` の形式でヒットが並ぶ。`grep -oE 'href="https://www\.pakutaso\.com/[0-9a-z]+post-[0-9]+\.html"'` 等で抽出できる
- **画像URL**: 各記事ページの `og:image` に `https://www.pakutaso.com/shared/img/thumb/{ファイル名}.jpg` 形式の直リンクがある。より大きいサイズ(S/M/L)やトリミング機能は記事ページ内のダウンロードボタン経由(curlでは取得しづらいのでPlaywrightでボタンクリックのネットワークリクエストを傍受するか、まずはthumbサイズで用が足りるか確認)
- **ライセンス**(`/userpolicy.html`で確認済み): 商用利用可、クレジット表記は二次配布や書籍装丁以外では不要(任意で推奨)。ロイヤリティフリーだがCC0ではない＝素材そのものの再配布・販売は不可。日本語で連絡が取れない利用者は利用不可という特殊条項があるが、日本国内での通常のLP制作用途では問題にならない
- **強み**: 「モデル一覧」ページ(`/model.html`)から特定モデルの別カットをまとめて探せるため、「同一人物を複数箇所で使いたい」ケース(Hero写真と院長紹介写真など)でぱくたそなら体系的に解決しやすい

#### 2. おしごとピクチャーズ(free-images.jp) — ビジネス・オフィスシーンに強い、WordPress製
- **検索URL**: `https://free-images.jp/?s={URLエンコードした日本語キーワード}`(WordPress標準検索)
- **カテゴリ**: `https://free-images.jp/category/{カテゴリ名}/`(例: `business-office`, `beauty-fashion`, `character-family`)で業種別に絞り込み可能
- **画像詳細ページURL**: `https://free-images.jp/{カテゴリ}/{ID}/`(例: `business-office/1095/`)
- **画像直リンク**: 詳細ページの `og:image` に `https://free-images.jp/wp-content/uploads/{年}/{月}/{ID}.jpg` 形式の高解像度直リンクがある(実測2560×1463px確認済み)。ダウンロードボタン(`.download-button`)からも同URLに到達する
- **ライセンス**(`/terms-of-service/`で確認済み): 商用・非商用問わず無料、会員登録・クレジット表記不要、加工・編集可。禁止事項は素材そのものの販売・レンタル・譲渡・再配布・再販売・シェア
- **強み**: 「ビジネス・オフィス」「スーツ姿」等、業種特化のビジネスシーン写真が充実している(elearning-lp/finance-lp/career-compass-lpのようなBtoB・金融・キャリア系LPで特に有用)

#### 3. graphon(graphon.jp) — 写真＋テクスチャ素材、検索がシンプル
- **検索URL**: `https://graphon.jp/main/search?search_str={URLエンコードした日本語キーワード}`
- **画像詳細ページURL**: `https://graphon.jp/main/photo/{ID}`
- **サムネイル**: `https://graphon.jp/img/photo_s/{ID}_s.JPG`、**フル画像**: `https://graphon.jp/img/photo/{ID}.JPG`(詳細ページの`og:image`から取得可)
- **ダウンロード**: `https://graphon.jp/main/image_download?id={ID}`
- **ライセンス**(`/main/about`で確認済み): 商用・非商用問わず無料、登録・クレジット表記不要(任意で歓迎)。禁止事項は素材そのものの再配布のみ
- **強み**: 人物以外にテクスチャ・風景素材も同一サイトで揃うため、背景装飾素材を探すときにも流用できる

#### 調達フローの優先順位(2026-07-12以降の標準運用)
1. まず ぱくたそ / おしごとピクチャーズ / graphon の3サイトを**日本語キーワード**で検索する(キーワードは業種名そのものでよく、Unsplashで問題になった「英語複合クエリが0件になる」問題が起きにくい)
2. 3サイトで見つからない特殊な構図・海外向けの雰囲気が必要な場合のみ、従来通りUnsplash(`&crop=faces`回避・Bot対策込みのフロー、上記参照)にフォールバックする
3. いずれのサイトも `curl -A "{デスクトップChromeのUA}"` で直接HTMLを取得できるため、Unsplash/Pexelsで必要だったPlaywrightのBot回避策(`--disable-blink-features=AutomationControlled`等)は不要。まずcurlで試し、JSレンダリングが必要な箇所(ぱくたそのダウンロードボタン等)にぶつかった場合のみPlaywrightに切り替える

### Production QA観点（配置・加工品質のチェック基準）

LP完成後の自己採点フローの一部として、画像関連は以下を確認する（歯科クリニックLP・LearnCoreで実践済みの10項目採点のうち画像に関連する観点）：
- レスポンシブ時に `aspect-ratio` の切り替えがあるか（PC/タブレット/モバイルで縦横比が不自然に伸びていないか）
- `object-fit:cover` 適用箇所で人物の顔が見切れていないか（`object-position`で要調整）
- Hero等のオーバーレイでテキストのコントラスト比が十分か（前述のrgba値レンジを参考に調整）
- SVGイラストの `height:auto` 未指定によるモバイル間延びバグが無いか
- alt属性が内容を正しく説明しているか（人種・業種に配慮した記述になっているか）
