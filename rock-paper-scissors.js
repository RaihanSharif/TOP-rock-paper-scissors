/* 
pseudocode
-- played against computer

functions:
  -- randomly return rock, paper or scissors
  -- getComputerChoice -- return a random string from "rock", "paper", "scissors" -- DONE

  -- getHumanChoice 
        -- take human input, parse as lowercase string

*/




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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    

    function playRound(computerChoice, humanChoice) {
        console.log(`computer choice: ${computerChoice}, human choice ${humanChoice}`);
        
        if (computerChoice == humanChoice) {
            console.log(`It's a draw!`);
        } else if ((computerChoice == "rock" && humanChoice == "paper") || 
            (computerChoice == "scissors" && humanChoice == "rock") ||
            (computerChoice == "paper" && humanChoice == "scissors")
            ) {
                humanScore++
                console.log(`human wins computer score: ${computerScore}, human score: ${humanScore}`);
            } else {
                computerScore++;
                console.log(`computer wins computer score: ${computerScore}, human score: ${humanScore}`);           
        }   
    }

    for (let i = 0; i< 5; i++) {
        const compChoice = getComputerChoice();
        const humChoice = getHumanChoice();
        playRound(compChoice, humChoice);
    }

    if (humanScore > computerScore) {
        console.log("Human is the winner!");
    } else if (humanScore < computerScore) {
        console.log("Computer is the winner!");
    } else {
        console.log("It's a draw");
    }
}