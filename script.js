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

const buttons = document.querySelectorAll(".rps");

buttons.forEach( (button) =>
{
    button.addEventListener("click", (e) => console.log(playRound(e.target.id ,getComputerChoice())))
}
);


// const rock = document.querySelector("#rock");
// rock.addEventListener("click", (e) => console.log(playRound("Rock",getComputerChoice())));

// const paper = document.querySelector("#paper");
// paper.addEventListener("click", (e) => console.log(playRound("Paper",getComputerChoice())));

// const scissors = document.querySelector("#scissors");
// scissors.addEventListener("click", (e) => console.log(playRound("Scissors",getComputerChoice())));


// function game()
// {
//     let playerWins = 0;
//     let computerWins = 0;

//     for (let roundNumber = 1; roundNumber < 6; roundNumber++)
//     {
//         let roundResult = playRound( getPlayerChoice(), getComputerChoice() );
        
//         if(roundResult.charAt(4) === "W")
//             playerWins++;
//         else if (roundResult.charAt(4) === "L")
//             computerWins++;

//         //If roundResult is DRAW, no wins are given!
        
//         console.log(`Round ${roundNumber}: ${roundResult}`);
//     }

//     console.log(`End of the game! You ${playerWins > computerWins ? "WIN" : "LOSE"} ${playerWins} - ${computerWins}`);
// }