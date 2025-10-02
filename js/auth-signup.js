// js/auth-signup.js
import { setUserSession } from './session.js';

export function renderSignup(container) {
  container.innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-sm w-full bg-white p-6 rounded-lg shadow">

        <!-- Logo -->
        <div class="flex justify-center mb-6">
          <img src="images/logo.jpg" alt="Drosera Logo" class="h-12 w-12">
        </div>

        <!-- Title -->
        <h2 class="text-2xl font-bold text-center text-drosera-orange mb-4">
          Create your Drosera Art account
        </h2>

        <!-- Continue with X -->
        <button id="x-login-btn"
          class="w-full flex items-center justify-center gap-2
                 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 24 24">
            <path d="M18.244 2H21.5l-7.748 8.876L22 22h-4.756l-6.05-7.31L4.8 22H1.5l8.268-9.465L2 2h4.755l5.683 6.875L18.244 2z"/>
          </svg>
          Continue with X
        </button>

        <div class="text-center text-sm text-gray-400 my-4">— or —</div>

        <!-- Sign-Up form -->
        <form id="signup-form" class="space-y-4">
          <input type="text" id="signup-name"
                 placeholder="Name"
                 class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-drosera-orange" />

          <input type="email" id="signup-email"
                 placeholder="Email"
                 class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-drosera-orange" />

          <input type="password" id="signup-pass"
                 placeholder="Password"
                 class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-drosera-orange" />

          <button type="submit"
                  class="w-full bg-drosera-orange text-white py-2 rounded hover:opacity-90 transition">
            Sign Up
          </button>
        </form>

        <p class="text-center text-sm mt-4">
          Already have an account?
          <button id="goto-signin" class="text-drosera-orange underline">Sign In</button>
        </p>
      </div>
    </div>
  `;

  // Handle form submission with validation
  container.querySelector('#signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = container.querySelector('#signup-name').value.trim();
    const email = container.querySelector('#signup-email').value.trim();
    const password = container.querySelector('#signup-pass').value.trim();

    if (!name) {
      alert('Please enter your name.');
      return;
    }
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    setUserSession({ email, name });
    alert('Account created successfully!');
    window.navigate('profile');
  });

  container.querySelector('#goto-signin').addEventListener('click', () => {
    window.navigate('signin');
  });

  container.querySelector('#x-login-btn').addEventListener('click', () => {
    alert('X login coming soon.');
  });
}
