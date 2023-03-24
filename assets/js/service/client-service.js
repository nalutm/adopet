const newProfile = (email, name, password) => {
  return fetch('https://adopet-api.herokuapp.com/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
    }),
  }).then((r) => {
    if (r.ok) return r.body;
    throw new Error('Não foi possível criar o perfil.');
  });
};

const validateNewProfile = () => {
  return fetch('https://adopet-api.herokuapp.com/profile').then((r) => {
    if (r.ok) return r.json();
    throw new Error('Não foi possível realizar o cadastro.');
  });
};

const validateLogin = () => {
  return fetch('https://adopet-api.herokuapp.com/profile').then((r) => {
    if (r.ok) return r.json();
    throw new Error('Não foi possível realizar o login.');
  });
};

const animalList = () => {
  return fetch(`https://adopet-api.herokuapp.com/animal`).then((r) => {
    if (r.ok) return r.json();
    throw new Error('Não foi possível listar os animais.');
  });
};

export const clientService = {
  newProfile,
  validateLogin,
  animalList,
  validateNewProfile,
};
