// 最小限のスクロールリビール（Fade + Slide）とメニュートグルのみ実装
document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll('.u-fade-in-up');

  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  const menuButton = document.querySelector('.c-header__menu');
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
    });
  }
});
