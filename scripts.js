let previous = 0;
let current = 0;

const currentNumber = document.querySelector(".currentNumber");
const previousNumber = document.querySelector(".previousNumber");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function pressNumber(a) {

    //'tack' on pressed number to number string
    let tack = '' + current + a;
    current = parseInt(tack);

    //push current to currentNumber display
    currentNumber.textContent = "";
    currentNumber.insertAdjacentText('beforeend', current); 
}

function pressOperator(a) {

}