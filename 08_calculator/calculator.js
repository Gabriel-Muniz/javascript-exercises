const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function ([...numeros]) {
  let resultado = 0;

  numeros.forEach((numero) => {
    resultado += +numero;
  });

  return resultado;
};

const multiply = function ([...numeros]) {
  let auxiliarMult = 1;
  numeros.forEach((numero) => (auxiliarMult *= numero));
  return auxiliarMult;
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
