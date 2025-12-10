"use strict";
// script.ts - adds interactivity to the HTML template
// Primitive types are explicitly declared for TypeScript type safety.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Modal elements
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');
if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
}
if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}
// Close modal when clicking outside of content
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}
// Scroll event listener to add a shadow to the header when scrolling down
const headerElement = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (!headerElement)
        return;
    if (window.scrollY > 50) {
        headerElement.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    }
    else {
        headerElement.style.boxShadow = 'none';
    }
});
// Fade-in animation for content sections when they come into view
const contentSections = document.querySelectorAll('section.content');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
contentSections.forEach((section) => {
    sectionObserver.observe(section);
});
// Fetch posts from JSONPlaceholder and display them in the posts container
const postsContainer = document.getElementById('postsContainer');
function loadPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!postsContainer)
            return;
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const posts = yield response.json();
            postsContainer.innerHTML = posts
                .map((post) => `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `)
                .join('');
        }
        catch (error) {
            postsContainer.innerHTML = '<p>Error loading posts.</p>';
        }
    });
}
loadPosts();
