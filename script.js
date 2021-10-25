function computerPlay() {
  let choice = Math.floor(Math.random() * 100 + 1);

  if (choice <= 33) {
    return "ROCK";
  } else if (choice > 34 && choice <= 67) {
    return "PAPER";
  } else if (choice > 68) return "SCISSORS";
}

function playRound() {
  let player = prompt("Chose between Rock, Paper and Scissors.").toUpperCase();
  let computer = computerPlay();

  console.log(`Player chose ${player}`);
  console.log(`Computer chose ${computer}`);

  if (
    (player == "ROCK" && computer == "SCISSORS") ||
    (player == "PAPER" && computer == "ROCK") ||
    (player == "SCISSORS" && computer == "PAPER")
  ) {
    return "Player won!";
  } else if (
    (computer == "ROCK" && player == "SCISSORS") ||
    (computer == "PAPER" && player == "ROCK") ||
    (computer == "SCISSORS" && player == "PAPER")
  ) {
    return "Computer won!";
  } else if (player == computer) {
    return "It's a tie!";
  } else if (player != ("ROCK" || "PAPER" || "SCISSORS")) {
    return "That's not an option!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let outcome = "";
  for (let i = 0; i < 5; i++) {
    outcome = playRound();

    if (outcome == "That's not an option!") {
      console.log("That's not an option! Try again.");
      i--;
    } else if (outcome == "Player won!") {
      ++playerScore;
      console.log(outcome);
      console.log(`The score is: ${playerScore} to ${computerScore}`);
    } else if (outcome == "Computer won!") {
      ++computerScore;
      console.log(outcome);
      console.log(`The score is: ${playerScore} to ${computerScore}`);
    } else console.log("It's a tie!");
  }

  if (playerScore > computerScore)
    return `Player won ${playerScore} to ${computerScore}`;
  else if (computerScore > playerScore)
    return `Computer won ${computerScore} to ${playerScore}`;
  else return `It's a tie! ${playerScore} ${computerScore}`;
}

game();
