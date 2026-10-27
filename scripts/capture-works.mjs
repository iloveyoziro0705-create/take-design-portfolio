#!/usr/bin/env node
/**
 * 実績LPのスクリーンショットを公開ページから撮影する（Playwright / Chromium）
 *
 * 使い方:  node scripts/capture-works.mjs            … data/works.mjs の LP 実績すべて
 *          node scripts/capture-works.mjs <slug> ... … 指定した実績のみ
 *
 * 撮影条件（全実績共通）
 *   Desktop: 1440×900 / deviceScaleFactor 2 / ファーストビュー＋ページ中盤・後半
 *   Mobile : 390×796  / deviceScaleFactor 3 / isMobile / ファーストビュー＋中盤・後半
 *            （縦796px＝スマホフレームの画面領域からステータスバーを除いた比率 1445:708 に一致。合成時に拡大・変形・切り取りが起きない）
 *   networkidle → document.fonts.ready → 全 <img> デコード完了 → 待機 の順に描画完了を待つ
 *
 * 出力（assets/works/）
 *   <slug>-desktop-<n>-{640,960,1280,1920}.webp   … n=1 は全サイズ、2/3 は 960/1920
 *   <slug>-mobile-<n>.webp (780w)                 … フレーム合成の素材（compose-devices.mjs が使う）
 */
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { WORKS } from '../data/works.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'assets/works');
const BASE = 'https://take-design-portfolio.vercel.app/';
const args = process.argv.slice(2);
const kinds = args.includes('--mobile-only') ? ['mobile'] : args.includes('--desktop-only') ? ['desktop'] : ['desktop', 'mobile'];
const only = args.filter((a) => !a.startsWith('--'));
const MOBILE_VIEWPORT = { width: 390, height: 796 };
const targets = WORKS.filter((w) => w.shots && (!only.length || only.includes(w.slug)));
mkdirSync(OUT, { recursive: true });

const pageUrl = (w) => (w.captureUrl || (w.url.startsWith('./') ? BASE + w.url.slice(2) : w.url));

async function toWebp(page, png, widths, q = 0.84) {
  return page.evaluate(async ([src, widths, q]) => {
    const img = new Image(); img.src = src; await img.decode();
    return widths.map((w) => {
      const h = Math.round(img.height * w / img.width);
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      const x = c.getContext('2d'); x.imageSmoothingQuality = 'high'; x.drawImage(img, 0, 0, w, h);
      return c.toDataURL('image/webp', q);
    });
  }, ['data:image/png;base64,' + png.toString('base64'), widths, q]);
}

async function ready(page) {
  await page.evaluate(() => document.fonts && document.fonts.ready);
  // 画面内の画像の読み込み完了を待つ（未読み込みの lazy 画像で止まらないよう 8 秒で打ち切る）
  await page.evaluate(() => Promise.race([
    Promise.all([...document.images].filter((i) => { const r = i.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; })
      .map((i) => (i.complete ? 0 : new Promise((res) => { i.addEventListener('load', res, { once: true }); i.addEventListener('error', res, { once: true }); })))),
    new Promise((res) => setTimeout(res, 8000)),
  ]));
  await page.waitForTimeout(1800);
}

// スクロール連動の表示（reveal 等）を自然に発火させるため、目的位置まで段階的にスクロールする
async function scrollTo(page, y) {
  await page.evaluate(async (y) => {
    const step = Math.max(200, innerHeight / 3);
    for (let s = scrollY; s < y; s += step) { window.scrollTo({ top: s, behavior: 'instant' }); await new Promise((r) => setTimeout(r, 90)); }
    window.scrollTo({ top: y, behavior: 'instant' });
  }, y);
  await ready(page);
}

async function shoot(browser, w, kind) {
  const desktop = kind === 'desktop';
  const ctx = await browser.newContext(desktop
    ? { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 }
    : { viewport: MOBILE_VIEWPORT, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await page.goto(pageUrl(w), { waitUntil: 'networkidle', timeout: 90000 }).catch((e) => console.warn(w.slug, kind, 'goto:', e.message.split('\n')[0]));
  await ready(page);
  const H = await page.evaluate(() => document.documentElement.scrollHeight);
  const sw = await page.evaluate(() => document.documentElement.scrollWidth);
  if (sw > (desktop ? 1440 : 390)) console.warn(`  ! ${w.slug} ${kind}: 横スクロールあり (${sw}px)`);
  const positions = [0, ...(w.shots[kind] || [0.28, 0.55]).map((r) => Math.round(H * r))];
  const conv = await ctx.newPage();
  for (let n = 1; n <= positions.length; n++) {
    if (n > 1) await scrollTo(page, positions[n - 1]);
    const png = await page.screenshot();
    if (desktop) {
      const widths = n === 1 ? [640, 960, 1280, 1920] : [960, 1920];
      const data = await toWebp(conv, png, widths);
      widths.forEach((px, i) => writeFileSync(join(OUT, `${w.images.prefix}-desktop-${n}-${px}.webp`), Buffer.from(data[i].split(',')[1], 'base64')));
    } else {
      const [data] = await toWebp(conv, png, [780], 0.86);
      writeFileSync(join(OUT, `${w.images.prefix}-mobile-${n}.webp`), Buffer.from(data.split(',')[1], 'base64'));
    }
  }
  await ctx.close();
}

const browser = await chromium.launch();
for (const w of targets) {
  for (const k of kinds) await shoot(browser, w, k);
  console.log('captured', w.slug);
}
await browser.close();
