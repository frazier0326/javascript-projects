const whoWon = require('../RPS.js');

describe("whoWon", function(){
    test("returns 'TIE!' when players choose the same option", function(){
        let output = test.whoWon('rock', 'rock')
        expect(output).toBe('TIE!');
    })
})