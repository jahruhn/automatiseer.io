// Minimal JS: mobile nav toggle and small enhancements
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');

  // Basic mobile toggle if needed
  const btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.innerText = 'Menu';
  btn.setAttribute('aria-expanded', 'false');

  btn.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    navLinks.style.display = expanded ? '' : 'flex';
    navLinks.style.flexDirection = 'column';
  });

  if (nav) nav.insertBefore(btn, nav.firstChild);
});
