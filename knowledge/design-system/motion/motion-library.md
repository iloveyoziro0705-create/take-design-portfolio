# Motion Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: motion

## 概要

アニメーション・トランジション・スクロールエフェクトのパターンライブラリ。
「動き」でユーザー体験を高め、CVを促進するモーション設計基準を収録予定。

## 収録予定パターン

### 基本トランジション
- MOT-001: フェードイン（opacity 0→1）
- MOT-002: スライドアップ（translateY）
- MOT-003: スケールイン（scale 0.95→1）
- MOT-004: 左右スライド

### スクロールトリガーアニメ
- MOT-010: セクション入場アニメ（Intersection Observer）
- MOT-011: カウントアップ数値
- MOT-012: 横バー進捗アニメ
- MOT-013: 視差スクロール（Parallax）

### UIアニメ
- MOT-020: ボタンホバーエフェクト
- MOT-021: カードホバーリフト
- MOT-022: ローディングアニメ
- MOT-023: テキストタイプライター

### 使用ルール
- duration基準: 150ms（micro）/ 300ms（standard）/ 500ms（enter）
- easing基準: ease-out（登場）/ ease-in（退場）/ ease-in-out（移動）
- アニメ無効設定: `prefers-reduced-motion` 対応必須
- パフォーマンス: transform / opacity のみ使用（layout再計算禁止）

## 実案件からの知見（2026-07-12 追加）

実際に納品した12本のLPのコードとPlaywright検証記録から、実装値・実装パターンを収集した。

### GSAP + ScrollTrigger + Lenis 導入LP（実コード）

現状GSAPを採用しているのは `ai-school-lp/index.html`（AIvoyance）と `finance-lp/index.html`（FutureNest）の2件。CDN経由（ビルドツールなし）で、`prefers-reduced-motion` を尊重してLenis初期化を分岐する共通パターンを確立している。

```html
<!-- ai-school-lp/index.html:1395-1397, finance-lp/index.html（同等） -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js"></script>
<script>
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lenis = null;
  if (window.Lenis && !reduceMotion) {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true }); // ai-schoolは1.1, financeは1.15
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    // 汎用リビール（クラス名で挙動を切替）
    gsap.utils.toArray('.reveal').forEach(function (el) {
      gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
    gsap.utils.toArray('.reveal-scale').forEach(function (el) {
      gsap.to(el, { opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
    gsap.utils.toArray('.reveal-blur').forEach(function (el) {
      gsap.to(el, { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
    // スクロール連動プログレスバー（finance-lp: .proc-line-fill）
    gsap.to('#procFill', { height: '100%', ease: 'none',
      scrollTrigger: { trigger: '.proc-track', start: 'top 65%', end: 'bottom 70%', scrub: .6 } });
    // カウントアップ（ScrollTrigger onEnter + gsap.to(obj,{val:...})でDOM更新）
    ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: function () {
      gsap.to(obj, { val: to, duration: 1.6, ease: 'power2.out', onUpdate: function () {
        el.textContent = (dec ? obj.val.toFixed(dec) : Math.round(obj.val)) + suffix;
      }});
    }});
    // Hero文字の1行ずつ縦スライド登場（ai-school-lp: .hero h1 .line span）
    gsap.utils.toArray('.hero h1 .line span').forEach(function (span, i) {
      gsap.fromTo(span, { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1.1, delay: .3 + i * .15, ease: 'power4.out' });
    });
  }
})();
</script>
```

- Hero要素は個別に `gsap.fromTo(...)` で `opacity:0→1, y:14px→0` をdelay階段状（0.1s刻み）で発火させ、まとまった「登場シーケンス」を作るのが定番（kicker→h1→sub→cta→trust の順）。
- ease値の実測：`power3.out`（フェード系の主力）/ `power4.out`（マスク・テキストスライド系、より鋭い減速）/ `power2.out`（カウントアップ）/ `none`（scrub連動のプログレスバー）。
- 静的サイト（ビルドツールなし）のためFramer Motion/Riveは技術的に不採用、GSAPで代替という判断は`ai-school-lp`と`finance-lp`双方で踏襲されている（詳細はメモリ`project_portfolio.md`参照）。

### IntersectionObserverスクロールリビール（全LP共通の実装パターン）

