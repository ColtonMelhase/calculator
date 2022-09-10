let previous = 0;
let current = 0;
let result = 0;
let operator = "";

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

function operate(symbol, a, b) {
    if(symbol === "/") {
        return a / b;
    } else if (symbol === "x") {
        return a * b
    } else if(symbol === "-") {
        return a - b;
    } else if(symbol === "+") {
        return a + b;
    } 
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
    if(a != '=' && a != 'clear') {
        operator = a;
        console.log(operator);

        previous = current;
        current = "";

        currentNumber.textContent = "";
        currentNumber.insertAdjacentText('beforeend', current);
        previousNumber.textContent = "";
        previousNumber.insertAdjacentText('beforeend', previous);
        previousNumber.insertAdjacentText('beforeend', operator);
    } else if(a == '=') {
        current = operate(operator, previous, current)
        console.log(current);

        previousNumber.textContent = "";
        currentNumber.textContent = "";
        currentNumber.insertAdjacentText('beforeend', current);
    } else {
        current = 0;
        previous = 0;
        product = 0;
        operator = "";
        previousNumber.textContent = "";
        currentNumber.textContent = "";
    }
    
    
    
    
    
    

    
}