let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let previousInput = '';

// Update the display
function updateDisplay(value) {
    display.value = value;
}

// Handle number or decimal input
function handleNumberClick(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

// Handle operator click
function handleOperatorClick(value) {
    if (currentInput === '' && value !== '-') {
        return;
    }

    if (previousInput !== '') {
        calculate();
    }

    operator = value;
    previousInput = currentInput;
    currentInput = '';
}

// Perform calculation
function calculate() {
    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Error';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay(currentInput);
}

// Clear the input
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('');
}

// Add event listeners to buttons
buttons.forEach(button => {
    if (button.classList.contains('num')) {
        button.addEventListener('click', () => handleNumberClick(button.getAttribute('data-value')));
    } else if (button.classList.contains('operator')) {
        button.addEventListener('click', () => handleOperatorClick(button.getAttribute('data-value')));
    } else if (button.classList.contains('clear')) {
        button.addEventListener('click', clearDisplay);
    }
});
