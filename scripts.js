let previous = 0;
let current = 0;
let result = 0;
let operator = "";

const currentNumber = document.querySelector(".currentNumber");
const previousNumber = document.querySelector(".previousNumber");

//operator functions
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

//operate function that sends correct calculation based on operator symbol
function operate(symbol, a, b) {
    if(symbol === "/") {
        return divide(a, b);
    } else if (symbol === "x") {
        return multiply(a, b);
    } else if(symbol === "-") {
        return subtract(a, b);
    } else if(symbol === "+") {
        return add(a, b);
    } 
}

//actions after number press
function pressNumber(a) {

    //'tack' on pressed number to number string
    let tack = '' + current + a;
    current = parseInt(tack);

    //push current to currentNumber display
    currentNumber.textContent = "";
    currentNumber.insertAdjacentText('beforeend', current); 
}

//actions after operator press
function pressOperator(a) {
    //if not equals, AC AND if no operator has been selected, store operator
    //and change display accordingly
    if(a != '=' && a != 'clear' && operator == "") {
        operator = a;
        console.log(operator);

        previous = current;
        current = "";

        currentNumber.textContent = "";
        currentNumber.insertAdjacentText('beforeend', current);
        previousNumber.textContent = "";
        previousNumber.insertAdjacentText('beforeend', previous);
        previousNumber.insertAdjacentText('beforeend', operator);

    //if user skips equals button and continues pressing operators, then
    //calculate, change display, THEN allow user to input new number.
    //ei: 2 + 2 + 3 INSTEAD OF 2 + 2 = 4, + 3
    } else if(operator != "" && a != "clear" && a != '=') {
        current = operate(operator, previous, current);

        previous = current;
        current = "";

        currentNumber.textContent = "";
        previousNumber.textContent = "";
        previousNumber.insertAdjacentText('beforeend', previous);
        
    //if equals, operate and display results
    } else if(a == '=') {
        current = operate(operator, previous, current)
        operator = "";
        console.log(current);

        previousNumber.textContent = "";
        currentNumber.textContent = "";
        currentNumber.insertAdjacentText('beforeend', current);
    
    //if nothing or AC, then clear all variables and text content
    } else {
        current = 0;
        previous = 0;
        product = 0;
        operator = "";
        previousNumber.textContent = "";
        currentNumber.textContent = "";
    }
    
    
    
    
    
    

    
}