// js/profile.js
import { artworks } from './homepage.js';

export function renderProfile(container) {
  container.innerHTML = `
    <div class="p-4 max-w-md mx-auto">

      <!-- Profile Header -->
      <div class="flex flex-col items-center text-center mb-8">
        <div class="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold text-drosera-orange">
          U
        </div>
        <h2 class="mt-3 text-2xl font-bold text-drosera-orange">Your Profile</h2>
        <p class="text-gray-600 text-sm">
          Manage your artworks, likes, and profile info.
        </p>
      </div>

      <!-- Owned / Liked Arts -->
      <section class="mb-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Liked Artworks</h3>
        <div id="liked-gallery" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Liked artworks will render here -->
        </div>
      </section>

      <!-- Posted Arts -->
      <section>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Your Posted Artworks</h3>
        <div id="posted-gallery" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- User's own artworks will render here -->
        </div>

        <button id="add-art-btn"
                class="mt-4 w-full bg-drosera-orange text-white py-2 rounded hover:opacity-90 transition">
          + Add New Artwork
        </button>
      </section>
    </div>
  `;

  const likedGallery = container.querySelector('#liked-gallery');
  const postedGallery = container.querySelector('#posted-gallery');

  // Render liked artworks
  function renderLiked() {
    likedGallery.innerHTML = '';
    const likedArts = artworks.filter(a => a.liked);
    if (likedArts.length === 0) {
      likedGallery.innerHTML = '<p class="text-sm text-gray-500">You haven’t liked any artworks yet.</p>';
      return;
    }

    likedArts.forEach(art => {
      const card = document.createElement('div');
      card.className = `
        border rounded-lg shadow-sm p-3 bg-white
        flex flex-col items-center
      `;

      card.innerHTML = `
        <div class="h-32 w-full bg-gray-200 flex items-center justify-center rounded mb-2">
          Image
        </div>
        <p class="font-semibold text-center">${art.title}</p>
        <div class="flex items-center space-x-2 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="h-5 w-5 text-red-500"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.637l1.318-1.319a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/>
          </svg>
          <span class="text-sm text-gray-600">${art.likes}</span>
        </div>
      `;
      likedGallery.appendChild(card);
    });
  }

  // Render posted artworks (placeholder for now)
  function renderPosted() {
    postedGallery.innerHTML = '';
    // For demo: show the first two artworks as if they belong to the user
    const postedArts = artworks.slice(0, 2);

    postedArts.forEach(art => {
      const card = document.createElement('div');
      card.className = `
        border rounded-lg shadow-sm p-3 bg-white
        flex flex-col items-center
      `;

      card.innerHTML = `
        <div class="h-32 w-full bg-gray-200 flex items-center justify-center rounded mb-2">
          Image
        </div>
        <p class="font-semibold text-center">${art.title}</p>
        <div class="flex items-center space-x-2 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="h-5 w-5 text-gray-400"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.637l1.318-1.319a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/>
          </svg>
          <span class="text-sm text-gray-600">${art.likes}</span>
        </div>
      `;
      postedGallery.appendChild(card);
    });
  }

  renderLiked();
  renderPosted();

  // Placeholder add-art button
  container.querySelector('#add-art-btn').addEventListener('click', () => {
    alert('Add Art feature coming soon.');
  });
}
