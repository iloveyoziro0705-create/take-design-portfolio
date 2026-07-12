# Card Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: components

## 概要

カードコンポーネントのデザイン・実装パターンライブラリ。
Feature・Voice・Price・Works・Profileなど多用途カードを収録予定。

## 収録予定パターン

- CARD-001: 基本フィーチャーカード（アイコン+タイトル+説明）
- CARD-002: 画像付きカード（上画像/下テキスト）
- CARD-003: テスティモニアルカード（星評価+口コミ）
- CARD-004: プライスカード（料金+特典リスト）
- CARD-005: プロフィールカード（写真+名前+肩書き）
- CARD-006: 実績/数値カード（大数字+説明）
- CARD-007: Works/ポートフォリオカード（サムネイル+タグ）
- CARD-008: ニュース/ブログカード
- CARD-009: ガラスモーフィズムカード
- その他追加予定

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
