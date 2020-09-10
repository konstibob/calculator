const equals_btn = document.getElementById('equals')
const delete_btn = document.getElementById('del')
const history_tab = document.getElementById('previousResult')
const result_tab = document.getElementById('result')

const add_btn = document.getElementById('add')
const subtract_btn = document.getElementById('subtract')
const multiply_btn = document.getElementById('multiply')
const divide_btn = document.getElementById('divide')

const zero_btn = document.getElementById('zero')
const one_btn = document.getElementById('one')
const two_btn = document.getElementById('two')
const three_btn = document.getElementById('three') 
const four_btn = document.getElementById('four')
const five_btn = document.getElementById('five') 
const six_btn = document.getElementById('six')
const seven_btn = document.getElementById('seven')
const eight_btn = document.getElementById('eight')
const nine_btn = document.getElementById('nine')

addDigitListener(zero_btn,0)
addDigitListener(one_btn,1)
addDigitListener(two_btn,2)
addDigitListener(three_btn,3)
addDigitListener(four_btn,4)
addDigitListener(five_btn,5)
addDigitListener(six_btn,6)
addDigitListener(seven_btn,7)
addDigitListener(eight_btn,8)
addDigitListener(nine_btn,9)

addOperationListener(add_btn,"+",add)
addOperationListener(subtract_btn,"-",subtract)
addOperationListener(multiply_btn,"*",multiply)
addOperationListener(divide_btn,"/",divide)

equals_btn.addEventListener('click',equals)

let currentOperator = null;
let firstNumber = null;
let currentfunc = null;

delete_btn.addEventListener('click', destroy)

function addOperationListener(button, operation, func){
    button.addEventListener('click', function(){
        if(result_tab.innerText == ""){return}
        if (currentOperator !== null){
            result_tab.innerText = currentfunc(firstNumber,parseFloat(result_tab.innerText))
        }
        pullUp()
        currentOperator = null;
        currentfunc = null;
        
        firstNumber = parseFloat(history_tab.innerText)
        currentOperator = operation;
        currentfunc = func
        history_tab.innerText += " " + currentOperator;
    })
}

function equals(){
    if(result_tab.innerText == ""){
        return 
    }
    if (currentOperator !== null){
        result_tab.innerText = Math.round(currentfunc(firstNumber,parseFloat(result_tab.innerText))*10000)/10000
    }
    currentOperator = null;
    currentfunc = null;
    history_tab.innerText = "";
}


function addDigitListener(button, digit){
    button.addEventListener('click', () => display(digit))
}

function display(digit){
    result_tab.innerText += digit;
}
function destroy(){ 
    result_tab.innerText = "";
    history_tab.innerText ="";
    currentOperator = null;
    currentfunc = null;
    firstNumber = null;
}

function pullUp(){
    history_tab.innerText = result_tab.innerText
    result_tab.innerText = "";
}
function add(number1,number2){
    return number1+number2
}
function subtract(number1,number2){
    return number1-number2
}
function multiply(number1,number2){
    return number1*number2
}
function divide(number1,number2){
    return number1/number2
}

//TEST