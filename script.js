

//main game function


const buttons = document.querySelectorAll('.selection button');
buttons.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        
    })
})



//define scores and set to 0
let computerScore = 0;
let playerScore = 0;
let winner = 0;

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
//get player choice
function playerChoice(){
    return 'paper';
}
//chose the winner
function chooseWinner (player, computer) {
    if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        return winner = 'player';
    } else if ((player === 'rock' && computer === 'paper') || (player === 'paper' && computer === 'scissors') || (player === 'scissors' && computer === 'rock')) {
        return winner = 'computer';
    } else {
        return winner = 'draw';
    }
}

//check if computerChoice is working 
console.log(computerChoice());
winner = chooseWinner(playerChoice(), computerChoice());
console.log(`You chose ${playerChoice()}, the computer chose ${computerChoice()}.`);

