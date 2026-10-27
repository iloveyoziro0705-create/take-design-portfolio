#!/usr/bin/env node
/**
 * TAKE CRAFT — static page generator
 *
 * 使い方:  node scripts/build.mjs
 * 生成物:  index.html / works.html / video-works.html / works/<slug>.html /
 *          privacy.html / 404.html / sitemap.xml / robots.txt
 *
 * 実績の追加・修正は data/works.mjs、サービスは下の SERVICES を編集して再実行する。
 * 生成された HTML は直接編集しないこと（次回ビルドで上書きされる）。
 */
import { writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { WORKS, CATEGORIES, TYPES, FEATURED_ORDER, CONCEPT_NOTE } from '../data/works.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://take-design-portfolio.vercel.app';
const BRAND = 'TAKE CRAFT';
const EMAIL = 'i.love.yoziro0705@gmail.com';
const YEAR = new Date().getFullYear();
const ASSET_V = '20261027';
// Webフォントは描画をブロックしないよう非同期で読み込む（display=swap でフォールバック表示→差し替え）
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap';

/* ───────── Services ─────────
 * lp: 将来のサービス専用LPのパス。ページが公開されるまで null のまま（リンクは出ない）。
 * proof: 対応実績として一覧へ飛ばすカテゴリー（公開実績があるものだけ）。 */
const SERVICES = [
  { en: 'Web Design & Development', ja: 'Webサイト制作', desc: '目的と情報設計から考え、デザインとコーディングまで一貫して担当します。更新しやすい構造で納品します。', items: ['コーポレートサイト', 'サービスサイト', 'リニューアル', 'レスポンシブ対応'], proof: null, lp: null },
  { en: 'Landing Page', ja: 'LP制作', desc: '誰に、何を、どの順番で伝えるか。構成とCTA設計から入り、HTML / CSS / JavaScript の実装まで行います。', items: ['LP構成', 'UIデザイン', 'HTML / CSS / JavaScript実装', 'CTA設計', 'フォーム導線'], proof: 'lp', lp: null },
  { en: 'Website Maintenance', ja: '運用・保守・改修', desc: '公開後のサイトを、壊さずに直す。既存の構成を確認したうえで、必要な範囲だけを丁寧に改修します。', items: ['WordPress運用・保守', 'テキスト・画像更新', '既存ページ改修', 'フォーム修正', 'スパム対策', '軽微な不具合対応'], proof: null, lp: null },
  { en: 'Video & Creative', ja: '映像・クリエイティブ制作', desc: 'YouTube・SNS広告・採用動画まで。見る人が離脱しない構成と編集で、伝えたいことを最後まで届けます。', items: ['動画企画・構成', '撮影・編集', '広告動画', 'SNSクリエイティブ'], proof: 'video', lp: null },
  { en: 'AI & Workflow', ja: 'AI活用・機能実装', desc: 'AIを使った制作フローの効率化や、診断・シミュレーターなどWeb上の機能実装に対応します。', items: ['AIを活用した制作効率化', 'コンテンツ制作ワークフロー', '診断・シミュレーター実装', 'Web関連の機能実装'], proof: 'system', lp: null },
  { en: 'Creative Strategy', ja: '情報設計・改善提案', desc: '作る前に「なぜ伝わらないのか」を整理します。構成・コピー・導線を見直し、成果に近づく改善を提案します。', items: ['情報設計', 'コンテンツ構成', 'コピー改善', 'UX改善', 'CV導線設計'], proof: null, lp: null },
];

const CRAFT = [
  { l: 'C', en: 'Clarify', ja: '目的を定める', d: '誰に、何を、なぜ伝えるのか。「何をもって成果とするか」を最初に決めます。' },
  { l: 'R', en: 'Research', ja: '相手を知る', d: '読み手の悩み・心理・行動を調べ、伝わらない理由を見つけます。' },
  { l: 'A', en: 'Architect', ja: '構造を設計する', d: '伝える順番・構成・導線を、成果から逆算して組み立てます。' },
  { l: 'F', en: 'Form', ja: '形にする', d: 'デザイン・映像・実装へ落とし込み、細部まで仕上げて届けます。' },
  { l: 'T', en: 'Test', ja: '確かめて磨く', d: '公開後の反応を見て、直すべき箇所を見極め、改善を続けます。' },
];

const PRINCIPLES = [
  { t: '目的から考える', d: '「何を作るか」の前に「何のために作るか」を確認します。' },
  { t: '見た目だけで終わらせない', d: '美しさは手段です。読みやすさと行動のしやすさまで設計します。' },
  { t: '実装まで自分で担う', d: 'デザインとコードを同じ人間が扱うため、意図がずれません。' },
  { t: '公開後の改善まで考える', d: '公開はスタート。直しやすい構造で作り、改善を前提にします。' },
  { t: 'Webと映像を横断する', d: 'LPに動画を、動画にLPを。媒体をまたいで最適な伝え方を選びます。' },
  { t: '技術とクリエイティブを組み合わせる', d: 'AIや機能実装も、伝わる体験のための道具として使います。' },
];

const INQUIRY_TYPES = ['LP制作', 'Webサイト制作', 'サイト改修', '運用・保守', '動画制作', 'AI / Webシステム', 'その他'];

/* ───────── helpers ───────── */
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const bySlug = Object.fromEntries(WORKS.map((w) => [w.slug, w]));
const href = (u) => (u.startsWith('./') ? '/' + u.slice(2) : u);
const isExternal = (u) => /^https?:/.test(u);
const workUrl = (w) => `/works/${w.slug}.html`;
const img = (name) => `/assets/works/${name}.webp`;
// 一覧・カード用：640w / 960w / 1280w を出し分け（*-pc1 と *-thumb のみ縮小版あり）
const srcset = (name) => `${img(name + '-640')} 640w, ${img(name + '-960')} 960w, ${img(name)} 1280w`;
const CARD_SIZES = '(min-width: 1200px) 50vw, (min-width: 700px) 50vw, 100vw';
const pad = (n) => String(n).padStart(2, '0');
const catLabels = (w) => w.categories.map((c) => CATEGORIES[c].label).join(' / ');

const ICON = {
  arrow: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" stroke-width="1.6"/></svg>',
  external: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 3h8v8M13 3 3 13" stroke="currentColor" stroke-width="1.6"/></svg>',
  pause: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2h3v12H4zM9 2h3v12H9z" fill="currentColor"/></svg>',
  play: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2l10 6-10 6z" fill="currentColor"/></svg>',
};

const NAV = [
  { id: 'works', en: 'Works', ja: '実績', href: '/#works' },
  { id: 'services', en: 'Services', ja: 'サービス', href: '/#services' },
  { id: 'approach', en: 'Approach', ja: '進め方', href: '/#approach' },
  { id: 'about', en: 'About', ja: 'スタジオについて', href: '/#about' },
];

function head({ title, description, path, type = 'website', jsonld = [] }) {
  const url = SITE + path;
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="${BRAND}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/assets/og/og-default.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="ja_JP">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#F5F4F0">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/og/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="${FONT_CSS}" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="${FONT_CSS}"></noscript>
<link rel="stylesheet" href="/assets/css/site.css?v=${ASSET_V}">
<script>document.documentElement.classList.add('js')</script>
<script src="/assets/js/site.js?v=${ASSET_V}" defer></script>
${jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join('\n')}
</head>`;
}

function header(current = '') {
  const items = NAV.map((n) => `<li><a href="${n.href}" data-nav="${n.id}"${current === n.id ? ' aria-current="page"' : ''}>${n.en}<small>${n.ja}</small></a></li>`).join('');
  const drawerItems = [...NAV, { id: 'contact', en: 'Contact', ja: 'お問い合わせ', href: '/#contact' }]
    .map((n) => `<li><a href="${n.href}">${n.en}<span>${n.ja}</span></a></li>`).join('');
  return `<a class="skip-link" href="#main">本文へスキップ</a>
<header class="site-header" id="siteHeader">
  <div class="wrap">
    <a class="wordmark" href="/" aria-label="${BRAND} ホーム"><span class="wordmark__sq" aria-hidden="true"></span>${BRAND}</a>
    <nav class="gnav" aria-label="グローバルナビゲーション"><ul>${items}</ul></nav>
    <a class="btn header-cta" href="/#contact">相談する<span class="btn__icon">${ICON.arrow}</span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="drawer">Menu<span class="menu-toggle__bars" aria-hidden="true"></span></button>
  </div>
</header>
<div class="drawer" id="drawer" aria-label="メニュー" hidden>
  <nav aria-label="モバイルナビゲーション"><ul>${drawerItems}</ul></nav>
  <div style="display:grid;gap:1rem">
    <a class="btn" href="/#contact">プロジェクトを相談する<span class="btn__icon">${ICON.arrow}</span></a>
    <p class="drawer__meta">Web / LP / Video / Creative / AI</p>
  </div>
</div>`;
}

function footer() {
  return `<footer class="site-footer is-dark" data-theme="dark">
  <div class="wrap">
    <div class="footer__sign">
      <img class="footer__logo" src="/images/logo-full.png" width="1017" height="304" alt="${BRAND} — 伝えたいを、成果へ。Craft for Results." loading="lazy" decoding="async">
      <a class="btn" href="/#contact">プロジェクトを相談する<span class="btn__icon">${ICON.arrow}</span></a>
    </div>
    <div class="footer__grid">
      <nav class="footer__nav" aria-label="フッターナビゲーション"><ul>
        <li><a href="/">Home</a></li><li><a href="/works.html">Works 制作実績</a></li><li><a href="/video-works.html">Video Works 映像実績</a></li>
        <li><a href="/#services">Services サービス</a></li><li><a href="/#contact">Contact お問い合わせ</a></li><li><a href="/privacy.html">Privacy Policy</a></li>
      </ul></nav>
      <p class="footer__copy">&copy; ${YEAR} ${BRAND}. All rights reserved.</p>
    </div>
  </div>
</footer>`;
}

function tags(w, { cat = true } = {}) {
  return `<span class="tag tag--${w.type}">${TYPES[w.type].label}</span>${cat ? `<span class="tag tag--cat">${esc(catLabels(w))}</span>` : ''}`;
}

/* 実績カード（トップ・一覧共通） */
function workCard(w, i, { variant = '', headingLevel = 3, lazy = true } = {}) {
  const L = lazy ? ' loading="lazy"' : ' fetchpriority="high"';
  let media;
  if (w.video) {
    media = `<span class="work__media${variant === 'tall' ? '' : ''}" aria-hidden="true">
      <img class="work__pc" src="${img(w.slug + '-thumb')}" srcset="${srcset(w.slug + '-thumb')}" sizes="${CARD_SIZES}" width="1280" height="720" alt=""${L} decoding="async">
      <span class="work__play"><i>&#9654;</i>Video</span></span>`;
  } else {
    media = `<span class="work__media work__media--framed" aria-hidden="true">
      <img class="work__pc" src="${img(w.images.pc[0])}" srcset="${srcset(w.images.pc[0])}" sizes="${CARD_SIZES}" width="1280" height="800" alt=""${L} decoding="async">
      <img class="work__sp" src="${img(w.images.sp)}" width="600" height="1298" alt=""${L} decoding="async"></span>`;
  }
  const H = `h${headingLevel}`;
  // ファーストビューに入るカード（lazy=false）は LCP を遅らせないよう reveal を付けない
  return `<article class="work${variant ? ' work--' + variant : ''}${lazy ? ' reveal' : ''}" data-cats="${w.categories.join(' ')}" data-type="${w.type}">
    ${media}
    <div class="work__head"><span class="work__index">${pad(i + 1)}</span>${tags(w)}</div>
    <${H} class="work__title"><a href="${workUrl(w)}">${esc(w.title)}</a></${H}>
    <p class="work__purpose">${esc(w.summary)}</p>
    <dl class="work__meta">
      <dt>Purpose</dt><dd>${esc(w.purpose)}</dd>
      <dt>Role</dt><dd>${esc(w.role)}</dd>
      ${w.year ? `<dt>Year</dt><dd>${w.year}</dd>` : ''}
    </dl>
    <span class="work__more">詳しく見る ${ICON.arrow}</span>
  </article>`;
}

