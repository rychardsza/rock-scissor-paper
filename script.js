const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const options = ['rock', 'paper', 'scissors'];

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playGame(userChoice) {
  const computer = computerChoice();
  console.log(`You chose ${userChoice} and the computer chose ${computer}.`);

  if (userChoice === computer) {
    console.log("It's a tie!");
  } else if (
    (userChoice === 'rock' && computer === 'scissors') ||
    (userChoice === 'paper' && computer === 'rock') ||
    (userChoice === 'scissors' && computer === 'paper')
  ) {
    console.log("You win!");
  } else {
    console.log("Computer wins!");
  }

  rl.close();
}

console.log("Starting Rock-Paper-Scissors game...");


rl.question("Choose rock, paper, or scissors: ", (userChoice) => {
  if (options.includes(userChoice)) {
    playGame(userChoice);
  } else {
    console.log('Invalid choice, please choose rock, paper, or scissors.');
    rl.close();
  }
});