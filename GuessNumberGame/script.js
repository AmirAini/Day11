// 'use strict';
 
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number!' //manipulate
 
console.log(document.querySelector('.message').textContent); //after change


console.log(document.querySelector('.number').textContent);

document.querySelector('.number').textContent = 20;

console.log(document.querySelector('.guess').value); //to see

document.querySelector('.guess').value = 5;
  
console.log(document.querySelector('.guess').value);
*/

// document.querySelector('.score').textContent = 14;

const secretNumber = Math.round(Math.random()*20);

let score = 20;

 
console.log(secretNumber); //show real

document.querySelector('.number').textContent = '?';


//inside the function, each event is new secret number
document.querySelector('.check').addEventListener('click',function () {
    const guess = (document.querySelector('.guess').value)

    console.log(guess, typeof guess);



   

    if(guess <= 0 || guess>=21) {document.querySelector('.message').textContent = '1 to 20';}

    else if (guess == secretNumber) {
        document.querySelector('.message').textContent = 'Spot on!';
    }

    else if (guess > secretNumber) {
        if (score > 1){
        document.querySelector('.message').textContent = 'lower';
        score--;}

        else {
        document.querySelector('.message').textContent ="you lose"
        }
    }
    else if (guess < secretNumber){
        if (score > 1){
        document.querySelector('.message').textContent = 'higher';
        score -= 1;}
        else {
            document.querySelector('.message').textContent = 'you lose'
        }
    }

    document.querySelector('.score').textContent = score;
});


