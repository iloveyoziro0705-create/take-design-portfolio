const revealTargets = document.querySelectorAll('.fade-up');

document.documentElement.classList.add('reveal-ready');

const showTarget = (target) => target.classList.add('show');
const isNearViewport = (target) => target.getBoundingClientRect().top < window.innerHeight * 0.92;

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      showTarget(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14 });

  revealTargets.forEach((target) => {
    if (isNearViewport(target)) showTarget(target);
    observer.observe(target);
  });
} else {
  revealTargets.forEach(showTarget);
}