GSAP未導入の10本（rapas-lp, elearning-lp, career-compass-lp, mirai-ryo-lp, dental-clinic-lp, lumia-lp, hoikushi-mikata-lp, business-design-academy-lp, beauty-salon-lp 等）はすべて素のIntersectionObserverでMOT-010を実装。基本形はほぼ共通だが、対象クラス名・thresholdに案件差がある：

| LP | 対象クラス | threshold / rootMargin | 発火後クラス |
|---|---|---|---|
| rapas-lp | `.fade-up` | 0.10 | `.visible` |
| elearning-lp（script.js:9-14） | `.sr` | 0.1 / `0px 0px -40px 0px` | `.in` |
| dental-clinic-lp | `.reveal-up`系 | 0.05 / `0px 0px -40px 0px` | `.in` |
| hoikushi-mikata-lp | `.fade-up` | 0.12 / `0px 0px -32px 0px` | `.show` |
| business-design-academy-lp | `.fade-up` | 0.12 | `.in` |
| beauty-salon-lp | `.fadeUp` | 0.10 | `.visible` |
| career-compass-lp | 個別要素 | 0.1 | `.show` |
| lumia-lp（main.js:78-88） | フェード対象全般 | オプション変数化 | `.is-visible` |
| mirai-ryo-lp | `.fadeUp` | 0.1 + スクロールイベントの二重フォールバック | `.show` |

代表実装（`dental-clinic-lp/index.html:905-917`）— IntersectionObserver非対応ブラウザへのフォールバックまで書いてあるのはこのLPのみで、今後の標準として採用推奨：

```js
if (!('IntersectionObserver' in window)) {
  revealEls.forEach(function(el){ el.classList.add('in'); });
} else {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(function(el){ io.observe(el); });
}
```

`mirai-ryo-lp/index.html:2275-2283` はGSAP非採用ながら独自に「IntersectionObserver＋`scroll`イベントでの二重チェック（`getBoundingClientRect`）」を実装し、`load`/`scroll`（`requestAnimationFrame`でスロットル）/ `setTimeout(300ms)` の3トリガーで確実に発火させる冗長構成を取っている。IO単体で見逃しが起きるケースへの実務対応として参考になる。

CSS側の実測トランジション（`.reveal-up` 系）：
```css
/* dental-clinic-lp/index.html:467 */
.reveal-up{opacity:0;transform:translateY(28px);
  transition:opacity .7s cubic-bezier(.16,.84,.44,1),transform .7s cubic-bezier(.16,.84,.44,1);}
```
`translateY`の初期値は24〜30px（28pxが最頻値）で、ライブラリのMOT-002スライドアップの目安と一致。

### Playwright検証時の注意点（メモリより実践知見を転記）

IntersectionObserverによるスクロールリビール演出は、Playwrightの`fullPage`スクリーンショットで実スクロールを伴わない場合にコンテンツが表示されないまま撮影されることがある。ただし`.in`/`.show`クラス付与状況を直接クエリすると全要素で正常発火しており、これは**Playwrightのテスト手法固有のアーティファクトであり実ユーザーには影響しない**ことを複数セッションで再確認済み。検証時は以下のどちらかを使うこと（`fullPage:true`の結果だけで「バグ」と判断しない）：
- 個別セクションを `scrollIntoViewIfNeeded()` + `elementHandle.screenshot()` で直接確認
- ビューポート単位で `scrollTo` しながら通常screenshotを連続撮影

### @keyframes 実装カタログ（業種・演出別）

