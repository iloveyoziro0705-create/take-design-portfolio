/**
 * 営業用LP（https://takecraft-web.vercel.app/）お問い合わせ送信 API — Vercel Functions（Node.js）
 *
 * POST /api/contact
 *   - JSON（JavaScript から fetch）→ { ok: true } / { ok: false, error, fields? }
 *   - フォームの通常送信（JavaScript 無効時）→ 成功で /thanks/ へ 303、失敗でエラーページ
 *
 * 環境変数（Vercel の Project Settings → Environment Variables。コードに直接書かない）
 *   RESEND_API_KEY      必須  Resend の API キー
 *   CONTACT_TO          必須  通知メールの宛先
 *   CONTACT_FROM        任意  送信元（既定: "TAKE CRAFT <onboarding@resend.dev>"。独自ドメイン認証後に変更）
 *   AUTO_REPLY          任意  "on" で問い合わせ者へ自動返信（CONTACT_FROM が認証済み独自ドメインのときのみ有効にする）
 *   ALLOWED_ORIGINS     任意  カンマ区切り。既定は https://takecraft-web.vercel.app ＋このデプロイのURL
 *
 * スパム対策：ハニーポット項目 / 表示から送信までの最短時間 / Origin 確認 / サーバー側の入力検証 / 本文長の上限
 */
'use strict';

const SERVICES = { lp: 'LP制作', hp: 'ホームページ制作', fix: 'Webサイト修正・改修', wp: 'WordPress運用・保守', improve: 'Webサイト改善', other: 'その他' };
const BUDGETS = ['10万円未満', '10〜30万円', '30〜50万円', '50万円以上', '未定・相談したい'];
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;
const MIN_ELAPSED_MS = 3000;
const MAX_ELAPSED_MS = 1000 * 60 * 60 * 24;

const clean = (v, max) => String(v ?? '').replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);
const oneLine = (v, max) => clean(v, max).replace(/\n+/g, ' ');

function validate(body) {
  const d = {
    name: oneLine(body.name, 80),
    email: oneLine(body.email, 200),
    company: oneLine(body.company, 120),
    service: oneLine(body.service, 20),
    url: oneLine(body.url, 300),
    budget: oneLine(body.budget, 40),
    deadline: oneLine(body.deadline, 60),
    message: clean(body.message, 4000),
    agree: body.agree === true || body.agree === 'on' || body.agree === 'true',
  };
  const errors = {};
  if (!d.name) errors.name = 'お名前を入力してください。';
  if (!d.email) errors.email = 'メールアドレスを入力してください。';
  else if (!EMAIL_RE.test(d.email)) errors.email = 'メールアドレスの形式をご確認ください。';
  if (!SERVICES[d.service]) errors.service = 'ご相談サービスを選択してください。';
  if (d.url && !/^https?:\/\/[^\s]+\.[^\s]+/.test(d.url)) errors.url = 'URLは https:// から始まる形式で入力してください。';
  if (d.budget && !BUDGETS.includes(d.budget)) errors.budget = 'ご予算の選択肢をご確認ください。';
  if (d.message.length < 10) errors.message = 'ご相談内容を10文字以上でご記入ください。';
  if (!d.agree) errors.agree = 'プライバシーポリシーへの同意が必要です。';
  return { d, errors };
}

function allowedOrigin(req) {
  const origin = req.headers.origin || '';
  if (!origin) return true; // 一部ブラウザ・通常のフォーム送信では付かない場合がある（他の対策で補う）
  const list = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  list.push('https://takecraft-web.vercel.app');
  if (process.env.VERCEL_URL) list.push(`https://${process.env.VERCEL_URL}`);
  if (process.env.VERCEL_BRANCH_URL) list.push(`https://${process.env.VERCEL_BRANCH_URL}`);
  if (process.env.VERCEL_ENV !== 'production') list.push('http://localhost:3000', 'http://127.0.0.1:4173', 'http://127.0.0.1:4180', 'http://127.0.0.1:4181');
  return list.includes(origin);
}

