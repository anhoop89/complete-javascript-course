'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

for (const x in btnOpenModal) {
    btnOpenModal[x].addEventListener('click', function () {
        console.log('Button clicked: ', btnOpenModal[x].textContent);
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    const closeModal = function () {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    };

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}

