/* TAKE CRAFT Web Services — interactions（依存ライブラリなし） */
(function () {
  'use strict';
  var doc = document;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- GA4（測定IDが設定されているときだけ gtag が存在する） ---------- */
  function track(name, params) { if (typeof window.gtag === 'function') window.gtag('event', name, params || {}); }
  doc.addEventListener('click', function (e) {
    var a = e.target.closest('[data-track]');
    if (a) track(a.dataset.track, { location: a.dataset.where || '', service: a.dataset.service || '' });
  });
  var viewed = {};
  if ('IntersectionObserver' in window) {
    var vio = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { var n = en.target.dataset.trackView; if (en.isIntersecting && !viewed[n]) { viewed[n] = 1; track(n); } });
    }, { threshold: 0.25 });
    $$('[data-track-view]').forEach(function (el) { vio.observe(el); });
  }

  /* ---------- reveal ---------- */
  var rv = $$('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (ents) { ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }); }, { rootMargin: '0px 0px -6% 0px' });
    rv.forEach(function (el) { io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('is-in'); });

  /* ---------- サービス別CTA → フォームの「ご相談サービス」を自動選択 ---------- */
  var form = $('#wsForm');
  function preselect(service, plan) {
    if (!form || !service) return;
    var r = form.querySelector('input[name="service"][value="' + service + '"]');
    if (r) { r.checked = true; r.dispatchEvent(new Event('change', { bubbles: true })); }
    var msg = form.elements.message;
    if (plan && msg && !msg.value) msg.value = 'WordPress保守「' + plan + '」プランについて相談したいです。\n';
  }
  doc.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-service]');
    if (a) preselect(a.dataset.service, a.dataset.plan);
  });

  /* ---------- スマートフォンの固定CTA：FVを過ぎたら表示、フォーム表示中は隠す ---------- */
  var sticky = $('#stickyCta');
  var fv = $('.fv'), contact = $('#contact');
  if (sticky && fv && contact && 'IntersectionObserver' in window) {
    sticky.hidden = false;
    var pastFv = false, atForm = false;
    var upd = function () { sticky.classList.toggle('is-shown', pastFv && !atForm); sticky.setAttribute('aria-hidden', String(!(pastFv && !atForm))); sticky.querySelector('a').tabIndex = pastFv && !atForm ? 0 : -1; };
    new IntersectionObserver(function (e) { pastFv = !e[0].isIntersecting; upd(); }).observe(fv);
    new IntersectionObserver(function (e) { atForm = e[0].isIntersecting; upd(); }, { rootMargin: '0px 0px -20% 0px' }).observe(contact);
  }

  /* ---------- お問い合わせフォーム ---------- */
  if (!form) return;
  form.elements.t.value = String(Date.now()); // 表示時刻（サーバー側で送信までの最短時間を確認）
  var status = $('#wsStatus');
  var submit = form.querySelector('button[type="submit"]');
  var submitHTML = submit.innerHTML;
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var sending = false;

  function setErr(id, msg) {
    var el = doc.getElementById('err-' + id); if (el) el.textContent = msg || '';
    var input = form.elements[id];
    if (input && input.setAttribute) input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }
  function validate() {
    var e = {}, f = form.elements;
    if (!form.querySelector('input[name="service"]:checked')) e.service = 'ご相談サービスを選択してください。';
    if (!f.name.value.trim()) e.name = 'お名前を入力してください。';
    var em = f.email.value.trim();
    if (!em) e.email = 'メールアドレスを入力してください。'; else if (!EMAIL_RE.test(em)) e.email = 'メールアドレスの形式をご確認ください（例：name@example.com）。';
    var u = f.url.value.trim();
    if (u && !/^https?:\/\/\S+\.\S+/.test(u)) e.url = 'URLは https:// から始まる形式で入力してください。';
    var m = f.message.value.trim();
    if (!m) e.message = 'ご相談内容を入力してください。'; else if (m.length < 10) e.message = 'ご相談内容をもう少し詳しくご記入ください（10文字以上）。';
    if (!f.agree.checked) e.agree = 'プライバシーポリシーへの同意が必要です。';
    ['service', 'name', 'email', 'url', 'message', 'agree'].forEach(function (k) { setErr(k, e[k]); });
    return e;
  }
  function show(state, html) { status.dataset.state = state; status.innerHTML = html; }
  form.addEventListener('change', function () { if (form.dataset.tried) validate(); });
  ['name', 'email', 'url', 'message'].forEach(function (n) { form.elements[n].addEventListener('blur', function () { if (form.dataset.tried) validate(); }); });

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (sending) return; // 二重送信防止
    form.dataset.tried = '1';
    var errs = validate(), keys = Object.keys(errs);
    if (keys.length) {
      show('error', '<p><strong>入力内容をご確認ください。</strong>' + keys.length + '件の項目に不足があります。</p>');
      var first = keys[0] === 'service' ? form.querySelector('input[name="service"]') : form.elements[keys[0]];
      if (first) first.focus();
      return;
    }
    var f = form.elements, svc = form.querySelector('input[name="service"]:checked').value;
    var data = { service: svc, name: f.name.value, email: f.email.value, company: f.company.value, url: f.url.value, budget: f.budget.value, deadline: f.deadline.value, message: f.message.value, agree: f.agree.checked, website: f.website.value, t: f.t.value };
    sending = true; submit.disabled = true; submit.innerHTML = '送信しています…';
    show('pending', '<p>送信しています。画面を閉じずにお待ちください。</p>');
    fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) { return r.json().catch(function () { return { ok: false, error: 'bad_response' }; }).then(function (j) { j.status = r.status; return j; }); })
      .then(function (j) {
        if (j.ok) {
          track('generate_lead', { service: svc });
          try { sessionStorage.setItem('ws_sent', svc); } catch (e) {}
          window.location.href = '/web-services/thanks/';
          return;
        }
        if (j.error === 'validation' && j.fields) { Object.keys(j.fields).forEach(function (k) { setErr(k, j.fields[k]); }); throw new Error('validation'); }
        throw new Error(j.error || 'failed');
      })
      .catch(function (err) {
        sending = false; submit.disabled = false; submit.innerHTML = submitHTML;
        var msg = err.message === 'validation' ? '入力内容をご確認ください。' : '送信できませんでした。時間をおいてもう一度お試しください。解決しない場合は、お手数ですが <a href="/#contact">ポートフォリオのお問い合わせ</a> からご連絡ください。';
        show('error', '<p><strong>' + msg + '</strong></p>');
      });
  });
})();
