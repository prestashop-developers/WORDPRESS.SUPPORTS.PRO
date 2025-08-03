document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.sort-btn');
  const list = document.getElementById('portfolio-list');
  if (!window.PORTFOLIO_CASES || !list) return;
  function renderCases(tag) {
    list.innerHTML = '';
    window.PORTFOLIO_CASES.filter(item =>
      tag === 'all' || item.tags.includes(tag)
    ).forEach(item => {
      const el = document.createElement('div');
      el.className = 'portfolio-item';
      el.setAttribute('data-tags', item.tags.join(' '));
      el.innerHTML = `
        <div class="portfolio-image">
          <img src="${item.image}" alt="${item.subtitle}" />
          <div class="portfolio-overlay">
            <h4>${item.subtitle}</h4>
            <p>${item.description}</p>
          </div>
        </div>
        <div class="portfolio-info">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="tech-stack">
            ${item.stack.map(s => `<span>${s}</span>`).join('')}
          </div>
        </div>
      `;
      list.appendChild(el);
    });
  }
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      const tag = btn.getAttribute('data-tag');
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCases(tag);
    });
  });
  // Set default active
  if (buttons[0]) {
    buttons[0].classList.add('active');
    renderCases('all');
  }
});
