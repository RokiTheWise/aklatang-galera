// Decide before the first paint; returning visitors never see a flashing overlay.
// The timeout also dismisses it if React hydration is slow or unavailable.
export const entranceBootstrap = `(() => {
  try {
    if (location.pathname !== '/' ||
        matchMedia('(prefers-reduced-motion: reduce)').matches ||
        sessionStorage.getItem('aklatang-intro-seen')) return;
    sessionStorage.setItem('aklatang-intro-seen', 'true');
    const root = document.documentElement;
    root.dataset.entrance = 'play';
    const dismiss = () => {
      delete root.dataset.entrance;
      document.removeEventListener('keydown', dismiss);
    };
    document.addEventListener('keydown', dismiss);
    setTimeout(dismiss, 1600);
  } catch {
    // Optional decoration: keep the page available if storage is blocked.
  }
})();`;
