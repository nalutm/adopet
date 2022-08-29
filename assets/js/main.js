import { validate } from "./valitation.js";
import { showPassword } from "./show-password.js";

const inputs = document.querySelectorAll('[data-input]');

inputs.forEach(input => input.addEventListener('blur', (e) => validate(e.target, e.target.parentNode.parentNode)));

const passwordIcons = document.querySelectorAll('[data-password="container"]');

passwordIcons.forEach(passwordIcon => passwordIcon.addEventListener('click', (e) => {
  showPassword(e);
}))