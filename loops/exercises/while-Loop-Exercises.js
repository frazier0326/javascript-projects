//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let intialFuelLevel ='';
let numOfAstronautsAboard = '';
let altitudeOfShuttle = '';




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require('readline-sync');

while (intialFuelLevel <= 5000 || intialFuelLevel > 30000 || isNaN(intialFuelLevel)) {
  intialFuelLevel = input.question("Please enter the starting fuel level. ");
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  while (numOfAstronautsAboard <=0 || numOfAstronautsAboard >=8 || isNaN(numOfAstronautsAboard)) {
    numOfAstronautsAboard = input.question("Please enter the number of astronauts aboard. ")
  }
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (intialFuelLevel-100*numOfAstronautsAboard >= 0) {
  altitudeOfShuttle = Number(altitudeOfShuttle) + 50;
  intialFuelLevel -= 100*numOfAstronautsAboard;
  }


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let output = `The shuttle gained an altitude of ${altitudeOfShuttle} km`;
if (altitudeOfShuttle >= 2000) {
  console.log(output += (" Orbit achieved!"));
} else {
  console.log("Failed to reach orbit.");
}