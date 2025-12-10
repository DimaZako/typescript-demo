export function initHeaderScroll(): void {
  const header = document.querySelector('header') as HTMLElement | null;
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '';
    }
  });
}
