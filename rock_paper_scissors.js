let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector('.rock-btn');
let paper = document.querySelector('.paper-btn');
let scissors = document.querySelector('.scissors-btn');
let scoreBoard = document.querySelector('.scoreboard')

let paraHumanScore = document.createElement('p');
let paraComputerScore = document.createElement('p');

scoreBoard.appendChild(paraHumanScore);
scoreBoard.appendChild(paraComputerScore);
        
rock.addEventListener('click', () => {
    scoreBoard.removeChild(paraHumanScore);
    scoreBoard.removeChild(paraComputerScore);
    playGame('rock');
    scoreChecker();
});

paper.addEventListener('click', () => {
    scoreBoard.removeChild(paraHumanScore);
    scoreBoard.removeChild(paraComputerScore);
    playGame('paper');
    scoreChecker();
});


scissors.addEventListener('click', () => {
    scoreBoard.removeChild(paraHumanScore);
    scoreBoard.removeChild(paraComputerScore);
    playGame('scissors');
    scoreChecker();
});


//Function for the game logic
function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);

    if (randInt == 0) {
        return "rock";
    } else if (randInt == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Function for retrieving the choice of the user
function getHumanChoice() {
    //let humanChoice = prompt(`Round ${roundNum}\nPlease enter your choice (rock, paper, scissors): `);

    //return humanChoice.toLowerCase();
    if (choice === 'rock') {
        return 'rock';
    } else if (choice === 'paper') { 
        return 'paper';
    } else if (choice === 'scissors') { 
        return 'scissors';
    }
}

//Function for playing a single round with a human choice, computer choice, and a round number as parameters
function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
            
            alert(`Congrats! You won this round`);
            humanScore += 1;

    } else if ((computerChoice == "rock" && humanChoice == "scissors") ||
               (computerChoice == "paper" && humanChoice == "rock") ||
               (computerChoice == "scissors" && humanChoice == "paper")) {

            alert(`Oops! You lost this round`); 
            computerScore += 1;

    } else {
            alert(`Who would've thought? It was a draw for this round!`);
    } 
}

//Function for playing the game with 5 rounds and new humanChoice and computerChoice for each rounds
function playGame(humanChoice) {
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    paraHumanScore.textContent = `Your score: ${humanScore}`;
    paraComputerScore.textContent = `Computer score: ${computerScore}`;

    scoreBoard.appendChild(paraHumanScore);
    scoreBoard.appendChild(paraComputerScore);
}

function scoreChecker() {
    if (humanScore == 5) {
        alert(`Congrats! You won the game\nYour score: ${humanScore}\nComputer score : ${computerScore}`);
        location.reload();
    } else if (computerScore == 5) {
        alert(`You lost the game! Better luck next time\nYour score: ${humanScore}\nComputer score : ${computerScore}`);
        location.reload();
    }
}

/*
if (humanScore > computerScore) {
    alert(`Congrats! You won the game.\nAcross 5 rounds, here are the scores:\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
} else if (humanScore < computerScore) {
    alert(`You lost the game. Better luck next time!\nAcross 5 rounds, here are the scores:\nYour score: ${humanScore}\nComputer score: ${computerScore}`);            
} else {
    alert(`What are the chances? It was a draw!\nAcross 5 rounds, here are the scores:\nYour score: ${humanScore}\nComputer score: ${computerScore}`);              
}
*/