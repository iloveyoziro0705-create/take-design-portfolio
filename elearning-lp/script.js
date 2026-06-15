const header = document.querySelector('.header');
const fixedCta = document.querySelector('.fixed-cta');

const updateScrollState = () => {
  const isScrolled = window.scrollY > 24;
  header?.classList.toggle('scrolled', isScrolled);
  fixedCta?.classList.toggle('show', window.scrollY > 520);
};

window.addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -35px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq-item');
    const answer = item?.querySelector('.faq-answer');
    const shouldOpen = !item?.classList.contains('open');

    document.querySelectorAll('.faq-item.open').forEach((openItem) => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      const openAnswer = openItem.querySelector('.faq-answer');
      if (openAnswer) openAnswer.style.maxHeight = '0px';
    });

    if (!item || !answer || !shouldOpen) return;
    item.classList.add('open');
    question.setAttribute('aria-expanded', 'true');
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  });
});
