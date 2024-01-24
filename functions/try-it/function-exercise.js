function makeLine(size) {
    let line = '';
    for (let i=0; i < size; i++) {
        line +='#';
    }
    return line;
}

console.log(makeLine(10));

function makeSquare(size) {
    let line = makeLine(size);
    let square = '';
    for (let i=0; i<size; i++){
        square += line + '\n'
    }
    return square;
}

console.log(makeSquare(3));

function makeRectangle(width,height) {
    let rectangle = '';
    for (let i=0; i<height; i++) {
        rectangle += makeLine(width) + '\n'
    }
    return rectangle;
}

console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let line = '';
    for (i=0; i<height; i++) {
        line += makeLine(i+1) + '\n'
    }
    return line;
}

console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaces = "";
    let line = makeLine(numChars);
    for (let i=0; i<numSpaces; i++) {
      spaces += " ";
    }
    let newLine = spaces + line + spaces;
    return newLine;
  }
  console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle;
  }

console.log(makeIsoscelesTriangle(5));

function reversed(str) {
    return str.split('').reverse().join('');
 }

function makeDiamond(height) {
    let diamond = '';
    for (i=0; i<height; i++) {
        diamond =(makeIsoscelesTriangle(height));
    }
    let upsideDownDiamond = diamond + reversed(diamond);
    return upsideDownDiamond;
}
console.log(makeDiamond(5));