let humanScore = 0;
let computerScore = 0;

const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultText = document.getElementById("round-result");
const buttons = document.querySelectorAll(".choice");
const restartBtn = document.getElementById("restart");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultText.textContent = "It's a tie!";
  } 
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } 
  else {
    computerScore++;
    resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;

  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    resultText.textContent = "You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultText.textContent = "Computer won the game!";
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach(button => button.disabled = true);
}

function enableButtons() {
  buttons.forEach(button => button.disabled = false);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

restartBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  humanScoreSpan.textContent = 0;
  computerScoreSpan.textContent = 0;
  resultText.textContent = "Make your move!";
  enableButtons();
});