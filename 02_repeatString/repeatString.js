const repeatString = function (string, num) {
  let aux = "";
  if (num == 0) return aux;
  if (num < 0) {
    aux = "ERROR"
    return aux;
  };

  for (let i = 0; i < num; i++) {
    aux += string;
  }
  return aux;
};

// Do not edit below this line
module.exports = repeatString;
