const numbers = document.querySelectorAll('.numbers');
const decimal = document.querySelectorAll('.decimal');
const operator = document.querySelectorAll('.operator');
const clear = document.querySelectorAll('.clear');
const backspace = document.querySelectorAll('.backspace');
const equals = document.querySelectorAll('.equals');
const display = document.getElementById('display');

let mathOperator = '';
let digit = '';

numbers.forEach((button) => {
    button.addEventListener('click',() => {
        //console.log(button.textContent); // what the user keys 
        // display.textContent=button.textContent;
        if (display.textContent === '0') {
            display.textContent = button.textContent;
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
        mathOperator = button.textContent;
        console.log(mathOperator);
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
    return a + b;
}

function subtract(a,b) {
    return a - b; 
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

// take an operator and 2 numbers then calls a math operator
function operate(mathOperator, num1, num2) {
    //placeholder to evelate expressions
    if (mathOperator == '+') {
        return add(num1, num2);
    }
}

console.log(divide(4,2));