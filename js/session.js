// js/session.js
export function getUserSession() {
  return JSON.parse(localStorage.getItem('drosera_user')) || null;
}

export function setUserSession(user) {
  localStorage.setItem('drosera_user', JSON.stringify(user));
}

export function clearUserSession() {
  localStorage.removeItem('drosera_user');
}

export function isLoggedIn() {
  return !!getUserSession();
}
