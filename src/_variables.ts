//only export variables

export type stateType = {
  cardsFlipped: number;
  flips: number;
  checking: boolean;
  correctGuess: number;
};

export const boardState: stateType = {
  cardsFlipped: 0,
  flips: 0,
  checking: false,
  correctGuess: 0,
};

export const cardContainer =
  document.querySelector<HTMLElement>(".board-container");

export const cards = document.querySelectorAll<HTMLElement>(".card");
export const startButton =
  document.querySelector<HTMLButtonElement>(".start-button");

export const remainingFlips =
  document.querySelector<HTMLElement>(".remaining-flips");
