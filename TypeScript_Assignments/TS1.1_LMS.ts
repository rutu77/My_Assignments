//Enum for Category
enum Category{
    Fiction="Fiction",
    NonFiction="Non-Fiction",
    Science="Science",
    History="History",
    Children="Children"
}

//Interface for Book
interface Book{
    id: number;
    title: string;
    author: string;
    category: Category;
    isAvailable: boolean
}

//Library class
class Library{
    private books: Book[]=[];

    //Add a new book
    addBook(book: Book):void{
        if(this.books.some(b=>b.id===book.id)){
            console.log(`Book with ID ${book.id} already exist`);
            return;
        }
        this.books.push(book);
        console.log(`Book ${book.title} is added successfully!`);
    }

    //List all books
    listBooks():Book[]{
        // console.log("Library Books: ");
        // this.books.forEach(book=>{
        //     console.log(`ID:${book.id}, Title: ${book.title}, Author: ${book.author}, category: ${book.category}, Available: ${book.isAvailable}`);
        // });
        return this.books;
    }

    searchByTitle(title: string): void {
        const result = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        if (result.length) {
            console.log("Search Results:");
            result.forEach(book => console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`));
        } else {
            console.log("No book found with the given title");
        }
    }

    searchByCategory(category: Category):void{
        const result= this.books.filter(book=>book.category===category);
        if(result.length){
            console.log(`Book in Category ${category}`);
            result.forEach(book=> console.log(`ID ${book.id}, Title: ${book.title}, Author: ${book.author} `));
        }
        else{
            console.log(`No books found in category ${category}`);
        }
    }

    searchByAvailability(isAvailable: boolean): void{
        const result= this.books.filter(book=>book.isAvailable===isAvailable);
        if(result.length){
            console.log(`Books that are ${isAvailable ? "Available": "Not Available"}`);
            result.forEach(book=>console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`));
        }
        else{
            console.log(`No books found that are ${isAvailable? "Available": "Not Available"}`);
        }
    }
    
}

const library = new Library(); 

library.addBook({ id: 1, title: "Kingdom Duet", author: "Rina Kent", category: Category.Fiction, isAvailable: true }); 
library.addBook({ id: 2, title: "Atomic Habits", author: "James Clear", category: Category.NonFiction, isAvailable: true }); 
library.addBook({ id: 3, title: "A Brief History of Time", author: "Stephen Hawking", category: Category.Science, isAvailable: true }); 

console.log(library.listBooks());
library.searchByTitle("Atomic Habits");
library.searchByCategory(Category.Fiction);
library.searchByAvailability(true);