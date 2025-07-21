const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let difference = a - b;
  return difference;
};

const sum = function (array) {
  let sumation = array.reduce((item, currentItem) => item + currentItem, 0);
  return sumation;
};

const multiply = function (array) {
  let product = array.reduce((item, currentItem) => item * currentItem, 1);
  return product;
};

const power = function (a, b) {
  let resultantOfPower = (a ** b);
  return resultantOfPower;
};

const factorial = function (a) {
  if (a < 0) {
    return "does not exist";
  }
  let factorialMultiplier = 1
  for (let i = 1; i <= a; i++) {
    factorialMultiplier *= i
  }
  return factorialMultiplier;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
