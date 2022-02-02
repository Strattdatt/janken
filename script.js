//PART 1
//prompt user to input their selection (rock paper or scissors)
//needs to be case-insensitive
//store input into some variable

function userInput() {
    let input = prompt("Make your choice: Rock, Paper, or Scissors.");
    let playerSelection = input.toLowerCase();
    let userHand;
    //assign #1 to rock, #2 to paper and #3 to scissors
    if (playerSelection === "rock") {
        return 0;
    } else if (playerSelection === "paper") {
        return 1;
    } else if (playerSelection === "scissors") {
        return 2;
    } else {
        alert("Incorrect input. Please type in rock, paper, or scissors.")
        userInput();
    }
}

//get computer generated value using function computerPlay()
function computerPlay() {
    let list = ["rock", "paper", "scissors"];
    let comp_choice = Math.floor(Math.random() * list.length);
    return comp_choice;
}



//compare playerSelection to computerSelection
//if selections are the same return a message saying so and prompting for another selection else
//if playerSelection is paper and computerSelection is rock, return you win else
//if playerSelection is paper and computer Selection is scissors, return you lose else
//if playerSelection is rock and computerSelection is paper, return you lose else
//if playerSelection is rock and computerSeleciton is scissors, return you win else
//if playeSelection is scissor and computerSelection is rock, return you lose else
//if playerSelection is scissor and computerSelection is paper, return you win else
function playRound(randomHand, userHand) {

    if (randomHand === userHand) {
        alert("Tie! You both chose RESULT.");
        //run prompt again and break while loop so it doesn't increment i counter
    } else if (userHand === 0 && randomHand === 1) {
        alert(" You lose! Paper beats rock.");
        return 2;
    } else if (userHand === 0 && randomHand === 2) {
        alert("You win! Rock beats scissors.");
        return 1;
    } else if (userHand === 1 && randomHand === 0) {
        alert("You win! Paper beats rock. ");
        return 1;
    } else if (userHand === 1 && randomHand === 2) {
        alert("You lose! Scissors beats paper.");
        return 2;
    } else if (userHand === 2 && randomHand === 0) {
        alert("You lose! Rock beats scissors.");
        return 2;
    } else {
        alert("you win! Scissors beats paper.")
        return 1;
    }
}


let compScore = 0;
let userScore = 0;
function game() {
    while (compScore < 3 && userScore < 3) {
        let userHand = userInput();
        let randomHand = computerPlay();
        let someVar = playRound(4, "4");
        if (someVar === 1) { ///winning case
            userScore++;
        } else if (someVar === 2) {
            compScore++;
        } else {

        }

        //if user wins increase userscore by one, 
        //if comp wins increas compScore by one
        // display game score
        //increase i by 1 unless it was a tie

    }
}

game();



