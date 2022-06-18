//helper function to randomize between 1-3. 
//Taken from https://www.educative.io/answers/how-to-generate-a-random-number-between-a-range-in-javascript
function randomNumber(min=1, max=4){
    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor(rand * difference);

    rand = rand + min;

    return rand;
}

//call randomNumber function and use switch cases to assign each value to a game value
function computerPlay(){
    let computerChoice = randomNumber();
    switch(computerChoice){
        case 1:
            computerChoice = "ROCK";
            return computerChoice;
        case 2:
            computerChoice = "PAPER";
            return computerChoice;
        case 3:
            computerChoice = "SCISSORS";
            return computerChoice;
    }
}

function playRound(playerSelection=promptUntilValid(), computerSelection=computerPlay()){
    console.log(playerSelection);
    console.log(computerSelection);
    winner = declareWinner(playerSelection, computerSelection);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let i = 0;
    while(i !== 5){
        playRound()
        console.log(i);
        if (winner === "player"){
            playerScore++;
            i++;
        }
        else if (winner === "computer"){
            computerScore++;
            i++;
        }
        console.log(`You: ${playerScore}; Me: ${computerScore}`);
        if (computerScore === 3){
            console.log("You lose!");
            break;
        }
        if (playerScore === 3){
            console.log("You win!");
            break;
        }
     }
}

game();




//helper function to get valid value
function promptUntilValid(playerSelection){
    invalidValue = true;
    while(invalidValue){
        playerSelection = prompt("Rock, Paper, Scissors?").toUpperCase();
        if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS"){
            invalidValue = false;
            return playerSelection;
        }
    }
}

//helper function to figure out winner
function declareWinner(playerSelection, computerSelection){
    switch(playerSelection) {
        case "ROCK":
            if(computerSelection == "ROCK"){
                console.log("It's a tie!");
                return "tie";
            }
            else if(computerSelection == "PAPER"){
                console.log("Ha! Got ya!");
                return "computer";
            }
            else{
                console.log("Ouch! Easy!");
                return "player";
            }
        case "PAPER":
            if(computerSelection == "ROCK"){
                console.log("Ouch! Easy!");
                return "player";
            }
            else if(computerSelection == "PAPER"){
                console.log("It's a tie!");     
                return "tie";         
            }
            else{
                console.log("Ha! Got ya!");
                return "computer";
            }

        case "SCISSORS":
            if(computerSelection == "ROCK"){
                console.log("Ha! Got ya!");
                return "computer";
            }
            else if(computerSelection == "PAPER"){
                console.log("Ouch! Easy!");
                return "player";
            }
            else{
                console.log("It's a tie!");
                return "tie";
            }
    }
}