/* ───────── pages ───────── */
function pageIndex() {
  const featured = FEATURED_ORDER.map((s) => bySlug[s]);
  const variants = ['wide', '', '', 'wide', '', ''];
  const reelA = ['ai-sales-dx', 'koyomi-miso', 'mirai-ryo', 'futurenest', 'lumia'].map((s) => bySlug[s]);
  const reelB = ['sakura-seikotsuin', 'aivoyance', 'learncore', 'trattoria-lucente', 'business-design-academy'].map((s) => bySlug[s]);
  const reelCol = (list, sp) => {
    const fig = (w, k, eager) => {
      const isSp = sp && k % 2 === 1;
      return `<figure class="${isSp ? 'sp' : ''}"><img src="${img(isSp ? w.images.sp : w.images.pc[0] + '-640')}" width="${isSp ? 600 : 640}" height="${isSp ? 1298 : 400}" alt=""${eager ? '' : ' loading="lazy"'} decoding="async"></figure>`;
    };
    // 2周分並べて translateY(-50%) でシームレスにループさせる
    return `<div class="hero__reel-col" aria-hidden="true">${list.map((w, k) => fig(w, k, k < 2)).join('')}${list.map((w, k) => fig(w, k, false)).join('')}</div>`;
  };
  const counts = { all: WORKS.length, client: WORKS.filter((w) => w.type === 'client').length, concept: WORKS.filter((w) => w.type === 'concept').length };

  const services = SERVICES.map((s, i) => `<article class="svc reveal">
      <span class="svc__num">${pad(i + 1)}</span>
      <h3 class="svc__title"><span class="en">${s.en}</span><span class="ja">${s.ja}</span></h3>
      <div class="svc__body">
        <p class="svc__desc">${s.desc}</p>
        <ul class="svc__list" role="list">${s.items.map((t) => `<li>${t}</li>`).join('')}</ul>
        ${s.proof ? `<p class="svc__proof">関連する実績：<a href="/works.html?category=${s.proof}">${CATEGORIES[s.proof].ja}の実績を見る</a></p>` : ''}
        ${s.lp ? `<a class="arrow-link" href="${s.lp}">${s.ja}について詳しく ${ICON.arrow}</a>` : ''}
      </div>
    </article>`).join('');

  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'WebSite', name: BRAND, url: SITE + '/', inLanguage: 'ja' },
    { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: BRAND, url: SITE + '/', email: EMAIL, slogan: '伝えたいを、成果へ。 Craft for Results.', description: 'Web・LP・映像・クリエイティブ・AI活用を横断し、企画から実装、公開後の改善まで一貫して担当する個人クリエイティブスタジオ。', knowsAbout: ['Webデザイン', 'LP制作', '映像制作', 'WordPress保守', 'AI活用'] },
  ];

  return `${head({ title: `${BRAND} | 伝えたいを、成果へ。— Web・LP・映像のクリエイティブスタジオ`, description: 'TAKE CRAFTは、Web・LP・映像・AIを横断し、企画から実装、公開後の改善まで一貫して担当する個人クリエイティブスタジオです。人が動く理由を設計し、成果につながる制作を行います。', path: '/', jsonld })}
<body>
${header()}
<main id="main">

<section class="hero" id="top" aria-labelledby="heroTitle">
  <div class="wrap">
    <div class="hero__meta">
      <span class="label label--dot">${BRAND} — Creative Studio</span>
      <ul class="hero__disciplines" aria-label="対応領域"><li>Web</li><li>LP</li><li>Video</li><li>Creative</li><li>AI</li></ul>
    </div>
    <div class="hero__body">
      <div class="hero__title">
        <h1 id="heroTitle" class="h-display"><span class="line"><span>伝えたいを、</span></span><span class="line"><span>成果へ。</span></span></h1>
        <p class="hero__en" lang="en">Craft for Results.</p>
      </div>
      <div class="hero__side">
        <div class="hero__reel" id="heroReel">
          ${reelCol(reelA, false)}
          ${reelCol(reelB, true)}
          <span class="hero__reel-caption" aria-hidden="true">Selected screens</span>
          <button class="reel-pause" type="button" aria-pressed="false" aria-label="実績画面のスクロールを一時停止">${ICON.pause}</button>
        </div>
      </div>
      <div class="hero__foot">
        <p class="hero__lead lead">人が動く理由を設計し、成果につながる形にする。Web・LP・映像・AIを横断して、企画から実装、公開後の改善まで一貫して担当する個人クリエイティブスタジオです。</p>
        <div class="btn-row">
          <a class="btn" href="#works">制作実績を見る<span class="btn__icon">${ICON.arrow}</span></a>
          <a class="btn btn--ghost" href="#contact">プロジェクトを相談する<span class="btn__icon">${ICON.arrow}</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section intro" id="intro" aria-labelledby="introTitle">
  <div class="wrap">
    <div class="intro__grid">
      <h2 id="introTitle" class="intro__copy reveal"><span>デザインは、</span><span class="sub">飾るためではない。</span><span class="indent">人が動く理由を、<br class="br-sp">設計する。</span></h2>
      <div class="intro__text reveal">
        <p class="lead">良い商品やサービスでも、伝わらなければ選ばれません。見た目を整えることがゴールではなく、読み手が迷わず次の行動に移れる状態をつくること。それが TAKE CRAFT の仕事です。</p>
        <p class="body-2">誰に、何を、どの順番で伝えるか。構成とコピーを先に決め、そのうえでデザイン・映像・実装を選びます。</p>
      </div>
      <dl class="intro__facts reveal">
        <div><dt>Public works</dt><dd>${counts.all}<small>件</small></dd></div>
        <div><dt>Client work</dt><dd>${counts.client}<small>件</small></dd></div>
        <div><dt>Concept work</dt><dd>${counts.concept}<small>件</small></dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="section is-dark" id="works" data-theme="dark" aria-labelledby="worksTitle">
  <div class="wrap">
    <div class="sec-head">
      <span class="label label--dot"><span class="label__num">01</span>Selected Works</span>
      <h2 id="worksTitle" class="h2 sec-head__title reveal">課題と狙いから見る、<br>制作実績。</h2>
      <p class="sec-head__note lead reveal">完成物だけでなく、何のために、どう考えて作ったのかまで掲載しています。クライアントワークと自主制作（コンセプト作品）は区別して表記しています。</p>
    </div>
    <div class="featured">
      ${featured.map((w, i) => workCard(w, i, { variant: variants[i] })).join('\n')}
    </div>
    <div class="featured__foot">
      <div class="legend" aria-label="表記について">
        <span><span class="tag tag--client">${TYPES.client.label}</span>${TYPES.client.ja}</span>
        <span><span class="tag tag--concept">${TYPES.concept.label}</span>${TYPES.concept.ja}</span>
      </div>
      <a class="btn" href="/works.html">すべての実績を見る（${WORKS.length}件）<span class="btn__icon">${ICON.arrow}</span></a>
    </div>
  </div>
</section>

<section class="section" id="services" aria-labelledby="servicesTitle">
  <div class="wrap">
    <div class="sec-head">
      <span class="label label--dot"><span class="label__num">02</span>Services</span>
      <h2 id="servicesTitle" class="h2 sec-head__title reveal">相談できること。</h2>
      <p class="sec-head__note lead reveal">新規制作だけでなく、既存サイトの改修や運用の相談も受け付けています。領域をまたぐ相談もそのままどうぞ。</p>
    </div>
    <div class="services">${services}</div>
    <div class="services__note"><p class="caption">内容・規模・スケジュールに応じて、対応範囲とお見積りを個別にご提案します。</p></div>
  </div>
</section>

<section class="section is-dark" id="approach" data-theme="dark" aria-labelledby="approachTitle">
  <div class="wrap">
    <div class="sec-head">
      <span class="label label--dot"><span class="label__num">03</span>Approach — CRAFT Method</span>
      <h2 id="approachTitle" class="h2 sec-head__title reveal">成果から逆算する、<br>5つの工程。</h2>
    </div>
    <ol class="craft" role="list">
      ${CRAFT.map((c) => `<li class="craft__item reveal"><span class="craft__letter en" aria-hidden="true">${c.l}</span><div class="craft__content"><h3 class="craft__word" lang="en">${c.en}<span lang="ja">${c.ja}</span></h3><p class="craft__desc">${c.d}</p></div></li>`).join('')}
    </ol>
  </div>
</section>

<section class="section is-white" id="about" aria-labelledby="aboutTitle">
  <div class="wrap">
    <div class="about__grid">
      <div class="about__lead">
        <span class="label label--dot"><span class="label__num">04</span>About / Philosophy</span>
        <h2 id="aboutTitle" class="h2 reveal">ひとりで、<br>最後まで責任を持つ。</h2>
        <p class="lead reveal">TAKE CRAFT は、個人で運営するクリエイティブスタジオです。ヒアリングから構成、デザイン、実装、公開後の改善まで、同じ人間が一貫して担当します。窓口と制作者が同じだから、意図が途中で薄まりません。</p>
        <div class="about__portrait reveal">
          <img src="/images/profile.jpg" width="400" height="400" alt="カメラを構えるTAKE CRAFTの制作者" loading="lazy" decoding="async">
          <p><strong>${BRAND}</strong>Creative Direction / Web / LP / Video / AI</p>
        </div>
      </div>
      <ul class="principles" role="list">
        ${PRINCIPLES.map((p, i) => `<li class="reveal"><span class="n en">${pad(i + 1)}</span><h3>${p.t}</h3><p>${p.d}</p></li>`).join('')}
      </ul>
    </div>
  </div>
</section>

${contactSection()}
</main>
${footer()}
</body>
</html>
`;
}

