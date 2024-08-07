const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

function getHumanChoice() {
    const choice = prompt(`Enter your choice: "rock", "paper" or "scissors"`).toLowerCase();
    if (choices.includes(choice)) {
        return choice;
    } else {
        return getHumanChoice();
    }
}


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


const usrChoiceOptions = document.querySelector("#rps-buttons");

usrChoiceOptions.addEventListener('click', (event) => {
    let target = event.target;
    const computerChoice = getComputerChoice();

    switch(target.id) {
        case 'rock':
            console.log("User selected rock");
            playRound(computerChoice, 'rock');
            break;
        case 'paper':
            console.log("User selected paper");
            playRound(computerChoice, 'paper');
            break;
        case 'scissors':
            console.log("User selected scissors");
            playRound(computerChoice, 'scissors');
            break;
    }
});
