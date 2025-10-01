export function renderSignIn(container) {
const div = document.createElement('div');
div.className = 'p-4';
div.innerHTML = `
<h2 class="text-xl font-bold mb-2">Sign In</h2>
<input type="text" placeholder="Email" class="border w-full p-2 mb-2" />
<input type="password" placeholder="Password" class="border w-full p-2 mb-2" />
<button class="bg-drosera-orange text-white px-4 py-2 rounded">Sign In</button>
<p class="mt-2 text-sm">No account? <a href="#" id="toCreate" class="text-drosera-orange">Create one</a></p>
`;
container.appendChild(div);


div.querySelector('#toCreate').addEventListener('click', e => {
e.preventDefault();
alert('Switch to create account form (not yet implemented)');
});
}