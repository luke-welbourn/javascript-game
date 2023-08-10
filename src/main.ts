import "./style .css";

import { addCardListeners } from "./_addCardListeners";

import { cardCreator } from "./_createCards";

import { cardContainer, cards, startButton } from "./_variables";

import { cleanSlate, checkGameState } from "./cardListenerShort";

// import { create16Cards } from "./_create16";

if (!cards || !startButton) {
  throw new Error("what could possibly go wrong");
}

const create16Cards = () => {
  cleanSlate();
  cardCreator();

  const cards = document.querySelectorAll<HTMLElement>(".card");

  addCardListeners(cards);
};

startButton.addEventListener("click", create16Cards); // code for start button

setInterval(checkGameState, 1000);
