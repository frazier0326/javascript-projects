function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}

console.log(isPalindrome("sharease"));
console.log(isPalindrome("tacocat"));