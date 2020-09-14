// gets Buttons and Tabs from the HTML document

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

//Connects Number Buttons on Calculator with real Numbers

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

//Connects Operation Button on Calculator with real Operations

addOperationListener(add_btn,"+",add,false)
addOperationListener(subtract_btn,"-",subtract,false)
addOperationListener(multiply_btn,"*",multiply,false)
addOperationListener(divide_btn,"/",divide,false)


//Keyboard Shortcuts

window.addEventListener("keydown", checkkeypress, false)

function checkkeypress(key){
    if(key.keyCode== "48"){
        display(0)
    }
    if(key.keyCode== "49"){
        display(1)
    }
    if(key.keyCode== "50"){
        display(2)
    }
    if(key.keyCode== "51"){
        display(3)
    }
    if(key.keyCode== "52"){
        display(4)
    }
    if(key.keyCode== "53"){
        display(5)
    }
    if(key.keyCode== "54"){
        display(6)
    }
    if(key.keyCode== "55"){
        display(7)
    }
    if(key.keyCode== "56"){
        display(8)
    }
    if(key.keyCode== "57"){
        display(9)
    }
    if(key.keyCode== "8"){
        destroy()
    }
    if(key.keyCode== "13"){
        equals()
    }
    if(key.keyCode== "107"){
        addOperationListener(add_btn,"+",add, true)
    }
    if(key.keyCode== "171"){
        addOperationListener(add_btn,"+",add, true)
    }
    if(key.keyCode== "109"){
        addOperationListener(subtract_btn,"-",subtract,true)
    }
    if(key.keyCode== "173"){
        addOperationListener(subtract_btn,"-",subtract,true)
    }
    if(key.keyCode== "106"){
        addOperationListener(multiply_btn,"*",multiply,true)
    }
    // if(key.keyCode== "16"+"171"){
    //     addOperationListener(multiply_btn,"*",multiply,true)
    // }
    if(key.keyCode== "111"){
        addOperationListener(divide_btn,"/",divide,true)
    }
    // if(key.keyCode== "16"+"55"){
    //     addOperationListener(divide_btn,"/",divide,true)
    // }
}
let currentOperator = null;
let firstNumber = null;
let lastOperator = null;

delete_btn.addEventListener('click', destroy) 

equals_btn.addEventListener('click',equals)

function addOperationListener(button, operation, func, hotkey){         //gets the Operation the user chose 
    if(hotkey == true){
        if(result_tab.innerText == ""){return}                 
        if (currentOperator !== null){        
            result_tab.innerText = lastOperator(firstNumber,parseFloat(result_tab.innerText))    
        }
        pullUp() 
        firstNumber = parseFloat(history_tab.innerText) 
        currentOperator = operation;
        lastOperator = func
        history_tab.innerText += " " + currentOperator;     //adds Operator to number in History tab
        
    }
    button.addEventListener('click', function(){                //after Operation chosen they have to go through this
        if(result_tab.innerText == ""){return}                  //if there is no number User cant choose Operation
        if (currentOperator !== null){                          //if user types operation and operation is already chosen: 
                                                                //do current operation with first and second number and afterwards add current operation into history tab
            result_tab.innerText = lastOperator(firstNumber,parseFloat(result_tab.innerText))    
        }
        pullUp()        
          
        //defines first number makes the operation a global variable and ads the current operation to the history Tab
        firstNumber = parseFloat(history_tab.innerText) 
        currentOperator = operation;
        lastOperator = func
        history_tab.innerText += " " + currentOperator;     //adds Operator to number in History tab
    })
}

function equals(){
    if(result_tab.innerText == ""){     //equals wont work if there is no second number typed
        return 
    }
    if (currentOperator !== null){      //if first, second number and operation already typed calculate everything
        result_tab.innerText = Math.round(lastOperator(firstNumber,parseFloat(result_tab.innerText))*10000)/10000
    }
    //calculation completed: resets Caclulator
    currentOperator = null;
    lastOperator = null;
    history_tab.innerText = "";
}


function addDigitListener(button, digit){           //displays the digits the user chose
    button.addEventListener('click', () => display(digit))
}

function display(digit){
    result_tab.innerText += digit;
}

function destroy(){         //Resets the calculator
    result_tab.innerText = "";
    history_tab.innerText ="";
    currentOperator = null;
    lastOperator = null;
    firstNumber = null;
}

function pullUp(){          //moves the Number and the Operation into the history tab
    history_tab.innerText = result_tab.innerText
    result_tab.innerText = "";
    
}
//functions to make the calculator work
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

