let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let intials = function (n) {
    return n[0];
};
let firstInitials = names.map(intials);

console.log(firstInitials);
