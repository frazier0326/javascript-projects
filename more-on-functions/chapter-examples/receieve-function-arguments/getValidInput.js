const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let startsWith = function(str) {
    if (str[0] === 'a') {
      return true;
    }
    return false;
};
console.log(getValidInput("Enter a word that starts with a:", startsWith));
// TODO 2: write a validator 
// that ensures input is a vowel
let vowelChecker = function (vowel) {
  if (vowel=== 'a' ||vowel=== 'e' || vowel=== 'i' || vowel=== 'o' || vowel=== 'u') {
    return true;
  }
    return false;
};
console.log(getValidInput("Enter a vowel:", vowelChecker));
// Be sure to test your code!
