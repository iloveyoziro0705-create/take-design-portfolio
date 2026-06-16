/* ============================================================
   LearnCore — script.js
   ============================================================ */

/* JS が動いていることを html 要素に伝える（スクロールリベール有効化） */
document.documentElement.classList.add('js');

/* ── Scroll Reveal ───────────────────────────────────────────── */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.sr').forEach(el => revObs.observe(el));

/* ── Header scroll shadow ────────────────────────────────────── */
const hd = document.querySelector('.hd');
window.addEventListener('scroll', () => {
  hd.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Fixed CTA show/hide ─────────────────────────────────────── */
const fixedCta = document.querySelector('.fixed-cta');
window.addEventListener('scroll', () => {
  fixedCta.classList.toggle('show', window.scrollY > 400);
}, { passive: true });

/* ── Count-up Animation ─────────────────────────────────────── */
function runCounter(el) {
  const target = parseInt(el.dataset.target || '0');
  const suffix = el.dataset.suffix || '';
  const dur = 1800;
  const fps = 60;
  const steps = (dur / 1000) * fps;
  let cur = 0;

  const tick = () => {
    cur++;
    const val = Math.min(Math.round((cur / steps) * target), target);
    const formatted = val >= 1000 ? val.toLocaleString('ja-JP') : String(val);
    el.innerHTML = formatted + '<sup>' + suffix + '</sup>';
    if (cur < steps) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('.stat-num[data-target]').forEach(runCounter);
    statObs.unobserve(e.target);
  });
}, { threshold: 0.5 });
const statsEl = document.querySelector('.stats');
if (statsEl) statObs.observe(statsEl);

/* ── FAQ Accordion ───────────────────────────────────────────── */
document.querySelectorAll('.fq').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.fi.open').forEach(f => f.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

/* ── Client Dashboard ────────────────────────────────────────── */
const CD = {
  mfg: {
    badge: '製造業', name: 'A社 — DXリテラシー研修プログラム',
    users: 1200, usersUnit: '名', usersSub: '全社員対象',
    rate: 81, rateSub: '前年比 +39pt',
    comp: 68, compSub: '目標 70%',
    hours: 2.8, hoursSub: '月間ペース',
    bars: [280, 340, 410, 520, 480, 610],
    courses: [['DXリテラシー基礎', 92], ['IoT・AI入門', 78], ['データ活用実践', 64]],
    result: '受講率 42% → 81% 達成'
  },
  it: {
    badge: 'IT企業', name: 'B社 — エンジニア育成プログラム',
    users: 450, usersUnit: '名', usersSub: '技術職中心',
    rate: 94, rateSub: '前年比 +22pt',
    comp: 88, compSub: '目標 85%',
    hours: 4.1, hoursSub: '月間ペース',
    bars: [120, 145, 180, 210, 195, 238],
    courses: [['クラウドアーキテクチャ', 96], ['セキュリティ基礎', 89], ['Kubernetes実践', 74]],
    result: '新人研修期間 30%短縮を実現'
  },
  retail: {
    badge: '小売業', name: 'C社 — 店舗スタッフ教育プログラム',
    users: 3200, usersUnit: '名', usersSub: '全国200店舗',
    rate: 79, rateSub: '前年比 +31pt',
    comp: 72, compSub: '目標 75%',
    hours: 1.6, hoursSub: '月間ペース',
    bars: [450, 520, 680, 820, 760, 950],
    courses: [['接客マナー基礎', 88], ['商品知識研修', 83], ['クレーム対応', 71]],
    result: '顧客満足度 +18pt、研修コスト 45%削減'
  },
  sales: {
    badge: '営業', name: 'D社 — 営業ナレッジ共有プログラム',
    users: 280, usersUnit: '名', usersSub: '営業チーム全員',
    rate: 96, rateSub: '前年比 +28pt',
    comp: 91, compSub: '目標 90%',
    hours: 3.6, hoursSub: '月間ペース',
    bars: [82, 105, 128, 156, 143, 178],
    courses: [['トップ営業の商談術', 97], ['提案書作成実践', 91], ['クロージング技法', 84]],
    result: '成約率 1.4倍、ROI 340%達成'
  }
};

function cdCountUp(el, target, isDecimal) {
  const dur = 900, fps = 60, steps = (dur / 1000) * fps;
  let cur = 0;
  const tick = () => {
    cur++;
    const ratio = cur / steps;
    const val = isDecimal
      ? Math.min((ratio * target).toFixed(1), target)
      : Math.min(Math.round(ratio * target), target);
    const fmt = !isDecimal && val >= 1000 ? Number(val).toLocaleString('ja-JP') : String(val);
    el.textContent = fmt;
    if (cur < steps) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function cdAnimateBars(data) {
  const max = Math.max(...data.bars);
  document.querySelectorAll('#cd-chart .cd-bar-group').forEach((g, i) => {
    const pct = Math.round((data.bars[i] / max) * 100);
    const bar = g.querySelector('.cd-bar');
    const num = g.querySelector('.cd-bar-num');
    bar.style.height = '0%';
    num.textContent = data.bars[i];
    setTimeout(() => { bar.style.height = pct + '%'; }, 60 + i * 60);
  });
}

function cdAnimateProgress(data) {
  const list = document.getElementById('cd-prog-list');
  list.innerHTML = data.courses.map(([name, pct]) =>
    `<li class="cd-prog-item">
      <div class="cd-prog-head"><span class="cd-prog-name">${name}</span><span class="cd-prog-pct">${pct}%</span></div>
      <div class="cd-prog-track"><div class="cd-prog-bar"></div></div>
    </li>`
  ).join('');
  list.querySelectorAll('.cd-prog-bar').forEach((bar, i) => {
    const pct = data.courses[i][1];
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = pct + '%'; }, 150 + i * 100);
  });
}

function cdSwitchTo(company) {
  const data = CD[company];
  const panel = document.getElementById('cd-panel');

  panel.classList.add('switching');
  setTimeout(() => {
    document.getElementById('cd-badge').textContent = data.badge;
    document.getElementById('cd-company-name').textContent = data.name;
    document.getElementById('cd-users-sub').textContent = data.usersSub;
    document.getElementById('cd-rate-sub').textContent = data.rateSub;
    document.getElementById('cd-comp-sub').textContent = data.compSub;
    document.getElementById('cd-hours-sub').textContent = data.hoursSub;
    document.getElementById('cd-result-tag').textContent = data.result;

    panel.classList.remove('switching');

    cdCountUp(document.getElementById('cd-users'), data.users, false);
    cdCountUp(document.getElementById('cd-rate'), data.rate, false);
    cdCountUp(document.getElementById('cd-comp'), data.comp, false);
    cdCountUp(document.getElementById('cd-hours'), data.hours, true);
    cdAnimateBars(data);
    cdAnimateProgress(data);
  }, 280);
}

const cdPanel = document.getElementById('cd-panel');
if (cdPanel) {
  document.querySelectorAll('.cd-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cd-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      cdSwitchTo(btn.dataset.company);
    });
  });

  // Trigger initial bar + progress animation on scroll into view
  const dashObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      cdAnimateBars(CD.mfg);
      cdAnimateProgress(CD.mfg);
      dashObs.disconnect();
    }
  }, { threshold: 0.3 });
  dashObs.observe(cdPanel);
}

/* ── Smooth scroll for anchor links ─────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
