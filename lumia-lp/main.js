/* ============================================================
   Hair Salon LUMIA — main.js
   Header scroll / Hamburger / Smooth scroll / Fade-in
   ============================================================ */

'use strict';

/* ── Header scroll state ─────────────────────────────── */
const header = document.getElementById('header');

const updateHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
};

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();


/* ── Hamburger menu ──────────────────────────────────── */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu   = document.getElementById('mobileMenu');
const drawerOverlay= document.getElementById('drawerOverlay');

const openDrawer = () => {
  mobileMenu.classList.add('is-open');
  drawerOverlay.classList.add('is-visible');
  mobileMenu.removeAttribute('aria-hidden');
  drawerOverlay.removeAttribute('aria-hidden');
  hamburgerBtn.classList.add('is-active');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
};

const closeDrawer = () => {
  mobileMenu.classList.remove('is-open');
  drawerOverlay.classList.remove('is-visible');
  mobileMenu.setAttribute('aria-hidden', 'true');
  drawerOverlay.setAttribute('aria-hidden', 'true');
  hamburgerBtn.classList.remove('is-active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('is-open');
  isOpen ? closeDrawer() : openDrawer();
});

drawerOverlay.addEventListener('click', closeDrawer);

/* Close drawer when a link is clicked */
mobileMenu.querySelectorAll('.mobile-drawer__link').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

/* Close on Escape */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    closeDrawer();
    hamburgerBtn.focus();
  }
});


/* ── Intersection Observer — Fade-in ─────────────────── */
const fadeEls = document.querySelectorAll(
  '.feature-card, .voice-card, .flow-step, .faq-item, ' +
  '.menu-card, .concept__inner, .profile__card, ' +
  '.zigzag__block, .numbers__item, .access__inner'
);

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeEls.forEach((el, i) => {
  el.classList.add('fade-in');
  /* Staggered delay within grid siblings */
  const parent = el.parentElement;
  const siblings = [...parent.children].filter(c => c.classList.contains(el.classList[0]));
  const idx = siblings.indexOf(el);
  if (idx > 0 && idx < 4) {
    el.style.transitionDelay = `${idx * 0.08}s`;
  }
  observer.observe(el);
});


/* ── FAQ accordion smooth animation ─────────────────── */
document.querySelectorAll('.faq-item').forEach(details => {
  const summary = details.querySelector('summary');
  const answer  = details.querySelector('.faq-item__answer');

  summary.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = details.hasAttribute('open');

    if (isOpen) {
      /* Close */
      answer.style.maxHeight = answer.scrollHeight + 'px';
      requestAnimationFrame(() => {
        answer.style.transition = 'max-height 0.28s ease, opacity 0.25s ease';
        answer.style.maxHeight  = '0';
        answer.style.opacity    = '0';
      });
      answer.addEventListener('transitionend', () => {
        details.removeAttribute('open');
        answer.style.maxHeight = '';
        answer.style.opacity   = '';
        answer.style.transition= '';
      }, { once: true });
    } else {
      /* Open */
      details.setAttribute('open', '');
      answer.style.maxHeight = '0';
      answer.style.opacity   = '0';
      answer.style.overflow  = 'hidden';
      requestAnimationFrame(() => {
        answer.style.transition = 'max-height 0.32s ease, opacity 0.3s ease';
        answer.style.maxHeight  = answer.scrollHeight + 'px';
        answer.style.opacity    = '1';
      });
      answer.addEventListener('transitionend', () => {
        answer.style.maxHeight  = '';
        answer.style.overflow   = '';
        answer.style.transition = '';
      }, { once: true });
    }
  });
});


/* ── Fixed CTA show/hide on hero overlap ─────────────── */
const fixedCta = document.getElementById('fixedCta');
const hero     = document.querySelector('.hero');

if (fixedCta && hero) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      fixedCta.style.transform = entry.isIntersecting
        ? 'translateY(100%)'
        : 'translateY(0)';
    });
  }, { threshold: 0.1 });

  heroObserver.observe(hero);
  fixedCta.style.transition = 'transform 0.3s ease';
  fixedCta.style.transform  = 'translateY(100%)';
}
