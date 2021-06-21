const numbers = document.querySelectorAll('.numbers');
const operator = document.querySelectorAll('.operator');
const clear = document.querySelectorAll('.clear');
const backspace = document.querySelectorAll('.backspace');
const equals = document.querySelectorAll('.equals');

numbers.forEach((button) => {
    button.addEventListener('click',() => {
        document.getElementById('display').innerHTML=button.textContent;
        firstDigit = button.textContent;
        appendNum(firstDigit);
    });
});

operator.forEach((button) => {
    button.addEventListener('click',() => {
        //document.getElementById('display').innerHTML=button.textContent;
    });
});

function appendNum(num1,num2) {
    num1.concat(num2);
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
function operate(operator, num1, num2) {
    //placeholder to evelate expressions
}

// displays the current value
function display() {
    //console.log()
}

console.log(divide(4,2));