

//main game function


// const btn = document.querySelectorAll('.buttons button');
// btn.forEach(btn =>{
//     btn.addEventListener('click', function (e) {
//         console.log(e.target);
//     });
// });



//define scores and set to 0
let computerPoints = 0;
let playerPoints = 0;
let winner = 0;
let playerChoice = 0;

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

function addPoints() {
    if (winner === 'player') {
        playerPoints++;
    } else if (winner === 'computer') {
        computerPoints++;
    }
};

function displayWinner() {
    if (playerPoints >= 5) {
        scoreBoxText.textContent = `You win!`;
        playerPoints = 0;
        computerPoints = 0;
    } else if (computerPoints >= 5) {
        scoreBoxText.textContent = `The computer wins!`;
        computerPoints = 0;
        playerPoints = 0;
    }
}


const btnScissors = document.querySelector('#scissors');
const btnPaper = document.querySelector('#paper');
const btnRock = document.querySelector('#rock');
const scoreBox = document.querySelector('#scoreBox');
const scoreBoxText = document.createElement('p');
const scoreBoxText2 = document.createElement('p');
scoreBoxText.classList.add('scoreboxText');
scoreBoxText.textContent = `Choose your weapon!`;
scoreBox.appendChild(scoreBoxText);
scoreBox.appendChild(scoreBoxText2);

//find which button has been clicked



btnRock.addEventListener('click', function (e) {
    chooseWinner('rock', computerChoice());
    addPoints()
    console.log(`You chose rock the computer chose ${computerChoice()} The winner is ${winner}`);
    scoreBoxText.textContent = `You chose rock! The computer chose ${computerChoice()}! `;
    scoreBoxText2.textContent = `You : ${playerPoints} | computer : ${computerPoints}`;
    displayWinner()

})


btnPaper.addEventListener('click', function (e) {
    chooseWinner('paper', computerChoice());
    addPoints()
    console.log(`You chose paper the computer chose ${computerChoice()} The winner is ${winner}`);
    scoreBoxText.textContent = `You chose paper! The computer chose ${computerChoice()}! `;
    scoreBoxText2.textContent = `You : ${playerPoints} | computer : ${computerPoints}`;
    displayWinner()
})


btnScissors.addEventListener('click', function (e) {
    chooseWinner('scissors', computerChoice());
    addPoints()
    console.log(`You chose scissors the computer chose ${computerChoice()} The winner is ${winner}`);
    scoreBoxText.textContent = `You chose scissors! The computer chose ${computerChoice()}! `;
    scoreBoxText2.textContent = `You : ${playerPoints} | computer : ${computerPoints}`;
    displayWinner()
})




//check if computerChoice is working 
// console.log(computerChoice());
//winner = chooseWinner(playerChoice(), computerChoice());
// console.log(`You chose ${playerChoice()}, the computer chose ${computerChoice()}.`);

