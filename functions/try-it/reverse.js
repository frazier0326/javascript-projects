function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}

function reversed(str) {
   return str.split('').reverse().join('');
}

console.log(reversed("sharease"));