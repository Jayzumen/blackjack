let player = {
  name: "Jan-Niklas",
  chips: 200,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

// generate a random Card

function getRandomCard() {
  let randInt = Math.floor(Math.random() * 13) + 1;
  if (randInt > 10) {
    return 10;
  } else if (randInt === 1) {
    return 11;
  } else {
    return randInt;
  }
}

// start the game by pressing the "Start Game" button

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  playerEl.textContent -= player.chips - 20;

  renderGame();
}

// render the game

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

// draw a new card if you can

function newCard() {
  if (sum < 21) {
    let thirdCard = getRandomCard();
    sum += thirdCard;

    cards.push(thirdCard);

    renderGame();
  } else {
    alert("You can't draw another card!");
  }
}

// reload the page

function reload() {
  window.location.reload();
}
