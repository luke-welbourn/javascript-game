import { stateType, boardState } from "./_variables";

export const deleteCorrectCards = () => {
  const flippedCards = document.querySelectorAll(
    ".is-flipped"
  ) as NodeListOf<HTMLElement>;

  const firstCard = flippedCards[0];
  const secondCard = flippedCards[1];

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
