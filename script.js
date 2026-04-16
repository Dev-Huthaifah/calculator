const display = document.getElementById("display");

let firstNum = 0;
let operator = '';
let secondNum = 0;
let shouldResetDisplay = false;
const sum = (a, b) => {
  return a + b;
}
const subtract = (a, b) => {
  return a - b;
}
const multiply = (a, b) => {
  return a * b;
}
const divide = (a, b) => {
  return a / b;
}

const operate = function(num1, op, num2) {
  let result;
  switch (op) {
    case '+':
      result = sum(num1,num2);
    break;
    case '-':
      result = subtract(num1,num2);
    break;
    case '*':
      result = multiply(num1,num2);
    break;
    case '/':
      if (num2 === 0) {
        return 'Not today :)';
      } else {
      result = divide(num1,num2);
      }
    break;
  }
  return result;
}
document.querySelector(".calculator").addEventListener("click", function(e) {
  let pickedNumber;
  if (e.target.classList.contains('number')) {
    if (shouldResetDisplay) {
      display.textContent = '';
      shouldResetDisplay = false;
    }
    if (display.textContent === '0') {
      if (e.target.textContent === '0' || e.target.textContent === '00') {
        return;
      } else {
        display.textContent = '';
      }
    }
    pickedNumber = e.target.textContent;
    display.textContent += pickedNumber;
  }
  if (e.target.classList.contains('operator')) {
    if (operator !== '') {
      secondNum = parseFloat(display.textContent);
      firstNum = operate(firstNum, operator, secondNum);
      display.textContent = firstNum;
    } else {
    firstNum = parseFloat(display.textContent);
    }
    switch (e.target.id) {
      case 'op-sum':
        operator = '+';
      break;
      case 'op-subtract':
        operator = '-';
      break;
      case 'op-multiply':
        operator = '*';
      break;
      case 'op-divide':
        operator = '/';
      break;
    }
  shouldResetDisplay = true;
  }
  if (e.target.classList.contains('equal')) {
    if (operator === '') return;
    secondNum = parseFloat(display.textContent);
    let finalResult = operate(firstNum, operator, secondNum);
    display.textContent = finalResult;
    shouldResetDisplay = true;
    operator = '';
  }
  if (e.target.classList.contains('clear')) {
    display.textContent = '0';
    firstNum = 0;
    operator = '';
    secondNum = 0;
    shouldResetDisplay = false;
  }
})
