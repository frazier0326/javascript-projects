const won = require('../RPS.js');

describe("whoWon", function(){
    test("returns 'TIE!' when players choose the same option", function(){
        let output = won.whoWon('rock', 'rock')
        expect(output).toBe('TIE!');
    });
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = won.whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = won.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });
})