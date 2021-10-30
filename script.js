function computerPlay() {
  let choice = Math.floor(Math.random() * 100 + 1);

  if (choice <= 33) {
    return "ROCK";
  } else if (choice > 34 && choice <= 67) {
    return "PAPER";
  } else if (choice > 67) return "SCISSORS";
}

function playRound(playerChoice) {
  let player = playerChoice;
  let computer = computerPlay();

  computerDisplay.innerText = `Computer chose ${computer}`;

  if (
    (player == "ROCK" && computer == "SCISSORS") ||
    (player == "PAPER" && computer == "ROCK") ||
    (player == "SCISSORS" && computer == "PAPER")
  ) {
    playerScore++;
    results.innerText = "Result: Player won!";
    score.innerText = `Score: ${playerScore} : ${computerScore}`;
    playerScore === 5 ? winner() : "";
  } else if (
    (computer == "ROCK" && player == "SCISSORS") ||
    (computer == "PAPER" && player == "ROCK") ||
    (computer == "SCISSORS" && player == "PAPER")
  ) {
    computerScore++;
    results.innerText = "Result: Computer won!";
    score.innerText = `Score: ${playerScore} : ${computerScore}`;
    computerScore === 5 ? winner() : "";
  } else if (player == computer) {
    results.innerText = "Result: It's a tie!";
  }
}

let playerScore = 0;
let computerScore = 0;

const winner = () => {
  if (playerScore === 5) {
    computerDisplay.innerText = `Player wins the game ${playerScore} to ${computerScore}`;
    playerScore = 0;
    computerScore = 0;
    score.innerText = "Score: 0 : 0";
  } else if (computerScore === 5) {
    computerDisplay.innerText = `Computer wins the game ${computerScore} to ${playerScore}`;
    playerScore = 0;
    computerScore = 0;
    score.innerText = "Score: 0 : 0";
  }
};

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => playRound("ROCK"));
paper.addEventListener("click", () => playRound("PAPER"));
scissors.addEventListener("click", () => playRound("SCISSORS"));

const results = document.querySelector(".result");
const computerDisplay = document.querySelector(".computer");
const score = document.querySelector(".score");

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   let outcome = "";

//   for (let i = 0; i < 5; i++) {
//     console.log(`Game number ${i + 1}!`);
//     outcome = playRound();

//     if (outcome == "That's not an option. Try again!") {
//       --i;
//       console.log(outcome);
//     } else if (outcome == "Player won!") {
//       ++playerScore;
//       console.log(outcome);
//       console.log(`The score is: ${playerScore} to ${computerScore}`);
//     } else if (outcome == "Computer won!") {
//       ++computerScore;
//       console.log(outcome);
//       console.log(`The score is: ${playerScore} to ${computerScore}`);
//     } else if (outcome == "It's a tie!") {
//       console.log(outcome);
//       console.log(`The score is: ${playerScore} to ${computerScore}`);
//     }
//   }

//   if (playerScore > computerScore)
//     return `Player won ${playerScore} to ${computerScore}`;
//   else if (computerScore > playerScore)
//     return `Computer won ${computerScore} to ${playerScore}`;
//   else return `It's a tie! ${playerScore} : ${computerScore}`;
// }
