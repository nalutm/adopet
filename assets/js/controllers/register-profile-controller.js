import { clientService } from "../service/client-service.js";
import { validate } from "../register-validation.js";
import { showPassword } from "../show-password.js"; 

const inputs = document.querySelectorAll('[data-input]');
inputs.forEach(input => input.addEventListener('focusout', (e) => validate(e.target)));

const passwordIcons = document.querySelectorAll('[data-password="container"]');
passwordIcons.forEach(passwordIcon => passwordIcon.addEventListener('click', (e) => {
  showPassword(e);
}))

const $form = document.querySelector('[data-form]');

(() => {
  $form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const email = e.target.querySelector('[data-input="email"]').value;
      const name =  e.target.querySelector('[data-input="name"]').value;
      const password =  e.target.querySelector('[data-input="password"]').value;

      await clientService.newProfile(email, name, password);
    } catch(err) {
      console.log(err);
      alert('Desculpe! Não foi possível criar o perfil! Tente novamente mais tarde!');
    }
    $form.reset();
  });
})();  
