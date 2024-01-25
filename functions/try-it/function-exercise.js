
function makeLine(size, character = "#") {
    let line = '';
    for (let i=0; i < size; i++) {
        line += character;
    }
    return line;
}

console.log(makeLine(10, "%"));

function makeSquare(size, character) {
    let line = makeLine(size, character);
    let square = '';
    for (let i=0; i<size; i++){
        square += line + '\n'
    }
    return square.slice(0, -1);
}

console.log(makeSquare(3, "@"));

function makeRectangle(width,height, character) {
    let rectangle = '';
    for (let i=0; i<height; i++) {
        rectangle += makeLine(width, character) + '\n'
    }
    return rectangle.slice(0, -1);
}

console.log(makeRectangle(5, 3, "!"));

function makeDownwardStairs(height, character) {
    let line = '';
    for (i=0; i<height; i++) {
        line += makeLine(i+1, character) + '\n'
    }
    return line.slice(0, -1);
}

console.log(makeDownwardStairs(5, "&"));

function makeSpaceLine(numSpaces, numChars, character) {
    let spaces = "";
    let line = makeLine(numChars, character);
    for (let i=0; i<numSpaces; i++) {
      spaces += " ";
    }
    let newLine = spaces + line + spaces;
    return newLine;
  }
  console.log(makeSpaceLine(3, 5, "~"));

function makeIsoscelesTriangle(height, character) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1, character) + '\n');
    }
    return triangle;
  }

console.log(makeIsoscelesTriangle(5, "%"));

function reversed(str) {
    return str.split('').reverse().join('');
 }

function makeDiamond(height, character) {
    let diamond = '';
    for (i=0; i<height; i++) {
        diamond =(makeIsoscelesTriangle(height, character));
    }
    let upsideDownDiamond = diamond.slice(0, -1) + reversed(diamond);
    return upsideDownDiamond;
}
console.log(makeDiamond(5, "*"));