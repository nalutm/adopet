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

const animalList = () => {
  return fetch(`http://localhost:3000/animal`)
  .then(r => {
    if (r.ok) return r.json();
    throw new Error('Não foi possível listar os animais!')
  });
}

export const clientService = {
  newProfile,
  validateLogin,
  animalList
}