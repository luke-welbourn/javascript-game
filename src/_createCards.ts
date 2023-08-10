export const cardCreator = () => {
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

  const cardContainer = document.querySelector<HTMLElement>(".board-container");

  if (!cardContainer) {
    throw new Error("what could possibly go wrong");
  }

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
};
