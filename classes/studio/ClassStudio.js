//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores
    }
    addScore(score) {
        this.scores.push(score)
    }
    average()  {
        let averageSum = 0;
        let averageTotal = 0;
        for (let i=0; i<this.scores.length; i++) {
            averageSum += this.scores[i];
        }
        averageTotal = averageSum / this.scores.length
        return Math.round(averageTotal*10)/10;
    }
    status() {
        let statusAverage = this.average()
        let status = '';
        if (statusAverage >= 90) {
            status = 'Accepted';
            return `${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`
        }else if (statusAverage<89 && statusAverage>80){
            status = 'Reserve';
            return `${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`
        }else if (statusAverage<79 && statusAverage>70) {
            status = 'Probationary';
            return `${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`
        }else if (statusAverage < 70) {
            status = 'Rejected';
            return `${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`
    
        }
    }
}

let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
// console.log(bear);
let dog = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
// console.log(dog);
let gator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
// console.log(gator);
bear.addScore(83);
console.log(bear.scores);
console.log(dog.average())
console.log(gator.status());
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.