// board

/*----------------------- variables -------------------*/
const deck = [
  { suits: ["heart", "diamond", "club", "spade"] },
  {
    ranks: [
      "ace","2","3", "4","5","6", "7","8","9", "10","jack", "queen","king",],
  },
  { values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
];

const suits = deck[0].suits;
const ranks = deck[1].ranks;
const values = deck[2].values;

let newDeck = [];
let playerDeck = [];
let computerDeck = [];
let playerCard =[];
let computerCard =[];

/*----------------------- Element references -------------------*/
const msgEl = document.querySelector("#msg");
const playEl = document.querySelector("#play-btn");
const dealEl = document.querySelector("#deal-cards");
const drawCardEl = document.querySelector("#draw-card");
// display elements for deck size
const computerEl = document.querySelector("#computer");
const playerEl = document.querySelector("#player");

/*----------------------- Functions ----------------------------*/

// initializes the board, deck and updates the board/Message
const init = () =>{
  board
}

const dealCards = () => {
  createDeck();
  shuffleDeck(newDeck);
  // console.log(newDeck);
  splitDeck();
  deckSize();
};

const playGame = () =>{
  drawCards();
}

const resetGame = () =>{

}

/* ------ Deck Functions ------ */


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
  // fisher yates shuffle algorithm
  for (let i = deck.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

const splitDeck = () => {
  playerDeck = newDeck.slice(0, 26);
  computerDeck = newDeck.slice(26, 52);
  console.log('Player Deck:',playerDeck);
  console.log('Computer Deck:',computerDeck);
};

// updates what the deck shows on the dom for each player
const deckSize = () => {
  playerEl.textContent = playerDeck.length;
  computerEl.textContent = computerDeck.length;
};


/* ------- game logic function ------*/

// draw cards
const drawCards = () => {
  playerCard = playerDeck.shift();
  
  console.log('Player Card:',playerCard);
  console.log('Player Deck:',playerDeck);
  computerCard = computerDeck.shift();
  console.log('Computer Card:', computerCard);
  console.log('Computer Deck:', computerDeck);
  deckSize();
}

const simpleGameLogic = () => {
  // if playerCard > compCard
  
  // add both card to bottom of playerdeck and subtract compCard from CompDeck

};





/*----------------------- Event Listeners ----------------------------*/
dealEl.addEventListener("click", dealCards);
// playEl.addEventListener("click", playGame);
drawCardEl.addEventListener("click", playGame);





/* ----- guide ---- */



// create a deck of cards
// shuffles it


// split the deck of cards in half
  // show number of cards for each player on DOM
  // update Message to say hit play button

// press play
// draws a card and updates it in the DOM(board)
// if player > comp or comp > player give the 2 cards to whoever won
  // update Message "player or comp WON round"
  // adds the two cards to the back of the deck and subracts the card from the loser

  // if cards are === value slice out 3 more cards and compare the 3rd card
  // if player > comp or comp > player give the 2 cards to whoever won
  // update Message "player or comp WON round"
  // adds the all cards to the back of the deck and subracts the cards from the loser


  // if player or computer has no more cards update message player or computer Wins Game