/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operate = (num1, num2, token) => {
    switch (token) {
      case "+": {
        return num1 + num2;
      }
      case "-": {
        return num1 - num2;
      }
      case "*": {
        return num1 * num2;
      }
      case "/": {
        return parseInt(num1 / num2);
      }
    }
  };

  const operator = ["+", "-", "/", "*"];
  const stack = [];

  for (let token of tokens) {
    if (operator.includes(token)) {
      const num1 = stack.pop();
      const num2 = stack.pop();

      stack.push(operate(num2, num1, token));
      continue;
    }

    stack.push(Number(token));
  }

  return stack[0];
};
