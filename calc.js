//variables to store values
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let currentOperation = null;
let shouldResetScreen = false;

// variable declaration for dom reference
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

//adding event listeners
window.addEventListener("keydown", addNumber);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
equalButton.addEventListener("click", (e) => appendEqual(e.target.innerText));
pointButton.addEventListener("click", (e) => appendPoint(e.target.innerText));

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => appendOperator(button.textContent))
);

//functions
function clear() {
  currentOperationScreen.textContent = "";
  lastOperationScreen.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function addNumber(e) {
  if (e.keyCode > 95 && e.keyCode < 106) {
    const addKeyNum = document.querySelector(
      `[data-number="${e.key}"]`
    ).textContent;
    return appendNumber(addKeyNum);
  } else if (e.keyCode > 105 && e.keyCode < 112 && e.keyCode != 110) {
    const addKeyOperator = document.querySelector(
      `[data-operator="${e.key}"]`
    ).textContent;
    appendOperator(addKeyOperator);
  } else if (e.keyCode == "110") {
    const addKeyPoint = document.getElementById("pointBtn").textContent;
    return appendPoint(addKeyPoint);
  } else if (e.keyCode == "13") {
    const addKeyEqual = document.getElementById("equalBtn").textContent;
    return appendEqual(addKeyEqual);
  } else e.keyCode == "8";
  const addKeyBackSpace = document.getElementById("deleteBtn").textContent;
  return deleteNumber(addKeyBackSpace);
}

function appendNumber(number) {
  if (currentOperationScreen.textContent === "0" || shouldResetScreen)
    resetScreen();
  currentOperationScreen.textContent += number;
}

function appendOperator(operator) {
  if (
    // currentOperationScreen.textContent === "0" ||
    currentOperationScreen.textContent === ""
  ) {
    lastOperationScreen.textContent = operator;
    currentOperationScreen.textContent = "";
  } else {
    lastOperationScreen.textContent =
      currentOperationScreen.textContent + operator;
    currentOperationScreen.textContent = currentOperationScreen.textContent;
    firstOperand = Number(currentOperationScreen.textContent);
    currentOperation = operator;
    shouldResetScreen = true;
  }
}

function appendEqual(equal) {
  if (
    // currentOperationScreen.textContent === "0" ||
    lastOperationScreen.textContent === ""
  ) {
    lastOperationScreen.textContent =
      currentOperationScreen.textContent + equal;
    shouldResetScreen = true;
  } else if (!lastOperationScreen.textContent.includes(equal)) {
    secondOperand = Number(currentOperationScreen.textContent);
    currentOperationScreen.textContent = equalOperation(
      firstOperand,
      secondOperand,
      currentOperation
    );
    lastOperationScreen.textContent =
      lastOperationScreen.textContent + secondOperand + equal;
  }
}

function appendPoint(point) {
  if (currentOperationScreen.textContent.includes(point)) return;
  currentOperationScreen.textContent += point;
}

function deleteNumber() {
  if (
    currentOperationScreen.textContent === "" ||
    currentOperationScreen.textContent === "0"
  ) {
    clear();
  } else {
    currentOperationScreen.textContent =
      currentOperationScreen.textContent.substring(
        (i = 0),
        currentOperationScreen.textContent.length - 1
      );
  }
}

function resetScreen() {
  currentOperationScreen.textContent = "";
  shouldResetScreen = false;
}

//operation
function equalOperation(firstOperand, secondOperand, currentOperation) {
  switch (currentOperation) {
    case "+":
      const sum = firstOperand + secondOperand;
      const fixedSumDecimal = +sum.toFixed(2);
      return fixedSumDecimal;

    case "-":
      const sub = firstOperand - secondOperand;
      const fixedSubDecimal = +sub.toFixed(2);
      return fixedSubDecimal;

    case "*":
      const multiply = firstOperand * secondOperand;
      const fixedMultiplyDecimal = +multiply.toFixed(2);
      return fixedMultiplyDecimal;

    case "÷":
      if (secondOperand === 0) return 0;
      else {
        const divideNum = firstOperand / secondOperand;
        const fixedDecimal = +divideNum.toFixed(2);
        console.log(fixedDecimal);
        return fixedDecimal;
      }
  }
}
