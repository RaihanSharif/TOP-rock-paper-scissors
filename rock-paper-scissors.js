/* 
pseudocode
-- played against computer

functions:
  -- randomly return rock, paper or scissors
  -- getComputerChoice -- return a random string from "rock", "paper", "scissors" -- DONE

  -- getHumanChoice 
        -- take human input, parse as lowercase string

*/



let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}
// let x = getComputerChoice();
// console.log(x)

function getHumanChoice() {
    const choice = prompt(`Enter your choice: "rock", "paper" or "scissors"`).toLowerCase();
    if (choices.includes(choice)) {
        return choice;
    } else {
        return getHumanChoice();
    }
}

function playRound(computerChoice, humanChoice) {
    // compChoice = computerChoice;
    // humChoice = humanChoice;
    if(computerChoice == "rock") {
        if (humanChoice == "paper") {
            computerScore++;
            console.log(`Computer wins! The score is computer: ${computerScore}, human: ${humanScore}.`);

        } else if (humanChoice == "rock") {
            console.log(`Oh no! it's tie! Try again`);
            return playRound(computerChoice, humanChoice);

        } else {
            humanScore++;
            console.log(`Human wins! The score is computer: ${computerScore}, human: ${humanScore}.`);
        }
    } else if (computerChoice == "paper") {
        if (humanChoice == "rock") {
            computerScore++;
            console.log(`Computer wins! The score is computer: ${computerScore}, human: ${humanScore}.`);
            
        } else if (humanChoice == "scissors") {
            humanScore++;
            console.log(`Human wins! The score is computer: ${computerScore}, human: ${humanScore}.`);
            
        } else {
            console.log(`Oh no! it's tie! Try again`);
            return playRound(computerChoice, humanChoice);
        }
    } else {
        if (humanChoice == "rock") {
            humanScore++;
            console.log(`Human wins! The score is computer: ${computerScore}, human: ${humanScore}.`);

        } else if (humanChoice == "paper") {
            computerScore++;
            console.log(`Computer wins! The score is computer: ${computerScore}, human: ${humanScore}.`);
            
        } else {
            console.log(`Oh no! it's tie! Try again`);
            return playRound(computerChoice, humanChoice);
        }
    }

}

