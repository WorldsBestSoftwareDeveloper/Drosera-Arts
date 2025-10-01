// js/profile-artist.js
import { artworks } from './homepage.js';

export function renderArtistProfile(container) {
  container.innerHTML = `
    <div class="p-4 max-w-md mx-auto">
      <!-- Avatar & Bio -->
      <div class="flex flex-col items-center text-center mb-8">
        <div class="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold text-drosera-orange">
          A
        </div>
        <h2 class="mt-3 text-2xl font-bold text-drosera-orange">Amir Artist</h2>
        <p class="text-gray-600 text-sm">
          Digital painter sharing nature-inspired artworks with the community.
        </p>
      </div>

      <!-- Art Gallery -->
      <section>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Art Gallery</h3>
        <div id="artist-gallery" class="grid grid-cols-1 sm:grid-cols-2 gap-4"></div>
      </section>
    </div>
  `;

  const gallery = container.querySelector('#artist-gallery');

  artworks.forEach(art => {
    const card = document.createElement('div');
    card.className = `
      border rounded-lg shadow-sm p-3 bg-white
      flex flex-col items-center
    `;

    card.innerHTML = `
      <div class="h-40 w-full bg-gray-200 flex items-center justify-center rounded mb-2">
        Image
      </div>
      <p class="font-semibold text-center">${art.title}</p>
      <div class="flex items-center space-x-2 mt-2">
        <button data-like="${art.id}" class="like-btn flex items-center space-x-1">
          <svg id="artist-heart-${art.id}"
               xmlns="http://www.w3.org/2000/svg"
               class="h-5 w-5 transition-colors duration-300 ${art.liked ? 'text-red-500' : 'text-gray-400'}"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.637l1.318-1.319a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/>
          </svg>
        </button>
        <span id="artist-like-count-${art.id}" class="text-sm text-gray-600">
          ${art.likes}
        </span>
      </div>
    `;

    const likeBtn = card.querySelector('.like-btn');
    const heartIcon = card.querySelector(`#artist-heart-${art.id}`);
    likeBtn.addEventListener('click', () => {
      art.liked = !art.liked;
      art.likes += art.liked ? 1 : -1;

      heartIcon.classList.toggle('text-red-500', art.liked);
      heartIcon.classList.toggle('text-gray-400', !art.liked);
      document.getElementById(`artist-like-count-${art.id}`).textContent = art.likes;

      // Update homepage if visible
      const homeCount = document.getElementById(`like-count-${art.id}`);
      if (homeCount) homeCount.textContent = art.likes;
      const homeHeart = document.querySelector(`[data-like="${art.id}"] .heart-icon`);
      if (homeHeart) {
        homeHeart.classList.toggle('text-red-500', art.liked);
        homeHeart.classList.toggle('text-gray-400', !art.liked);
      }
    });

    gallery.appendChild(card);
  });
}
