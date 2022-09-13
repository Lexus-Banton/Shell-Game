/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess';

/* Actions */
function loadPage() {
    displayShells();
}

/* Components */
const shellOne = document.getElementById('shell-1');
const shellTwo = document.getElementById('shell-2');
const shellThree = document.getElementById('shell-3');

const pearlOne = document.getElementById('pearl-1');
const pearlTwo = document.getElementById('pearl-2');
const pearlThree = document.getElementById('pearl-3');

const guessDiv = document.getElementById('guesses');
const resultDiv = document.getElementById('results');
const playAgainBtn = document.getElementById('play-again-button');
/* Component */
// get DOM
// display
function displayShells() {
    if (gameState === 'guess') {
        shellOne.classList.remove('reveal');
        shellTwo.classList.remove('reveal');
        shellThree.classList.remove('reveal');
        resultDiv.classList.add('hidden');
    } else {
    }
}
// event listeners

/* Run page load code */
loadPage();
