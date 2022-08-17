const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((prev, next) => {
    return prev + next;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((prev, next) => {
    return prev * next;
  }, 1);
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(num) {
	let result = 1;

  for (let n = num; n > 1; n-=1) {
    result *= n;
  }

  return result;
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
