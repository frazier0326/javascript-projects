// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2*Math.PI*radius);
}

// Code your missionDuration function here:

function missionDuration(numOfOrbitsCompleted, orbitRadius = 2000, orbitalSpeed = 28000) {
  let time = "";
  time = numOfOrbitsCompleted*orbitCircumference(orbitRadius)/orbitalSpeed
  console.log(`The mission will travel ${orbitCircumference(orbitRadius)} km around the planet, and it will take ${Math.round(time*100) / 100} hours to complete.`);
  return Math.round(time*100) / 100;
}

console.log(missionDuration(5));
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitRadius, orbitalSpeed) {
  candidate = selectRandomEntry(candidate);
  let spacewalk = missionDuration(3, orbitRadius, orbitalSpeed);
  let oxygenUsed = candidate.o2Used(Math.round(spacewalk*1000) / 1000);
  return `${candidate.name} will perform the spacewalk, which will last ${spacewalk} hours and require ${Math.round(oxygenUsed*1000)/1000} kg of oxygen.`
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 console.log(oxygenExpended(crew));
 console.log(oxygenExpended(crew, 1000, 30000));