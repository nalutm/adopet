const newProfile = (email, name, password) => {
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

const validateLogin = () => {
  return fetch('http://localhost:3000/profile')
  .then(r => r.json());
}

export const clientService = {
  newProfile,
  validateLogin
}