'use strict';

const btnOne = document.querySelector('.js_btnOne');
const btnTwo = document.querySelector('.js_btnTwo');

btnOne.addEventListener('click', (ev) => {
  // Cambiar el estilo del botón pulsado

  ev.currentTarget.classList.toggle('form__btn');
});

btnTwo.addEventListener('click', (ev) => {
  // Cambiar el estilo del botón pulsado

  ev.currentTarget.classList.toggle('form__btn');
});