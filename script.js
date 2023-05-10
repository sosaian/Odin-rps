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

function playRoundGUI(playerSelection)
{
    const playerWins = document.querySelector("#playerWins");
    const computerWins = document.querySelector("#computerWins");

    const roundResult = playRound( playerSelection, getComputerChoice() );
    
    if(roundResult.charAt(4) === "W")
        playerWins.textContent = parseInt(playerWins.textContent) + 1;
    else if (roundResult.charAt(4) === "L")
        computerWins.textContent = parseInt(computerWins.textContent) + 1;

    const scoreFeed = document.querySelector("#scoreFeed");
    scoreFeed.textContent = roundResult;
}

const buttons = document.querySelectorAll(".rps");

buttons.forEach( (button) =>
{
    button.addEventListener("click", (e) => {playRoundGUI(e)});
}
);

const playerName = document.querySelector("#playerName");

playerName.textContent = prompt("How would you like to be called?");