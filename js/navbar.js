// js/navbar.js
export function renderNavbar(container, onNavigate) {
  container.innerHTML = `
    <header class="w-full fixed top-0 left-0 z-10
                   bg-black text-white shadow-md
                   flex items-center justify-between
                   px-4 py-3">

      <!-- Left: Logo -->
      <div class="flex items-center space-x-2 cursor-pointer" id="nav-logo">
        <img src="images/logo.jpg" alt="Drosera Logo" class="h-8 w-8 object-contain" />
      </div>

      <!-- Center: Title -->
      <h1 id="nav-home"
          class="font-bold text-drosera-orange cursor-pointer text-center flex-1
                 text-lg sm:text-xl">
        Drosera Art
      </h1>

      <!-- Right: Profile + Search -->
      <div class="flex items-center space-x-4">
        <!-- Search -->
        <div class="relative">
          <button id="nav-search-toggle"
                  class="hover:text-drosera-orange focus:outline-none text-white">
            <!-- Search Icon (Tabler) -->
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-6 w-6 sm:h-7 sm:w-7"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-3.85z" />
            </svg>
          </button>
          <input id="nav-search-input"
                 type="search"
                 placeholder="Search…"
                 class="hidden absolute right-0 top-10 w-48 px-2 py-1 rounded-md border text-black
                        focus:outline-none focus:ring-2 focus:ring-drosera-orange shadow-lg" />
        </div>

        <!-- Profile -->
        <div class="relative">
          <button id="nav-profile-toggle"
                  class="hover:text-drosera-orange text-white transition">
            <!-- User Circle Icon (Tabler) -->
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-6 w-6 sm:h-7 sm:w-7"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4.5 21a7.5 7.5 0 0115 0H4.5z" />
            </svg>
          </button>

          <!-- Profile Dropdown -->
          <div id="profile-menu"
               class="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden">
            <button id="nav-user-profile"
                    class="block w-full text-left px-4 py-2 hover:bg-gray-100">
              User Profile
            </button>
            <button id="nav-artist-profile"
                    class="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Artist Profile
            </button>
          </div>
        </div>
      </div>
    </header>
  `;

  // Event Handlers
  container.querySelector('#nav-logo')
    .addEventListener('click', () => onNavigate('home'));

  container.querySelector('#nav-home')
    .addEventListener('click', () => onNavigate('home'));

  // Profile dropdown logic
  const profileToggle = container.querySelector('#nav-profile-toggle');
  const profileMenu = container.querySelector('#profile-menu');

  profileToggle.addEventListener('click', () => {
    profileMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!profileToggle.contains(e.target) && !profileMenu.contains(e.target)) {
      profileMenu.classList.add('hidden');
    }
  });

  container.querySelector('#nav-user-profile')
    .addEventListener('click', () => {
      profileMenu.classList.add('hidden');
      onNavigate('user');
    });

  container.querySelector('#nav-artist-profile')
    .addEventListener('click', () => {
      profileMenu.classList.add('hidden');
      onNavigate('artist');
    });

  // Search toggle
  const searchToggle = container.querySelector('#nav-search-toggle');
  const searchInput = container.querySelector('#nav-search-input');

  searchToggle.addEventListener('click', () => {
    searchInput.classList.toggle('hidden');
    if (!searchInput.classList.contains('hidden')) {
      searchInput.focus();
    }
  });

  // Search input handler
  searchInput.addEventListener('input', (e) => {
    onNavigate('search', e.target.value);
  });
}
