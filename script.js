// This demo does not send, store, or check passwords.
const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  message.textContent = 'This is a demo login screen. Account authentication is not connected yet.';
  document.getElementById('password').value = '';
});
