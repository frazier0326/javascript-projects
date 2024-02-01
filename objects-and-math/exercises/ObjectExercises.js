let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 9,
   move: function () {return Math.floor(Math.random()*11)}
};

let coolChimp = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 7,
   move: function () {return Math.floor(Math.random()*11)}
};

let goodBoy = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let gross = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, coolChimp,goodBoy, gross];
// Print out the relevant information about each animal.
function crewReports(animal) {
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
}
// Start an animal race!
function fitnessTest(array){
   let results = [], numSteps, turns;
   for (let i = 0; i < array.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += array[i].move();
       turns++;
       }
       results.push(`${array[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }

  console.log(fitnessTest(crew));