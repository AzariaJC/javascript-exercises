const palindromes = function (string) {
  //We need an empty array to save our converted, reversed string into
  let arr = [];
  //lets take out the spaces of the input string
  let stringWithNoSpaces = string.replaceAll(" ", "");
  //now, let's take out the punctuation (bc palindromes are irrespective of punctuation)
  let stringWithNoSpacesOrPunctuation = stringWithNoSpaces.replaceAll(",", "");
  //breaks string into an array with no spaces between characters
  let consideredArray = string.split("");
  //minus one bc index starts at 0, we wanna start from the end and add items to array that way
  for (let i = consideredArray.length - 1; i >= 0; i--) {
    arr.push(consideredArray[i]);
  }
  //this takes that array with the characters in reverse order and puts them into a string
  let reversedString = arr.join("");
  if (stringWithNoSpacesOrPunctuation === reversedString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
