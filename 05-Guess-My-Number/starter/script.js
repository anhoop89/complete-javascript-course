'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Update ANH HO!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 200;

// document.querySelector('.guess').value = 222; 

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = document.querySelector('.score').textContent;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'No number 👺!'
    } else {
        if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Congrats! You are right 😍'
            let highScore = Number(document.querySelector('.highscore').textContent);
            highScore += score;
            document.querySelector('.highscore').textContent = highScore;

        } else {
            if (score > 0) {
                if (guess < secretNumber) {
                    document.querySelector('.message').textContent = 'Too low! 😒';
                } else {
                    document.querySelector('.message').textContent = 'Too high! 😒';
                }
                score--;
                document.querySelector('.score').textContent = score;
            } else 
                document.querySelector('.message').textContent = 'You lost the game!';
        }
    }

})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Start guessing...'

})