// js/profile-user.js
export function renderUserProfile(container) {
  container.innerHTML = `
    <div class="p-4 max-w-md mx-auto">
      <!-- Avatar & Bio -->
      <div class="flex flex-col items-center text-center mb-8">
        <div class="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold text-drosera-orange">
          U
        </div>
        <h2 class="mt-3 text-2xl font-bold text-drosera-orange">Ada User</h2>
        <p class="text-gray-600 text-sm">Art lover and collector from Lagos. Exploring unique digital artworks.</p>
      </div>

      <!-- Owned Arts -->
      <section class="mb-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Owned Arts</h3>
        <div class="space-y-4">
          <div class="border rounded-lg shadow-sm p-3 bg-white">
            <p class="font-semibold">Sunset Glow</p>
            <span class="text-sm text-gray-600">Purchased for $120</span>
          </div>
          <div class="border rounded-lg shadow-sm p-3 bg-white">
            <p class="font-semibold">Golden Sands</p>
            <span class="text-sm text-gray-600">Purchased for $200</span>
          </div>
        </div>
      </section>

      <!-- Bids -->
      <section>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">Bids</h3>
        <div class="space-y-4">
          <div class="border rounded-lg shadow-sm p-3 bg-white">
            <p class="font-semibold">Ocean Dreams</p>
            <span class="text-sm text-gray-600">Current Bid: $100</span>
          </div>
          <div class="border rounded-lg shadow-sm p-3 bg-white">
            <p class="font-semibold">City Lights</p>
            <span class="text-sm text-gray-600">Current Bid: $90</span>
          </div>
        </div>
      </section>
    </div>
  `;
}
