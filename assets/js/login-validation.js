import { showErrorMsg } from "./register-validation.js";

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
