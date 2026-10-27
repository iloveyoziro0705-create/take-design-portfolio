#!/usr/bin/env node
/**
 * スマートフォンのフレーム素材に、実績LPのモバイル用スクリーンショットを合成する
 *
 * 使い方:  node scripts/compose-devices.mjs [slug ...]
 * 入力:    _private/device-frames/iphone-15-pro.png（.gitignore 済み・非公開。出典は同フォルダ SOURCE.txt）
 *          assets/works/<slug>-mobile-<n>.webp（capture-works.mjs が出力）
 * 出力:    assets/works/<slug>-phone-<n>.webp（782w, 背景透過） と <slug>-phone-1-420.webp（カード用）
 *
 * フレーム素材の規約上、素材単体は公開できないため「合成済み画像」だけを公開する。
 * 画面領域はフレームの透明部分を中心から塗りつぶして自動検出するので、
 * 別のフレームに差し替えても FRAME を変えるだけで動く。
 */
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FRAME = join(ROOT, '_private/device-frames/iphone-15-pro.png');
const WORKS_DIR = join(ROOT, 'assets/works');
const SCALE = 2;              // フレームを2倍で描画（画面側はRetina解像度の撮影画像なので鮮明）
const STATUS_BAR = 0.062;     // 画面高さに対するステータスバー（ダイナミックアイランド周辺）の割合

if (!existsSync(FRAME)) {
  console.error(`フレーム素材がありません: ${FRAME}\n_private/device-frames/SOURCE.txt の出典から取得してください。`);
  process.exit(1);
}
const only = process.argv.slice(2);
const sources = readdirSync(WORKS_DIR).filter((f) => /-mobile-\d+\.webp$/.test(f))
  .filter((f) => !only.length || only.some((s) => f.startsWith(s + '-mobile-')));

const browser = await chromium.launch();
const page = await browser.newPage();
const frameSrc = 'data:image/png;base64,' + readFileSync(FRAME).toString('base64');

for (const file of sources) {
  const shot = 'data:image/webp;base64,' + readFileSync(join(WORKS_DIR, file)).toString('base64');
  const out = await page.evaluate(async ([frameSrc, shot, S, statusRatio]) => {
    const load = async (src) => { const i = new Image(); i.src = src; await i.decode(); return i; };
    const frame = await load(frameSrc), screen = await load(shot);
    const W = frame.width, H = frame.height;

    // 1) フレームの透明な画面領域を中心から flood fill で検出
    const fc = document.createElement('canvas'); fc.width = W; fc.height = H;
    const fx = fc.getContext('2d'); fx.drawImage(frame, 0, 0);
    const a = fx.getImageData(0, 0, W, H).data;
    const inside = new Uint8Array(W * H);
    const stack = [((H / 2) | 0) * W + ((W / 2) | 0)];
    while (stack.length) {
      const p = stack.pop();
      if (inside[p] || a[p * 4 + 3] > 8) continue;
      inside[p] = 1;
      const x = p % W, y = (p / W) | 0;
      if (x > 0) stack.push(p - 1); if (x < W - 1) stack.push(p + 1);
      if (y > 0) stack.push(p - W); if (y < H - 1) stack.push(p + W);
    }
    // 2px 膨張させ、ベゼルとの境目に隙間が出ないようにする（膨張分はフレームの下に隠れる）
    const grown = inside.slice();
    for (let k = 0; k < 2; k++) {
      const src = grown.slice();
      for (let p = 0; p < W * H; p++) if (!src[p]) {
        const x = p % W;
        if ((x > 0 && src[p - 1]) || (x < W - 1 && src[p + 1]) || src[p - W] || src[p + W]) grown[p] = 1;
      }
    }
    let minX = W, minY = H, maxX = 0, maxY = 0;
    for (let p = 0; p < W * H; p++) if (inside[p]) { const x = p % W, y = (p / W) | 0; if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; }

    const mask = document.createElement('canvas'); mask.width = W; mask.height = H;
    const mx = mask.getContext('2d'); const md = mx.createImageData(W, H);
    for (let p = 0; p < W * H; p++) if (grown[p]) { md.data[p * 4 + 3] = 255; }
    mx.putImageData(md, 0, 0);

    // 2) 画面レイヤー：ステータスバー（スクショ最上部の色）＋スクリーンショット（幅基準・比率維持）
    const c = document.createElement('canvas'); c.width = W * S; c.height = H * S;
    const x = c.getContext('2d'); x.imageSmoothingQuality = 'high';
    const sx = minX * S, sy = minY * S, sw = (maxX - minX + 1) * S, sh = (maxY - minY + 1) * S;
    const probe = document.createElement('canvas'); probe.width = 1; probe.height = 1;
    const px = probe.getContext('2d'); px.drawImage(screen, 0, 0, screen.width, 4, 0, 0, 1, 1);
    const [r, g, b] = px.getImageData(0, 0, 1, 1).data;
    x.fillStyle = `rgb(${r},${g},${b})`; x.fillRect(sx - 4, sy - 4, sw + 8, sh + 8);
    const bar = Math.round(sh * statusRatio);
    const dh = Math.round(screen.height * sw / screen.width); // 幅に合わせて縦横比を維持（390×796 撮影なら sh - bar とほぼ一致）
    if (Math.abs(dh - (sh - bar)) > 6) console.warn('screen ratio mismatch', dh, sh - bar);
    x.drawImage(screen, sx, sy + bar, sw, dh);
    // 3) 画面領域でマスク → フレームを最前面に
    x.globalCompositeOperation = 'destination-in'; x.drawImage(mask, 0, 0, W * S, H * S);
    x.globalCompositeOperation = 'source-over'; x.drawImage(frame, 0, 0, W * S, H * S);

    const small = document.createElement('canvas'); small.width = 420; small.height = Math.round(c.height * 420 / c.width);
    const y = small.getContext('2d'); y.imageSmoothingQuality = 'high'; y.drawImage(c, 0, 0, small.width, small.height);
    return { big: c.toDataURL('image/webp', 0.88), small: small.toDataURL('image/webp', 0.86), size: [c.width, c.height], screen: [sx, sy, sw, sh] };
  }, [frameSrc, shot, SCALE, STATUS_BAR]);

  const base = file.replace('-mobile-', '-phone-').replace('.webp', '');
  writeFileSync(join(WORKS_DIR, base + '.webp'), Buffer.from(out.big.split(',')[1], 'base64'));
  if (base.endsWith('-phone-1')) writeFileSync(join(WORKS_DIR, base + '-420.webp'), Buffer.from(out.small.split(',')[1], 'base64'));
  console.log('composed', base, out.size.join('x'), 'screen', out.screen.join(','));
}
await browser.close();
