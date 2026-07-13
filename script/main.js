const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    toggle.textContent = 'Light';
  } else {
    root.removeAttribute('data-theme');
    toggle.textContent = 'Dark';
  }
}

const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(saved || (prefersDark ? 'dark' : 'light'));

toggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});