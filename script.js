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

  if (
    (playerSelection.toUpperCase() == "ROCK" &&
      computerSelection == "SCISSORS") ||
    (playerSelection.toUpperCase() == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection.toUpperCase() == "SCISSORS" &&
      computerSelection == "PAPER")
  ) {
    return "Player won!";
  } else if (playerSelection.toUpperCase() == computerSelection) {
    return console.log("It's a tie!");
  } else if (
    playerSelection.toUpperCase() != ("ROCK" || "PAPER" || "SCISSORS")
  ) {
    return "That's not an option!";
  } else return "Computer won!";
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
