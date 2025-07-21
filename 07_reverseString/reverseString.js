const reverseString = function(input) {
let arr = [];
let inputArray = input.split("");
for (let i = inputArray.length - 1; i >= 0; i--) {
    arr.push(inputArray[i]);
} return arr.join("");
};


// Do not edit below this line
module.exports = reverseString;
