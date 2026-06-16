(() => {
  const fixedCta = document.querySelector('.fixed-cta');
  const finalCta = document.querySelector('#cta');

  if (fixedCta && finalCta && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        fixedCta.classList.toggle('is-hidden', entry.isIntersecting);
      });
    }, { threshold: 0.18 });

    observer.observe(finalCta);
  }
})();
