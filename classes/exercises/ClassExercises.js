// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded = false ){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numOfPages = numOfPages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;


    }
};

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded = false){
        super(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded = false)

    }
};

class Novel{
    constructor(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded = false){
        super(title, author, copyrightDate, isbn, numOfPages, timesCheckedOut, discarded = false)

    }
};
// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here: