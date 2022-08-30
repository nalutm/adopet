import { changeProfileAvatar } from "./change-profile-avatar.js";

changeProfileAvatar();

const errorTypes = [
  'valueMissing',
  'patternMismatch',
];

const errorMsg = {
  name: {
    valueMissing: 'O campo de nome não pode estar vazio'
  },
  phone: {
    valueMissing: 'O campo de telefone não pode estar vazio',
    patternMismatch: 'O número de telefone não é válido'
  },
  city: {
    valueMissing: 'O campo de cidade não pode estar vazio'
  },
  message: {
    valueMissing: 'O campo de mensagem não pode estar vazio'
  }
}

function validate(input) {
  const inputType = input.dataset.input;

  if (input.validity.valid) {
    input.classList.remove('input--invalid');
    input.nextElementSibling.classList.remove('active');
  } else {
    input.classList.add('input--invalid');
    input.nextElementSibling.classList.add('active');
    input.nextElementSibling.innerHTML = showErrorMsg(inputType, input);
  }
}

function showErrorMsg(inputType, input) {
  let msg = '';
  errorTypes.forEach(errorType => {
    if (input.validity[errorType]) {
      msg = errorMsg[inputType][errorType];
    }
  })

  return msg;
}

const inputs = document.querySelectorAll('[data-input]');
inputs.forEach(input => input.addEventListener('focusout', (e) => validate(e.target)));
