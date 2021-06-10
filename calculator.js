const container = document.getElementById("container");

let row = document.getElementsByClassName("row"); 
let col = document.getElementsByClassName("col");

let value = 4;

function grid(value) {
    makeRows(value);
    makeColumns(value);
}

function makeRows(rowNum) {
    // Creates rows
    for (x = 0; x < rowNum; x++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "rows";
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

grid(value);
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