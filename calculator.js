const numbers = document.querySelectorAll('.numbers');
const decimal = document.querySelectorAll('.decimal');
const operator = document.querySelectorAll('.operator');
const clear = document.querySelectorAll('.clear');
const backspace = document.querySelectorAll('.backspace');
const equals = document.querySelectorAll('.equals');
const display = document.getElementById('display');

let previousKeyType = '';
let mathOperator = '';
let digit = '';
let secondNum = '';
let firstNum = '';

numbers.forEach((button) => {
    button.addEventListener('click',() => {
        //console.log(button.textContent); // what the user keys 
        // display.textContent=button.textContent;
        if (display.textContent === '0' || previousKeyType === 'operator') {
            display.textContent = button.textContent;
            previousKeyType = '';
        } else if (display.textContent != '0') {
            display.textContent = display.textContent + button.textContent;
        }
    });
});

decimal.forEach((button) => {
    button.addEventListener('click',() => {
        display.textContent = display.textContent + '.';
    });
});

operator.forEach((button) => {
    button.addEventListener('click',() => {
        //document.getElementById('display').innerHTML=button.textContent;
        Array.from(button.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));
        mathOperator = button.textContent;
        button.setAttribute('data-first-number',display.textContent);
        firstNum = button.getAttribute('data-first-number')
        button.classList.add('is-depressed');
        button.setAttribute('data-previous-key-type', 'operator');
        previousKeyType = button.getAttribute('data-previous-key-type');
    });
});

clear.forEach((button) => {
    button.addEventListener('click',() => {
        display.textContent = 0;
    });
});

equals.forEach((button) => {
    button.addEventListener('click',() => {
        Array.from(button.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));
        secondNum = display.textContent;
        operate(mathOperator, firstNum, secondNum)
    });
});

function appendNum(digit) {
    if (display.textContent === '0') {
        digit;
    } else if (display.textContent != '0') {
        display.textContent += digit;
    }
}

// math operators 
function add(a,b) {
    return Math.round((parseFloat(a) + parseFloat(b)) * 10000) / 10000;
}

function subtract(a,b) {
    return Math.round((parseFloat(a) - parseFloat(b)) * 10000) / 10000; 
}

function multiply(a,b) {
    return Math.round((parseFloat(a) * parseFloat(b)) * 10000) / 10000;
}

function divide(a,b) {
    if (b == 0) {
        return 'Cannot divide by zero';
    } else {
        return Math.round((parseFloat(a) / parseFloat(b)) * 10000) / 10000;
    }
}

// take an operator and 2 numbers then calls a math operator
function operate(mathOperator, firstNum, secondNum) {
    if (mathOperator == '+') {
        result = add(firstNum, secondNum);
        display.textContent = result;
    } else if (mathOperator == '-') {
        result = subtract(firstNum, secondNum);
        display.textContent = result;
    } else if (mathOperator == 'x') {
        result = multiply(firstNum, secondNum);
        display.textContent = result; 
    } else if (mathOperator == '/') {
        result = divide(firstNum, secondNum);
        display.textContent = result;
    }
}
