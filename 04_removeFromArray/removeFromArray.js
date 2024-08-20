const removeFromArray = function ([...arrayOriginal], ...elementosRetirados) {
  //Checar se o arrayOriginal contem algum dos elementos a serem retirados
  let novoArray = [];
  
  arrayOriginal.forEach(item => {
    if (!elementosRetirados.includes(item)) novoArray.push(item);
  })

  return novoArray;
};

//Retirar elementos que existem no array de elementos a serem retirados

// Do not edit below this line
module.exports = removeFromArray;
