import { initModal } from './modules/modal';
import { initHeaderScroll } from './modules/scroll';
import { initSectionObserver } from './modules/observer';
import { loadPosts } from './modules/posts';

window.addEventListener('DOMContentLoaded', () => {
  initModal();
  initHeaderScroll();
  initSectionObserver();
  loadPosts();
});
