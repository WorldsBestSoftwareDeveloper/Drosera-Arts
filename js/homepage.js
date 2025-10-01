// js/homepage.js
import { renderDetails } from './details.js';

// Shared artworks array (exported for syncing later with artist profile)
export const artworks = [
  { id: 1, title: 'Sunset Bliss', price: '$50', likes: 12 },
  { id: 2, title: 'Crypto Dreams', price: '$120', likes: 8 },
  { id: 3, title: 'Ocean Waves', price: '$75', likes: 5 },
  { id: 4, title: 'Golden Fields', price: '$200', likes: 9 },
  { id: 5, title: 'Night Skyline', price: '$90', likes: 6 },
  { id: 6, title: 'Mystic Forest', price: '$130', likes: 3 },
];

// Render homepage with optional search filter
export function renderHomepage(container, filter = '') {
  container.innerHTML = '';

  // Heading
  const heading = document.createElement('h2');
  heading.className = 'text-xl font-bold mb-4';
  heading.textContent = 'Featured Artworks';
  container.appendChild(heading);

  // List wrapper
  const list = document.createElement('div');
  list.className = 'space-y-6';

  let itemsToShow = 3;
  const lowerFilter = filter.trim().toLowerCase();

  // Function to render cards
  function renderCards() {
    list.innerHTML = '';

    // Filter artworks
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
        w-full max-w-md mx-auto
        bg-white rounded-xl border border-gray-200
        shadow-md transition-transform duration-300 ease-out
        hover:-translate-y-1 hover:shadow-lg
      `;

      // highlight search match in title
      let displayTitle = art.title;
      if (lowerFilter) {
        const regex = new RegExp(`(${filter})`, 'ig');
        displayTitle = art.title.replace(
          regex,
          '<mark class="bg-yellow-200">$1</mark>'
        );
      }

      card.innerHTML = `
        <div class="h-64 bg-gray-200 flex items-center justify-center text-gray-500 text-lg rounded-t-xl">
          Image
        </div>
        <div class="p-4 space-y-3">
          <h3 class="text-lg font-semibold text-drosera-orange">${displayTitle}</h3>
          <p class="text-sm text-gray-700">${art.price}</p>
          <div class="flex items-center space-x-3">
            <button data-like="${art.id}" class="like-btn text-drosera-orange hover:underline">
              ♥ Like
            </button>
            <span id="like-count-${art.id}" class="text-sm text-gray-600">${art.likes}</span>
          </div>
          <button class="view-btn w-full bg-drosera-orange text-white px-4 py-2 rounded hover:opacity-90 transition">
            View
          </button>
        </div>
      `;

      // Like button listener
      card.querySelector('.like-btn').addEventListener('click', e => {
        const artId = parseInt(e.target.getAttribute('data-like'), 10);
        const targetArt = artworks.find(a => a.id === artId);
        if (targetArt) {
          targetArt.likes++;
          card.querySelector(`#like-count-${artId}`).textContent = targetArt.likes;
        }
      });

      // View button listener
      card.querySelector('.view-btn').addEventListener('click', () => {
        renderDetails(container, art);
      });

      list.appendChild(card);
    });
  }

  renderCards();
  container.appendChild(list);

  // Load more button
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
