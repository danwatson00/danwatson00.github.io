//This generates a random whole number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

//These declare the variables and attach the content from their repsective html counterparts
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

//These declare more variables for the form elements
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

//This sets the cursor to the guess field when the page loads
guessField.focus();

//This is the function that performs the operation of checking the guessed number
function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses:';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
    
}
//This the event listener for the button
guessSubmit.addEventListener('click', checkGuess);

//This sets the game over, disables the entry fields and buttons and adds a start new game button
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//This resets the game so it can be played again by reseting p elements
function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}