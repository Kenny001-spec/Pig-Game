'use strict';
// DOM ELEMENTS
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');



let currentScore, totalScore, activePlayer, isPlaying;
init();


// State Variables
// currentScore = 0;
// activePlayer = 0;
// totalScore = [0, 0];
// isPlaying = true;

// score0EL.textContent = 0;
// score1EL.textContent = 0;
// current0EL.textContent = 0;
// current1El.textContent = 0;

// diceEl.classList.add('hidden');

// Switch Player Function

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
    diceEl.classList.add('hidden');
}

// console.log(current0EL);
// console.log(current1El);
// console.log(diceEl);
// console.log(score0EL, score1EL);
// console.log(player0EL);
// console.log(player1EL);


// START CONDITION
// score0EL.textContent = 0;
// score1EL.textContent = 0;
// diceEl.classList.add('hidden');

// ROLLING THE DICE
btnRoll.addEventListener('click', () => {
    if (isPlaying) {

        // 1. Generate a random Number

        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(diceNumber)

        // 2. Display The Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${diceNumber}.png`;

        // 3. Check For Rpll-Of-1
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            // current0EL.textContent = currentScore;  // Change Later
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // console.log(currentScore);
        } else {
            // 4. Display the Current Score
            switchPlayer();
        }
    }

})

// Holding the Game
btnHold.addEventListener('click', () => {
    if (isPlaying) {

        // 1. Add Current Score to Active Player Score
        totalScore[activePlayer] += currentScore;

        // 2. Display Total Score
        document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer]; // totalScore

        // 3. Check If total score is equal to Max
        if (totalScore[activePlayer] >= 20) {

            // Delare The Winner
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

            // Remove Dice Elements
            diceEl.classList.add('hidden');

            // Set current Score Back to Zero
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = 0;


            // End the Game
            isPlaying = false;
        } else {
            switchPlayer();
        }
    }

})

// Starting a New game


btnNew.addEventListener('click', init)


function init() {
    current0EL.textContent = 0;
    current1El.textContent = 0;
    activePlayer = 0;
    totalScore = [0, 0];
    currentScore = 0;
    player0EL.classList.add('player--winner');
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    diceEl.classList.add('hidden');
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    isPlaying = true;
}
