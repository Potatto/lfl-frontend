var loginButton = document.querySelector('#log');
var headerContainer = document.querySelector('.header .container');

(async () => {
  const response = await fetch('http://localhost:4000/users/me', {
    credentials: 'include',
  });
  const me = await response.json();

  if (me.username) {
    console.log("ZALOGOWANY!");
    loginButton.innerText = "Wyloguj";
    loginButton.setAttribute("href", "logout.html");

    var usernameDiv = document.createElement('div');
    usernameDiv.innerText = me.username;
    usernameDiv.className = 'username';
    headerContainer.appendChild(usernameDiv);
  } else {
    console.log("NIEZALOGOWANY!");
  }
})().catch(console.error);