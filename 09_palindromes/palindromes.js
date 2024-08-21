const palindromes = function (palavra) {
  let palavraCortada = [];

  for (let i = 0; i < palavra.length; i++) {
    if (palavra.charAt(i).match(/[^a-zA-Z0-9]/)) continue;
    palavraCortada.push(palavra.charAt(i));
  }

  let aux = palavraCortada.join("").toLowerCase();
  let auxReversivel = palavraCortada.reverse().join("").toLowerCase();
  return aux == auxReversivel ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
