import { Category } from './enums';

interface Book {
    id:         number;
    title:      string;
    available:  boolean;
    year:       number;
    copies:     number;
    category:   Category;
    log?:       Log;
}

interface Person {
    name:       string;    
}

interface Librarian extends Person {
    employeeId:         string;
    assistCustomer:     () => void; 
}

interface Log {
    rented:     () => number;   
    damaged:    (message: string) => void;   
}

export { Book, Person, Librarian, Log };