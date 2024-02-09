
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: "launchcode",
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput(n) {
    let stringOutput = "";
    if (n%2===0 && n%3 !==0 && n%5 !==0) {
        stringOutput = 'Launch!';
    } else if (n%3===0 && n%2!==0 && n%5!==0) {
        stringOutput = 'Code!';
    } else if (n%5===0 && n%3!==0 && n%2 !==0) {
        stringOutput = 'Rocks!'
    } else if (n%2===0 && n%3===0 && n%5 !==0) {
        stringOutput = 'LaunchCode!'
    } else if (n%3===0 && n%5===0 && n%2 !==0) {
        stringOutput = "Code Rocks!"
    } else if (n%2===0 && n%5===0 && n%3 !== 0) {
        stringOutput = "Launch Rocks!"
    } else if (n%2===0 && n%3===0 && n%5===0) {
        stringOutput = "LaunchCode Rocks!"
    }else {
        stringOutput = `Rutabagas! That doesn't work.`;
    }
    return stringOutput;
  }
}

module.exports = launchcode;

