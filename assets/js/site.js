(function () {
  const root = document.documentElement;
  const key = 'site-theme';

  function applyTheme(theme) {
    if (theme === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(key, theme);
    } catch {
      // ignore
    }
  }

  const stored = getStoredTheme();
  if (stored) applyTheme(stored);

  window.toggleTheme = function toggleTheme() {
    const isLight = root.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    applyTheme(next === 'light' ? 'light' : 'dark');
    setStoredTheme(next);
    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) btn.textContent = next === 'light' ? 'Switch to dark' : 'Switch to light';
  };

  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('[data-theme-toggle]');
    if (btn) {
      const isLight = root.getAttribute('data-theme') === 'light';
      btn.textContent = isLight ? 'Switch to dark' : 'Switch to light';
    }

    // Set aria-current on matching nav link.
    const here = location.pathname.replace(/\\/g, '/');
    document.querySelectorAll('a[data-nav]').forEach((a) => {
      const href = a.getAttribute('href') || '';
      if (!href) return;

      // Resolve relative links.
      const url = new URL(href, location.href);
      const path = url.pathname.replace(/\\/g, '/');
      if (path === here) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  });
})();
