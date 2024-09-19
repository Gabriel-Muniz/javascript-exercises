const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function ([...numeros]) {
  return numeros.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function ([...numeros]) {
  return numeros.reduce((total, currentValue) => (total *= currentValue), 1);
};

const power = function (n1, n2) {
  return n1 ** n2;
};

const factorial = function (n) {
  let auxiliarFactorial = 1;

  for (let i = n; i > 0; i--) {
    auxiliarFactorial *= i;
  }
  return auxiliarFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
