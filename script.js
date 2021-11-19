//script.js

//main game function

//define scores and set to 0
let computerScore = 0;
let playerScore = 0;

//create an array with computer's options
const options = ['rock', 'paper', 'scissors'];
//computer randomly chooses a number and gets an option based on that number
function computerChoice(){
//pick a random number from 0 - 2
let computerNumber = Math.floor(Math.random() * 3);
//take the random number and use it to choose from the options array
let computerOption = options[computerNumber];
//return the option chosen from the array
return computerOption;
}
//check if computerChoice is working 
console.log(computerChoice());


