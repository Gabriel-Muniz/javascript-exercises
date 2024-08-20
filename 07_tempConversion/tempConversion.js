const convertToCelsius = function(temperaturaFahrenheit) {
  let temperaturaConvertida = (temperaturaFahrenheit - 32) * 5/9;
  return (temperaturaConvertida % 2 == 0) ? +temperaturaConvertida : +temperaturaConvertida.toFixed(1);
};

const convertToFahrenheit = function(temperaturaCelsius) {
  let temperaturaConvertida = temperaturaCelsius * 9/5 + 32;
  return (temperaturaConvertida % 2 == 0) ? +temperaturaConvertida : +temperaturaConvertida.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
