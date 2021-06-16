const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click',() => {
        display(button.value);
        document.getElementById('display').innerHTML=button.value;
    });
});

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
function operate() {
    //placeholder to evelate expressions
}

// displays the current value
function display() {
    //console.log()
}

console.log(divide(4,2));