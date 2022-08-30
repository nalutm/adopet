export const changeProfileAvatar = () => {
  const avatarInput = document.querySelector('[data-profile="avatar"]');
  const avatarImgs = document.querySelectorAll('[data-profile]');

  avatarInput.addEventListener('change', function (evt) {
    if (!(evt.target && evt.target.files && evt.target.files.length > 0)) {
      return;
    }
    // Inicia o file-reader:
    let r = new FileReader();
    // Define o que ocorre quando concluir:
    r.onload = function () {
      // Define o `src` do elemento para o resultado:
      avatarImgs.forEach(avatarImg => avatarImg.src = r.result);
    }
    // Lê o arquivo e cria um link (o resultado vai ser enviado para o onload.
    r.readAsDataURL(evt.target.files[0]);

  });
}