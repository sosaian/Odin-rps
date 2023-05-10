function getComputerChoice()
{
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
};

function playRound (playerSelection, computerSelection)
{
    const winConditions = 
    {
        Rock: "Scissors",
        Paper: "Rock",
        Scissors: "Paper",
    };

    if (playerSelection === computerSelection) 
    {
        return `Draw! both of you chose ${playerSelection}`;
    } 
    else if (winConditions[playerSelection] === computerSelection) 
    {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } 
    else 
    {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
};


function restartGame()
{
    const resetButton = document.querySelector("#resetButton");
    const playerWins = document.querySelector("#playerWins");
    const computerWins = document.querySelector("#computerWins");
    const scoreFeed = document.querySelector("#scoreFeed");

    playerWins.textContent = 0;
    computerWins.textContent = 0;
    scoreFeed.textContent = "First to 5 rounds WINS";
    resetButton.remove();

    const buttons = document.querySelectorAll(".rps");
    buttons.forEach(button =>
    {
        button.disabled = false;
    }
    );
}

function finishGame()
{
    const resetButtonElement = document.createElement("button");
    resetButtonElement.textContent = "RESTART";
    resetButtonElement.id = "resetButton";
    resetButtonElement.addEventListener("click", restartGame);

    const body = document.querySelector("body");
    body.appendChild(resetButtonElement);

    const rpsButtons = document.querySelectorAll(".rps");
    rpsButtons.forEach(button =>
    {
        button.disabled = true;
    }
    );
}

function updateScoreboard(playerScore, computerScore)
{
    document.querySelector("#playerWins").textContent = playerScore;
    document.querySelector("#computerWins").textContent = computerScore;
}
  
function displayGameResult(playerScore, computerScore)
{
    if (playerScore > computerScore)
        return `End of the game! You WIN ${playerScore} - ${computerScore}`;
    else
        return `End of the game! You LOSE ${playerScore} - ${computerScore}`;
}

function playRoundGUI(playerSelection)
{
    const playerWinsElement = document.querySelector("#playerWins");
    const computerWinsElement = document.querySelector("#computerWins");

    let playerScore = parseInt(playerWinsElement.textContent);
    let computerScore = parseInt(computerWinsElement.textContent);

    const roundResult = playRound(playerSelection, getComputerChoice());
    
    if(roundResult.charAt(4) === "W")
        playerScore++;
    else if (roundResult.charAt(4) === "L")
        computerScore++;

    //If roundResult is DRAW, no wins are given!

    updateScoreboard(playerScore, computerScore);

    const scoreFeedElement = document.querySelector("#scoreFeed");

    if( playerScore < 5 && computerScore < 5 )
    {
        scoreFeedElement.textContent = roundResult;
    }
    else
    {
        scoreFeedElement.textContent = displayGameResult(playerScore, computerScore);

        finishGame();
    }
}

const rpsButtons = document.querySelectorAll(".rps");

rpsButtons.forEach(button =>
{
    button.addEventListener("click", (e) => {playRoundGUI(e.target.id)});
}
);

const playerNameElement = document.querySelector("#playerName");

playerNameElement.textContent = prompt("How would you like to be called?");