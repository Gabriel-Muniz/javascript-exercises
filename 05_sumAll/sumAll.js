const sumAll = function (...numbers) {
  let resultado = 0;

  if (numbers.find((item) => item < 0)) return "ERROR";

  if(numbers.find((item) => !Number.isInteger(item))) return 'ERROR';
  
  numbers.sort((a, b) => a - b);
  
  numeroInicial = numbers[0];
  numeroFinal = numbers[1];

  for (let i = numeroInicial; i <= numeroFinal; i++) {
    resultado += i;
  }
  return resultado;
};

// Do not edit below this line
module.exports = sumAll;
