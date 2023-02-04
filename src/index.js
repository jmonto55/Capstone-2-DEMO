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
    e.onclick = () => {
      const { id } = e.parentElement.parentElement;
      console.log(id);
      toggleModal();
    //   showDogcomments(id);
    };
  });
  const reservationBtns = document.querySelectorAll('.reservation');
  reservationBtns.forEach((e) => {
    e.onclick = () => toggleModal();
  });
}, 1500);

const navBar = document.querySelector('.nav_list');
const burger = document.querySelector('.burger');
const closeM = document.querySelector('.close_m');

const openNav = () => {
  navBar.style.display = 'flex';
};

const closeNav = () => {
  navBar.style.display = 'none';
};

burger.onclick = () => openNav();

closeM.onclick = () => closeNav();