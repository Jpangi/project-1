// board

/*----------------------- variables -------------------*/
const deck = [
  { suits: ["♥️", "♦️", "♣️", "♠️"] },
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
let winner = false;

/*----------------------- Element references -------------------*/
const msgEl = document.querySelector("#msg");
const playEl = document.querySelector("#play-btn");
const dealEl = document.querySelector("#deal-cards");
const drawCardEl = document.querySelector("#draw-card");
const shuffleDeckEl = document.querySelector("#shuffle-deck");
// display elements for deck size
const computerEl = document.querySelector("#computer-deck");
const playerEl = document.querySelector("#player-deck");
const playerCardEl = document.querySelector("#player-card");
const computerCardEl = document.querySelector("#computer-card");

/*----------------------- Functions ----------------------------*/
const resetGame =() =>{
  const deck = [
  { suits: ["♥️", "♦️", "♣️", "♠️"] },
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
  let winner = null;
}

// creates the deck and shuffles it and splits it in half
const initialize = (event) =>{
  createDeck();
  shuffleDeck(newDeck);
  // console.log(newDeck);
  splitDeck();
}

const playGame = () =>{
  drawCards();
  simpleGameLogic();
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
const displayCardUpdates = () =>{
  playerCardEl.textContent = playerCard.card
  computerCardEl.textContent = computerCard.card
  playerEl.textContent = playerDeck.length;
  computerEl.textContent = computerDeck.length;
}


/* ------- game logic function ------*/

// draw cards
const drawCards = () => {
  playerCard = playerDeck.shift();
  console.log('Player Card:',playerCard);
  console.log('Player Deck:',playerDeck);
  computerCard = computerDeck.shift();
  console.log('Computer Card:', computerCard);
  console.log('Computer Deck:', computerDeck);
  displayCardUpdates();
}


const simpleGameLogic = () => {
  // if playerCard > compCard
  if(playerCard.value === computerCard.value){

  }
  else if(playerCard.value > computerCard.value){
    playerDeck.push(playerCard,computerCard)
    msgEl.textContent = `you win round!`
  }else if(computerCard.value > playerCard.value ){
    computerDeck.push(playerCard,computerCard)
    msgEl.textContent = `computer wins round!`
  }else{
    console.log('error');
  }
  // add both card to bottom of playerdeck and subtract compCard from CompDeck

};




/*----------------------- Event Listeners ----------------------------*/
// dealEl.addEventListener("click", dealCards);
// playEl.addEventListener("click", playGame);
shuffleDeckEl.addEventListener("click",initialize);
drawCardEl.addEventListener("click",playGame);
drawCardEl.addEventListener("click",render);





/* ----- guide ---- */



// create a deck of cards
// shuffles it

// split the deck of cards in half
  // show number of cards for each player on DOM
  // update Message to say hit play button

// draws a card and updates it in the DOM
// if player > comp or comp > player give the 2 cards to whoever won
  // update Message "player or comp WON round"
  // adds the two cards to the back of the deck and subracts the card from the loser

  // if cards are === value slice out 3 more cards and compare the 3rd card
  // if player > comp or comp > player give the 2 cards to whoever won
  // update Message "player or comp WON round"
  // adds the all cards to the back of the deck and subracts the cards from the loser


  // if player or computer has no more cards update message player or computer Wins Game