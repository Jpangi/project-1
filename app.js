// board

/*----------------------- variables -------------------*/
const deck = [
  { suits: ["heart", "diamond", "club", "spade"] },
  {
    ranks: [
      "ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "jack",
      "queen",
      "king",
    ],
  },
  { values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
];

const suits = deck[0].suits;
const ranks = deck[1].ranks;
const values = deck[2].values;

let newDeck = [];
let playerDeck = [];
let computerDeck = [];

/*----------------------- Element references -------------------*/
const msgEl = document.querySelector("#msg");
const playEl = document.querySelector("#play");
const computerEl = document.querySelector("#computer");
const playerEl = document.querySelector("#player");

/*----------------------- Functions ----------------------------*/
const playGame = () => {
  createDeck();
  shuffleDeck(newDeck);
  // console.log(newDeck);
  splitDeck();
  deckSize();
};

// creates all the combination of suits and values for each card
const createDeck = () => {
  // loop through deck[i].suits[i] and store that in a card array
  // as an object of card : suitsRanks and value : value
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      newDeck.push({ card: `${suits[i]} ${ranks[j]}`, value: values[j] });
    }
  }
  return newDeck;
};

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

const splitDeck = () => {
  playerDeck = newDeck.slice(0, 26);
  computerDeck = newDeck.slice(26, 52);
  // console.log(playerDeck);
  // console.log(computerDeck);
};

const deckSize = () => {
  playerEl.textContent = playerDeck.length;
  computerEl.textContent = computerDeck.length;
};

const gameLogic = () => {};

/*----------------------- Event Listeners ----------------------------*/
playEl.addEventListener("click", playGame);

// game logic

// when you click on the card you update the board with the drawn card

// compare the 2 cards
// if one is bigger then they win
// if tied draw 3 more cards and compare the 4th card

// repeat until one card is bigger
