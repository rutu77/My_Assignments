//Enum for Category
var Category;
(function (Category) {
    Category["Fiction"] = "Fiction";
    Category["NonFiction"] = "Non-Fiction";
    Category["Science"] = "Science";
    Category["History"] = "History";
    Category["Children"] = "Children";
})(Category || (Category = {}));
//Library class
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    //Add a new book
    Library.prototype.addBook = function (book) {
        if (this.books.some(function (b) { return b.id === book.id; })) {
            console.log("Book with ID ".concat(book.id, " already exist"));
            return;
        }
        this.books.push(book);
        console.log("Book ".concat(book.title, " is added successfully!"));
    };
    //List all books
    Library.prototype.listBooks = function () {
        // console.log("Library Books: ");
        // this.books.forEach(book=>{
        //     console.log(`ID:${book.id}, Title: ${book.title}, Author: ${book.author}, category: ${book.category}, Available: ${book.isAvailable}`);
        // });
        return this.books;
    };
    Library.prototype.searchByTitle = function (title) {
        var result = this.books.filter(function (book) { return book.title.toLowerCase().includes(title.toLowerCase()); });
        if (result.length) {
            console.log("Search Results:");
            result.forEach(function (book) { return console.log("ID: ".concat(book.id, ", Title: ").concat(book.title, ", Author: ").concat(book.author)); });
        }
        else {
            console.log("No book found with the given title");
        }
    };
    Library.prototype.searchByCategory = function (category) {
        var result = this.books.filter(function (book) { return book.category === category; });
        if (result.length) {
            console.log("Book in Category ".concat(category));
            result.forEach(function (book) { return console.log("ID ".concat(book.id, ", Title: ").concat(book.title, ", Author: ").concat(book.author, " ")); });
        }
        else {
            console.log("No books found in category ".concat(category));
        }
    };
    Library.prototype.searchByAvailability = function (isAvailable) {
        var result = this.books.filter(function (book) { return book.isAvailable === isAvailable; });
        if (result.length) {
            console.log("Books that are ".concat(isAvailable ? "Available" : "Not Available"));
            result.forEach(function (book) { return console.log("ID: ".concat(book.id, ", Title: ").concat(book.title, ", Author: ").concat(book.author)); });
        }
        else {
            console.log("No books found that are ".concat(isAvailable ? "Available" : "Not Available"));
        }
    };
    return Library;
}());
var library = new Library();
library.addBook({ id: 1, title: "Kingdom Duet", author: "Rina Kent", category: Category.Fiction, isAvailable: true });
library.addBook({ id: 2, title: "Atomic Habits", author: "James Clear", category: Category.NonFiction, isAvailable: true });
library.addBook({ id: 3, title: "A Brief History of Time", author: "Stephen Hawking", category: Category.Science, isAvailable: true });
library.listBooks();
library.searchByTitle("Atomic Habits");
library.searchByCategory(Category.Fiction);
library.searchByAvailability(true);
