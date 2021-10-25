function computerPlay() {
  let choice = Math.floor(Math.random() * 100 + 1);

  if (choice <= 33) {
    return "ROCK";
  } else if (choice > 34 && choice <= 67) {
    return "PAPER";
  } else if (choice > 68) return "SCISSORS";
}

function playRound(playerSelection, computerSelection) {
  // Plays a single round of RPS
  // 9 possibilities + a tie
  //Rock<Paper<Scissors<Rock
  let player = playerSelection.toUpperCase();
  console.log(player);
  console.log(computerSelection);

  if (
    (player == "ROCK" && computerSelection == "SCISSORS") ||
    (player == "PAPER" && computerSelection == "ROCK") ||
    (player == "SCISSORS" && computerSelection == "PAPER")
  ) {
    return "Player won!";
  } else if (player == computerSelection) {
    return "It's a tie!";
  } else if (player != ("ROCK" || "PAPER" || "SCISSORS")) {
    return "That's not an option!";
  } else return "Computer won!";
}

const playerSelection = "PaPeR";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let outcome = "";
  for (let i = 0; i < 5; i++) {
    outcome = playRound(playerSelection.toUpperCase(), computerPlay());

    if (outcome == "Player won!") ++playerScore;
    else if (outcome == "Computer won!") ++computerScore;
  }

  if (playerScore > computerScore)
    return `Player won ${playerScore} to ${computerScore}`;
  else if (computerScore > playerScore)
    return `Computer won ${computerScore} to ${playerScore}`;
  else return `It's a tie! ${playerScore} ${computerScore}`;
}
