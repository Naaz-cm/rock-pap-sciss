const rockButton = document.querySelector('.rock');
const scissorsButton = document.querySelector('.scissors');
const paperButton = document.querySelector('.paper');
const resultParagraph = document.querySelector('.result');
const userChoiceParagraph = document.querySelector('.user-choice');
const computerChoiceParagraph = document.querySelector('.computer-choice');

const choices = ['rock', 'scissors', 'paper'];

rockButton.addEventListener('click', () => {
    playGame('rock');
});

scissorsButton.addEventListener('click', () => {
    playGame('scissors');
});

paperButton.addEventListener('click', () => {
    playGame('paper');
});

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (userChoice === computerChoice) {
        result = `It's a tie!`;
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
                (userChoice === 'scissors' && computerChoice === 'paper') ||
                (userChoice === 'paper' && computerChoice === 'rock')) {
        result = `You win!`;
    } else {
        result = `You lose!`;
    }

    userChoiceParagraph.textContent = `Your choice: ${userChoice}`;
    computerChoiceParagraph.textContent = `Computer's choice: ${computerChoice}`;
    resultParagraph.textContent = result;
}