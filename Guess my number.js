"use strict";

// Random Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Score
let score = 0;

// Highscore
let highscore = 0;

// Game Logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct!";
    document.querySelector(".rules").textContent = "You win the game!";
    document.querySelector(".number").textContent = guess;
    document.querySelector("h1").textContent = "You win!";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When guess is too high
  else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
  }
  //When guess is too low
  else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low!";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
  }
});

// Play again

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 0;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Take a shoot..";
  document.querySelector(".rules").textContent = "(Between 1 and 20)";
  document.querySelector("h1").textContent = "Guess my number";
  document.querySelector(".number").textContent = "🎲";
  document.querySelector(".guess").value = "";
});
