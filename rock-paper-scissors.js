let buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
    buttons.item(i).addEventListener('click', game);
}

let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let round = 0;

let winner = document.querySelector('.winner');
let result = document.querySelector('.result');

let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');
playerScoreDisplay.textContent = "Player: "+playerScore;
computerScoreDisplay.textContent = "Computer: "+computerScore;

function getComputerChoice()    {
    let choice = ""

    let value = Math.floor(Math.random()*3)+1;
    if (value === 1)    {
        choice = "Rock";
    }
    if (value === 2)    {
        choice = "Paper";
    }
    if (value === 3)    {
        choice = "Scissors";
    }
    return choice;
}

function playRound(value)  {
    let i; // 0 for computer win, 1 for player win, 2 for draw
    playerChoice = value;
    computerChoice = getComputerChoice();

    let playerMove = document.querySelector('.player-move');
    let computerMove = document.querySelector('.computer-move');
    playerMove.setAttribute("src",(playerChoice+".png"));
    playerMove.setAttribute("style","transform:rotate(90deg) scaleX(-1);");
    computerMove.setAttribute("src",(computerChoice+".png"));
    computerMove.setAttribute("style","transform:rotate(270deg);");

    if (playerChoice === "Rock")    {
        if (computerChoice === "Rock")  {
            i = 2;
        }
        if (computerChoice === "Paper")  {
            i = 0;
        }
        if (computerChoice === "Scissors")  {
            i = 1;
        }
    }
    if (playerChoice === "Paper")    {
        if (computerChoice === "Rock")  {
            i = 1;
        }
        if (computerChoice === "Paper")  {
            i = 2;
        }
        if (computerChoice === "Scissors")  {
            i = 0;
        }
    }    
    if (playerChoice === "Scissors")    {
        if (computerChoice === "Rock")  {
            i = 0;
        }
        if (computerChoice === "Paper")  {
            i = 1;
        }
        if (computerChoice === "Scissors")  {
            i = 2;
        }
    }
    
    switch (i)  {
        case 0:
            result.textContent = "You lose! "+computerChoice+" beats "+playerChoice;
            computerScore++;
            updateScore();
            break;
        case 1:
            result.textContent = "You win! "+playerChoice+" beats "+computerChoice;
            playerScore++;
            updateScore();
            break;
        case 2:
            result.textContent = "Draw! "+playerChoice+" ties with "+computerChoice;
            break;
    }
}

function updateScore()  {
    playerScoreDisplay.textContent = "Player: "+playerScore;
    computerScoreDisplay.textContent = "Computer: "+computerScore;
}

function game() {
    while (round < 5)   {
        playRound(this.value);
        round++;
        break;
    }
    if (round === 5)    {
        if (playerScore > computerScore)
            winner.textContent = "Player wins!";
        if (playerScore < computerScore)
            winner.textContent = "Computer wins!";
        if (playerScore === computerScore)
            winner.textContent = "It's a tie!";
    }
}