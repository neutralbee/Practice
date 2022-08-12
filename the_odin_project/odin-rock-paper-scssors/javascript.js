// generate random integer
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min+1) ) + min;
}

// uses random integer to generate computer's choice
function computerPlay() {
  const rndInteger = getRndInteger(1,3);
  
  if (rndInteger == 1) {
    return "rock";
  } else if (rndInteger == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}