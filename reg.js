var loginButton = document.querySelector('.log-in .field button');
var passwordField = document.querySelector('#password');
var loginField = document.querySelector('#text');

loginButton.addEventListener('click', function() {

  (async () => {
    await fetch('http://localhost:4000/users/login', {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login: loginField.value, password: passwordField.value }),
    });
    location.href = "index.html";
  })().catch(console.error);
});
