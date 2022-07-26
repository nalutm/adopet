const errorTypes = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
];

const errorMsg = {
  email: {
    valueMissing: 'O campo de email não pode estar vazio.',
    typeMismatch: 'O email não é válido.'
  },
  name: {
    valueMissing: 'O campo de nome não pode estar vazio'
  },
  password: {
    valueMissing: 'O campo de senha não pode estar vazio',
    patternMismatch: 'A senha deve conter entre 6 a 10 caracteres, deve conter pelo menos uma letra maiúscula, um número e um símbolo.',
    customError: 'Usuário ou senha inválidos.'
  },
  confirmPassword: {
    valueMissing: 'O campo de confirmar a senha não pode estar vazio',
    customError: 'A senha não está igual.'
  }
}

const validators = {
  confirmPassword: input => validatePassword(input)
}

export function validate(input) {
  const inputType = input.dataset.input;

  if (validators[inputType]) {
    validators[inputType](input);
  }

  if (input.validity.valid) {
    input.classList.remove('input--invalid');
    input.nextElementSibling.classList.remove('active');
  } else {
    input.classList.add('input--invalid');
    input.nextElementSibling.classList.add('active');
    input.nextElementSibling.innerHTML = showErrorMsg(inputType, input);
  }
}

function validatePassword(input) {
  const password = document.querySelector('[data-input="password"]').value;
  let msg = '';

  if (input.value && input.value !== password) {
    msg = 'A senha não é igual';
  } 

  input.setCustomValidity(msg);
}

export function showErrorMsg(inputType, input) {
  let msg = '';
  errorTypes.forEach(errorType => {
    if (input.validity[errorType]) {
      msg = errorMsg[inputType][errorType];
    }
  })

  return msg;
}
