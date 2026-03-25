// Initial state
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Element selectors
const message = document.getElementById('message');
const scoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('highscore');
const guessInput = document.getElementById('guess');
const numberBox = document.querySelector('.number');
const body = document.body;

// Check button logic
document.getElementById('check').addEventListener('click', function () {
    const guess = Number(guessInput.value);

    // Case 1: Empty input
    if (!guess) {
        message.textContent = 'No Number!!';
    }

    // Case 2: Correct guess
    else if (guess === secretNumber) {
        message.textContent = 'Correct number!!';
        numberBox.textContent = secretNumber;

        // Style changes
        numberBox.style.width = '30rem';
        body.style.backgroundColor = '#55D52';

        // Highscore logic
        if (score > highscore) {
            highscore = score;
            highscoreEl.textContent = highscore;
        }
    }

    // Case 3: Wrong guess
    else {
        if (score > 1) {
            message.textContent =
                guess > secretNumber ? 'Number too high' : 'Number too low';

            score--;
            scoreEl.textContent = score;
        } else {
            message.textContent = 'You lost the Game!!';
            scoreEl.textContent = 0;
        }
    }
});

// Again button (Reset)
document.getElementById('again').addEventListener('click', function () {
    // Reset values
    score = 20;
    //truncate the number to an integer
    secretNumber = Math.floor(Math.random() * 20) + 1;

    // Reset UI
    message.textContent = 'Start guessing...';
    scoreEl.textContent = score;
    guessInput.value = '';
    numberBox.textContent = '?';

    // Reset styles
    numberBox.style.width = '15rem';
    body.style.backgroundColor = '#222'; // default dark

    // Highscore stays (do NOT reset it)
});