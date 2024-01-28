// function reverse(str) {
//   let lettersArray = str.split('');
//   let reversedLettersArray = lettersArray.reverse();
//   return reversedLettersArray.join('');
// }

// console.log(reverse("LaunchCode"));

let reversed = function (str) {
  let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
};

console.log(reversed("lollipop"));

let f1 = function(str) {
  return str + str;
};

let f2 = f1;

console.log(f1("abcd"));
// console.log(function("abcd"));
console.log(f2("abcd"));