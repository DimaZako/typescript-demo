export function initModal(): void {
  const openModalBtn = document.getElementById('openModalBtn') as HTMLButtonElement | null;
  const modal = document.getElementById('myModal') as HTMLDivElement | null;
  const closeModalBtn = document.getElementById('closeModalBtn') as HTMLButtonElement | null;

  if (!openModalBtn || !modal || !closeModalBtn) return;

  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event: Event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}
