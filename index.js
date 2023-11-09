const computerChoiceDisplay = document.getElementById("Computer-Choice");
const userChoiceDisplay = document.getElementById("User-Choice");
const resultDisplay = document.getElementById("Result");

const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

// possibleChoices.forEach((button) =>
//   button.addEventListener("click", (e) => {
//     userChoice = e.target.id;
//     userChoiceDisplay.innerHTML = userChoice;
//   })
// );

for (let i = 0; i < possibleChoices.length; i++) {
  possibleChoices[i].addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
  });
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  computerChoice = possibleChoices[randomNumber].id;
  computerChoiceDisplay.innerHTML = computerChoice;
  getResult();
}

function getResult() {
  if (computerChoice === userChoice) {
    resultDisplay.innerHTML = "draw";
  }
  else if (computerChoice == "rock" && userChoice == "scissor") {
    resultDisplay.innerHTML = "computer wins";
  }
  else if (computerChoice == "rock" && userChoice == "paper") {
    resultDisplay.innerHTML = "user wins";
  }
  else if (computerChoice == "paper" && userChoice == "rock") {
    resultDisplay.innerHTML = "computer wins";
  }
  else if (computerChoice == "paper" && userChoice == "scissor") {
    resultDisplay.innerHTML = "user wins";
  }
  else if (computerChoice == "scissor" && userChoice == "rock") {
    resultDisplay.innerHTML = "computer wins";
  }
  else if (computerChoice == "scissor" && userChoice == "paper") {
    resultDisplay.innerHTML = "user wins";
  }
}
