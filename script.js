"use strict";
// Game message element
const messageEl = document.querySelector(".message");

// Game options and score elements
const checkEl = document.querySelector(".check");
const guessEl = document.querySelector(".guess");
const numberEl = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const resetGameEl = document.querySelector(".again");

// Making random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  messageEl.textContent = message;
};

checkEl.addEventListener("click", function () {
  const guess = Number(guessEl.value);
  if (!guess) {
    displayMessage("No number specified!");
  } else if (guess === secretNumber) {
    numberEl.textContent = secretNumber;
    displayMessage("Correct number!");
    document.body.style.backgroundColor = "#60b347";
    numberEl.style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too low!");
      score -= 1;
      scoreEl.textContent = score;
    } else {
      displayMessage("You lost the game!");
      scoreEl.textContent = 0;
    }
  }
});
resetGameEl.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  guessEl.value = "";
  document.body.style.backgroundColor = "#222";
  numberEl.style.width = "15rem";
});

guessEl.addEventListener("input", function () {
  if (this.value < 1) {
    this.value = 1;
  }
  if (this.value > 20) {
    this.value = 20;
  }
});
