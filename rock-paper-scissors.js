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