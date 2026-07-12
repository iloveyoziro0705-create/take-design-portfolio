# Badge Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: components

## 概要

バッジ・タグ・ラベルコンポーネントのデザイン・実装パターンライブラリ。
権威訴求・新着・おすすめ・限定などの視覚的強調要素を収録予定。

## 収録予定パターン

### 権威・実績バッジ
- BADGE-001: 受賞・認定バッジ（丸型）
- BADGE-002: 満足度・評価バッジ（星付き）
- BADGE-003: 実績数値バッジ（大数字）
- BADGE-004: メディア掲載バッジ

### ステータスバッジ
- BADGE-010: NEWラベル
- BADGE-011: おすすめラベル
- BADGE-012: 限定ラベル
- BADGE-013: 売切れ/満員ラベル
- BADGE-014: 割引率バッジ（%OFF）

### カテゴリタグ
- BADGE-020: テキストタグ（角丸）
- BADGE-021: カラータグ（業種別色）

## 実案件からの知見（2026-07-12 追加）

12件のLPから、バッジ・タグ・ラベル系の実装パターンを収集した。

### ピル型セクションタグ（アイキャッチ的な小見出しラベル）が最頻出

セクション冒頭に置く小さな「セクション名タグ」（例：「私たちの強み」の前に付くラベル）は、ブランドカラーの薄い背景＋同色文字＋`border-radius:999px`のピル型がほぼ標準になっている。

```css
/* rapas-lp/index.html */
.section-tag {
  display:inline-block; background:var(--primary-light); color:var(--primary);
  font-size:11px; font-weight:700; letter-spacing:.14em; padding:5px 16px; border-radius:999px;
}
```

```css
/* elearning-lp/style.css（.ctag = カテゴリタグ、アクティブ状態を持つ） */
.ctag{ display:inline-block; padding:6px 14px; border-radius:999px; font-size:12px; font-weight:700;
  background:rgba(0,91,172,.07); color:var(--p); border:1px solid rgba(0,91,172,.14) }
.ctag.ctag-a{ background:var(--p); color:#fff; border-color:var(--p) } /* アクティブ/強調タグは反転配色 */
```

「通常タグ＝薄色背景＋枠線」「強調タグ＝ブランド色で塗りつぶし＋文字白」という反転配色による強弱付けは `elearning-lp` の `.ctag-a` 以外にも複数案件で見られた設計原則。

### ステータスバッジ（BADGE-010〜014相当）：単色塗り小型バッジ

```css
/* rapas-lp/index.html */
.badge{ display:inline-flex; align-items:center; gap:5px; padding:6px 13px; border-radius:8px;
  font-size:12px; font-weight:700; }
.badge-blue{ background:var(--primary); color:#fff; }
.badge-green{ background:var(--success); color:#fff; }
```

ピルタグ（999px）と違い、こちらは`border-radius:8px`程度の小さめ角丸で「情報ラベル」寄りの用途（ステータス表示など）に使われていた。

### おすすめリボンバッジ（プライスカード用の絶対配置ノッチ）

```css
/* elearning-lp/style.css */
.pr-badge{ position:absolute; top:-1px; left:50%; transform:translateX(-50%);
  background:var(--p); color:#fff; font-size:11.5px; font-weight:700;
  padding:5px 24px; border-radius:0 0 12px 12px; letter-spacing:.06em; white-space:nowrap }
```

カード上端にタブ状に食い込ませる（上端は角丸なし・下端のみ角丸）ことで「差し込まれたリボン」に見せるテクニック。カード側の`overflow`を切らない前提で`top:-1px`のマイナス値を使っている点がポイント。

### 信頼バッジ・トラストタグ（アイコン＋テキストのピル）

```css
/* rapas-lp/index.html */
.trust-tag {
  display:inline-flex; align-items:center; gap:7px; padding:8px 18px;
  background:var(--bg-gray); border:1.5px solid var(--border); border-radius:999px;
  font-size:13px; font-weight:700; color:var(--text-mid);
}
```
アイコン（`.trust-tag-icon`）とテキストを横並びにし、「弁護士監修」「〇〇認定」等の権威訴求を並べる用途で6個連続配置されていた。同ファイルには `.privacy-mark-badge`（プライバシーマーク＋テキストの認証バッジ、角丸10px・枠線1.5px）もあり、法令遵守系の訴求に使える。

### 星評価バッジ／稼働中インジケーター（意外な発見）

- `business-design-academy-lp/index.html`: 星評価はSVGでなくUnicode文字 `★★★★★` を `color:#F59E0B` で着色するだけ（card-library参照）。バッジ的な軽量表現として転用可能。
- `elearning-lp/style.css`: 導入企業事例カードに「稼働中」を示す**点滅ドットインジケーター**が実装されていた。

```css
.cd-dot-live{ width:7px; height:7px; border-radius:50%; background:#22C55E;
  box-shadow:0 0 0 3px rgba(34,197,94,.25); animation:blink 1.8s infinite }
@keyframes blink{ 0%,100%{opacity:1} 50%{opacity:.4} }
```

「導入事例が今も稼働中である」ことを示す小さな緑ドットの点滅は、実績訴求セクションのリアリティ演出として非常に低コストで効果的。BADGE系の新パターンとして記録に値する。

### 改善タグ（グラデーション背景の小型タグ）

```css
/* beauty-salon-lp/index.html */
.ba-tag {
  display:inline-flex; align-items:center; gap:3px;
  background:linear-gradient(135deg, var(--bg-pink), #fff);
  border:1px solid var(--accent-light); color:var(--accent-dark);
  font-size:10px; font-weight:700;
}
```
テスティモニアルカード内で「肌質改善」「毛穴の目立ちにくさ」等のBefore/After訴求タグとして使用。単色背景ではなく淡いグラデーションを使うことで柔らかい印象を出している（美容系ならではの表現）。

### まとめ

- ピル型（999px）＝セクションタグ・トラストバッジ・カテゴリタグの定番形状
- 小角丸（8px前後）＝ステータス系の情報ラベル
- 絶対配置ノッチ＝プライスカードの「おすすめ」訴求
- 点滅ドット＋`box-shadow`のハロー＝「稼働中/対応中」のライブ感演出（低コストで効果大）
