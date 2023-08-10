import { stateType, boardState, remainingFlips } from "./_variables";

export const deleteCorrectCards = () => {
  const flippedCards = document.querySelectorAll(
    ".is-flipped"
  ) as NodeListOf<HTMLElement>;

  boardState.cardsFlipped = 0;
  setTimeout(() => {
    flippedCards.forEach((card) => {
      card.style.transition = "opacity 0.5s ease";
      card.style.opacity = "0";
      card.classList.add("deleted-card");
      card.classList.remove("is-flipped");
      boardState.checking = false;
    });
  }, 1500);
};

export const wrongGuess = () => {
  const flippedCards = document.querySelectorAll(
    ".is-flipped"
  ) as NodeListOf<HTMLElement>;

  if (!remainingFlips) {
    throw new Error("what could possibly go wrong");
  }
  boardState.cardsFlipped = 0;
  boardState.flips += 2;
  remainingFlips.innerText = `Guesses Remaining ${10 - boardState.flips / 2}`;
  setTimeout(() => {
    flippedCards.forEach((card) => {
      card.classList.remove("is-flipped");
      boardState.checking = false;
    });
  }, 1500);
};
