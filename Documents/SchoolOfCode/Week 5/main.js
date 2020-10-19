
let gameTotal = document.querySelector("#gameTotal");
let numWon = document.querySelector("#numWon");
let numDrawn = document.querySelector("#numDrawn");
let numLost = document.querySelector("#numLost");

let displayResult = document.querySelector("p");

let play = true; 
let gamePlays = 0;
let wins = 0;
let draws = 0;
let loses = 0;

gameTotal.innerText = gamePlays;
numWon.innerText = wins;
numDrawn.innerText = draws;
numLost.innerText = loses;

//image id assigns it to playerMove
function gameIcon(clicked_id) {
   playerMove = clicked_id;
  //return playerMove;
  getWinner(playerMove);
}

//main game logic function
function getWinner(playerMove) {

  //random number generator for computer move
  randomNum = (Math.floor(Math.random() * 3));

  //computer move generator
  //function getComputerMove() {
    if (randomNum === 0) {
      computerMove = 'rock'
    } else if (randomNum === 1) {
      computerMove = 'paper';
    } else if (randomNum === 2) {
      computerMove = 'scissors';
    }
    console.log(computerMove);
    console.log(playerMove);
  //}

//draw/win/lose
  if (playerMove === computerMove) {
    draws = draws + 1
    console.log("It's a draw!");
    displayResult.innerText = "It's a draw!";
  } else if (playerMove === 'rock' && computerMove !== 'paper') {
    wins = wins + 1;
    console.log("You win!");
    displayResult.innerText = "You win!";
  } else if (playerMove === 'paper' && computerMove !== 'scissors') {
    wins = wins + 1;
    console.log("You win!");
    displayResult.innerText = "You win!";
  } else if (playerMove === 'scissors' && computerMove !== 'rock') {
    wins = wins + 1;
    console.log("You win!");
    displayResult.innerText = "You win!";
  } else {
    loses = loses + 1;
    console.log("You lose!");
    displayResult.innerText = "You lose!";
  }

  //games played total 
gamePlays = gamePlays +1;

}