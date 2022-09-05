import { clientService } from "../service/client-service.js";
import { validate } from "../login-validation.js";
import { showPassword } from "../show-password.js";

const inputs = document.querySelectorAll('[data-input]');
inputs.forEach(input => input.addEventListener('focusout', (e) => validate(e.target)));

const submitBtn = document.querySelector('[data-form="submit"]');
submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  try {
    const email = document.querySelector('[data-input="email"]');
    const password = document.querySelector('[data-input="password"]');
    const profiles = await clientService.validateLogin();
    const profile = profiles.some((profile) => profile.email === email.value && profile.password === password.value)
    if(!profile) {
      setErrorMsg(password);
      validate(password);
      email.classList.add('input--invalid');
    } else {
      console.log('Login realizado com sucesso!');
      window.location.href = '/pages/home.html';
    }
  } catch(err) {
    console.log(err);
    alert('Desculpe! Não foi possível realizar o login! Tente novamente mais tarde!');
  }
});

const showPasswordIcon = document.querySelector('[data-password="icon"]');

showPasswordIcon.addEventListener('click', (e) => {
  showPassword(e);
})

function setErrorMsg(input) {
  const msg = 'Usuário ou senha inválido'

  input.setCustomValidity(msg);
}
