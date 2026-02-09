// Mobile menu toggle for dark theme
const trigger = document.querySelector('.trigger');
const menu = document.querySelector('#menu');

if (trigger && menu) {
  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('active');
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add dark/light theme toggle functionality
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌓';
themeToggle.classList.add('theme-toggle');
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
themeToggle.style.zIndex = '1000';
themeToggle.style.background = 'var(--primary-color)';
themeToggle.style.color = '#121212';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '50%';
themeToggle.style.width = '40px';
themeToggle.style.height = '40px';
themeToggle.style.cursor = 'pointer';
themeToggle.style.fontSize = '1.2rem';

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
  themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';
  localStorage.setItem('theme', currentTheme);
});

// Apply saved theme preference
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-theme');
  themeToggle.textContent = '🌙';
}

document.body.appendChild(themeToggle);