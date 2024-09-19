const fibonacci = function (numero) {
  if (numero < 0) return "OOPS";
  // A sequencia se inicia em 1, logo sequencia = 1
  let sequencia = 1;
  // O resultado é nulo, então será iniciado com 0, para que não retorne NaN
  let resultado = 0;
  // Loop N numero de vezes seguindo os passos a seguir
  for (let i = 0; i < numero; i++) {
    let aux = resultado;
    resultado += sequencia;
    sequencia = aux
  }
  return resultado;
  /* 
    auxiliar = resultado => Sequencia antes da alteração.
    resultado = sequencia + resultado;
    sequencia = auxiliar
  */

};

/* 
  R: 0
  S: 1

  A:0
  R:1
  S:0

  A:1
  R:1
  S:1

  A:1
  R:2
  S:1

  A:2
  R:3
  S:2

  A:3
  R:5
  S:3

*/

// Do not edit below this line
module.exports = fibonacci;
