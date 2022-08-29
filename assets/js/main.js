import { validate } from "./valitation.js";
import { showPassword } from "./show-password.js"; 
import { clientService } from "./service/client-service.js";
import { submitForm } from "./controllers/register-profile-controller.js";

const inputs = document.querySelectorAll('[data-input]');

inputs.forEach(input => input.addEventListener('focusout', (e) => validate(e.target)));

const passwordIcons = document.querySelectorAll('[data-password="container"]');

passwordIcons.forEach(passwordIcon => passwordIcon.addEventListener('click', (e) => {
  showPassword(e);
}))

clientService.httpRequest();

submitForm();