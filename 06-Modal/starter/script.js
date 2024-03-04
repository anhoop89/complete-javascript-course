'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

<<<<<<< HEAD
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let x = 0; x < btnOpenModal.length; x++) {
  btnOpenModal[x].addEventListener('click', function () {
    console.log('Button clicked: ', btnOpenModal[x].textContent);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
=======
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
>>>>>>> b03e9949e14501126a3308f696a3f02af7bf3646
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

<<<<<<< HEAD
=======
// escape - keyboard event
// e stands for event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('A key was pressed!', e.key);
    console.log('escape key to close the modal');
    closeModal();
  }
});
>>>>>>> b03e9949e14501126a3308f696a3f02af7bf3646
