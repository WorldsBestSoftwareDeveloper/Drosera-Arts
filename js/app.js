// js/app.js
import { renderNavbar } from './navbar.js';
import { renderHomepage } from './homepage.js';
import { renderUserProfile } from './profile-user.js';
import { renderArtistProfile } from './profile-artist.js';

const app = document.getElementById('app');

// Create containers for navbar and page content
const navContainer = document.createElement('div');
app.appendChild(navContainer);

const pageContainer = document.createElement('div');
// Add top padding so content isn’t hidden behind fixed navbar
pageContainer.className = 'pt-20';
app.appendChild(pageContainer);

// Navigation function
function navigate(page, query = '') {
  if (page === 'home') {
    renderHomepage(pageContainer, query);
  } else if (page === 'user') {
    renderUserProfile(pageContainer);
  } else if (page === 'artist') {
    renderArtistProfile(pageContainer);
  } else if (page === 'search') {
    renderHomepage(pageContainer, query);
  }
}

// Initial render
renderNavbar(navContainer, navigate);
navigate('home');
