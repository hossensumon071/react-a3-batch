"use strict";

// elements target 
const playAgain = document.querySelector(".play-again");
const correctAns = document.querySelector(".game-correct-ans");
const input = document.querySelector(".input-number");
const check = document.querySelector(".check");
const guessingText = document.querySelector(".gussing-text");
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");

// variables 
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 0;
let HIGH_SCORE = 0;

// display text
function displayGuessingText(text){
    guessingText.textContent = text
}

// check
check.addEventListener("click", function(){
    const inputNum = Number(input.value);
    // console.log(inputNum);

    // when there is no Input 
    if(!inputNum) {
        displayGuessingText("Input a valid number !");
    }
    // when player win!
    else if(inputNum === SECRET_NUMBER){
        displayGuessingText("Correct ans!");
        correctAns.textContent = SECRET_NUMBER;
        correctAns.style.backgroundColor = "#222";
        body.style.backgroundColor = "teal";

        if(SCORE > HIGH_SCORE) {
            HIGH_SCORE = SCORE;
            highScore.textContent = HIGH_SCORE;
        }
    }

    // when guess is wrong
    else if (inputNum !== SECRET_NUMBER) {
        if(SCORE > 1) {
            displayGuessingText(
                inputNum > SECRET_NUMBER ? "Too highe! " : "Too Low"
            );
            SCORE--;
            score.textContent = SCORE;
        } else {
            displayGuessingText("Game over!");
            score.textContent = 0;
        }
    }
})