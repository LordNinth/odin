let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const clearButton = document.getElementById("clearBtn");
const lastOperationScreen = document.getElementById("lastOperationScreen");
const currentOperationScreen = document.getElementById(
  "currentOperationScreen"
);
const deleteButton = document.getElementById("deleteBtn");
const equalButton = document.getElementById("equalBtn");
const pointButton = document.getElementById("pointBtn");

clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
equalButton.addEventListener("click", (e) => appendEqual(e.target.innerText));
// pointButton.addEventListener("click", )
// sevenBtn.addEventListener("click", (e) => {
//   console.log(e)
//   currentOperationScreen.textContent = e.target.innerHTML
// })

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => appendOperator(button.textContent))
);

function clear() {
  currentOperationScreen.textContent = "0";
  lastOperationScreen.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function appendNumber(number) {
  if (currentOperationScreen.textContent === "0" || shouldResetScreen) {
    resetScreen();
  }
  currentOperationScreen.textContent += number;
}

function appendOperator(operator) {
  if (
    currentOperationScreen.textContent === "0" ||
    currentOperationScreen.textContent === ""
  ) {
    lastOperationScreen.textContent = 0 + operator;
    currentOperationScreen.textContent = "";
  } else {
    lastOperationScreen.textContent = currentOperationScreen.textContent + operator;
    currentOperationScreen.textContent = currentOperationScreen.textContent;
    firstOperand = Number(currentOperationScreen.textContent)
    currentOperation = operator
    shouldResetScreen = true
  }
}

function appendEqual(equal) {
  if(currentOperationScreen.textContent  === "0" ){
    lastOperationScreen.textContent = 0 + equal

  } else if (lastOperationScreen.textContent === ""){
    currentOperationScreen.textContent = currentOperationScreen.textContent + equal
  }
  
  else {
  secondOperand = Number(currentOperationScreen.textContent)
  currentOperationScreen.textContent = equalOperation(firstOperand,secondOperand,currentOperation)}
}
function deleteNumber() {
  currentOperationScreen.textContent = Math.floor(
    currentOperationScreen.textContent / 10
  );
}

function resetScreen() {
  currentOperationScreen.textContent = "";
  shouldResetScreen = false;
}

function equalOperation(firstOperand,secondOperand,currentOperation){
  if (currentOperation === "+"){
    return firstOperand + secondOperand;
  }
  else if(currentOperation ==="-"){
    return firstOperand - secondOperand;
  }
  else if(currentOperation === "*"){
    return firstOperand * secondOperand;
  }
  else if(currentOperation ==="÷"){
    return firstOperand / secondOperand;
  }
  else {return firstOperand,currentOperation, secondOperand}
}




// const subtract = (a,b) => {
//     return a-b ;
// };

// const multiply = (a,b) => {
//     return a*b;
// };
// const divide = (a,b) =>{
//     return a/b;
// };
