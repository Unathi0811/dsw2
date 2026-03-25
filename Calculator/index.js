// State variables
let firstNumber = '';
let secondNumber = '';
let operator = '';
let isSecond = false;

// Element references
const display = document.getElementById('display');

// Get collections of buttons
const numButtons = document.getElementsByClassName('num');
const opButtons = document.getElementsByClassName('op');

// ================= NUMBER BUTTONS =================
// Loop through HTMLCollection (no forEach here)
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', function () {

        if (!isSecond) {
            firstNumber += this.textContent; // build first number
            display.textContent = firstNumber;
        } else {
            secondNumber += this.textContent; // build second number
            display.textContent = secondNumber;
        }
    });
}


// ================= OPERATOR BUTTONS =================
for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener('click', function () {
        operator = this.textContent; // store operator
        isSecond = true; // switch to second number
    });
}


// ================= EQUALS BUTTON =================
document.getElementById('equals').addEventListener('click', function () {

    const n1 = Number(firstNumber);
    const n2 = Number(secondNumber);
    let result = 0;

    switch (operator) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case '*': result = n1 * n2; break;
        case '/': result = n2 !== 0 ? n1 / n2 : 'Error'; break;
    }

    display.textContent = result;

    // Prepare for next calculation
    firstNumber = result.toString();
    secondNumber = '';
    isSecond = false;
});


// ================= CLEAR BUTTON =================
document.getElementById('clear').addEventListener('click', function () {

    firstNumber = '';
    secondNumber = '';
    operator = '';
    isSecond = false;

    display.textContent = '0';
});