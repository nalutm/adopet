function httpRequest() {
  return fetch('http://localhost:3000/profile').then(r => r.json()).then(r => console.log(r));
}

function newProfile(email, name, password) {
  return fetch('http://localhost:3000/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password
    })
  })
  .then(r => r.body);
}

export const clientService = {
  httpRequest,
  newProfile
}