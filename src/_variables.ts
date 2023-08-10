//only export variables

export type stateType = {
  gameStart: boolean;
  cardsFlipped: number;
  flips: number;
  checking: boolean;
};

export const boardState: stateType = {
  gameStart: false,
  cardsFlipped: 0,
  flips: 0,
  checking: false,
};

export const cardContainer =
  document.querySelector<HTMLElement>(".board-container");

export const cards = document.querySelectorAll<HTMLElement>(".card");
export const startButton =
  document.querySelector<HTMLButtonElement>(".start-button");

export const remainingFlips =
  document.querySelector<HTMLElement>(".remaining-flips");
