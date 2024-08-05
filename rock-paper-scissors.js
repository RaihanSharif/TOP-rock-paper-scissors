/* 
pseudocode
-- played against computer

functions:
  -- randomly return rock, paper or scissors
  -- getComputerChoice -- return a random string from "rock", "paper", "scissors" -- DONE

*/

console.log("hello, world!");

const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

console.log(getComputerChoice())