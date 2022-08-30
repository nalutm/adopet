import {
  clientService
} from "../service/client-service.js";

const createNewLi = (name, age, size, temper, city, id) => {
  const newAnimalLi = document.createElement('li');
  const content = ` <li class="animal-card">
                      <img src="./assets/img/animals/animal${id}.png" alt="Gata ${name}" class="animal-card__img">
                      <div class="animal-card__text">
                        <h2 class="animal-card__title">${name}</h2>
                        <ul class="animal-card__description">
                          <li>${age}</li>
                          <li>${size}</li>
                          <li>${temper}</li>
                        </ul>
                      <span class="animal-card__city">${city}</span>
                      <div class="animal-card__message">
                        <a href="#"><img src="./assets/img/icons/message-icon.svg" alt="Ícone de mensagem"></a>
                        <span class="animal-card__message-text">Falar com o responsável</span>
                      </div>
                    </li>`
  newAnimalLi.innerHTML = content;
  newAnimalLi.dataset.id = id;
  return newAnimalLi;
}

const list = document.querySelector('[data-animal="list"]');

(async () => {
  try {
    const animalList = await clientService.animalList();
    animalList.forEach(element => {
      list.appendChild(createNewLi(element.name, element.age, element.size, element.temper, element.city, element.id))
    });
    console.log(animalList);
  } catch(err) {
    console.log(err);
    alert('Desculpe! Não foi possível listar os animais! Tente novamente mais tarde!');
  }
})();