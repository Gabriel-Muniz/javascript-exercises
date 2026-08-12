const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbersToSum) {
  return numbersToSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(numbersToMultiply) {
  return numbersToMultiply.reduce((accumulator, currentValue) => accumulator * currentValue)
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let result = 1;

  while(num > 0){
    result *= num;

    num--
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
