import { showErrorMsg } from "./register-validation.js";

// const errorTypes = [
//   'valueMissing',
//   'typeMismatch',
// ];

// const errorMsg = {
//   email: {
//     valueMissing: 'O campo de email não pode estar vazio.',
//     typeMismatch: 'O email não é válido.',
//   },
//   password: {
//     valueMissing: 'O campo de senha não pode estar vazio',
//   }
// }

export function validate(input) {
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
