// board

/*----------------------- variables -------------------*/
let deck = [
  { suits: ["♥️", "♦️", "♣️", "♠️"] },
  {
    ranks: [
      "A","2","3", "4","5","6", "7","8","9", "10","J", "Q","K",],
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
let inRound = false;

/*----------------------- Element references -------------------*/
const startScreenDis = document.getElementById("start-screen");
const startScreenBtn = document.getElementById("start-btn");
const gameScreen = document.getElementById('game-screen');
const msgEl = document.querySelector("#msg");
const playEl = document.querySelector("#play-btn");
const dealEl = document.querySelector("#deal-cards");
const drawCardEl = document.querySelector("#draw-card");
const startGameEl = document.querySelector("#shuffle-deck");
const resetGame = document.getElementById('reset-game')
// display elements for deck size
const computerDeckEl = document.querySelector("#computer-deck");
const playerDeckEl = document.querySelector("#player-deck");
const playerCardEl = document.querySelector("#player-card");
const computerCardEl = document.querySelector("#computer-card");

/*----------------------- Functions ----------------------------*/
function init(){
   // Clear all the deck arrays
  newDeck = [];
  playerDeck = [];
  computerDeck = [];
  playerCard = null;
  computerCard = null;
  winner = false;

   deck = [
  { suits: ["♥️", "♦️", "♣️", "♠️"] },
  {
    ranks: [
      "A","2","3", "4","5","6", "7","8","9", "10","J", "Q","K",],
  },
  { values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
];
  // Reset DOM
  playerCardEl.textContent = "";
  computerCardEl.textContent = "";
  msgEl.textContent = "Click shuffle to start a new game!";
  computerDeckEl.textContent = "0";
  playerDeckEl.textContent = "0";
  
};
init();

// creates the deck and shuffles it and splits it in half
const StartGame = (event) =>{
  createDeck();
  shuffleDeck(newDeck);
  // console.log(newDeck);
  splitDeck();
  updateDeckCount();
  displayCardUpdates();
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




/* ------- game logic function ------*/

// draw cards from top of deck
const drawCards = () => {
  playerCard = playerDeck.shift();
  console.log(playerCard.value);
  computerCard = computerDeck.shift();
  console.log(computerCard.value);

  if(playerCard.value > computerCard.value){
    msgEl.innerText = 'You Win!'
    playerDeck.push(playerCard)
    playerDeck.push(computerCard)
  }else if(computerCard.value > playerCard.value){
    msgEl.innerText = 'You Lose!'
    computerDeck.push(playerCard)
    computerDeck.push(computerCard)
  }else{
    msgEl.innerText = 'Draw'
    playerDeck.push(playerCard)
    computerDeck.push(computerCard)
  }
  updateDeckCount();
  displayCardUpdates();
}

const tieRound = () =>{
  if(playerCard.value === computerCard.value){

  }
}

function updateDeckCount() {
  computerDeckEl.innerText = computerDeck.length
  playerDeckEl.innerText = playerDeck.length
}

// updates what the deck shows on the dom for each player
const displayCardUpdates = () =>{
  playerCardEl.textContent = playerCard.card
  computerCardEl.textContent = computerCard.card
}


/*----------------------- Event Listeners ----------------------------*/

startGameEl.addEventListener('click', StartGame)
// resetGame.addEventListener("click",reset);
drawCardEl.addEventListener("click",drawCards);





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