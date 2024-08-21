const fibonacci = function (numero) {
    if (numero < 0) return "OOPS";
  let resultado = 0;
    let sequencia = 1;
  for (let i = 0; i < +numero; i++) {
    let aux = resultado;
    resultado = resultado + sequencia;
    sequencia = aux;
  }
  return resultado;
};

// Do not edit below this line
module.exports = fibonacci;
