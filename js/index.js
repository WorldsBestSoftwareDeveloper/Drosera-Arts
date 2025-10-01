import './index.css';
import { renderHomepage } from './homepage.js';
import { renderNavbar } from './navbar.js';

const root = document.getElementById('app');

// Render navbar
renderNavbar(root, () => renderHomepage(root));

// Render homepage initially
renderHomepage(root);
