const convertToCelsius = function (temp) {
  let tempConverted = (temp - 32) * (5 / 9);
  let rounded = tempConverted.toFixed(1);
  let roundedNumber = Number(rounded);
  return roundedNumber;
};

const convertToFahrenheit = function (temp) {
  let tempConverted = temp * 1.8 + 32;
  let rounded = tempConverted.toFixed(1);
  let roundedNumber = Number(rounded);
  return roundedNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
