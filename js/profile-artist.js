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

  // Render each artwork as a card
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
        <button data-like="${art.id}" class="like-btn text-drosera-orange hover:underline">
          ♥ Like
        </button>
        <span id="artist-like-count-${art.id}" class="text-sm text-gray-600">
          ${art.likes}
        </span>
      </div>
    `;

    // Like button handler
    card.querySelector('.like-btn').addEventListener('click', e => {
      const artId = parseInt(e.target.getAttribute('data-like'), 10);
      const targetArt = artworks.find(a => a.id === artId);
      if (targetArt) {
        targetArt.likes++;
        // Update count in this page
        card.querySelector(`#artist-like-count-${artId}`).textContent = targetArt.likes;

        // Also update like count in homepage (if user goes back there)
        const homeLikeCount = document.getElementById(`like-count-${artId}`);
        if (homeLikeCount) {
          homeLikeCount.textContent = targetArt.likes;
        }
      }
    });

    gallery.appendChild(card);
  });
}
