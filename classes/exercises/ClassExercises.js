// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numOfPages = numOfPages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
    checkout(uses=1) {
        this.timesCheckedOut += uses;
     }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded);
    }
    dispose(currentYear){
        if (currentYear-this.copyrightDate > 5) {
           this.discarded = 'Yes';
        }
     }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded);
    }
    dispose(){
        if (this.timesCheckedOut > 100) {
           this.discarded = 'Yes';
        }
     }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');
let buildManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1,'No');

// Code exercises 4 & 5 here:
// prideAndPrejudice.checkout(5);
// console.log(prideAndPrejudice);

buildManual.dispose(2024);
console.log(buildManual);