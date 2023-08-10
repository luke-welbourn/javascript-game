import "./style .css";

import { addCardListeners } from "./_addCardListeners";

import { cardCreator } from "./_createCards";

// import { create16Cards } from "./_create16";

const cards = document.querySelectorAll<HTMLElement>(".card");
const startButton = document.querySelector<HTMLButtonElement>(".start-button");

if (!cards || !startButton) {
  throw new Error("what could possibly go wrong");
}

const create16Cards = () => {
  cardCreator();

  const cards = document.querySelectorAll<HTMLElement>(".card");

  addCardListeners(cards);
};

startButton.addEventListener("click", create16Cards); // code for start button
