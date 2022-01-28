/*Initial Step*/
let operation = document.getElementById('operation');


//-------------------------------------------Formate Of Digit Start-------------------------------------

/*Formate of Number or Digits : This step is for formate the input and put semi-colon between digits*/
function numberFormate(input) {
    return input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
//-------------------------------------------Formate Of Digit End---------------------------------------

//-------------------------------------------All Normal Function Start----------------------------------

/**
 *  Operation : This function get the number when we click on button.
 */
function addNum(e) {
    let char = e.getAttribute("data-value");
    let currentValue = operation.innerText.replace(/,/g, "");
    currentValue += char;
    operation.innerHTML = numberFormate(currentValue);
}
//-------------------------------------------All Normal Function End----------------------------------


//-------------------------------------------Clear Value Start------------------------------------------

/**
 * Clear Value : By Using This We can Clear All the Data
 */
function clearData() {
    operation.innerText = "";
}
//-------------------------------------------Clear Value End--------------------------------------------


//-------------------------------------------Equal Start------------------------------------------------

/**
 * Equal : By using below function we will get the final result of the operation.
 */
function cal() {
    let value = operation.innerText.replace(/,/g, "");
    operation.innerText = numberFormate(eval(value).toString());
}
//-------------------------------------------Equal End--------------------------------------------------


//-------------------------------------------Backspace Start--------------------------------------------

/**
 * BackSpace : By using this function we can erase last digit or method of opration.
 */
function backspace() {
    let value = operation.innerText.replace(/,/g, "");
    let valuelength = value.length;
    let newValue = value.substring(0, valuelength - 1);
    operation.innerText = numberFormate(newValue);
}
//-------------------------------------------Backspace End----------------------------------------------


//-------------------------------------------Plus-Minus Start-------------------------------------------

/**
 * Plus and Minus : By using this function we can change the value of the digits.(EX:We make sum of two digit and the final result of the operation is negative then by using this we can make that value plus)
*/
function plusminus() {
    let value = operation.innerText.replace(/,/g, "");
    value *= -1;
    operation.innerText = numberFormate(value.toString());
}
//-------------------------------------------Plus-Minus End-------------------------------------------


//-------------------------------------------ln Start---------------------------------------------------

/**
 * ln : Here ln stands for log Natural and this function help as to find the log of any digits.
 */
function ln() {
    let value = operation.innerText.replace(/,/g, "");
    operation.innerText = Math.log(value).toString()
}
//-------------------------------------------ln End---------------------------------------------------


//-------------------------------------------Log Start--------------------------------------------------

/**
 * log: Log generally refers to a logarithm to the base 10 this function help us to found log with base 10.
 */
function log() {
    let value = operation.innerText.replace(/,/g, "");
    operation.innerText = Math.log10(value).toString();
}
//-------------------------------------------Log End----------------------------------------------------


//-------------------------------------------Power of Ten Start-----------------------------------------

/**
 * 10^x : It's means power of ten and this function is help us to calculate the power of 10 and here x means whatever power we want.
 */
function tenPower() {
    let value = operation.innerText.replace(/,/g, "");
    operation.innerText = Math.pow(10, value).toString();
}
//-------------------------------------------Power of Ten End-------------------------------------------


//-------------------------------------------Root Start-------------------------------------------------

/**
 * Root : It's help to find the square root of any value. 
 */
function root() {
    let value = operation.innerText.replace(/,/g, "");
    operation.innerText = Math.sqrt(value).toString();
}
//-------------------------------------------Root End---------------------------------------------------


//-------------------------------------------Factorial Start--------------------------------------------

/**
* Factorial : Factorial is a function that multiplies a number by every number below it.(EX: 5!= 5*4*3*2*1=120.)
*/

function factorial() {
    let value = operation.innerText.replace(/,/g, "");
    let result = 1;
    let i = 0;
    for (let i = value; i >= 1; i--) {
        result *= i;
    }
    operation.innerText = result.toString();
}
//-------------------------------------------Factorial End----------------------------------------------



//-------------------------------------------Square Start-----------------------------------------------

/**
 * Square : By using this function we can find the square of any numbers.
 */
function square() {
    let value = operation.innerText.replace(/,/g, "");
    value *= value;
    operation.innerText = value.toString();
}
//-------------------------------------------Square End-------------------------------------------------


//-------------------------------------------Exp Start--------------------------------------------------

/**
 * Exp : This function is use to returns e^x value 
 */
function cal_exp() {
    let value = operation.innerText.replace(/,/g, "");
    operation.innerText = Math.exp(value);
}
//-------------------------------------------Exp End----------------------------------------------------


//-------------------------------------------Absolute Start---------------------------------------------

/**
 * Absolute : This function is use the make any value absolute.
 */
function absolute() {
    let value = operation.innerText.replace(/,/g, "");
    operation.innerText = Math.abs(value);
}
//-------------------------------------------Absolute End-----------------------------------------------


//-------------------------------------------Function Start---------------------------------------------

/**
 *  Math Function : By using this function we can make any value round, floor, ceil, trunc.
 */
function mathsFun(fname) {
    let value = operation.innerText.replace(/,/g, "");
    let result = 0;
    switch (fname) {
        case 'ceil':
            result = Math.ceil(value);
            break;
        case 'floor':
            result = Math.floor(value);
            break;
        case 'round':
            result = Math.round(value);
            break;
        case 'trunc':
            result = Math.trunc(value);
            break;
    }
    console.log(result);
    operation.innerText = numberFormate(result.toString());
}
//-------------------------------------------Function End-----------------------------------------------


//-------------------------------------------Trigonometry Start-----------------------------------------

/**
 * Trigonometry Function : By using this function we can find the trigo value of any digits.
 */
function trigonometry(method) {
    let value = operation.innerText.replace(/,/g, "");
    let result = 0;
    switch (method) {
        case "sin":
            result = Math.sin(value);
            break;
        case "cos":
            result = Math.cos(value);
            break;
        case "tan":
            result = Math.tan(value);
            break;
        case "cot":
            result = 1 / Math.tan(value);
            break;
    }
    if (result === NaN) {
        operation.innerText = "ERROR"
    } else {
        operation.innerText = numberFormate(result.toString());
    }
}
//-------------------------------------------Trigonometry End-------------------------------------------


//-------------------------------------------Degree Start-----------------------------------------------

/**
 *  Degree : This function is use to measures of an angle.
 */
function deg() {
    let value = operation.innerText.replace(/,/g, "");
    value *= (180 / Math.PI)
    operation.innerText = numberFormate(value.toString())
}
//-------------------------------------------Degree End-------------------------------------------------


//-------------------------------------------Exponential Start------------------------------------------

/**
 *  Exponential : This function is use to fixed value with exponent value.
 */
function exp() {
    let value = Number(operation.innerText.replace(/,/g, ""));
    operation.innerText = numberFormate(value.toExponential(3).toString());
}
//-------------------------------------------Exponential End--------------------------------------------


//-------------------------------------------Memory Function Start--------------------------------------

let mValue = 0;

/**
 * Memory Store : The calculator has one memory that can be used for storing values temporarily.
 */

function memoryStore() {
    let value = Number(operation.innerText.replace(/,/g, ""));
    if (operation.innerText != "") {
        mValue = value;
        document.getElementById("mc-on").style.color = "black";
        document.getElementById("mr-on").style.color = "black";
    }
    operation.innerText = "";
}

/**
 * Memory Plus : This function use to add the presently displayed number to the value in memory.
 */
function mPlus() {
    let value = Number(operation.innerText.replace(/,/g, ""));
    if (operation.innerText != "") {
        mValue += value;
        document.getElementById("mc-on").style.color = "black";
        document.getElementById("mr-on").style.color = "black";
    }
    operation.innerText = "";
}

/**
 * Memory Minus : This function use to subtract the present value from the stored value.
*/
function mMinus() {
    let value = Number(operation.innerText.replace(/,/g, ""));
    if (operation.innerText != "") {
        mValue -= value;
        document.getElementById("mc-on").style.color = "black";
        document.getElementById("mr-on").style.color = "black";
    }
    operation.innerText = "";
}

/**
 * Memory Recall : This function is used to display the number saved in memory,The calculator will show the stored number on screen, replacing any value already displayed.
 */

function mRecall() {
    console.log(mValue)
    operation.innerText = numberFormate(mValue.toString());
}


/**
 * Memory Clear: The calculator has one memory that can be used for storing values temporarily to clear this memory we need to use this function.
 */

function mClear() {
    mValue = 0
    if (mValue == 0)
        document.getElementById("mc-on").style.color = "gray";
    document.getElementById("mr-on").style.color = "gray";
}

//-------------------------------------------Memory Function End----------------------------------------

