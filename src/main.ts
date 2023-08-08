import "./style .css";

const cards = document.querySelectorAll<HTMLElement>(".card");
const cardContainer = document.querySelector<HTMLElement>(".board-container");
const startButton = document.querySelector<HTMLButtonElement>(".start-button");
const remainingFlips = document.querySelector<HTMLElement>(".remaining-flips");

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

if (!cards || !startButton || !cardContainer || !remainingFlips) {
  throw new Error("what could possibly go wrong");
}

// addCardListeners adds event listeners, so changes what happens when a card is pressed.
// already becoming the largest function in the game, will need refactoring

const addCardListeners = (value: NodeListOf<HTMLElement>) => {
  value.forEach((card) => {
    card.addEventListener("click", () => {
      // adds event listener to each card containing all the following effects on click
      card.classList.toggle("is-flipped");
      boardState.flips += 1;
      boardState.cardsFlipped += 1;
      console.log(boardState.flips);
      remainingFlips.innerText = `Flips Remaining ${20 - boardState.flips}`;

      const flippedCards = document.querySelectorAll(
        ".is-flipped"
      ) as NodeListOf<HTMLElement>;

      const firstCard = flippedCards[0];
      const secondCard = flippedCards[1];

      if (boardState.cardsFlipped === 2) {
        // if two cards have been flipped check the following

        if (firstCard.innerHTML === secondCard.innerHTML) {
          setTimeout(() => {
            flippedCards.forEach((card) => {
              card.style.transition = "opacity 0.5s ease";
              card.style.opacity = "0";
              card.classList.add("deleted-card");
              card.classList.remove("is-flipped");
            });
          }, 1500);
          boardState.cardsFlipped = 0;
        } else {
          setTimeout(() => {
            flippedCards.forEach((card) => {
              card.classList.remove("is-flipped");
              boardState.cardsFlipped = 0;
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

// function that creates the cards for each round, must add in template literal for card icons at this stage

const emojiArr: string[] = ["🌟", "🌙", "🌵", "🌸", "🍁", "🍏", "🍒", "🎉"];

const shuffleArr = (value: string[]) => {
  const arrCopy = value;
  // Fisher-Yates shuffle to randomize the order
  for (let i = arrCopy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrCopy[i], arrCopy[randomIndex]] = [arrCopy[randomIndex], arrCopy[i]];
  }
  return arrCopy;
};

const create16Cards = () => {
  cardContainer.innerHTML = "";

  const emojiPairs: string[] = [...emojiArr, ...emojiArr]; // create a long array of 16 emojis (paired)
  const shuffledEmojiPairs = shuffleArr(emojiPairs);

  for (let i = 0; i < 16; i++) {
    const emoji = shuffledEmojiPairs[i]; // create the cards 1 by 1 in parallel to the paired emoji Arr
    const cardHTML = `<div class="card">
      <div class="card__side card__side--front">
      
      </div>
      <div class="card__side card__side--back">
      ${emoji}
      </div>
    </div>`;
    const cardElement = document.createElement("div");
    cardElement.innerHTML = cardHTML;
    cardContainer.appendChild(cardElement);
  }

  const cards = document.querySelectorAll<HTMLElement>(".card");

  if (!cards) {
    throw new Error("what could possibly go wrong");
  }

  addCardListeners(cards);
};

startButton.addEventListener("click", create16Cards); // code for start button

// good work so far, now for the game state object
