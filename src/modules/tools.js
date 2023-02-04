import getDog from './api.js';

const idArr = ['q8XC_2pym', 'BkrJjgcV7', 'ajJCO_lDC', 'SJyBfg5NX', 'r1ifZl5E7', 'pSoC1qW8n'];

const displayDogs = async () => {
  const cardsCont = document.querySelector('.cards_container');
  idArr.forEach(async (e) => {
    const dog = await getDog(e);
    cardsCont.innerHTML += `
      <card id="${dog.id}" class="card">
        <img src='${dog.url}' class="card_image" alt="dog image" />
        <div class="card_body">
          <h2 class="card_title">${dog.breeds[0].name}</h2>
          <div class="like_container">
            <span class="like material-symbols-outlined">favorite</span>
            <p class="like_text">5 likes</p>
          </div>
        </div>
        <div class="buttons_container">
          <button class="comment btn">Comments</button>
          <button class="reservation btn">Reservations</button>
        </div>
      </card>`;
  });
};

displayDogs();

const showDogcomments = async (id) => {
  const dog = await getDog(id);
  const modal = document.querySelector('.modal_body_container');
  modal.innerHTML = '';
  modal.innerHTML += `
    <img class="modal_img" src="${dog.url}" alt="Dog photo" />
    <h2 class="dog_breed">${dog.breeds[0].name}</h2>
    <ul class="perks_list">
      <li class="perks_list_li">Weight:  ${dog.breeds[0].weight.imperial} kg</li>
      <li class="perks_list_li">Height:  ${dog.breeds[0].height.metric} cms</li>
      <li class="perks_list_li_s">Temperament: ${dog.breeds[0].temperament}</li>
    </ul>
    <div class="comments">
      <h3>Comments</h3>
      <p>()</p>
    </div>
    <ul class="comments_list"></ul>
    <h3 class="add_comment" >Add a comment</h3>
    <form class="form" action="">
      <input placeholder="Your name" type="text">
      <textarea placeholder="Your insights"></textarea>
      <button class="commentz btn">Comment</button>
    </form>`;
};

const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const toggleModal = () => {
  modal.classList.toggle('invisible');
};
close.onclick = () => toggleModal();

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
setTimeout(() => {
  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((e) => {
    e.onclick = () => {
      const { id } = e.parentElement.parentElement;
      toggleModal();
      showDogcomments(id);
    };
  });
  const reservationBtns = document.querySelectorAll('.reservation');
  reservationBtns.forEach((e) => {
    e.onclick = () => toggleModal();
  });
}, 1500);