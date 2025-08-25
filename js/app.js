/*----------------------- Element references -------------------*/
const msgEl = document.querySelector("#msg");
const playerDeckEl = document.querySelector("#player-deck");
const computerDeckEl = document.querySelector("#computer-deck");
const playerCardEl = document.querySelector("#player-card");
const computerCardEl = document.querySelector("#computer-card");

const shuffleBtn = document.getElementById("shuffle-deck");
const resetBtn = document.getElementById("reset-game");
const drawBtn = document.getElementById("draw-card");


/*----------------------- Game Object -------------------*/
const game = {
  suits: ["♥️", "♦️", "♣️", "♠️"],
  ranks: ["A","2","3","4","5","6","7","8","9","10","J","Q","K"],
  values: [1,2,3,4,5,6,7,8,9,10,11,12,13],

  newDeck: [],
  playerDeck: [],
  computerDeck: [],
  playerCard: null,
  computerCard: null,
  winner: false,

  init() {
    this.newDeck = [];
    this.playerDeck = [];
    this.computerDeck = [];
    this.playerCard = null;
    this.computerCard = null;
    this.winner = false;

    msgEl.textContent = "Click shuffle to start a new game!";
    playerDeckEl.textContent = "0";
    computerDeckEl.textContent = "0";
    playerCardEl.textContent = "♣️";
    computerCardEl.textContent = "♦️";
  },

  createDeck() {
    this.newDeck = [];
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        this.newDeck.push({ card: `${this.suits[i]} ${this.ranks[j]}`, value: this.values[j] });
      }
    }
  },

  shuffleDeck(deck) {
    for (let i = deck.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },

  splitDeck() {
    this.playerDeck = this.newDeck.slice(0, 26);
    this.computerDeck = this.newDeck.slice(26, 52);
  },

  startGame() {
    this.createDeck();
    this.shuffleDeck(this.newDeck);
    this.splitDeck();
    this.updateDeckCount();
    msgEl.textContent = "Game started! Click Draw.";
    playerCardEl.textContent = "♣️";
    computerCardEl.textContent = "♦️";
  },

  drawCards() {
    this.playerCard = this.playerDeck.shift();
    this.computerCard = this.computerDeck.shift();

    if (this.playerDeck.length < 4) {
      msgEl.innerHTML = "Computer wins the War! Click Reset.";
      return;
    }
    if (this.computerDeck.length < 4) {
      msgEl.innerHTML = "Player wins the War! Click Reset.";
      return;
    }

    if (this.playerCard.value > this.computerCard.value) {
      msgEl.innerText = 'You Win the battle!';
      this.playerDeck.push(this.playerCard, this.computerCard);
    } else if (this.computerCard.value > this.playerCard.value) {
      msgEl.innerText = 'You Lose the battle!';
      this.computerDeck.push(this.playerCard, this.computerCard);
    } else {
      msgEl.innerText = 'You both suffer losses';
    }

    this.updateDeckCount();
    this.displayCardUpdates();
  },

  updateDeckCount() {
    playerDeckEl.innerText = this.playerDeck.length;
    computerDeckEl.innerText = this.computerDeck.length;
  },

  displayCardUpdates() {
    playerCardEl.textContent = this.playerCard.card;
    computerCardEl.textContent = this.computerCard.card;
  },
};


/*----------------------- Event Listeners -------------------*/
shuffleBtn.addEventListener("click", () => game.startGame());
resetBtn.addEventListener("click", () => game.init());
drawBtn.addEventListener("click", () => game.drawCards());


// initialize
game.init();