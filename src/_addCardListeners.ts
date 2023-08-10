import { deleteCorrectCards } from "./cardListenerShort";

import { stateType, boardState } from "./_variables";

// addCardListeners adds event listeners, so changes what happens when a card is pressed.
// already becoming the largest function in the game, will need refactoring

export const addCardListeners = (value: NodeListOf<HTMLElement>) => {
  const remainingFlips =
    document.querySelector<HTMLElement>(".remaining-flips");

  if (!remainingFlips) {
    throw new Error("what could possibly go wrong");
  }

  value.forEach((card) => {
    card.addEventListener("click", () => {
      // adds event listener to each card containing all the following effects on click

      if (boardState.checking == true) {
        return;
      } else {
        boardState.checking = true;
      }

      card.classList.add("is-flipped");
      boardState.cardsFlipped += 1;

      const flippedCards = document.querySelectorAll(
        ".is-flipped"
      ) as NodeListOf<HTMLElement>;

      const firstCard = flippedCards[0];
      const secondCard = flippedCards[1];

      if (boardState.cardsFlipped === 2) {
        // if two cards have been flipped check the following
        if (firstCard.innerHTML === secondCard.innerHTML) {
          deleteCorrectCards();
        } else {
          boardState.cardsFlipped = 0;
          boardState.flips += 2;
          remainingFlips.innerText = `Guesses Remaining ${
            10 - boardState.flips / 2
          }`;
          setTimeout(() => {
            flippedCards.forEach((card) => {
              card.classList.remove("is-flipped");
              boardState.checking = false;
            });
          }, 1500);
        }
      } else {
        boardState.cardsFlipped == 0;
        boardState.checking = false;
        return;
      }
    });
  });
};
