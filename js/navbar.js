// js/navbar.js
export function renderNavbar(container, onNavigate) {
  container.innerHTML = `
    <header class="w-full fixed top-0 left-0 z-10
                   bg-black text-white shadow-md
                   flex justify-between items-center
                   px-4 py-3">
      <h1 id="nav-home" class="text-2xl font-bold text-drosera-orange cursor-pointer">
        Drosera Art
      </h1>
      <div class="flex items-center space-x-4">
        <!-- Search -->
        <input 
          id="nav-search"
          type="search"
          placeholder="Search arts…"
          class="flex-1 max-w-xs rounded px-2 py-1 text-black"
        />

        <!-- Profile dropdown -->
        <div class="relative">
          <button id="nav-profile-toggle" class="text-white hover:text-drosera-orange transition">
            Profile ▼
          </button>
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

  // Event handlers
  container.querySelector('#nav-home')
    .addEventListener('click', () => onNavigate('home'));

  container.querySelector('#nav-search')
    .addEventListener('input', e => onNavigate('search', e.target.value));

  // Dropdown toggle
  const toggleButton = container.querySelector('#nav-profile-toggle');
  const profileMenu = container.querySelector('#profile-menu');

  toggleButton.addEventListener('click', () => {
    profileMenu.classList.toggle('hidden');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggleButton.contains(e.target) && !profileMenu.contains(e.target)) {
      profileMenu.classList.add('hidden');
    }
  });

  // Profile selections
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
}
