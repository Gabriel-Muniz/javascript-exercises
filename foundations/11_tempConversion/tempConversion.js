const convertToCelsius = function(temp) {
  let celsiusTemp = (temp - 32) * (5/9);
  return formatTemp(celsiusTemp);
};

const formatTemp = function(temp){
  return (Number.isInteger(temp)) ? temp : Number(temp.toFixed(1));
}

const convertToFahrenheit = function(temp) {
  let fahrenheitTemp = (temp * (9/5)) + 32;
  return formatTemp(fahrenheitTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
