export function initSectionObserver(): void {
  const sections = document.querySelectorAll<HTMLElement>('.content');

  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.classList.add('visible');
        observer.unobserve(target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
}
