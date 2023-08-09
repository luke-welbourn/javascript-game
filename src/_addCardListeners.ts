// addCardListeners adds event listeners, so changes what happens when a card is pressed.
// already becoming the largest function in the game, will need refactoring

export const addCardListeners = (value: NodeListOf<HTMLElement>) => {
  const remainingFlips =
    document.querySelector<HTMLElement>(".remaining-flips");

  if (!remainingFlips) {
    throw new Error("what could possibly go wrong");
  }

  type stateType = {
    gameStart: boolean;
    cardsFlipped: number;
    flips: number;
  };
  const boardState: stateType = {
    gameStart: false,
    cardsFlipped: 0,
    flips: 0,
  };

  value.forEach((card) => {
    card.addEventListener("click", () => {
      // adds event listener to each card containing all the following effects on click
      card.classList.toggle("is-flipped");
      boardState.cardsFlipped += 1;
      console.log(boardState.flips);
      //   remainingFlips.innerText = `Flips Remaining ${20 - boardState.flips}`;

      const flippedCards = document.querySelectorAll(
        ".is-flipped"
      ) as NodeListOf<HTMLElement>;

      const firstCard = flippedCards[0];
      const secondCard = flippedCards[1];

      if (boardState.cardsFlipped === 2) {
        // if two cards have been flipped check the following

        if (firstCard.innerHTML === secondCard.innerHTML) {
          boardState.cardsFlipped = 0;
          setTimeout(() => {
            flippedCards.forEach((card) => {
              card.style.transition = "opacity 0.5s ease";
              card.style.opacity = "0";
              card.classList.add("deleted-card");
              card.classList.remove("is-flipped");
            });
          }, 1500);
        } else {
          boardState.cardsFlipped = 0;
          boardState.flips += 2;
          remainingFlips.innerText = `Guesses Remaining ${
            10 - boardState.flips / 2
          }`;
          setTimeout(() => {
            flippedCards.forEach((card) => {
              card.classList.remove("is-flipped");
            });
          }, 1500);
        }
      } else {
        boardState.cardsFlipped == 0;
        return;
      }
    });
  });
};
