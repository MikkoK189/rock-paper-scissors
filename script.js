const rps = ["Rock", "Paper", "Scissors"];
let playerSelection = "";

const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => addEventListener("click", buttonClicked));

function buttonClicked(e) {
  playerSelection = rps[e.target.id];
  console.log(`Player selected ${playerSelection}`);
}

const computerPlay = function () {
  const computerPlaying = ["Rock", "Paper", "Scissors"];

  return computerPlaying[Math.trunc(Math.random() * computerPlaying.length)];
};

function playRound(playerSelection, computerSelection) {
  csLower = computerSelection.toLowerCase();
  plLower = playerSelection.toLowerCase();

  switch (plLower) {
    case "rock":
      if (csLower == "rock") {
        return "Tie";
      } else if (csLower == "paper") {
        return "Lose";
      } else if (csLower == "scissors") {
        return "Win!";
      }
      break;
    case "paper":
      if (csLower == String("rock")) {
        return "Win!";
      } else if (csLower == "paper") {
        return "Tie";
      } else if (csLower == "scissors") {
        return "Lose";
      }
      break;
    case "scissors":
      if (csLower == "rock") {
        return "Lose";
      } else if (csLower == "paper") {
        return "Win!";
      } else if (csLower == "scissors") {
        return "Tie";
      }
      break;
    default:
      return "Something went wrong";
      break;
  }
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();

// console.log(playRound(playerSelection, computerSelection));

function game() {
  let playerScore = 0;
  let computerScore = 0;
  /*   for (let i = 0; i < 5; i++) {
    let roundNumber = i;
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let result = playRound(playerSelection, computerPlay());
    if (result == "Win!") {
      playerScore++;
      console.log(`Player wins round ${(roundNumber += 1)}`);
    } else if (result == "Lose") {
      computerScore++;
      console.log(`Computer wins round ${(roundNumber += 1)}`);
    } else {
      console.log(`Tie on round ${(roundNumber += 1)}`);
    }
  }
 */
  if (playerScore > computerScore) {
    console.log(`Player wins with a score of ${playerScore}!`);
  } else if (computerScore > playerScore) {
    console.log(`Computer wins with a score of ${computerScore}!`);
  } else {
    console.log("Tie!");
  }
}

game();