function contactSection() {
  return `<section class="section is-dark" id="contact" data-theme="dark" aria-labelledby="contactTitle">
  <div class="wrap">
    <div class="contact__grid">
      <div class="contact__intro">
        <span class="label label--dot"><span class="label__num">05</span>Contact</span>
        <h2 id="contactTitle" class="contact__title">まずは、<br>相談してみる。</h2>
        <p class="lead">内容が固まっていなくても大丈夫です。「何から始めればいいか分からない」という段階からご相談ください。</p>
        <ol class="contact__steps" role="list">
          <li><b>01</b>フォームから内容を送信</li>
          <li><b>02</b>内容を確認し、メールでご連絡</li>
          <li><b>03</b>ヒアリング・ご提案・お見積り</li>
        </ol>
        <p class="contact__mail">メールで直接のご連絡：<a href="mailto:${EMAIL}">${EMAIL}</a></p>
      </div>
      <div class="contact__form">
        <form class="form" id="contactForm" novalidate data-endpoint="" data-mailto="${EMAIL}">
          <fieldset class="field">
            <legend class="field__label">ご相談の種類 <span class="req">必須</span></legend>
            <div class="chips" role="group">
              ${INQUIRY_TYPES.map((t, i) => `<label class="chip"><input type="checkbox" name="type" value="${t}"${i === 0 ? ' aria-describedby="err-type"' : ''}><span>${t}</span></label>`).join('')}
            </div>
            <p class="field__hint">複数選択できます。</p>
            <p class="field__error" id="err-type" role="alert"></p>
          </fieldset>
          <div class="field">
            <label class="field__label" for="f-name">お名前 <span class="req">必須</span></label>
            <input class="input" id="f-name" name="name" type="text" autocomplete="name" required maxlength="80" aria-describedby="err-name">
            <p class="field__error" id="err-name" role="alert"></p>
          </div>
          <div class="field">
            <label class="field__label" for="f-email">メールアドレス <span class="req">必須</span></label>
            <input class="input" id="f-email" name="email" type="email" inputmode="email" autocomplete="email" required maxlength="200" aria-describedby="err-email">
            <p class="field__error" id="err-email" role="alert"></p>
          </div>
          <div class="field">
            <label class="field__label" for="f-company">会社名・屋号 <span class="opt">任意</span></label>
            <input class="input" id="f-company" name="company" type="text" autocomplete="organization" maxlength="120">
          </div>
          <div class="field">
            <label class="field__label" for="f-message">ご相談内容 <span class="req">必須</span></label>
            <textarea class="input" id="f-message" name="message" required maxlength="4000" aria-describedby="hint-message err-message" placeholder="例）既存サイトのお問い合わせフォームを直したい／新サービスのLPを作りたい　など"></textarea>
            <p class="field__hint" id="hint-message">背景・ご希望の時期・ご予算感など、分かる範囲でご記入ください。</p>
            <p class="field__error" id="err-message" role="alert"></p>
          </div>
          <div class="hp" aria-hidden="true"><label>ウェブサイト<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
          <div class="field">
            <label class="check"><input type="checkbox" name="agree" id="f-agree" aria-describedby="err-agree"><span><a href="/privacy.html" target="_blank" rel="noopener">プライバシーポリシー</a>に同意する <span class="req">必須</span></span></label>
            <p class="field__error" id="err-agree" role="alert"></p>
          </div>
          <div class="form__submit">
            <button class="btn" type="submit">内容を確認して送信する<span class="btn__icon">${ICON.arrow}</span></button>
            <p class="form__note">送信ボタンを押すと、入力内容が記入された状態でお使いのメールアプリが開きます。メールアプリから送信して完了です。</p>
          </div>
          <div class="form-status" id="formStatus" role="status" aria-live="polite"></div>
        </form>
      </div>
    </div>
  </div>
</section>`;
}

