const add = function(num1, num2) {
	const result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	const result = num1 - num2;
  return result;
};

const sum = function(array) {
  const result = array.reduce((total, num) => total + num, 0);
  return result;
};

const multiply = function(array) {
  const result = array.reduce((total, num) => total * num, 1);
  return result;
};

const power = function(num1, num2) {
	const result = num1 ** num2;
  return result;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
