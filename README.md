# Javascript Game Project

## Requirements

- To create a game using what we have learned during our time at \_nology. This includes using TypeScript, HTML, SCSS and more.
- The code must be our own work, using code made by others for this project was not allowed

## Key Features

- The game is a memory game, whereby the user picks cards two at a time and if they are correct it deletes them from the grid until all are gone. If the
  user selects incorrect cards it flips the cards back over for the user to try again.

- In this game there are a number of functions which I am proud of but I will draw your attention to addCardListeners. Though this function is still quite large it is the central hub for a number of smaller functions. I refactored this function many times. I learned how to include globally scoped variables as without them I couldn't refactor.

```typescript
export const addCardListeners = (value: NodeListOf<HTMLElement>) => {
  if (!remainingFlips) {
    throw new Error("what could possibly go wrong");
  }

  value.forEach((card) => {
    card.addEventListener("click", () => {
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
```

- Another function that challenged me was wrongGuess. I had to learn how to use setTimeout to allow for transitions in the card animations. Learning the correct order of code to make sure I was using my variables correctly was also a challenge.

```typescript
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
```

## Notes

- I strived to make a game that had a solid foundation for me to work on when I have additional time. During this project I lost count of the number of times a small bug cost me an hour or two and delayed getting to additional features that I want to implement.

- If you have any notes on this project that would help me improve feel free to contact me.
