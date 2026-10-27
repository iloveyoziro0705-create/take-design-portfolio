/* TAKE CRAFT — site interactions (no dependencies) */
(function () {
  'use strict';
  var doc = document;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };

  /* ---------- 旧サイトのアンカー（#manifesto 等）を新セクションへ ---------- */
  var LEGACY_HASH = { manifesto: 'about', intro: 'about', service: 'fields', services: 'fields', method: 'approach', projects: 'works', behind: 'about', philosophy: 'about', hero: 'top' };
  var legacy = LEGACY_HASH[location.hash.slice(1)];
  if (legacy && doc.getElementById(legacy)) {
    history.replaceState(null, '', '#' + legacy);
    doc.getElementById(legacy).scrollIntoView();
  }

  /* ---------- Header: scrolled / on-dark / hide on scroll down ---------- */
  var header = $('#siteHeader');
  var darkSections = $$('[data-theme="dark"]');
  var lastY = window.scrollY;
  var ticking = false;
  function updateHeader() {
    ticking = false;
    if (!header) return;
    var y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 8);
    var probe = header.offsetHeight / 2;
    var onDark = darkSections.some(function (s) {
      var r = s.getBoundingClientRect();
      return r.top <= probe && r.bottom >= probe;
    });
    header.classList.toggle('on-dark', onDark);
    var menuOpen = header.classList.contains('menu-open');
    var focusInside = header.contains(doc.activeElement);
    header.classList.toggle('is-hidden', !menuOpen && !focusInside && y > 400 && y > lastY + 4);
    if (y < lastY - 4 || y <= 400) header.classList.remove('is-hidden');
    lastY = y;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(updateHeader); } }, { passive: true });
  window.addEventListener('resize', updateHeader);
  if (header) header.addEventListener('focusin', function () { header.classList.remove('is-hidden'); });
  updateHeader();

  /* ---------- Mobile drawer ---------- */
  var toggle = $('.menu-toggle');
  var drawer = $('#drawer');
  function setMenu(open) {
    if (!toggle || !drawer) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    header.classList.toggle('menu-open', open);
    doc.body.classList.toggle('is-locked', open);
    if (open) {
      drawer.hidden = false;
      requestAnimationFrame(function () {
        drawer.classList.add('is-open');
        var first = $('a', drawer); if (first) first.focus(); // visibility が解除されてからフォーカス
      });
    } else {
      drawer.classList.remove('is-open');
      setTimeout(function () { if (toggle.getAttribute('aria-expanded') === 'false') drawer.hidden = true; }, 360);
    }
  }
  if (toggle && drawer) {
    toggle.setAttribute('aria-label', 'メニューを開く');
    toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
    $$('a', drawer).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    doc.addEventListener('keydown', function (e) {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      if (e.key === 'Escape') { setMenu(false); toggle.focus(); return; }
      if (e.key === 'Tab') { // focus trap: toggle + drawer links
        var f = [toggle].concat($$('a, button', drawer));
        var i = f.indexOf(doc.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
      }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });
  }

  /* ---------- Active nav (top page sections) ---------- */
  var navLinks = $$('.gnav a[data-nav]');
  if (navLinks.length && 'IntersectionObserver' in window && location.pathname.replace(/index\.html$/, '') === '/') {
    var map = {};
    navLinks.forEach(function (a) { map[a.dataset.nav] = a; });
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = map[en.target.id]; if (!a) return;
        if (en.isIntersecting) { navLinks.forEach(function (l) { l.removeAttribute('aria-current'); }); a.setAttribute('aria-current', 'true'); }
        else if (a.getAttribute('aria-current') === 'true') a.removeAttribute('aria-current');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { var s = doc.getElementById(id); if (s) navIO.observe(s); });
  }

  /* ---------- Reveal (only marked elements, once) ---------- */
  var hero = $('.hero');
  if (hero) requestAnimationFrame(function () { hero.classList.add('is-in'); });
  var reveals = $$('.reveal, .clip');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Hero reel pause (WCAG 2.2.2) ---------- */
  var reel = $('#heroReel');
  var pauseBtn = reel && $('.reel-pause', reel);
  if (pauseBtn) {
    var pauseIcon = pauseBtn.innerHTML;
    pauseBtn.addEventListener('click', function () {
      var paused = reel.classList.toggle('is-paused');
      pauseBtn.setAttribute('aria-pressed', String(paused));
      pauseBtn.setAttribute('aria-label', paused ? '実績画面のスクロールを再開' : '実績画面のスクロールを一時停止');
      pauseBtn.innerHTML = paused ? '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2l10 6-10 6z" fill="currentColor"/></svg>' : pauseIcon;
    });
  }

  /* ---------- Works filter ---------- */
  var list = $('#worksList');
  if (list) {
    var buttons = $$('.filter__btn');
    var cards = $$('.work', list);
    var count = $('#filterCount');
    var empty = $('#worksEmpty');
    var valid = buttons.map(function (b) { return b.dataset.filter; });
    var apply = function (key, push) {
      if (valid.indexOf(key) < 0) key = 'all';
      var shown = 0;
      cards.forEach(function (c) {
        var on = key === 'all' || c.dataset.cats.split(' ').indexOf(key) > -1;
        c.hidden = !on;
        if (on) { c.classList.add('is-in'); shown++; }
      });
      // 絞り込み後も交互配置のリズムを保つ
      var visible = cards.filter(function (c) { return !c.hidden; });
      visible.forEach(function (c, i) { c.style.order = i; });
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.filter === key)); });
      if (count) count.textContent = shown + '件を表示';
      if (empty) empty.hidden = shown > 0;
      if (push) {
        var url = new URL(location.href);
        if (key === list.dataset.default) url.searchParams.delete('category'); else url.searchParams.set('category', key);
        history.replaceState(null, '', url);
      }
    };
    buttons.forEach(function (b) { b.addEventListener('click', function () { apply(b.dataset.filter, true); }); });
    var initial = new URL(location.href).searchParams.get('category') || list.dataset.default || 'all';
    apply(initial, false);
  }

  /* ---------- YouTube lite embed ---------- */
  $$('[data-yt]').forEach(function (box) {
    var btn = $('button', box);
    if (!btn) return;
    btn.addEventListener('click', function () {
      var f = doc.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(box.dataset.yt) + '?autoplay=1&rel=0';
      f.title = btn.getAttribute('aria-label').replace('を再生（YouTube）', '');
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen = true;
      box.innerHTML = '';
      box.appendChild(f);
      f.focus();
    });
  });

  /* ---------- Contact form ----------
   * data-endpoint が空なら mailto 方式。将来フォームAPIを用意したら
   * data-endpoint に URL を入れるだけで fetch(POST, JSON) 送信に切り替わる。 */
  var form = $('#contactForm');
  if (form) {
    var status = $('#formStatus');
    var submit = $('button[type="submit"]', form);
    var submitHTML = submit.innerHTML;
    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var setErr = function (id, msg, input) {
      var el = doc.getElementById('err-' + id);
      if (el) el.textContent = msg || '';
      if (input) input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    };
    var validate = function () {
      var errs = [];
      var types = $$('input[name="type"]:checked', form);
      setErr('type', types.length ? '' : 'ご相談の種類を1つ以上選択してください。');
      if (!types.length) errs.push($('input[name="type"]', form));
      var name = form.elements.name, email = form.elements.email, msg = form.elements.message, agree = form.elements.agree;
      var nv = name.value.trim(), ev = email.value.trim(), mv = msg.value.trim();
      setErr('name', nv ? '' : 'お名前を入力してください。', name); if (!nv) errs.push(name);
      var eMsg = !ev ? 'メールアドレスを入力してください。' : (!EMAIL_RE.test(ev) ? 'メールアドレスの形式をご確認ください（例：name@example.com）。' : '');
      setErr('email', eMsg, email); if (eMsg) errs.push(email);
      var mMsg = !mv ? 'ご相談内容を入力してください。' : (mv.length < 10 ? 'ご相談内容をもう少し詳しくご記入ください（10文字以上）。' : '');
      setErr('message', mMsg, msg); if (mMsg) errs.push(msg);
      setErr('agree', agree.checked ? '' : 'プライバシーポリシーへの同意が必要です。'); if (!agree.checked) errs.push(agree);
      return errs;
    };
    var compose = function () {
      var types = $$('input[name="type"]:checked', form).map(function (i) { return i.value; });
      var e = form.elements;
      var subject = '【TAKE CRAFT】ご相談：' + types.join('・');
      var body = [
        'ご相談の種類：' + types.join('、'),
        'お名前：' + e.name.value.trim(),
        'メールアドレス：' + e.email.value.trim(),
        '会社名・屋号：' + (e.company.value.trim() || '（未記入）'),
        '',
        '■ ご相談内容',
        e.message.value.trim(),
      ].join('\n');
      return { subject: subject, body: body, types: types };
    };
    var show = function (state, html) { status.dataset.state = state; status.innerHTML = html; };
    var copyFallback = function (text) {
      var btn = $('[data-copy]', status);
      if (!btn) return;
      btn.addEventListener('click', function () {
        (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
          .then(function () { btn.textContent = 'コピーしました'; })
          .catch(function () { btn.textContent = 'コピーできませんでした。お手数ですが手動でご入力ください'; });
      });
    };
    ['name', 'email', 'message'].forEach(function (n) {
      form.elements[n].addEventListener('blur', function () { if (form.dataset.tried) validate(); });
    });
    form.addEventListener('change', function () { if (form.dataset.tried) validate(); });

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      form.dataset.tried = '1';
      if (form.elements.website && form.elements.website.value) return; // honeypot
      var errs = validate();
      if (errs.length) {
        show('error', '<p><strong>入力内容をご確認ください。</strong>' + errs.length + '件の項目に不足があります。</p>');
        errs[0].focus();
        return;
      }
      var m = compose();
      var to = form.dataset.mailto;
      submit.disabled = true;
      submit.innerHTML = '準備しています…';
      show('pending', '<p>送信の準備をしています…</p>');

      var done = function (ok, text) {
        submit.disabled = false;
        submit.innerHTML = submitHTML;
        if (ok) {
          show('success', text);
        } else {
          show('error', '<p><strong>送信できませんでした。</strong>お手数ですが、下のボタンで内容をコピーし、<a href="mailto:' + to + '">' + to + '</a> 宛にメールでお送りください。</p><button class="btn btn--ghost" type="button" data-copy>入力内容をコピーする</button>');
          copyFallback(m.subject + '\n\n' + m.body);
        }
      };

      var endpoint = form.dataset.endpoint;
      if (endpoint) {
        fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ subject: m.subject, body: m.body }) })
          .then(function (r) { done(r.ok, '<p><strong>送信が完了しました。</strong>内容を確認のうえ、ご入力のメールアドレス宛にご連絡します。</p>'); })
          .catch(function () { done(false); });
        return;
      }

      var href = 'mailto:' + to + '?subject=' + encodeURIComponent(m.subject) + '&body=' + encodeURIComponent(m.body);
      setTimeout(function () {
        window.location.href = href;
        done(true,
          '<p><strong>メールアプリを起動しました。</strong>内容をご確認のうえ、メールアプリから送信してください。送信をもってお問い合わせ完了となります。</p>' +
          '<p>メールアプリが開かない場合は、内容をコピーして <a href="mailto:' + to + '">' + to + '</a> 宛にお送りください。</p>' +
          '<button class="btn btn--ghost" type="button" data-copy>入力内容をコピーする</button>');
        copyFallback(m.subject + '\n\n' + m.body);
      }, 250);
    });
  }
})();
