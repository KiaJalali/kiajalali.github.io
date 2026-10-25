(() => {
  const key = 'kia-theme';
  const root = document.documentElement;
  const valid = (value) => value === 'light' || value === 'dark';
  let theme = 'dark';
  try { const stored = localStorage.getItem(key); if (valid(stored)) theme = stored; } catch {}

  function apply() {
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#121416' : '#fafaf8';
    const button = document.querySelector('#theme-toggle');
    if (button) {
      button.hidden = false;
      const next = theme === 'dark' ? 'light' : 'dark';
      button.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      const label = button.querySelector('[data-theme-label]');
      if (label) label.textContent = next === 'light' ? 'Light' : 'Dark';
    }
  }

  apply();
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.querySelector('#theme-toggle')?.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, theme); } catch {}
      apply();
    });
  }, { once: true });
  window.addEventListener('storage', (event) => {
    if (event.key === key || event.key === null) {
      theme = valid(event.newValue) ? event.newValue : 'dark';
      apply();
    }
  });
})();
