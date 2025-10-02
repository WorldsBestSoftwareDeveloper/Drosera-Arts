// js/app.js
import { renderNavbar } from './navbar.js';
import { renderHomepage } from './homepage.js';
import { renderProfile } from './profile.js';
import { renderSignin } from './auth-signin.js';
import { renderSignup } from './auth-signup.js';

// Get main app container
const app = document.getElementById('app');

// Create containers for navbar and page content
const navContainer = document.createElement('div');
const pageContainer = document.createElement('div');

// Push content down so it doesn’t overlap with fixed navbar
pageContainer.className = 'pt-20';

app.appendChild(navContainer);
app.appendChild(pageContainer);

// Navigation function
function navigate(page, query = '') {
  if (page === 'home') {
    renderHomepage(pageContainer, query);
  } else if (page === 'profile') {
    renderProfile(pageContainer);
  } else if (page === 'signin') {
    renderSignin(pageContainer);
  } else if (page === 'signup') {
    renderSignup(pageContainer);
  } else if (page === 'search') {
    renderHomepage(pageContainer, query);
  }
}

// Expose navigation globally for buttons
window.navigate = navigate;

// Initial render
renderNavbar(navContainer, navigate);
navigate('home');
