/// <reference path="utility.ts" />

import { Book, Log, Person, Librarian } from './interfaces';
import { Category } from './enums';

class Library {
    constructor(
            public books:       Array<Book>, 
            public librarian:   Librarian) {
    }
    
    public GetBooks(): Array<Book> {
        return this.books; 
    }   
    
    public Search(func: (b: Book) => any): Array<Book> {
        return this.books.filter(b => func(b));
    } 
}

let books = new Array<Book>();

let book1: Book = {
    id: 1, 
    title: "TypeScript In-depth", 
    available: true, 
    category: Category.programming, 
    year: 2016, 
    copies: 1,
    log: {
        rented:     () => { return Math.random(); },
        damaged:    (message: string) => { console.log(message); }
    }
}
books.push(book1); 
books.push({id: 2, title: "Moby Dick", available: false, category: Category.fiction, year: 1875, copies: 3});

let librarian: Librarian = {
    name:           "Zinaida",
    employeeId:     "EA123",
    assistCustomer: () => { console.log(name + " is assisting customer"); }
}

let lib = new Library(books, librarian);

let result = lib.Search(b => {return b.id === 1});

//console.log(result)
var fee = Utility.Fees.CalculateLateFee(4);