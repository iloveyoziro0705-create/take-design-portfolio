# UI Component Library

**バージョン**: TBD
**ステータス**: 準備中（Coming Soon）
**カテゴリ**: components

## 概要

LP・HP・WordPress・SaaS・管理画面・ポートフォリオで共通利用できるUIコンポーネントの統合ライブラリ。
個別コンポーネントライブラリ（button/card/form/badge/icon）を横断するインデックスとして機能する。

## コンポーネントマップ

| コンポーネント | ファイル | ステータス |
|-------------|---------|---------|
| Button | button-library.md | 準備中 |
| Card | card-library.md | 準備中 |
| Form | form-library.md | 準備中 |
| Badge / Tag | badge-library.md | 準備中 |
| Icon | icon-library.md | 準備中 |
| Navigation | — | 今後追加予定 |
| Modal / Drawer | — | 今後追加予定 |
| Toast / Alert | — | 今後追加予定 |
| Tab / Accordion | — | 今後追加予定 |
| Table | — | 今後追加予定 |
| Tooltip | — | 今後追加予定 |
| Loader / Skeleton | — | 今後追加予定 |

## 共通デザイン原則

- **一貫性**: 全プロダクトで同じコンポーネントを使う
- **再利用性**: コピーペーストで即使えるHTMLを提供
- **アクセシビリティ**: ARIA属性・キーボード操作を標準対応
- **レスポンシブ**: モバイルファーストで設計

## 実案件からの知見（2026-07-12 追加）

12件の実LP（ai-school-lp, beauty-salon-lp, business-design-academy-lp, career-compass-lp, dental-clinic-lp, elearning-lp, finance-lp, hoikushi-mikata-lp, lumia-lp, mirai-ryo-lp, rapas-lp, restaurant-lp）を調査した結果、「今後追加予定」欄のうち**実際に実装が確認できたのは Navigation（ハンバーガーメニュー＋モバイルドロワー）と Tab/Accordion（FAQアコーディオン）の2種のみ**だった。Modal/Drawer（コンテンツ用モーダル）、Toast/Alert、Tooltip、Loader/Skeleton、Table（`rapas-lp`に簡易的な料金比較テーブルはあるが専用コンポーネント化はされていない）は12件中いずれにも実装が見つからなかったため、引き続き「今後追加予定」のままとする。

### Navigation：ハンバーガーメニュー＋モバイルドロワー（実装2件で確認）

`business-design-academy-lp/index.html` と `lumia-lp/style.css` の2件で、3本線→×アイコンに変形するハンバーガーボタンと、画面端からスライドインするドロワーメニューが実装されていた。

```css
/* business-design-academy-lp/index.html：3本線→×変形 */
.hamburger { display:none; flex-direction:column; gap:6px; cursor:pointer; padding:4px; background:none; border:none; }
.hamburger span { display:block; width:24px; height:2px; background:var(--white); border-radius:2px; transition:all .3s ease; }
.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
```

```javascript
/* business-design-academy-lp/index.html：トグル処理 */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  // メニュー要素の表示切替 + aria-label の開閉切替
});
```

```css
/* lumia-lp/style.css：ハンバーガー変形 + 左からスライドインするドロワー + オーバーレイ */
.header__hamburger { width:40px; height:40px; display:flex; flex-direction:column; justify-content:center; gap:5px; padding:8px; }
.header__hamburger span { display:block; width:100%; height:1.5px; background:var(--clr-black); transition:all var(--dur-base) var(--ease); transform-origin:center; }
.header__hamburger.is-active span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.header__hamburger.is-active span:nth-child(2) { opacity:0; transform:scaleX(0); }
.header__hamburger.is-active span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.mobile-drawer { position:fixed; top:0; left:0; bottom:0; width:min(320px, 85vw); background:var(--clr-white); z-index:200;
  padding: calc(var(--header-h) + var(--sp-8)) var(--sp-8) var(--sp-8); transform: translateX(-100%); transition: transform var(--dur-base) var(--ease); }
.mobile-drawer.is-open { transform: translateX(0); }
.mobile-drawer__overlay { position:fixed; inset:0; background:rgba(0,0,0,0.4); z-index:150; opacity:0; pointer-events:none; transition:opacity var(--dur-base) var(--ease); }
```

いずれも「span 3本を`nth-child`で個別に回転/フェード」させる同一発想で×字への変形を実現しており、実装の再現性が高い。ドロワーは`transform: translateX(-100%)`→`translateX(0)`のスライドイン、開閉フラグは`is-open`/`open`のようなmodifierクラスのトグルで管理されている。

### Tab/Accordion：FAQアコーディオンの実装パターン（9件で確認）

FAQセクションでのアコーディオン開閉は `ai-school-lp, finance-lp, restaurant-lp, rapas-lp, lumia-lp, hoikushi-mikata-lp, career-compass-lp, business-design-academy-lp, beauty-salon-lp` の9件で確認された、非常に汎用性の高いコンポーネント。`business-design-academy-lp/index.html` の実装が最も完成度が高い。

```css
.faq-item { background: var(--bg-section); border: 1px solid var(--line); border-radius: 16px; overflow: hidden; transition: border-color .25s ease; }
.faq-item.open { border-color: rgba(212,175,55,0.3); }
.faq-q { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:24px 28px; cursor:pointer; }
.faq-item.open .faq-arrow { background: var(--gold); border-color: var(--gold); transform: rotate(180deg); }
.faq-body { height: 0; overflow: hidden; transition: height .35s ease; }
```

```javascript
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const body = item.querySelector('.faq-body');
    const inner = item.querySelector('.faq-body-inner');
    const isOpen = item.classList.contains('open');

    // 他の開いている項目を全て閉じる（同時に1つしか開かないアコーディオン）
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-body').style.height = '0';
    });
    if (!isOpen) {
      item.classList.add('open');
      body.style.height = inner.offsetHeight + 'px'; // 中身の実測高さをJSでheightに代入してtransitionさせる
    }
  });
});
```

`height: auto`はCSSトランジションできないため、**`.faq-body-inner`（中身）の`offsetHeight`をJSで計測し、外側`.faq-body`の`height`にpxで代入してアニメーションさせる**手法が採用されている。矢印アイコンは1個のSVGを`rotate(180deg)`で使い回す（icon-library参照）。「クリックした項目以外を閉じる」単一開閉制御もほぼ全案件で共通の挙動だった。
