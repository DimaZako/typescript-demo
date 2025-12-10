// script.ts - adds interactivity to the HTML template
// Primitive types are explicitly declared for TypeScript type safety.

// Modal elements
const openModalBtn: HTMLElement | null = document.getElementById('openModalBtn');
const closeModalBtn: HTMLElement | null = document.getElementById('closeModalBtn');
const modal: HTMLElement | null = document.getElementById('myModal');

if (openModalBtn && modal) {
  openModalBtn.addEventListener('click', (): void => {
    (modal as HTMLElement).style.display = 'flex';
  });
}

if (closeModalBtn && modal) {
  closeModalBtn.addEventListener('click', (): void => {
    (modal as HTMLElement).style.display = 'none';
  });
}

// Close modal when clicking outside of content
if (modal) {
  modal.addEventListener('click', (e: Event): void => {
    if (e.target === modal) {
      (modal as HTMLElement).style.display = 'none';
    }
  });
}

// Scroll event listener to add a shadow to the header when scrolling down
const headerElement: HTMLElement | null = document.getElementById('header');
window.addEventListener('scroll', (): void => {
  if (!headerElement) return;
  if (window.scrollY > 50) {
    headerElement.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  } else {
    headerElement.style.boxShadow = 'none';
  }
});

// Fade-in animation for content sections when they come into view
const contentSections: NodeListOf<Element> = document.querySelectorAll('section.content');
const sectionObserver: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
  entries.forEach((entry: IntersectionObserverEntry): void => {
    if (entry.isIntersecting) {
      (entry.target as HTMLElement).classList.add('visible');
    }
  });
});

contentSections.forEach((section: Element): void => {
  sectionObserver.observe(section);
});

// Fetch posts from JSONPlaceholder and display them in the posts container
const postsContainer: HTMLElement | null = document.getElementById('postsContainer');
async function loadPosts(): Promise<void> {
  if (!postsContainer) return;
  try {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts: { id: number; title: string; body: string }[] = await response.json();
    postsContainer.innerHTML = posts
      .map(
        (post: { id: number; title: string; body: string }): string => `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `
      )
      .join('');
  } catch (error) {
    postsContainer.innerHTML = '<p>Error loading posts.</p>';
  }
}

loadPosts();
