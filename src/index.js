import './style.css';
import './modules/tools.js';

const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const toggleModal = () => {
  modal.classList.toggle('invisible');
};
close.onclick = () => toggleModal();
