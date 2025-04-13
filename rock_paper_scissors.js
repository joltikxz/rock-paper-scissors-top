let humanScore = 0;
let computerScore = 0;

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
function getHumanChoice(roundNum) {
    let humanChoice = prompt(`Round ${roundNum}\nPlease enter your choice (rock, paper, scissors): `);;

    return humanChoice.toLowerCase();
}

//Function for playing a single round with a human choice, computer choice, and a round number as parameters
function playRound(humanChoice, computerChoice, roundNum) {
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
            
            alert(`Congrats! You won Round ${roundNum}`);
            humanScore += 1;

    } else if ((computerChoice == "rock" && humanChoice == "scissors") ||
               (computerChoice == "paper" && humanChoice == "rock") ||
               (computerChoice == "scissors" && humanChoice == "paper")) {

            alert(`Oops! You lost Round ${roundNum}`);
            computerScore += 1;

    } else {
            alert(`Who would've thought? It was a draw for Round ${roundNum}!`);
    } 
}

//Function for playing the game with 5 rounds and new humanChoice and computerChoice for each rounds
function playGame() {
    for (let i=1; i<=5; i++) {
        let humanChoice = getHumanChoice(i);
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice, i);
    }
}

playGame();

if (humanScore > computerScore) {
    alert(`Congrats! You won the game.\nAcross 5 rounds, here are the scores:\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
} else if (humanScore < computerScore) {
    alert(`You lost the game. Better luck next time!\nAcross 5 rounds, here are the scores:\nYour score: ${humanScore}\nComputer score: ${computerScore}`);            
} else {
    alert(`What are the chances? It was a draw!\nAcross 5 rounds, here are the scores:\nYour score: ${humanScore}\nComputer score: ${computerScore}`);              
}