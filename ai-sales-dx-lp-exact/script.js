document.addEventListener('DOMContentLoaded', function () {
  var tabButtons = document.querySelectorAll('.tab-btn');
  var tabPanels = {
    skills: document.getElementById('tab-skills'),
    curriculum: document.getElementById('tab-curriculum'),
    deliverables: document.getElementById('tab-deliverables')
  };

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');

      tabButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      Object.keys(tabPanels).forEach(function (key) {
        tabPanels[key].classList.toggle('active', key === target);
      });
    });
  });
});
