export function showPassword(e) {
  const showPasswordIcon = e.target.dataset.password; 
  if (showPasswordIcon === 'icon' ) {
    const password = e.target.nextElementSibling;
    const inputType = password.getAttribute('type');
    if (inputType === 'password') {
      password.setAttribute('type', 'text')
    } else {
      password.setAttribute('type', 'password')
    }
  }
}