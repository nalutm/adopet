//Como tenho diversos inputs, é interessante criar um objeto em que correlaciono o tipo de input à sua validação 

const errorTypes = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
];

//objeto que vai guardar todas as mensagens de erro para mostrar de acordo com o tipo de erro e também conforme o tipo de input

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
    patternMismatch: 'A senha deve conter entre 6 a 10 caracteres, deve conter pelo menos uma letra maiúscula, um número e um símbolo.'
  },
  confirmPassword: {
    valueMissing: 'O campo de confirmar a senha não pode estar vazio',
    customError: 'A senha não está igual.'
  }
}

const validators = {
  // email: input =>  validate(input),
  confirmPassword: input => validatePassword(input)
}

//Função genérica que será chamada para todos os inputs e fazer uma verificação em relação a qual é o tipo de input para saber qual verificação chamar 

export function validate(input, div) {
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

function showErrorMsg(inputType, input) {
  let msg = '';
  errorTypes.forEach(errorType => {
    if (input.validity[errorType]) {
      msg = errorMsg[inputType][errorType];
    }
  })

  return msg;
}
