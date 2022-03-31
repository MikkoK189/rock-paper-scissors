const rps = ["Rock", "Paper", "Scissors"];
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let gameOver = false;

const buttons = document.querySelectorAll("button");
const textBox = document.querySelector(".text-box");
const scoreBox = document.querySelector(".score-box");

buttons.forEach((button) => button.addEventListener("click", buttonClicked));

function buttonClicked(e) {
  if (gameOver) return;
  playerSelection = rps[e.target.id];
  let computerPick = computerPlay();
  textBox.classList.remove("hidden");
  textBox.textContent = checkResult(
    playRound(playerSelection, computerPick),
    playerSelection,
    computerPick
  );
  scoreBox.classList.remove("hidden");
  scoreBox.textContent = `Round: ${roundNumber} score: ${playerScore} - ${computerScore}`;
  roundNumber++;
  if (roundNumber == 6) {
    endGame();
  }
}

function endGame() {
  if (playerScore > computerScore) {
    scoreBox.textContent = `Player wins with a score of ${playerScore}!`;
  } else if (computerScore > playerScore) {
    scoreBox.textContent = `Computer wins with a score of ${computerScore}!`;
  } else {
    scoreBox.textContent = "Tie!";
  }
  gameOver = true;
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
