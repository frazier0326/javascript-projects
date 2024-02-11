
let i = 10;

function myFunction() {
    return 10 + i;
}

console.log(i);
console.log(myFunction());

let a = 0;

function coolFunction() {
    let b = 2;
    return a + b;
}

function coolerFunction() {
    let c = 5;
    c += coolFunction();
    return c;
}

console.log(coolFunction());
console.log(coolerFunction());