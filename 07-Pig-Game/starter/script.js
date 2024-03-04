'use strict';
// 

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');
// score arr to hold score[0] for player 1; scores[1] for pahyer 2
// this is not 2 dimessional arr. <<-- NOTED
let scores, currentScore, activePlayer, playing;


const initalGame = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    current0EL.textContent = currentScore;
    current1EL.textContent = currentScore;
    score0EL.textContent = currentScore;
    score1EL.textContent = currentScore;
}

// first inital game
initalGame();

const switchPlayer = function () {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //toggle method: add class if not there, if there, it will remove it.
    // toggle takes work away from us.
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}
//rolling dice
btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Number(Math.trunc(Math.random() * 6) + 1);

        // display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. check for rolled 1
        if (dice !== 1) {
            // add dice to current score
            currentScore += dice;
            // id name dynamically
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            // switch to next player
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        // based on active player to add current score when hitting hold
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    }
    // check who is a winner
    if (scores[activePlayer] >= 20) {
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false;
    }
    else
        // press hold btn will switch to another player
        switchPlayer();
})


// event function for new game
// reset all the variable back to default 
btnNew.addEventListener('click', initalGame)