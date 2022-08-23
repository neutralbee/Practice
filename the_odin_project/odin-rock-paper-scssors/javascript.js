// play one round of rock paper scissors
function playRound(playerSelection, computerSelection) {
//get player choice
let playerOption = getPlayerChoice;
return (playerOption);
//get computer choice
//determine winner
}

// generate random integer
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min+1) ) + min;
}

// uses random integer to generate computer's choice
function getComputerChoice() {
const rndInteger = getRndInteger(1,3);

  if (rndInteger == 1) {
    return "rock";
  } else if (rndInteger == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

//get player choice, convert to all lower, and check if valid
function getPlayerChoice() {
  let keepGoing = true;
  let playerChoice = prompt("Choose rock, paper, or scissors.");
  playerChoice = playerChoice.toLowerCase();
  console.log(playerChoice);

  //need to convert choice to lower and break loop when cancel button is hit
  while (keepGoing == true) {
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
      return playerChoice;
      keepGoing = false;
    } else {
      playerChoice = prompt("Invalid choice. Please choose rock, paper, or scissors.");
      playerChoice = playerChoice.toLowerCase();
    }
    }
}