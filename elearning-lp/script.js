/* ============================================================
   LearnCore — script.js
   ============================================================ */

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
