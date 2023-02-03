import getDogs from './api.js';

const display = async () => {
  const data = await getDogs();
  const cardsCont = document.querySelector('.cards_container');
  data.forEach((e) => {
    cardsCont.innerHTML += `
      <div id="${e.id}" class="card">
        <img src='${e.url}' class="card_image" alt="dog image" />
        <div class="card_body">
          <h2 class="card_title">Breed ${e.id}</h2>
          <div class="like_container">
            <span class="like material-symbols-outlined">favorite</span>
            <p class="like_text">5 likes</p>
          </div>
        </div>
        <div class="buttons_container">
          <button class="comment btn">Comments</button>
          <button class="reservation btn">Reservations</button>
        </div>
        
      </div>`;
  });
};

window.onload = () => display();
