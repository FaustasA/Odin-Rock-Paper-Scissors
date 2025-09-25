function getComputerChoice(){
    let ret = Math.random()
    
    return ret < 0.34 ?  "rock" : (ret < 0.67 ? "paper" : "scissors")
}

function getHumanChoice(){
    let input = prompt("Input your choice.").toLowerCase()  
    return input
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Computer chose rock.");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Computer chose scissors.");
            computerScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Computer chose scissors.");
            humanScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Computer chose paper.");
            computerScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Computer chose paper.");
            humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Computer chose rock.");
            computerScore++;
        }
        else {
            console.log("Draw! Computer chose " + computerChoice + ".");
        }
    }

    for(let i = 0; i < 5; ++i){
        playRound()
    }

    console.log("Final score: " + humanScore + "-" + computerScore + ".")
    if(humanScore > computerScore){
        console.log("You win the game!")
    }else if(humanScore < computerScore){
        console.log("Computer wins the game!")
    }else{
        console.log("It's a draw!")
    }

}
playGame()