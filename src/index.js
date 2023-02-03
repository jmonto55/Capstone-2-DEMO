import './style.css';
import './modules/tools.js';

const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const toggleModal = () => {
  modal.classList.toggle('invisible');
};
close.onclick = () => toggleModal();

setTimeout(() => {
  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((e) => {
    e.onclick = () => toggleModal();
  });
  const reservationBtns = document.querySelectorAll('.reservation');
  reservationBtns.forEach((e) => {
    e.onclick = () => toggleModal();
  });
}, 1500);
