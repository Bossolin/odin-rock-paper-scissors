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

  if (playerSelection.toUpperCase() == computerSelection) {
    return console.log("tie");
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
