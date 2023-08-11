import { deleteCorrectCards, wrongGuess } from "./cardListenerShort";

import { boardState, remainingFlips } from "./_variables";

// addCardListeners adds event listeners, so changes what happens when a card is pressed.

export const addCardListeners = (value: NodeListOf<HTMLElement>) => {
  if (!remainingFlips) {
    throw new Error("what could possibly go wrong");
  }

  value.forEach((card) => {
    // adds event listener to each card containing all the following effects on click
    card.addEventListener("click", () => {
      // code to stop users once two cards has been picked
      if (boardState.checking == true) {
        return;
      } else {
        boardState.checking = true;
      }

      // check if the card is already flipped, if so ignore
      if (card.classList.contains("is-flipped")) {
        boardState.checking = false;
        return;
      }

      //defining needed variables

      card.classList.add("is-flipped");
      boardState.cardsFlipped += 1;

      const flippedCards = document.querySelectorAll(
        ".is-flipped"
      ) as NodeListOf<HTMLElement>;

      const firstCard = flippedCards[0];
      const secondCard = flippedCards[1];

      // if two cards have been flipped check the following

      if (boardState.cardsFlipped === 2) {
        if (firstCard.innerHTML === secondCard.innerHTML) {
          deleteCorrectCards();
        } else {
          wrongGuess();
        }
      } else {
        boardState.cardsFlipped == 0;
        boardState.checking = false;
        return;
      }
    });
  });
};
