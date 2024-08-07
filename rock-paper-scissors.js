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

let score = document.querySelector("#score-tracking");
function playRound(computerChoice, humanChoice) {
    console.log(`computer choice: ${computerChoice}, human choice ${humanChoice}`);
    if (computerChoice == humanChoice) {
        console.log(`It's a draw!`);
    } else if ((computerChoice == "rock" && humanChoice == "paper") || 
        (computerChoice == "scissors" && humanChoice == "rock") ||
        (computerChoice == "paper" && humanChoice == "scissors")
        ) {
            humanScore++
            
        } else {
            computerScore++;
    }
    score.textContent = `Human: ${humanScore} || computer: ${computerScore}`; 
    if (humanScore === 5) {
        score.textContent = `Human wins ${humanScore} to ${computerScore}. WELL PLAYED!`; 
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        score.textContent = `Computer wins ${computerScore} to ${humanScore}. Better luck next time`; 
        playerScore = 0;
        computerScore = 0;
    } 
}


const usrChoiceOptions = document.querySelector("#rps-buttons");

usrChoiceOptions.addEventListener('click', (event) => {
    let target = event.target;
    const computerChoice = getComputerChoice();

    switch(target.id) {
        case 'rock':
            playRound(computerChoice, 'rock');
            break;
        case 'paper':
            playRound(computerChoice, 'paper');
            break;
        case 'scissors':
            playRound(computerChoice, 'scissors');
            break;
    }
});
