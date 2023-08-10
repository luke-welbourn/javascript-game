import {
  stateType,
  boardState,
  remainingFlips,
  cardContainer,
} from "./_variables";

export const cleanSlate = () => {
  if (!cardContainer || !remainingFlips) {
    throw new Error("what could possibly go wrong");
  }

  cardContainer.innerHTML = "";
  boardState.cardsFlipped = 0;
  boardState.flips = 0;
  remainingFlips.innerText = `Guesses Remaining ${10 - boardState.flips / 2}`;
};

export const deleteCorrectCards = () => {
  const flippedCards = document.querySelectorAll(
    ".is-flipped"
  ) as NodeListOf<HTMLElement>;

  boardState.correctGuess += 1;
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

// Define a function to check the game state and handle end-game conditions
export const checkGameState = () => {
  if (!cardContainer || !remainingFlips) {
    throw new Error("what could possibly go wrong");
  }

  const guessCounter = 10 - boardState.flips / 2;
  if (guessCounter <= 0) {
    cardContainer.innerHTML = `<div class = "game-loss">Game Over</div>`;
    console.log("You lose!");
  }

  if (boardState.correctGuess == 8) {
    cardContainer.innerHTML = `<div class = "game-win">You Win</div>`;
    console.log("You win!");
  }
};
