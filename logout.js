(async () => {
  await fetch('http://localhost:4000/users/logout', {
    credentials: 'include',
    method: 'POST',
  });
  location.href = "index.html";
})().catch(console.error);