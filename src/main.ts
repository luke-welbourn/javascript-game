import "./style .css";

import { addCardListeners } from "./_addCardListeners";

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
