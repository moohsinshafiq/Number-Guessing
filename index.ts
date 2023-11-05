// Generate a random number between 1 and 100
const secretNumber: number = Math.floor(Math.random() * 100) + 1;

let attempts: number = 0;
let guessed: boolean = false;

console.log("Welcome to the Number Guessing Game!");

import * as readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForGuess() {
  rl.question("Guess a number between 1 and 100: ", (input) => {
    const guess: number = parseInt(input);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("Please enter a valid number between 1 and 100.");
    } else {
      attempts++;
      if (guess === secretNumber) {
        guessed = true;
        console.log(`Congratulations! You guessed the correct number ${secretNumber} in ${attempts} attempts.`);
        rl.close();
      } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
        askForGuess();
      } else {
        console.log("Too high! Try again.");
        askForGuess();
      }
    }
  });
}

askForGuess();
