# War Card Game
This project is a simple implementation of the card game War using vanilla JavaScript, HTML, and DOM manipulation. The game pits the player against the computer in a battle of drawn cards until one player runs out of cards.

## How to play WAR!
1. The deck is split evenly between two players.

2. Each player flips the top card of their pile.

3. The higher card wins, and that player takes both cards and puts them on the bottom of their pile.

4. if the cards are equal, it’s a “war”: each player places 2  cards face down, then another face-up card. The higher face-up card wins all the cards.

5. The game keeps going until one player has all the cards (they win).



## Features
- Creates a standard 52-card deck (suits, ranks, and values).

- Uses the Fisher-Yates shuffle algorithm to shuffle the deck.

- Splits the deck into two equal halves: Player and Computer.

- Allows drawing of cards each round:

- Higher card wins → winner takes both cards.

- Tie results in each player keeping their card.

- Updates the DOM with card visuals, deck counts, and messages.

- Includes reset and shuffle new deck functionality.

## Game Flow

1. **Shuffle Deck**:
Creates and shuffles a full deck, then splits into player/computer decks.

2. **Draw Cards**:
Player and Computer each draw the top card.
Compare values: winner takes both cards.

3. **Update Board**:
Cards displayed on the DOM.
Deck counts updated.

4. **Endgame**:
When one player runs out of cards → game over.

## Code Structure

### Variables
- **deck** → Base definition of suits, ranks, and values.

- **newDeck** → Shuffled full 52-card deck.

- **playerDeck** / **computerDeck** → Split half decks.

- **playerCard** / **computerCard** → Currently drawn cards.

- **winner** → Game state flags.

``` Javascript
let deck, suits, ranks, values;
let newDeck = [];
let playerDeck = [];
let computerDeck = [];
let playerCard =[];
let computerCard =[];
let winner = false;
```
### Element References
- Handles updates to UI elements such as buttons, deck counts, and card displays.
``` Javascript
// start screen
const startScreenDis = document.getElementById("start-screen");
const startScreenBtn = document.getElementById("start-btn");
// main game
const gameScreen = document.getElementById('game-screen');
const msgEl = document.querySelector("#msg");
const playEl = document.querySelector("#play-btn");
const dealEl = document.querySelector("#deal-cards");
const drawCardEl = document.querySelector("#draw-card");
const startGameEl = document.querySelector("#shuffle-deck");
const resetGame = document.getElementById('reset-game')
// display elements for deck/cards
const computerDeckEl = document.querySelector("#computer-deck");
const playerDeckEl = document.querySelector("#player-deck");
const playerCardEl = document.querySelector("#player-card");
const computerCardEl = document.querySelector("#computer-card");
```

### Functions

1. **init():**

Resets the game state and DOM.

Restores the base deck structure.

Sets default card displays and deck counts.

2. **StartGame():**

Creates a new deck → createDeck().

Shuffles deck → shuffleDeck().

Splits deck → splitDeck().

Updates deck counts and resets board display.

3. **createDeck():**

Generates 52 unique cards by combining suits + ranks.

Assigns each card a numeric value for comparison.

4. **shuffleDeck(deck):**

Implements the Fisher-Yates algorithm for random shuffling.

5. **splitDeck():**

Splits shuffled deck into two 26-card arrays.

6. **drawCards():**

Draws the top card from each player’s deck (shift()).

Compares card values:

Higher value → winner takes both cards.

Tie → both players keep their card.

Updates deck counts and DOM displays.

7. **updateDeckCount():**

Updates the DOM deck counters for player and computer.

8. **displayCardUpdates():**

Updates the DOM to show the last drawn cards.

### Event Listeners
**Shuffle** → Starts a new game.

**Reset** → Resets the game state.

**Draw** → Plays a round of War.

```Javascript
startGameEl.addEventListener('click', StartGame);
resetGame.addEventListener('click', init);
drawCardEl.addEventListener('click', drawCards);
```


## Next Steps (Optional Enhancements)

- Implement War rule: when tied, each player places 3 cards down and compares the 4th.

- Add game-over screen with winner announcement.

- Style cards with images instead of text symbols.

- Add sound effects and animations for shuffling/drawing.