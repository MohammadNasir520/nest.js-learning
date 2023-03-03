import { Book } from './data/book.dto';

export class BookService {
  public books: Book[] = [];

  // add book
  addBookService(book: Book): string {
    this.books.push(book);
    return 'book has been successfully updated';
  }
  // update book
  // delete book
  // find all book
}
