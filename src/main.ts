import "./style .css";

const cards = document.querySelectorAll<HTMLElement>(".card");
const cardContainer = document.querySelector<HTMLElement>(".board-container");
const startButton = document.querySelector(".start-button");

if (!cards || !startButton || !cardContainer) {
  throw new Error("what could possibly go wrong");
}

const addCardListeners = (value: NodeListOf<HTMLElement>) => {
  value.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
      console.log("we are trying");
    });
  });
};

const create16Cards = () => {
  cardContainer.innerHTML = "";
  for (let i = 0; i < 16; i++) {
    const cardHTML = `<div class="card">
      <div class="card__side card__side--front">
        ${i + 1}
      </div>
      <div class="card__side card__side--back">
        back
      </div>
    </div>`;
    const cardElement = document.createElement("div");
    cardElement.innerHTML = cardHTML;
    cardContainer.appendChild(cardElement);
  }

  const cards = document.querySelectorAll<HTMLElement>(".card");

  if (!cards) {
    throw new Error("what could possibly go wrong");
  }

  addCardListeners(cards);
};

startButton.addEventListener("click", create16Cards);
