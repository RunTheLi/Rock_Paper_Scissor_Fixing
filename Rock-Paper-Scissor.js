// Function to get the computer's choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice;

    if (randomNumber === 0) {
        choice = "rock";
    } else if (randomNumber === 1) {
        choice = "paper";
    } else {
        choice = "scissors"; // Fixed typo from 'scissor' to 'scissors'
    }
    return choice;
}

// Function to determine the winner
function determineWhoWin(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === getComputerChoice) {
        return "tie";
    } else if (
        (getHumanChoice === "rock" && getComputerChoice === "scissors") || 
        (getHumanChoice === "paper" && getComputerChoice === "rock") ||
        (getHumanChoice === "scissors" && getComputerChoice === "paper")
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Function to play the game
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let roundPlay = 0;

    const resultDiv = document.getElementById('result');
    const playerDiv = document.getElementById('playerScore');
    const computerDiv = document.getElementById('computerScore');

    const rockbutton = document.getElementById('rock');
    const paperbutton = document.getElementById('paper');
    const scissorbutton = document.getElementById('scissor');

    rockbutton.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });

    paperbutton.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    scissorbutton.addEventListener('click', () => {
        playRound('scissors', getComputerChoice()); // Fixed typo from 'scissor' to 'scissors'
    });

    function displayScore() {
        playerDiv.textContent = `${playerScore}`;
        computerDiv.textContent = `${computerScore}`;
    }

    function displayWinner() {
        if (playerScore === 5) {
            resultDiv.textContent = "🥳You win! Congratulations!";
            resetGame();
        } else if (computerScore === 5) {
            resultDiv.textContent = "🤖Computer wins! You lost against Computer!";
            resetGame();
        }
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        roundPlay = 0;
        displayScore();
    }

    function playRound(getHumanChoice, getComputerChoice) {
        let winner = determineWhoWin(getHumanChoice, getComputerChoice);

        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }

        resultDiv.textContent = `😎You chose ${getHumanChoice}, 👾computer chose ${getComputerChoice}. ${winner === "tie" ? "🤡It's a tie!" : `${winner} 🥳wins this round.`}`;

        roundPlay++;
        displayScore();
        displayWinner();
    }

    displayScore();
}

playGame();
