// import { Injectable } from '@nestjs/common';
// import { Book } from './data/book.dto';

import { Delete, Injectable, Param } from '@nestjs/common/decorators';
import { Book } from './data/book.dto';

// @Injectable()
// export class BookService {
//   public books: Book[] = [];

// // add book
// addBookService(book: Book): string {
//   this.books.push(book);
//   return 'book has been successfully updated';
// }

//   // update book
//   updateBookService(book: Book): string {
//     const index = this.books.findIndex((currentBook) => {
//       return (currentBook.id = book.id);
//     });
//     this.books[index] = book;
//     return 'book has been successfully updated';
//   }

//   // delete book
//   deleteBookService(bookId: string): string {
//     this.books = this.books.filter((book) => {
//       return book.id !== bookId;
//     });
//     return 'book is deleted';
//   }

//   // find all book

//   findAllBook(): Book[] {
//     return this.books;
//   }
// }
// @Injectable()
// export class BookService {
//   public books: Book[] = [];

//   // add book services
//   addBookService(book: Book): string {
//     this.books.push(book);
//     return 'book added successfully';
//   }

//   // get all book

//   findAllBooks(): Book[] {
//     return this.books;
//   }
// }
@Injectable()
export class BookServices {
  public books: Book[] = [];

  // add books
  addBookService(book: Book): string {
    this.books.push(book);
    return 'book added successfully';
  }

  // get books
  findAllBooks(): Book[] {
    return this.books;
  }

  //delete books
  deletBook(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.id !== bookId;
    });

    return ' book deleted successfully';
  }
  // update book
}
