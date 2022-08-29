import { clientService } from "../service/client-service.js";

const $form = document.querySelector('[data-form]');

export const submitForm = () => {
  $form.addEventListener('submit', (e) => {
    createProfile(e);
    $form.reset();
  });
}  

function createProfile(e) {
  e.preventDefault();
  const email = e.target.querySelector('[data-input="email"]').value;
  const name =  e.target.querySelector('[data-input="name"]').value;
  const password =  e.target.querySelector('[data-input="password"]').value;

  clientService.newProfile(email, name, password)
  // .then(() => window.location.href = '../../../home.html');

}