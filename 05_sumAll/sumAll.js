const sumAll = function (...numbers) {
  let resultado = 0;

  numbers.sort((a, b) => a - b);
  
  numeroInicial = numbers[0];
  numeroFinal = numbers[1];

  if (numbers.find((item) => item < 0)) return "ERROR";

  for (let i = numeroInicial; i <= numeroFinal; i++) {
    resultado += i;
  }
  return resultado;
};

// Do not edit below this line
module.exports = sumAll;
