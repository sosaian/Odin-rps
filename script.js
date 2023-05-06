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

function getPlayerChoice()
{
        let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
        
        choice = choice.charAt(0).toUpperCase() + choice.slice(1);

        return choice;

        // For now I won't validate user input...
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
            case (Paper):
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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));