async function sendMail(payload) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`resend ${res.status}`);
}

function readBody(req) {
  // Vercel は JSON / urlencoded を req.body に解析済み。ローカル検証用に文字列にも対応
  let b = req.body;
  if (typeof b === 'string') {
    try { b = JSON.parse(b); } catch { b = Object.fromEntries(new URLSearchParams(b)); }
  }
  return b && typeof b === 'object' ? b : {};
}

module.exports = async function handler(req, res) {
  const wantsHtml = !String(req.headers['content-type'] || '').includes('application/json');
  const reply = (status, json) => {
    if (wantsHtml) {
      if (json.ok) { res.statusCode = 303; res.setHeader('Location', '/thanks/'); return res.end(); }
      res.statusCode = status; res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.end(`<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><title>送信できませんでした</title><p>送信できませんでした。お手数ですが、前のページに戻って入力内容をご確認ください。</p><p><a href="/#contact">お問い合わせフォームへ戻る</a></p>`);
    }
    res.statusCode = status; res.setHeader('Content-Type', 'application/json; charset=utf-8'); res.setHeader('Cache-Control', 'no-store');
    return res.end(JSON.stringify(json));
  };

  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return reply(405, { ok: false, error: 'method_not_allowed' }); }
  if (!allowedOrigin(req)) return reply(403, { ok: false, error: 'forbidden' });

  const body = readBody(req);
  // ハニーポット：人には見えない項目に値が入っていたら、成功を装って破棄（ボットに判定材料を与えない）
  if (clean(body.website, 200)) return reply(200, { ok: true });
  const elapsed = Date.now() - Number(body.t || 0);
  if (!(elapsed >= MIN_ELAPSED_MS && elapsed <= MAX_ELAPSED_MS)) return reply(400, { ok: false, error: 'invalid_timing' });

  const { d, errors } = validate(body);
  if (Object.keys(errors).length) return reply(422, { ok: false, error: 'validation', fields: errors });

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO) return reply(503, { ok: false, error: 'not_configured' });

  const service = SERVICES[d.service];
  const lines = [
    `ご相談サービス：${service}`,
    `お名前：${d.name}`,
    `メールアドレス：${d.email}`,
    `会社名・屋号：${d.company || '（未記入）'}`,
    `対象サイトURL：${d.url || '（未記入）'}`,
    `ご予算：${d.budget || '（未記入）'}`,
    `ご希望納期：${d.deadline || '（未記入）'}`,
    '',
    '■ ご相談内容',
    d.message,
    '',
    '---',
    `送信元：takecraft-web.vercel.app お問い合わせフォーム（${new Date().toISOString()}）`,
  ];
  const from = process.env.CONTACT_FROM || 'TAKE CRAFT <onboarding@resend.dev>';
  try {
    await sendMail({ from, to: process.env.CONTACT_TO.split(',').map((s) => s.trim()), reply_to: d.email, subject: `【TAKE CRAFT Web制作】${service}のご相談：${d.name}様`, text: lines.join('\n') });
    if (process.env.AUTO_REPLY === 'on') {
      await sendMail({
        from, to: [d.email], subject: '【TAKE CRAFT】お問い合わせありがとうございます',
        text: [`${d.name} 様`, '', 'TAKE CRAFT へのお問い合わせありがとうございます。', '以下の内容で受け付けました。内容を確認のうえ、メールでご連絡します。', '', ...lines.slice(0, 10), '', 'TAKE CRAFT', 'https://takecraft-web.vercel.app/'].join('\n'),
      }).catch(() => {}); // 自動返信の失敗で受付自体を失敗にしない
    }
  } catch (e) {
    console.error('contact send failed', e.message);
    return reply(502, { ok: false, error: 'send_failed' });
  }
  return reply(200, { ok: true });
};

module.exports.validate = validate; // テスト用
