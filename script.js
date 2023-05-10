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
    const playerWins = 0;
    const computerWins = 0;

    let roundResult = playRound( getPlayerChoice(), getComputerChoice() );
    
    if(roundResult.charAt(4) === "W")
        playerWins++;
    else if (roundResult.charAt(4) === "L")
        computerWins++;

    //If roundResult is DRAW, no wins are given!
    
    console.log(`Round ${roundNumber}: ${roundResult}`);

    console.log(`End of the game! You ${playerWins > computerWins ? "WIN" : "LOSE"} ${playerWins} - ${computerWins}`);
    
    const scoreFeed = document.querySelector("#scoreFeed");
}

const buttons = document.querySelectorAll(".rps");

buttons.forEach( (button) =>
{
    button.addEventListener("click", (e) => {playRoundGUI(e)});
}
);

const playerName = document.querySelector("#playerName");

playerName.textContent = prompt("How would you like to be called?");