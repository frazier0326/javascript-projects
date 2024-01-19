const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3);
let beginning = str.slice(0,3);
let resultStr = (newStr + beginning);
//console.log(newStr);
//console.log(beginning);
//console.log(resultStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Take ${str} and remove the first three characters and add them to the end of the phrase. You should then get ${resultStr}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numOfLetters = input.question("Enter number of letters to be relocated ");
let userNum = str.slice(numOfLetters);
//console.log(userNum);
let userBeginning = str.slice(0, numOfLetters);
//console.log(userBeginning);
let userWord = (userNum + userBeginning);
console.log(userWord);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numOfLetters < str.length) {
    console.log(`Take ${str} and remove the first ${numOfLetters} characters and add them at the end of the phrase. You should get ${userWord}.`);
} else if (numOfLetters > str.length) {
    console.log(`${numOfLetters} characters is more than the number of characters in ${str}. Removing the amount of characters and adding them at the end of the phrase only results in you getting ${str} which doesn't give us an alternative word. Let's try a smaller number. `)
}