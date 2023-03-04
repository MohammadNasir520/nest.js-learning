import { Delete, Injectable, Param } from '@nestjs/common/decorators';
import { Book } from './data/book.dto';

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
  deleteBook(bookId: string): string {
    this.books = this.books.filter((book) => {
      return book.id !== bookId;
    });

    return ' book deleted successfully';
  }
  // update books
  updateBookService(book: Book): string {
    const index = this.books.findIndex((currentBook) => {
      return (currentBook.id = book.id);
    });
    this.books[index] = book;
    return 'book added successfully';
  }
}