function filterBar(active) {
  const present = Object.keys(CATEGORIES).filter((c) => WORKS.some((w) => w.categories.includes(c)));
  const btn = (key, label, n) => `<li><button class="filter__btn" type="button" data-filter="${key}" aria-pressed="${key === active}">${label}<sup>${n}</sup></button></li>`;
  return `<div class="filter" role="region" aria-label="カテゴリーで絞り込み">
  <div class="wrap filter__inner">
    <span class="filter__label" id="filterLabel">Filter</span>
    <ul class="filter__list" role="list" aria-labelledby="filterLabel">
      ${btn('all', 'All', WORKS.length)}
      ${present.map((c) => btn(c, CATEGORIES[c].label, WORKS.filter((w) => w.categories.includes(c)).length)).join('')}
    </ul>
    <p class="filter__count" id="filterCount" aria-live="polite">${active === 'all' ? WORKS.length : WORKS.filter((w) => w.categories.includes(active)).length}件を表示</p>
  </div>
</div>`;
}

function pageWorks({ path, title, h1, en, description, active }) {
  const list = WORKS;
  const jsonld = [{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' }, { '@type': 'ListItem', position: 2, name: h1, item: SITE + path }] }];
  return `${head({ title, description, path, jsonld })}
<body>
${header('works')}
<main id="main">
  <section class="page-hero">
    <div class="wrap">
      <nav class="breadcrumb" aria-label="パンくずリスト"><ol><li><a href="/">Home</a></li><li aria-current="page">${h1}</li></ol></nav>
      <div class="page-hero__grid">
        <div class="page-hero__title"><span class="label label--dot">${en}</span><h1 class="h1" style="margin-top:1rem">${h1}</h1></div>
        <div class="page-hero__note">
          <p class="body-2">${esc(description)}</p>
          <div class="legend" style="margin-top:1.25rem">
            <span><span class="tag tag--client">${TYPES.client.label}</span>${TYPES.client.ja}</span>
            <span><span class="tag tag--concept">${TYPES.concept.label}</span>${TYPES.concept.ja}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  ${filterBar(active)}
  <div class="wrap">
    <div class="works-list" id="worksList" data-default="${active}">
      ${list.map((w, i) => workCard(w, i, { headingLevel: 2, lazy: i > 1 })).join('\n')}
    </div>
    <p class="works-empty" id="worksEmpty" hidden>該当する実績はありません。</p>
  </div>
  ${ctaBand()}
</main>
${footer()}
</body>
</html>
`;
}

function ctaBand() {
  return `<section class="is-dark" data-theme="dark" aria-labelledby="ctaTitle">
    <div class="wrap cta-band">
      <h2 class="cta-band__title" id="ctaTitle">似たような課題があれば、<br>まずは相談してみてください。</h2>
      <div><p class="body-2">新規制作・リニューアル・既存サイトの改修や運用まで。内容が固まっていない段階でも大丈夫です。</p>
      <a class="btn" href="/#contact">プロジェクトを相談する<span class="btn__icon">${ICON.arrow}</span></a></div>
    </div>
  </section>`;
}

function pageDetail(w, i) {
  const next = WORKS[(i + 1) % WORKS.length];
  const isVideo = !!w.video;
  const path = workUrl(w);
  let n = 0;
  const sec = (en, ja, body) => `<section class="pj-sec"><h2 class="pj-sec__label"><b>${pad(++n)}</b>${en}<span>${ja}</span></h2><div class="pj-sec__body">${body}</div></section>`;

  const visual = isVideo
    ? `<div class="pj-visual"><div class="yt${w.video.short ? ' yt--short' : ''}" data-yt="${w.video.id}">
        <img src="${img(w.slug + '-thumb')}" width="1280" height="720" alt="${esc(w.title)}のサムネイル" fetchpriority="high" decoding="async">
        <button type="button" aria-label="${esc(w.title)}を再生（YouTube）"><span><i>${ICON.play.replace('<svg', '<svg width="14" height="14"')}</i>再生する</span></button>
      </div><p class="pj-visual__caption">再生ボタンを押すとYouTubeの動画を読み込みます（youtube-nocookie.com）。</p></div>`
    : `<figure class="pj-visual"><div class="pj-visual__stage">
        <img class="pc" src="${img(w.images.pc[0])}" width="1280" height="800" alt="${esc(w.title)} PC表示のファーストビュー" fetchpriority="high" decoding="async">
        <img class="sp" src="${img(w.images.sp)}" width="600" height="1298" alt="${esc(w.title)} スマートフォン表示のファーストビュー" decoding="async">
      </div><figcaption class="pj-visual__caption">公開中のページを撮影した実際の画面です（PC幅1440px／スマートフォン幅390px）。</figcaption></figure>`;

  const facts = [
    ['Type', TYPES[w.type].ja],
    ['Category', catLabels(w)],
    ['Field', w.industry],
    w.year ? ['Year', `${w.year}`] : null,
  ].filter(Boolean);

  const body = [
    sec('Overview', '概要', `<p class="lead" style="color:inherit">${esc(w.summary)}</p>${w.type === 'concept' ? `<p class="note">${CONCEPT_NOTE}</p>` : ''}`),
    sec('Background', w.type === 'concept' ? '想定した背景・課題' : '制作背景・課題', `<p>${esc(w.background)}</p>`),
    sec('Purpose & Policy', '目的と制作方針', `<p><strong>目的：</strong>${esc(w.purpose)}</p><p>${esc(w.approach)}</p>`),
    sec('Design Points', isVideo ? '構成・編集上の工夫' : 'デザイン・構成上の工夫', `<ol class="pj-list">${w.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ol>${w.flow?.length ? `<p class="caption" style="margin-top:.5rem">ページ構成（上から順）</p><ol class="pj-flow" role="list">${w.flow.map((f) => `<li>${esc(f)}</li>`).join('')}</ol>` : ''}`),
    sec(isVideo ? 'Format' : 'Implementation', isVideo ? '制作手法' : '実装内容・技術', `<ul class="pj-tech" role="list">${w.tech.map((t) => `<li lang="en">${esc(t)}</li>`).join('')}</ul>`),
  ];

  let gallery = '';
  if (!isVideo) {
    const shots = w.images.pc.slice(1);
    const g = [];
    if (shots[0]) g.push(`<figure class="g2 reveal"><img src="${img(shots[0])}" width="1280" height="800" alt="${esc(w.title)} PC表示・ページ中盤" loading="lazy" decoding="async"><figcaption>PC表示 — ページ中盤</figcaption></figure>`);
    g.push(`<figure class="sp reveal"><img src="${img(w.images.sp)}" width="600" height="1298" alt="${esc(w.title)} スマートフォン表示" loading="lazy" decoding="async"><figcaption>スマートフォン表示</figcaption></figure>`);
    if (shots[1]) g.push(`<figure class="g3 reveal"><img src="${img(shots[1])}" width="1280" height="800" alt="${esc(w.title)} PC表示・ページ後半" loading="lazy" decoding="async"><figcaption>PC表示 — ページ後半</figcaption></figure>`);
    gallery = sec('Screens', '完成イメージ', `<div class="pj-gallery">${g.join('')}</div>`).replace('class="pj-sec__body"', 'class="pj-sec__body" style="max-width:none"');
  } else {
    gallery = sec('Watch', '完成映像', `<p>完成映像はページ上部のプレーヤー、または下のリンクからYouTubeでご覧いただけます。</p>`);
  }
  body.push(gallery);
  body.push(sec('Role', '担当範囲', `<p>${esc(w.role)}</p>`));
  body.push(sec('Link', 'プロジェクトリンク', `<a class="btn btn--ghost" href="${href(w.url)}" target="_blank" rel="noopener">${esc(w.linkLabel)}<span class="sr-only">（新しいタブで開きます）</span><span class="btn__icon">${ICON.external}</span></a>`));

  const jsonld = [
    { '@context': 'https://schema.org', '@type': isVideo ? 'VideoObject' : 'CreativeWork', name: w.title, description: w.summary, url: SITE + path, ...(isVideo ? { thumbnailUrl: SITE + img(w.slug + '-thumb'), embedUrl: `https://www.youtube-nocookie.com/embed/${w.video.id}` } : { image: SITE + img(w.images.pc[0]) }), creator: { '@type': 'Organization', name: BRAND, url: SITE + '/' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' }, { '@type': 'ListItem', position: 2, name: '制作実績', item: SITE + '/works.html' }, { '@type': 'ListItem', position: 3, name: w.title, item: SITE + path }] },
  ];

  return `${head({ title: `${w.title} | 制作実績 | ${BRAND}`, description: `${w.summary}（${TYPES[w.type].ja}）`.slice(0, 160), path, type: 'article', jsonld })}
<body>
${header('works')}
<main id="main">
  <section class="is-dark pj-hero" data-theme="dark" aria-labelledby="pjTitle">
    <div class="wrap">
      <nav class="breadcrumb" aria-label="パンくずリスト"><ol><li><a href="/">Home</a></li><li><a href="/works.html">制作実績</a></li><li aria-current="page">${esc(w.title)}</li></ol></nav>
      <div class="pj-hero__tags">${tags(w)}</div>
      <h1 class="pj-hero__title" id="pjTitle">${esc(w.title)}</h1>
      <p class="pj-hero__en" lang="en">${esc(w.en)}</p>
      ${visual}
      <div style="height:clamp(3rem,2rem + 4vw,6rem)"></div>
    </div>
  </section>
  <div class="wrap">
    <dl class="pj-facts" style="margin-top:clamp(2.5rem,1.5rem + 3vw,4rem)">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
    ${body.join('\n')}
  </div>
  <section class="is-dark" data-theme="dark">
    <div class="wrap">
      <a class="pj-next" href="${workUrl(next)}"><span class="pj-next__label">Next Project — 次のプロジェクト</span><span class="pj-next__title"><span>${esc(next.title)}</span>${ICON.arrow}</span><span class="tags" style="display:flex;flex-wrap:wrap;gap:.5rem">${tags(next)}</span></a>
      <div style="border-top:1px solid var(--c-line-dark)"></div>
    </div>
  </section>
  ${ctaBand()}
</main>
${footer()}
</body>
</html>
`;
}

function pagePrivacy() {
  return `${head({ title: `プライバシーポリシー | ${BRAND}`, description: 'TAKE CRAFT のプライバシーポリシー。お問い合わせでお預かりする個人情報の取り扱いについて。', path: '/privacy.html' })}
<body>
${header()}
<main id="main">
  <section class="page-hero"><div class="wrap">
    <nav class="breadcrumb" aria-label="パンくずリスト"><ol><li><a href="/">Home</a></li><li aria-current="page">プライバシーポリシー</li></ol></nav>
    <span class="label label--dot">Privacy Policy</span><h1 class="h1" style="margin-top:1rem">プライバシーポリシー</h1>
  </div></section>
  <div class="wrap" style="padding-bottom:var(--section)">
    <div class="prose">
      <p>${BRAND}（以下「当スタジオ」）は、お問い合わせ等でお預かりする個人情報を、以下の方針に基づき適切に取り扱います。</p>
      <h2>1. 取得する情報</h2>
      <p>お問い合わせの際にご入力いただく、お名前・メールアドレス・会社名（任意）・ご相談内容を取得します。</p>
      <h2>2. 利用目的</h2>
      <ul><li>お問い合わせへの回答・ご連絡のため</li><li>ご依頼内容の確認、お見積り・ご提案のため</li></ul>
      <h2>3. 送信方法について</h2>
      <p>本サイトのお問い合わせフォームは、入力内容をお使いのメールアプリに引き渡す方式です。フォームの入力内容が本サイトのサーバーに保存されることはありません。送信はお客様のメールアプリから行われます。</p>
      <h2>4. 第三者への提供</h2>
      <p>法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。</p>
      <h2>5. 外部サービス</h2>
      <p>本サイトはVercel社のホスティングを利用しており、アクセス時の一般的な通信ログが同社のサービス上で処理される場合があります。また、Webフォントの表示にGoogle Fonts、動画の再生にYouTube（再生ボタンを押した場合のみ）を利用しています。</p>
      <h2>6. 開示・訂正・削除</h2>
      <p>ご本人からの個人情報の開示・訂正・削除のご依頼には、本人確認のうえ対応します。</p>
      <h2>7. お問い合わせ窓口</h2>
      <p><a href="mailto:${EMAIL}">${EMAIL}</a></p>
      <p class="caption">制定日：2026年10月27日</p>
    </div>
  </div>
</main>
${footer()}
</body>
</html>
`;
}

function page404() {
  return `${head({ title: `ページが見つかりません | ${BRAND}`, description: 'お探しのページは見つかりませんでした。', path: '/404.html' }).replace('<link rel="canonical"', '<meta name="robots" content="noindex">\n<link rel="canonical"')}
<body>
${header()}
<main id="main">
  <section class="page-hero" style="min-height:70svh"><div class="wrap">
    <span class="label label--dot">404 — Not Found</span>
    <h1 class="h1" style="margin:1rem 0 1.5rem">ページが<br>見つかりません。</h1>
    <p class="body-2" style="margin-bottom:2rem">URLが変更されたか、ページが削除された可能性があります。</p>
    <div class="btn-row"><a class="btn" href="/">トップへ戻る<span class="btn__icon">${ICON.arrow}</span></a><a class="btn btn--ghost" href="/works.html">制作実績を見る<span class="btn__icon">${ICON.arrow}</span></a></div>
  </div></section>
</main>
${footer()}
</body>
</html>
`;
}

/* ───────── write ───────── */
const out = (p, s) => { const f = join(ROOT, p); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, s); };

// 生成物として残っている古い詳細ページを掃除（データから消えたもの）
const worksDir = join(ROOT, 'works');
if (existsSync(worksDir)) for (const f of readdirSync(worksDir)) if (f.endsWith('.html') && !bySlug[f.replace(/\.html$/, '')]) unlinkSync(join(worksDir, f));

out('index.html', pageIndex());
out('works.html', pageWorks({ path: '/works.html', title: `制作実績一覧 | ${BRAND}`, h1: '制作実績', en: 'Works', description: 'LP制作・映像制作・機能実装まで、TAKE CRAFTの制作実績をカテゴリー別に掲載しています。各実績の背景・狙い・工夫は詳細ページでご覧いただけます。', active: 'all' }));
out('video-works.html', pageWorks({ path: '/video-works.html', title: `映像制作実績 | ${BRAND}`, h1: '映像制作実績', en: 'Video Works', description: 'YouTubeチャンネル動画からSNS広告、企業採用動画まで、TAKE CRAFTの映像制作実績です。', active: 'video' }));
WORKS.forEach((w, i) => out(`works/${w.slug}.html`, pageDetail(w, i)));
out('privacy.html', pagePrivacy());
out('404.html', page404());

const today = new Date().toISOString().slice(0, 10);
const urls = ['/', '/works.html', '/video-works.html', ...WORKS.map(workUrl), '/privacy.html'];
out('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
out('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`built: index, works, video-works, ${WORKS.length} detail pages, privacy, 404, sitemap (${urls.length} urls), robots`);
