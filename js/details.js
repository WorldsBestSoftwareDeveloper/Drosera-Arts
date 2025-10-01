// details.js
export function renderDetails(container, artwork) {
  container.innerHTML = '';

  // Fade-in wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'animate-fadeIn';
  container.appendChild(wrapper);

  // Back button
  const backBtn = document.createElement('button');
  backBtn.textContent = '← Back';
  backBtn.className =
    'mb-4 text-drosera-orange font-medium hover:underline';
  backBtn.addEventListener('click', () => {
    window.location.reload(); // for now
  });
  wrapper.appendChild(backBtn);

  // Image placeholder
  const img = document.createElement('div');
  img.className =
    'w-full h-72 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-lg';
  img.textContent = artwork.image || 'Artwork Image';
  wrapper.appendChild(img);

  // Title
  const title = document.createElement('h1');
  title.className = 'mt-4 text-2xl font-bold text-drosera-orange';
  title.textContent = artwork.title;
  wrapper.appendChild(title);

  // Price
  const price = document.createElement('p');
  price.className = 'mt-2 text-lg font-semibold text-gray-800';
  price.textContent = `Price: ${artwork.price}`;
  wrapper.appendChild(price);

  // Description placeholder
  const desc = document.createElement('p');
  desc.className = 'mt-3 text-gray-600';
  desc.textContent =
    artwork.description || 'This is a beautiful piece of art...';
  wrapper.appendChild(desc);

  // Buy Button placeholder
  const buyBtn = document.createElement('button');
  buyBtn.textContent = 'Buy Now';
  buyBtn.className =
    'mt-6 w-full bg-drosera-orange text-white py-2 rounded hover:opacity-90 transition';
  buyBtn.addEventListener('click', () => {
    alert('Buying feature coming soon!');
  });
  wrapper.appendChild(buyBtn);
}
