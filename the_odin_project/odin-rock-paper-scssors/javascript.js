//play one game of rock paper scissors
function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++){
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    let result = playRound(playerSelection, computerSelection);
    
    if (result == "win") {
      console.log("You win! " + playerSelection + " beats " + computerSelection);
      playerWins++;
    } else if (result == "lose") {
      console.log("You lose! " + computerSelection + " beats " + playerSelection);
      computerWins++;
    } else {
      console.log("Tie!");
      continue;
    }
  }

  if (playerWins == computerWins) {
    console.log("Tie game!");
  } else if (playerWins > computerWins) {
    console.log("Player wins!");
  } else {
    console.log("Computer wins!");
  }
     
}

// play one round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  let playerPick = playerSelection;
  let computerPick = computerSelection;
//determine winner
  if (getWinner(playerPick, computerPick) == "win") {
    return "win"
  } else if (getWinner(playerPick, computerPick) == "tie") {
    return "tie";
  } else {
    return "lose";
  }

}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

// generate random integer
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min+1) ) + min;
}

// uses random integer to generate computer's choice
function getComputerChoice() {
const rndInteger = getRndInteger(1,3);
  
  //can refactor and use switch() instead
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

  //check if choice is valid, otherwise ask player again
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

//check for tie and winner
function getWinner(playerPick, computerPick) {
  switch (playerPick) {
    case computerPick:
      return "tie";
      break;
    case "rock":
      if (computerPick == "scissors") {
      return "win";
      } else{
        return "lose"
      }
      break;
    case "paper":
      if (computerPick == "rock") {
        return "win";
        } else{
          return "lose"
        }
        break;
    case "scissors":
      if (computerPick == "paper") {
        return "win";
        } else{
          return "lose"
        }
        break;
  }
}