const container = document.getElementsByClassName("container");

let row = document.getElementsByClassName("row"); 
let col = document.getElementsByClassName("col");

let value = 4;

grid(value);

function grid(value) {
    makeRows(value);
    makeColumns(value);
}

function makeRows(value) {
    // Creates rows
    for (x = 0; x < value; x++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "row";
    };
};

function makeColumns(colNum) {
    for (let y = 0; y < row.length; y++) {
        for (z = 0; z < colNum; z++) {
            let newCol = document.createElement("div");
            row[z].appendChild(newCol).className = "col";
        };
    };
};

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

console.log(divide(4,2));