| 用途 | LP | 定義 |
|---|---|---|
| 左右ドリフト背景ブロブ | finance-lp | `@keyframes drift{0%{transform:translateX(-6%)}50%{transform:translateX(4%)}100%{transform:translateX(-6%)}}` |
| 揺れるアイコン | finance-lp | `@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}` |
| ふわふわ浮遊 | finance-lp | `@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}` |
| 呼吸するスケール | finance-lp | `@keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}` |
| ゆっくり回転 | finance-lp | `@keyframes spinslow{to{transform:rotate(360deg)}}`（30s linear infinite） |
| 生存確認パルス（オンライン表示等） | elearning-lp / mirai-ryo-lp / career-compass-lp | `@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.7〜1.6)}}` |
| Hero要素のフェード＋スケール登場 | elearning-lp | `@keyframes heroFadeUp{from{opacity:0;transform:translateY(28px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}` |
| フローティングカード | elearning-lp | `@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}` / 逆位相`floatSm`（+10px） |
| 下矢印バウンド | elearning-lp | `@keyframes bounceDown{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}` |
| ダッシュボードのblink表示 | elearning-lp | `@keyframes blink{0%,100%{opacity:1}50%{opacity:.4}}` |
| セクション背景グリッドのパン | ai-school-lp | `@keyframes grid-pan{0%{transform:translate(0,0)}100%{transform:translate(64px,64px)}}` |
| AI/テック演出のグロー浮遊 | ai-school-lp | `@keyframes glow-float{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(40px,-30px) scale(1.08)}}` |
| 画像生成デモの走査線 | ai-school-lp | `@keyframes cue-drop{0%{top:-100%}100%{top:100%}}` / `@keyframes scan-move{0%{top:0%}100%{top:100%}}` |
| コード入力カーソル点滅 | ai-school-lp | `@keyframes caret-blink{50%{opacity:0}}` |
| AIの「思考中」ドット | ai-school-lp | `@keyframes think-dot{0%,100%{opacity:.25;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}` |
| Hero全体フェードイン | lumia-lp | `@keyframes heroFadeIn{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}` |
| スクロール誘導ラインの伸縮 | lumia-lp | `@keyframes scrollLineAnim{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}` |
| 標準フェードアップ | dental-clinic-lp | `@keyframes fadeInUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}` |
| LINE風バッジの浮遊 | beauty-salon-lp | `@keyframes floatLineBob{0%,100%{transform:translateY(0);box-shadow:0 8px 32px rgba(6,199,85,.44),...}}` |

AI/テック系（ai-school-lp）は「走査線・グリッドパン・思考ドット・カーソル点滅」など**プロダクトUIを模したマイクロアニメ**を多用する点が他業種と異なる特徴。金融・美容系は「ブロブの揺れ・浮遊・呼吸」など柔らかい有機的モーションが中心。

### ホバーエフェクトのtransform実値

カードホバー（MOT-021相当）は `translateY(-2px)`（軽いボタン）〜`translateY(-6px)`（カード大）の範囲に収まっており、値が大きいほど`box-shadow`も同時に拡大するペアリングが徹底されている：

```css
/* rapas-lp */
.btn-cta:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(249,115,22,.48); }
.header-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(249,115,22,.42); }
.job-card:hover { transform: translateY(-6px); box-shadow: var(--shadow); border-color: var(--primary); }
/* mirai-ryo-lp */
.job:hover{transform:translateY(-5px);box-shadow:0 16px 48px rgba(15,23,42,.18)}
.jobFav:hover{background:var(--softOrange);border-color:#fca5a5;transform:scale(1.1)} /* アイコンボタンはscale系 */
/* dental-clinic-lp */
.btn-primary:hover{background:var(--primary-dark);transform:translateY(-2px);box-shadow:0 14px 30px rgba(37,99,235,.36);}
.reason-card:hover{box-shadow:var(--shadow-hover);transform:translateY(-5px);}
```

- ボタン（CTA）系: `-2px`〜`-3px`
- カード系（求人・お客様の声・サービス）: `-4px`〜`-6px`
- アイコンボタン（お気に入り等）: `translateY`ではなく`scale(1.1)`
- transitionのdurationは明記されていないケースが多いが、明記されている場合は`.25s`〜`.35s`が中心（既存ライブラリのduration基準300ms standardと整合）。

### Riveアニメーション調達フロー（メモリより転記・再利用可能な手順）

Rive Community（rive.app/community/files/）はJS SPAでWebFetchでは中身が読めないが、Playwrightなら実際にブラウズしてクリック・ネットワークリクエスト傍受ができる。調達フロー：
1. 検索→カード一覧のhref抽出→各ファイルの詳細ページでライセンス表記（CC BY / CC0 / All Rights Reserved等）をテキストで確認
2. ダウンロードは「Download」ボタンクリック時のネットワークリクエストを傍受して `https://public.rive.app/community/runtime-files/{id}.riv` 形式の直リンクを取得
3. CC BYライセンスの場合はフッターに作者クレジット＋ライセンス表記を追加（必須）

実績: TAKE CRAFTブランドサイト（ルート`index.html`）のHero右下装飾に「Circle Orbiting」（作者Emsmami、CC BY）を採用済み。
