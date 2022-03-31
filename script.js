const rps = ["Rock", "Paper", "Scissors"];
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

const buttons = document.querySelectorAll("button");
const textBox = document.querySelector(".text-box");

buttons.forEach((button) => button.addEventListener("click", buttonClicked));

function buttonClicked(e) {
  playerSelection = rps[e.target.id];
  console.log(e.target.id);
  console.log(`Player selected ${playerSelection}`);
  let computerPick = computerPlay();
  textBox.classList.remove("hidden");
  textBox.textContent = checkResult(
    playRound(playerSelection, computerPick),
    playerSelection,
    computerPick
  );

  roundNumber++;
}

function checkResult(game, playerSelection, computerSelection) {
  if (game == "Win!") {
    playerScore++;
    return `Player wins with ${playerSelection.toLowerCase()}!`;
  } else if (game == "Lose") {
    computerScore++;
    return `Computer wins with ${computerSelection.toLowerCase()}!`;
  } else {
    return "Tie!";
  }
}

const computerPlay = function () {
  return rps[Math.trunc(Math.random() * rps.length)];
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

function game() {
  if (playerScore > computerScore) {
    console.log(`Player wins with a score of ${playerScore}!`);
  } else if (computerScore > playerScore) {
    console.log(`Computer wins with a score of ${computerScore}!`);
  } else {
    console.log("Tie!");
  }
}

// game();
