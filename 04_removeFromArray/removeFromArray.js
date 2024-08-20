const removeFromArray = function ([...arrayOriginal], ...elementosRetirados) {
  //Checar se o arrayOriginal contem algum dos elementos a serem retirados
  let novoArray = [];

  arrayFora: for (let i = 0; i < arrayOriginal.length; i++) {
    for (let j = 0; j < elementosRetirados.length; j++) {
      if (arrayOriginal[i] === elementosRetirados[j]) continue arrayFora;
    }
    novoArray.push(arrayOriginal[i]);
  }
  return novoArray;
};

//Retirar elementos que existem no array de elementos a serem retirados

// Do not edit below this line
module.exports = removeFromArray;
