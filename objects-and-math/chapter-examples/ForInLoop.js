// let tortoiseOne = {
//    species: "Galapagos Tortoise",
//    name: "Pete",
//    weight: 919,
//    age: 85,
//    diet: ["pumpkins", "lettuce", "cabbage"],
// };

// // Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

// for (item in tortoiseOne) {
//    console.log(item + ", " + tortoiseOne[item]);
// }

let tortoiseOne = {
   age: 150,
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

let tortoiseTwo = {
   age: 150,
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseOne == tortoiseTwo);
console.log(tortoiseOne === tortoiseTwo);
console.log(tortoiseOne.age === tortoiseTwo.age);

