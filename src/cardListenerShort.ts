import {
  boardState,
  remainingFlips,
  cardContainer,
  gameContainer,
  backup,
  gamesWon,
} from "./_variables";

export const cleanSlate = () => {
  if (!cardContainer || !remainingFlips) {
    throw new Error("what could possibly go wrong");
  }
  cardContainer.innerHTML = "";
  boardState.cardsFlipped = 0;
  boardState.flips = 0;
  remainingFlips.innerText = `Guesses Remaining ${10 - boardState.flips / 2}`;
  boardState.correctGuess = 0;
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
  if (!cardContainer || !remainingFlips || !gameContainer) {
    throw new Error("what could possibly go wrong");
  }

  const guessCounter = 10 - boardState.flips / 2;

  if (guessCounter <= 0) {
    if (!backup || !gamesWon) {
      throw new Error("what could possibly go wrong");
    }
    cleanSlate();
    cardContainer.innerHTML = "";
    backup.classList.toggle("board-container");
    const gameLossDiv = document.createElement("div");
    gameLossDiv.className = "game-loss";
    gameLossDiv.innerText = "😔  Game Over  😔";
    boardState.gamesWon = 0;
    gamesWon.innerText = `Win Streak: ${boardState.gamesWon}`;
    backup.appendChild(gameLossDiv);
  }

  if (boardState.correctGuess == 8) {
    if (!backup || !gamesWon) {
      throw new Error("what could possibly go wrong");
    }

    cleanSlate();
    cardContainer.innerHTML = "";
    backup.classList.toggle("board-container");
    const gameWinDiv = document.createElement("div");
    gameWinDiv.className = "game-win";
    gameWinDiv.innerText = "🎉  You're a winner  🎉";
    boardState.gamesWon += 1;
    gamesWon.innerText = `Win Streak: ${boardState.gamesWon}`;
    backup.appendChild(gameWinDiv);
  }
};
