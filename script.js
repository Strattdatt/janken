//PART 1
//prompt user to input their selection (rock paper or scissors)
//needs to be case-insensitive
//store input into some variable
let input = prompt("Make your choice: Rock, Paper, or Scissors.");
let playerSelection = input.toLowerCase();
let userHand;
//assign #1 to rock, #2 to paper and #3 to scissors
if (playerSelection === "rock") {
    userHand = 0;
} else if (playerSelection === "paper") {
    userHand = 1;
} else if (playerSelection === "scissors") {
    userHand = 2;
} else {
    alert("Incorrect input. Please type in rock, paper, or scissors.")
}

//get computer generated value using function computerPlay()
function computerPlay() {
    let list = ["rock", "paper", "scissors"];
    let comp_choice = Math.floor(Math.random() * list.length);
    return comp_choice;
}
let randomHand = computerPlay();
console.log(randomHand);
let i = 0;
//while (i < 5) {
if (randomHand === userHand) {
    alert("Tie! You both chose RESULT.");
    //run prompt again and break while loop so it doesn't increment i counter
} else if (userHand === 0 && randomHand === 1) {
    alert(" You lose! Paper beats rock.");
} else if (userHand === 0 && randomHand === 2) {
    alert("You win! Rock beats scissors.");
} else if (userHand === 1 && randomHand === 0) {
    alert("You win! Paper beats rock. ");
} else if (userHand === 1 && randomHand === 2) {
    alert("You lose! Scissors beats paper.");
} else if (userHand === 2 && randomHand === 0) {
    alert("You lose! Rock beats scissors.");
} else {
    alert("you win! Scissors beats paper.")
}
//}




//compare playerSelection to computerSelection
        //if selections are the same return a message saying so and prompting for another selection else
        //if playerSelection is paper and computerSelection is rock, return you win else
        //if playerSelection is paper and computer Selection is scissors, rturn you lose else
        //if playerSelection is rock and computerSelection is paper, return you lose else
        //if playerSelection is rock and computerSeleciton is scissors, return you win else
        //if playeSelection is scissor and computerSelection is rock, return you lose else
        //if playerSelection is scissor and computerSelection is paper, return you win else
        //return you didnt choose a valid selection, please retry
//PART 2
//use function game() to play 5 round game that keeps track of score, displays the results at the end of each round and the winner at the end of the game
//starts a counter at 0, run round function previously created
//return computer vs user score of rounds won
//increase counter by 1
//while counter is less than 5 or player score===3 or computer score ===3, do another round
//print winner of game, whichever is greater: player score or computer score
