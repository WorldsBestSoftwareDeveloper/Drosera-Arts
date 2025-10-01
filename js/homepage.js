// js/homepage.js
import { renderDetails } from './details.js';

export const artworks = [
  { id: 1, title: 'Sunset Bliss', price: '$50', likes: 12, liked: false },
  { id: 2, title: 'Crypto Dreams', price: '$120', likes: 8, liked: false },
  { id: 3, title: 'Ocean Waves', price: '$75', likes: 5, liked: false },
  { id: 4, title: 'Golden Fields', price: '$200', likes: 9, liked: false },
  { id: 5, title: 'Night Skyline', price: '$90', likes: 6, liked: false },
  { id: 6, title: 'Mystic Forest', price: '$130', likes: 3, liked: false },
];

export function renderHomepage(container, filter = '') {
  container.innerHTML = '';

  const heading = document.createElement('h2');
  heading.className = 'text-xl font-bold mb-4';
  heading.textContent = 'Featured Artworks';
  container.appendChild(heading);

  // ✅ Grid container: 1 column on mobile, 3 columns on desktop
  const list = document.createElement('div');
  list.className = 'grid grid-cols-1 md:grid-cols-3 gap-6';

  let itemsToShow = 3;
  const lowerFilter = filter.trim().toLowerCase();

  function renderCards() {
    list.innerHTML = '';

    const filtered = artworks.filter(art =>
      art.title.toLowerCase().includes(lowerFilter)
    );

    if (filtered.length === 0) {
      list.innerHTML = `<p class="text-center text-gray-600 mt-10">
        No artworks found for “${filter}”
      </p>`;
      return;
    }

    filtered.slice(0, itemsToShow).forEach(art => {
      const card = document.createElement('div');
      card.className = `
        w-full
        bg-white rounded-xl border border-gray-200
        shadow-md transition-transform duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg
      `;

      card.innerHTML = `
        <div class="h-64 bg-gray-200 flex items-center justify-center text-gray-500 text-lg rounded-t-xl">
          Image
        </div>
        <div class="p-4 space-y-3">
          <h3 class="text-lg font-semibold text-drosera-orange">${art.title}</h3>
          <p class="text-sm text-gray-700">${art.price}</p>
          <div class="flex items-center space-x-3">
            <button data-like="${art.id}" class="like-btn flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="h-5 w-5 heart-icon transition-colors duration-300 ${art.liked ? 'text-red-500' : 'text-gray-400'}"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.637l1.318-1.319a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/>
              </svg>
            </button>
            <span id="like-count-${art.id}" class="text-sm text-gray-600">${art.likes}</span>
          </div>
          <button class="view-btn w-full bg-drosera-orange text-white px-4 py-2 rounded hover:opacity-90 transition">
            View
          </button>
        </div>
      `;

      // Like handler
      const likeBtn = card.querySelector('.like-btn');
      const heartIcon = likeBtn.querySelector('.heart-icon');
      likeBtn.addEventListener('click', () => {
        art.liked = !art.liked;
        art.likes += art.liked ? 1 : -1;

        heartIcon.classList.toggle('text-red-500', art.liked);
        heartIcon.classList.toggle('text-gray-400', !art.liked);
        document.getElementById(`like-count-${art.id}`).textContent = art.likes;

        // Sync with Artist Profile if open
        const artistCount = document.getElementById(`artist-like-count-${art.id}`);
        if (artistCount) artistCount.textContent = art.likes;
        const artistHeart = document.getElementById(`artist-heart-${art.id}`);
        if (artistHeart) {
          artistHeart.classList.toggle('text-red-500', art.liked);
          artistHeart.classList.toggle('text-gray-400', !art.liked);
        }
      });

      // View handler
      card.querySelector('.view-btn').addEventListener('click', () => {
        renderDetails(container, art);
      });

      list.appendChild(card);
    });
  }

  renderCards();
  container.appendChild(list);

  // Load More button
  const loadMoreBtn = document.createElement('button');
  loadMoreBtn.textContent = 'Load More';
  loadMoreBtn.className = `
    w-full max-w-md mx-auto mt-6 block
    bg-drosera-orange text-white 
    px-4 py-2 rounded hover:opacity-90 transition
  `;

  loadMoreBtn.addEventListener('click', () => {
    itemsToShow += 3;
    renderCards();
    if (itemsToShow >= artworks.length) {
      loadMoreBtn.style.display = 'none';
    }
  });

  container.appendChild(loadMoreBtn);
}
