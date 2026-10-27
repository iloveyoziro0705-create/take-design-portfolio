#!/usr/bin/env node
/**
 * TAKE CRAFT 営業用LP（/web-services/）生成スクリプト
 *
 * 使い方:  node scripts/build-web-services.mjs
 *          GA4_ID=G-XXXXXXX node scripts/build-web-services.mjs   … GA4 を有効化（未指定なら計測コードを出力しない）
 * 生成物:  web-services/index.html, web-services/thanks/index.html
 *
 * 掲載内容は data/web-services.mjs、実績は data/works.mjs を参照。生成された HTML は直接編集しない。
 * ポートフォリオ（scripts/build.mjs）とは独立。デザイントークンの値だけ揃えている（web-services/assets/ws.css）。
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { WORKS, TYPES } from '../data/works.mjs';
import { SERVICES, INQUIRY, BUDGETS, NEEDS, REASONS, IMPROVE, PLANS, PLAN_TERMS, OPTIONS, FLOW, FAQ, WORK_PICKS, FIX_WORK, yen } from '../data/web-services.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://take-design-portfolio.vercel.app';
const PATH = '/web-services/';
const BRAND = 'TAKE CRAFT';
const V = '20261027-1';
const GA4_ID = (process.env.GA4_ID || '').trim();
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap';

const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad = (n) => String(n).padStart(2, '0');
const img = (n) => `/assets/works/${n}.webp`;
const priceText = (s) => `${s.monthly ? '月額' : ''}${yen(s.price)}${s.from ? '〜' : ''}`;
const ARROW = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" stroke-width="1.6"/></svg>';
const EXT = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 3h8v8M13 3 3 13" stroke="currentColor" stroke-width="1.6"/></svg>';
const CHECK = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m3 8.5 3.2 3L13 4.5" stroke="currentColor" stroke-width="1.8"/></svg>';
const svc = Object.fromEntries(SERVICES.map((s) => [s.id, s]));

// CTA：data-service を付けるとフォームの「ご相談サービス」が自動選択される。data-track は GA4 のイベント名
const cta = (label, { service = '', track = 'cta_click', where = '', ghost = false, href = '#contact' } = {}) =>
  `<a class="btn${ghost ? ' btn--ghost' : ''}" href="${href}"${service ? ` data-service="${service}"` : ''} data-track="${track}" data-where="${where}">${label}<span class="btn__icon">${ARROW}</span></a>`;

function head({ title, description, path, robots = '', jsonld = [] }) {
  const ga = GA4_ID ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA4_ID}');</script>` : '';
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${robots ? `<meta name="robots" content="${robots}">` : ''}
<link rel="canonical" href="${SITE}${path}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${BRAND}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${SITE}${path}">
<meta property="og:image" content="${SITE}/web-services/assets/og-web-services.png">
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
<link rel="stylesheet" href="/web-services/assets/ws.css?v=${V}">
<script>document.documentElement.classList.add('js')</script>
<script src="/web-services/assets/ws.js?v=${V}" defer></script>
${ga}
${jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join('\n')}
</head>`;
}

function header() {
  const nav = [['#services', 'サービス'], ['#pricing', '料金'], ['#plans', '保守プラン'], ['#flow', '流れ'], ['#faq', 'よくある質問']];
  return `<a class="skip-link" href="#main">本文へスキップ</a>
<header class="ws-header" id="wsHeader">
  <div class="wrap ws-header__in">
    <a class="wordmark" href="${PATH}" aria-label="${BRAND} Web制作・保守サービス トップ"><span class="wordmark__sq" aria-hidden="true"></span>${BRAND}<span class="wordmark__sub">Web Services</span></a>
    <nav class="ws-nav" aria-label="ページ内ナビゲーション"><ul>${nav.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></nav>
    <div class="ws-header__aux">
      <a class="ws-header__link" href="/works.html" data-track="portfolio_click" data-where="header">制作実績</a>
      <a class="btn btn--sm" href="#contact" data-track="cta_click" data-where="header">無料相談<span class="btn__icon">${ARROW}</span></a>
    </div>
  </div>
</header>`;
}

function footer() {
  return `<footer class="ws-footer">
  <div class="wrap ws-footer__in">
    <div>
      <a class="wordmark" href="/" aria-label="${BRAND} ポートフォリオ"><span class="wordmark__sq" aria-hidden="true"></span>${BRAND}</a>
      <p class="ws-footer__copy">伝えたいを、成果へ。<span lang="en">Craft for Results.</span></p>
    </div>
    <nav aria-label="フッターナビゲーション"><ul>
      <li><a href="/">ポートフォリオ</a></li><li><a href="/works.html" data-track="portfolio_click" data-where="footer">制作実績</a></li>
      <li><a href="#pricing">料金</a></li><li><a href="#plans">保守プラン</a></li><li><a href="#contact">お問い合わせ</a></li><li><a href="/privacy.html">プライバシーポリシー</a></li>
    </ul></nav>
    <p class="ws-footer__c">&copy; ${new Date().getFullYear()} ${BRAND}</p>
  </div>
</footer>`;
}

/* 実績カード：デバイスモックアップ（ポートフォリオと同じ撮影画像を使用） */
function device(prefix, url, tone, lazy = true) {
  const host = url.startsWith('./') ? `take-design-portfolio.vercel.app/${url.slice(2)}` : url.replace(/^https?:\/\//, '');
  const L = lazy ? ' loading="lazy"' : '';
  return `<div class="device" style="--tone:${tone}" aria-hidden="true"><div class="device__stage">
    <div class="browser"><div class="browser__bar"><i></i><i></i><i></i><span class="browser__url">${esc(host.replace(/\/$/, ''))}</span></div>
    <img class="browser__screen" src="${img(prefix + '-desktop-1-960')}" srcset="${img(prefix + '-desktop-1-640')} 640w, ${img(prefix + '-desktop-1-960')} 960w, ${img(prefix + '-desktop-1-1280')} 1280w" sizes="(min-width: 1024px) 40vw, (min-width: 700px) 50vw, 100vw" width="1280" height="800" alt=""${L} decoding="async"></div>
    <img class="device__phone" src="${img(prefix + '-phone-1-420')}" width="420" height="860" alt=""${L} decoding="async">
  </div></div>`;
}

function workCards() {
  const picks = WORK_PICKS.map((s) => WORKS.find((w) => w.slug === s)).filter(Boolean);
  const card = (w) => `<article class="wcard reveal">
      ${device(w.images.prefix, w.url, w.tone)}
      <div class="wcard__body">
        <p class="wcard__tags"><span class="tag tag--${w.type}">${TYPES[w.type].label}</span><span class="wcard__cat">${w.type === 'client' ? 'クライアントワーク' : '自主制作'}</span></p>
        <h3 class="wcard__title">${esc(w.title.split('｜').join(' '))}</h3>
        <dl class="wcard__meta"><dt>目的</dt><dd>${esc(w.purpose)}</dd><dt>担当</dt><dd>${esc((w.roles || w.role.split('・')).slice(0, 4).join('・'))}</dd></dl>
        <a class="arrow-link" href="/works/${w.slug}.html" data-track="portfolio_click" data-where="works_${w.slug}">制作の詳細を見る ${ARROW}</a>
      </div>
    </article>`;
  const f = FIX_WORK;
  const fix = `<article class="wcard wcard--fix reveal">
      ${device(f.shot, f.url, '#2B2824')}
      <div class="wcard__body">
        <p class="wcard__tags"><span class="tag tag--client">${TYPES.client.label}</span><span class="wcard__cat">修正・改修</span></p>
        <h3 class="wcard__title">${esc(f.title)}</h3>
        <dl class="wcard__meta"><dt>目的</dt><dd>${esc(f.purpose)}</dd><dt>担当</dt><dd>${esc(f.role)}</dd></dl>
        <ul class="wcard__list" role="list">${f.items.map((t) => `<li>${CHECK}${esc(t)}</li>`).join('')}</ul>
        <a class="arrow-link" href="${f.url}" target="_blank" rel="noopener" data-track="portfolio_click" data-where="works_wp_fix">修正したページを見る<span class="sr-only">（新しいタブで開きます）</span> ${EXT}</a>
      </div>
    </article>`;
  return card(picks[0]) + fix + picks.slice(1).map(card).join('');
}

function serviceBlock(s, i) {
  return `<article class="svc reveal" id="${s.anchor}">
    <div class="svc__main">
    <div class="svc__head">
      <p class="svc__en"><span>${pad(i + 1)}</span>${s.en}</p>
      <h3 class="svc__name">${s.name}</h3>
      <p class="svc__lead">${s.lead}</p>
    </div>
    <div class="svc__price"><p class="svc__yen">${priceText(s)}<small>（税込）</small></p><p class="svc__period">${s.monthly ? '' : s.id === 'fix' ? '作業期間 ' : '制作期間 '}${s.period}</p></div>
    <p class="svc__desc">${s.desc}</p>
    </div>
    <div class="svc__side">
    <div class="svc__inc"><p class="svc__label">${s.id === 'fix' ? '対応例' : '基本の対応範囲'}</p><ul role="list">${s.includes.map((t) => `<li>${CHECK}${t}</li>`).join('')}</ul></div>
    <p class="svc__extra">${s.extra}</p>
    <div class="svc__cta">${cta(s.cta, { service: s.id, track: 'service_cta_click', where: `service_${s.id}` })}${s.id === 'wp' ? `<a class="arrow-link" href="#plans">保守プランを比較する ${ARROW}</a>` : ''}</div>
    </div>
  </article>`;
}

function page() {
  const lp = svc.lp, hp = svc.hp, fix = svc.fix, wp = svc.wp;
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: `${BRAND} Web制作・保守サービス`, url: SITE + PATH, areaServed: 'JP',
      description: 'LP制作・ホームページ制作・既存サイトの修正・WordPress保守を、企画から公開後の改善まで一貫して担当する個人クリエイティブスタジオ。',
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Web制作・保守サービス', itemListElement: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name }, priceSpecification: { '@type': s.monthly ? 'UnitPriceSpecification' : 'PriceSpecification', price: s.price, minPrice: s.price, priceCurrency: 'JPY', valueAddedTaxIncluded: true, ...(s.monthly ? { unitText: 'MONTH' } : {}) } })) } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: BRAND, item: SITE + '/' }, { '@type': 'ListItem', position: 2, name: 'Web制作・保守サービス', item: SITE + PATH }] },
  ];
  const hero = WORKS.find((w) => w.slug === 'araidashi-workshop');

  return `${head({ title: `LP制作・ホームページ制作・WordPress保守 | ${BRAND} Web Services`, description: `LP制作${priceText(lp)}・ホームページ制作${priceText(hp)}・Webサイト修正${priceText(fix)}・WordPress保守${priceText(wp)}（税込）。企画・デザイン・実装から公開後の更新まで、個人スタジオ TAKE CRAFT が一貫して担当します。相談・見積もりは無料。`, path: PATH, jsonld })}
<body>
${header()}
<main id="main">

<!-- 01 ファーストビュー -->
<section class="fv" aria-labelledby="fvTitle">
  <div class="wrap fv__grid">
    <div class="fv__copy">
      <p class="label" lang="en">Web Design / Development / Maintenance</p>
      <h1 id="fvTitle" class="fv__title"><span>Webサイトを、</span><span>つくる。</span><span class="fv__accent">その先まで。</span></h1>
      <p class="fv__sub">新規制作も、日々の更新も。<br class="br-pc">まとめて相談できるWebパートナー。</p>
      <p class="fv__desc">LP・ホームページ制作から、既存サイトの修正・運用・保守まで。企画から公開後の改善まで一貫してサポートします。</p>
      <div class="btn-row">${cta('無料で相談・見積もりを依頼する', { where: 'fv' })}<a class="btn btn--ghost" href="#works" data-track="cta_click" data-where="fv_works">制作実績を見る<span class="btn__icon">${ARROW}</span></a></div>
      <ul class="fv__prices" role="list" aria-label="料金の目安（税込）">
        <li><span>LP制作</span>${priceText(lp)}</li><li><span>ホームページ制作</span>${priceText(hp)}</li><li><span>Webサイト修正</span>${priceText(fix)}</li><li><span>WordPress保守</span>${priceText(wp)}</li>
      </ul>
      <p class="fv__note">料金はすべて税込の目安です。</p>
    </div>
    <figure class="fv__visual">
      ${device(hero.images.prefix, hero.url, hero.tone, false).replace(' aria-hidden="true"', '')}
      <figcaption>制作実績：The Araidashi 出張施工ワークショップLP（クライアントワーク）</figcaption>
    </figure>
  </div>
</section>

<!-- 02 お悩み別 -->
<section class="sec sec--white" aria-labelledby="needsTitle">
  <div class="wrap">
    <div class="sec__head sec__head--center"><p class="label">Your Needs</p><h2 id="needsTitle" class="sec__title">どのようなことでお困りですか？</h2></div>
    <ul class="needs" role="list">
      ${NEEDS.map((n, i) => `<li><a class="need" href="${n.href}" data-track="cta_click" data-where="needs_${n.service}"><span class="need__num">${pad(i + 1)}</span><span class="need__title">${n.title}</span><span class="need__sub">${n.sub}</span><span class="need__go">${ARROW}</span></a></li>`).join('')}
    </ul>
  </div>
</section>

<!-- 03 選ばれる理由 -->
<section class="sec" aria-labelledby="whyTitle">
  <div class="wrap">
    <div class="sec__head"><p class="label">Why TAKE CRAFT</p><h2 id="whyTitle" class="sec__title">制作だけでも。保守だけでも。<br class="br-pc">その両方でも。</h2><p class="sec__lead">TAKE CRAFTは、個人で運営するクリエイティブスタジオです。相談から公開後の更新まで、同じ担当者が向き合います。</p></div>
    <ol class="reasons" role="list">
      ${REASONS.map((r, i) => `<li class="reason reveal"><span class="reason__num">${pad(i + 1)}</span><h3 class="reason__title">${r.title}</h3><p class="reason__benefit">${r.benefit}</p></li>`).join('')}
    </ol>
  </div>
</section>

<!-- 04 サービス -->
<section class="sec sec--white" id="services" aria-labelledby="svcTitle">
  <div class="wrap">
    <div class="sec__head"><p class="label">Services</p><h2 id="svcTitle" class="sec__title">新しく作る。今あるサイトを直す。</h2><p class="sec__lead">新規制作と既存サイトの修正・改修を中心に、公開後の保守までお引き受けします。</p></div>
    <div class="pillar"><h3 class="pillar__title"><span>A</span>新しくつくりたい方へ</h3><p class="pillar__copy">はじめてのWeb制作も、企画から公開までまとめてお任せ。</p></div>
    <div class="svcs">${serviceBlock(lp, 0)}${serviceBlock(hp, 1)}</div>
    <div class="pillar"><h3 class="pillar__title"><span>B</span>今あるサイトを直したい方へ</h3><p class="pillar__copy">サイトを作り直さなくても、必要なところから改善できます。</p></div>
    <div class="svcs svcs--one">${serviceBlock(fix, 2)}</div>
    <div class="improve reveal" id="improve">
      <div><p class="label">Improve</p><h3 class="improve__title">${IMPROVE.title}</h3></div>
      <div><ul role="list">${IMPROVE.points.map((p) => `<li>${CHECK}${p}</li>`).join('')}</ul><p class="improve__note">${IMPROVE.note}</p>${cta('サイトの改善を相談する', { service: 'improve', track: 'service_cta_click', where: 'service_improve', ghost: true })}</div>
    </div>
    <div class="pillar"><h3 class="pillar__title"><span>C</span>更新・管理を任せたい方へ</h3><p class="pillar__copy">更新も修正も、気軽に相談できるWebパートナーを。</p></div>
    <div class="svcs svcs--one">${serviceBlock(wp, 3)}</div>
  </div>
</section>

<!-- 05 実績 -->
<section class="sec sec--dark" id="works" aria-labelledby="worksTitle">
  <div class="wrap">
    <div class="sec__head"><p class="label">Works</p><h2 id="worksTitle" class="sec__title">制作力は、実績で確かめてください。</h2><p class="sec__lead">クライアントワークと自主制作（コンセプト作品）は区別して表記しています。制作の背景や工夫は、ポートフォリオの詳細ページでご覧いただけます。</p></div>
    <div class="wcards">${workCards()}</div>
    <p class="works__more"><a class="btn btn--ghost" href="/works.html" data-track="portfolio_click" data-where="works_all">ポートフォリオで全${WORKS.length}件の実績を見る<span class="btn__icon">${ARROW}</span></a></p>
  </div>
</section>

<!-- 06 料金一覧 -->
<section class="sec" id="pricing" aria-labelledby="priceTitle" data-track-view="view_pricing">
  <div class="wrap">
    <div class="sec__head"><p class="label">Pricing</p><h2 id="priceTitle" class="sec__title">料金の目安を、わかりやすく。</h2></div>
    <div class="prices">
      ${SERVICES.map((s) => `<article class="price reveal${s.pillar === 'care' ? ' price--care' : ''}">
        <h3 class="price__name">${s.name}</h3>
        <p class="price__yen">${s.monthly ? '<small>月額</small>' : ''}${yen(s.price).replace('円', '')}<span>円${s.from ? '〜' : ''}</span></p>
        <p class="price__tax">税込 ／ ${s.period}</p>
        <details class="price__detail"><summary>${s.id === 'fix' ? '対応例' : '基本の対応範囲'}を見る</summary><ul role="list">${s.includes.map((t) => `<li>${t}</li>`).join('')}</ul><p>${s.extra}</p></details>
        <a class="arrow-link" href="#contact" data-service="${s.id}" data-track="service_cta_click" data-where="pricing_${s.id}">この内容で相談する ${ARROW}</a>
      </article>`).join('')}
    </div>
    <p class="note">掲載料金はすべて税込の目安です。制作内容や作業範囲、既存サイトの状況に応じて正式なお見積もりをご案内します。</p>
    <div class="center">${cta('自分の依頼内容で見積もりを相談する', { where: 'pricing' })}</div>
  </div>
</section>

<!-- 07 保守プラン -->
<section class="sec sec--white" id="plans" aria-labelledby="plansTitle">
  <div class="wrap">
    <div class="sec__head"><p class="label">WordPress Care Plans</p><h2 id="plansTitle" class="sec__title">公開後の管理も、安心して任せられる。</h2><p class="sec__lead">WordPressサイトの更新確認・表示確認・軽微な修正を、毎月まとめてお引き受けします。最低契約期間はありません。</p></div>
    <p class="plans__hint" aria-hidden="true">横にスワイプして3つのプランを比較できます</p>
    <div class="plans" tabindex="0" role="region" aria-label="WordPress保守プランの比較">
      ${PLANS.map((p) => `<article class="plan reveal${p.rec ? ' plan--rec' : ''}" aria-labelledby="plan-${p.id}">
        ${p.rec ? '<p class="plan__badge">おすすめ</p>' : ''}
        <h3 class="plan__name" id="plan-${p.id}">${p.name}</h3>
        <p class="plan__yen"><small>月額</small>${yen(p.price).replace('円', '')}<span>円</span></p><p class="plan__tax">税込</p>
        <dl class="plan__key"><div><dt>表示・動作確認</dt><dd>${p.check}</dd></div><div><dt>軽微な修正</dt><dd>${p.fixes}</dd></div></dl>
        <ul role="list">${p.items.map((t) => `<li>${CHECK}${t}</li>`).join('')}</ul>
        <a class="btn${p.rec ? '' : ' btn--ghost'}" href="#contact" data-service="wp" data-plan="${p.name}" data-track="service_cta_click" data-where="plan_${p.id}" aria-label="${p.name}プランについて相談する">${p.name}で相談する<span class="btn__icon">${ARROW}</span></a>
      </article>`).join('')}
    </div>
    <div class="terms"><h3 class="terms__title">共通の条件</h3><ul role="list">${PLAN_TERMS.map((t) => `<li>${t}</li>`).join('')}</ul></div>
  </div>
</section>

<!-- 08 追加オプション -->
<section class="sec sec--tight" aria-labelledby="optTitle">
  <div class="wrap">
    <div class="sec__head"><p class="label">Options</p><h2 id="optTitle" class="sec__title sec__title--sm">追加オプション</h2></div>
    <dl class="options">${OPTIONS.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
    <p class="note">すべて税込の目安です。</p>
  </div>
</section>

<!-- 09 流れ -->
<section class="sec sec--white" id="flow" aria-labelledby="flowTitle">
  <div class="wrap">
    <div class="sec__head"><p class="label">Flow</p><h2 id="flowTitle" class="sec__title">ご相談から公開まで、わかりやすく。</h2></div>
    <ol class="flow" role="list">${FLOW.map((f, i) => `<li class="reveal"><span class="flow__num">${pad(i + 1)}</span><h3>${f.t}</h3><p>${f.d}</p></li>`).join('')}</ol>
  </div>
</section>

<!-- 10 FAQ -->
<section class="sec" id="faq" aria-labelledby="faqTitle">
  <div class="wrap faq__grid">
    <div class="sec__head"><p class="label">FAQ</p><h2 id="faqTitle" class="sec__title">よくある質問</h2></div>
    <div class="faq">${FAQ.map((f) => `<details class="faq__item"><summary><span class="faq__q">Q</span>${f.q}</summary><p><span class="faq__a">A</span>${f.a}</p></details>`).join('')}</div>
  </div>
</section>

<!-- 11 制作者紹介 -->
<section class="sec sec--white" aria-labelledby="aboutTitle">
  <div class="wrap about">
    <img class="about__img" src="/images/profile.jpg" width="400" height="400" alt="カメラを構えるTAKE CRAFTの制作者" loading="lazy" decoding="async">
    <div>
      <p class="label">About</p>
      <h2 id="aboutTitle" class="sec__title">相談から実装まで、<br class="br-pc">一人の担当者が向き合います。</h2>
      <p class="sec__lead">TAKE CRAFTは個人で運営するクリエイティブスタジオです。ヒアリングから構成、デザイン、実装、公開後の改善まで、一貫して対応します。Webサイトだけでなく、映像やAIを活用した制作もお引き受けしています。</p>
      <a class="arrow-link" href="/#about" data-track="portfolio_click" data-where="about">制作の考え方・プロフィールを見る ${ARROW}</a>
    </div>
  </div>
</section>

<!-- 12 最終CTA -->
<section class="final" aria-labelledby="finalTitle">
  <div class="wrap final__in">
    <h2 id="finalTitle" class="final__title">Webサイトのこと、<br>まずはお気軽にご相談ください。</h2>
    <p class="final__desc">「新しく作りたい」「今あるサイトを直したい」「更新や管理を任せたい」。内容がまだ固まっていない段階でも、ご相談いただけます。</p>
    ${cta('無料相談・お見積もりはこちら', { where: 'final' })}
  </div>
</section>

<!-- 13 フォーム -->
<section class="sec sec--white" id="contact" aria-labelledby="contactTitle">
  <div class="wrap contact">
    <div class="contact__intro">
      <p class="label">Contact</p>
      <h2 id="contactTitle" class="sec__title">無料相談・お見積もり</h2>
      <p class="sec__lead">内容を確認のうえ、メールでご連絡します。相談・見積もりは無料です。</p>
      <ul class="contact__points" role="list"><li>${CHECK}内容が固まっていなくても大丈夫です</li><li>${CHECK}他社が制作したサイトのご相談も承ります</li><li>${CHECK}<span>映像・その他のご相談は<a href="/#contact">ポートフォリオのフォーム</a>からも受け付けています</span></li></ul>
    </div>
    <form class="form" id="wsForm" action="/api/contact" method="post" novalidate>
      <input type="hidden" name="t" value="">
      <div class="hp" aria-hidden="true"><label>ウェブサイト<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
      <fieldset class="field">
        <legend class="field__label">ご相談サービス <span class="req">必須</span></legend>
        <div class="radios">${INQUIRY.map((o, i) => `<label class="radio"><input type="radio" name="service" value="${o.value}"${i === 0 ? ' aria-describedby="err-service"' : ''} required><span>${o.label}</span></label>`).join('')}</div>
        <p class="field__error" id="err-service" role="alert"></p>
      </fieldset>
      <div class="field"><label class="field__label" for="f-name">お名前 <span class="req">必須</span></label><input class="input" id="f-name" name="name" type="text" autocomplete="name" required maxlength="80" aria-describedby="err-name"><p class="field__error" id="err-name" role="alert"></p></div>
      <div class="field"><label class="field__label" for="f-email">メールアドレス <span class="req">必須</span></label><input class="input" id="f-email" name="email" type="email" inputmode="email" autocomplete="email" required maxlength="200" aria-describedby="err-email"><p class="field__error" id="err-email" role="alert"></p></div>
      <div class="field"><label class="field__label" for="f-company">会社名・屋号 <span class="opt">任意</span></label><input class="input" id="f-company" name="company" type="text" autocomplete="organization" maxlength="120"></div>
      <div class="field"><label class="field__label" for="f-url">対象サイトURL <span class="opt">任意</span></label><input class="input" id="f-url" name="url" type="url" inputmode="url" placeholder="https://" maxlength="300" aria-describedby="hint-url err-url"><p class="field__hint" id="hint-url">修正・保守のご相談は、対象サイトのURLがあるとスムーズです。</p><p class="field__error" id="err-url" role="alert"></p></div>
      <div class="field-row">
        <div class="field"><label class="field__label" for="f-budget">ご予算 <span class="opt">任意</span></label><select class="input" id="f-budget" name="budget"><option value="">選択してください</option>${BUDGETS.map((b) => `<option>${b}</option>`).join('')}</select></div>
        <div class="field"><label class="field__label" for="f-deadline">ご希望納期 <span class="opt">任意</span></label><input class="input" id="f-deadline" name="deadline" type="text" maxlength="60" placeholder="例）12月中旬まで"></div>
      </div>
      <div class="field"><label class="field__label" for="f-message">ご相談内容 <span class="req">必須</span></label><textarea class="input" id="f-message" name="message" required maxlength="4000" aria-describedby="err-message" placeholder="例）お問い合わせフォームが送信できなくなったので直したい／新サービスのLPを作りたい　など"></textarea><p class="field__error" id="err-message" role="alert"></p></div>
      <div class="field"><label class="check"><input type="checkbox" name="agree" id="f-agree" value="on" aria-describedby="err-agree"><span><a href="/privacy.html" target="_blank" rel="noopener">プライバシーポリシー</a>に同意する <span class="req">必須</span></span></label><p class="field__error" id="err-agree" role="alert"></p></div>
      <div class="form__submit"><button class="btn btn--submit" type="submit">送信する<span class="btn__icon">${ARROW}</span></button></div>
      <div class="form-status" id="wsStatus" role="status" aria-live="polite"></div>
    </form>
  </div>
</section>
</main>
${footer()}
<div class="sticky-cta" id="stickyCta" hidden><a class="btn" href="#contact" data-track="cta_click" data-where="sticky">無料で相談する<span class="btn__icon">${ARROW}</span></a></div>
</body>
</html>
`;
}

function thanks() {
  return `${head({ title: `送信が完了しました | ${BRAND} Web Services`, description: 'お問い合わせを受け付けました。', path: PATH + 'thanks/', robots: 'noindex' })}
<body>
${header()}
<main id="main">
  <section class="sec thanks">
    <div class="wrap thanks__in">
      <p class="label">Thank you</p>
      <h1 class="sec__title">お問い合わせを受け付けました。</h1>
      <p class="sec__lead">内容を確認のうえ、メールでご連絡します。しばらく経っても連絡がない場合は、迷惑メールフォルダもご確認ください。</p>
      <div class="btn-row">${cta('Web制作・保守サービスへ戻る', { href: PATH, where: 'thanks', ghost: true })}<a class="btn btn--ghost" href="/works.html" data-track="portfolio_click" data-where="thanks">制作実績を見る<span class="btn__icon">${ARROW}</span></a></div>
    </div>
  </section>
</main>
${footer()}
</body>
</html>
`;
}

const out = (p, s) => { const f = join(ROOT, p); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, s); };
out('web-services/index.html', page());
out('web-services/thanks/index.html', thanks());
console.log(`built web-services (GA4: ${GA4_ID || 'off'})`);
