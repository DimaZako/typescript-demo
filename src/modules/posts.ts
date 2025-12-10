import { Post } from '../types/types';

export async function loadPosts(): Promise<void> {
  const postsContainer = document.getElementById('postsContainer') as HTMLElement | null;
  if (!postsContainer) return;

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts: Post[] = await response.json();

    const postsHtml = posts
      .map((post) => {
        return `<div class="post">
  <h3>${post.title}</h3>
  <p>${post.body}</p>
</div>`;
      })
      .join('');

    postsContainer.innerHTML = postsHtml;
  } catch (error) {
    console.error('Failed to load posts:', error);
    postsContainer.innerHTML = '<p>Error loading posts.</p>';
  }
}
