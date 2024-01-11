'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

const openModal = function () {
  console.log('open the modal');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let x = 0; x < btnOpenModal.length; x++) {
  console.log('loop');
  btnOpenModal[x].addEventListener('click',openModal);
}


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
