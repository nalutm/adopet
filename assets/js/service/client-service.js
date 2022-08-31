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
  .then(r => {
    if (r.ok) return r.body;
    throw new Error('Não foi possível criar o perfil.')
  });
}

const validateNewProfile = () => {
  return fetch('http://localhost:3000/profile')
  .then(r => {
    if (r.ok) return r.json();
    throw new Error('Não foi possível realizar o cadastro.')
  });
}

const validateLogin = () => {
  return fetch('http://localhost:3000/profile')
  .then(r => {
    if (r.ok) return r.json();
    throw new Error('Não foi possível realizar o login.')
  });
}

const animalList = () => {
  return fetch(`http://localhost:3000/animal`)
  .then(r => {
    if (r.ok) return r.json();
    throw new Error('Não foi possível listar os animais.')
  });
}

export const clientService = {
  newProfile,
  validateLogin,
  animalList,
  validateNewProfile
}