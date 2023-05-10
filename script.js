function getComputerChoice()
{
        let randomNumber = Math.floor(Math.random() * 100);

        if (randomNumber > 66)
                return "Rock";
        else if (randomNumber > 33)
                return "Paper";
        else
                return "Scissors";
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
        return `Draw! both of you chose ${playerSelection}`;
    else
    {
        switch (playerSelection)
        {
            case ("Rock"):
            {
                if (computerSelection === "Scissors")
                    return `You Win! ${playerSelection} beats ${computerSelection}`;
                else
                    return `You Lose! ${computerSelection} beats ${playerSelection}`;
            }
            case ("Paper"):
            {
                if (computerSelection === "Rock")
                    return `You Win! ${playerSelection} beats ${computerSelection}`;
                else
                    return `You Lose! ${computerSelection} beats ${playerSelection}`;
            }       
            default:
            {   //playerSelection = "Scissors"
                if (computerSelection === "Paper")
                    return `You Win! ${playerSelection} beats ${computerSelection}`;
                else
                    return `You Lose! ${computerSelection} beats ${playerSelection}`;
            }
        }   //Note: thanks to using return in each case, there's
            //no need for break statements :)
    }
}

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

    playerWinsElement.textContent = playerScore;
    computerWinsElement.textContent = computerScore;

    const scoreFeedElement = document.querySelector("#scoreFeed");

    if( playerScore < 5 && computerScore < 5 )
    {
        scoreFeedElement.textContent = roundResult;
    }
    else
    {
        scoreFeedElement.textContent = `End of the game! You ${playerScore > computerScore ? "WIN" : "LOSE"} ${playerScore} - ${computerScore}`;

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