// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common/decorators';
import { BookServices } from './book.service';
import { Book } from './data/book.dto';

// import { BookService } from './book.service';
// import { Book } from './data/book.dto';

// @Controller('book')
// export class BookController {
//   constructor(private bookService: BookService) {}

//   @Get('/findAll')
//   getAllbooks(): Book[] {
//     return this.bookService.findAllBook();
//   }

//   @Put('/update')
//   updateBook(@Body() book: Book): string {
//     return this.bookService.updateBookService(book);
//   }
//   @Delete('/delete/:id')
//   deleteBook(@Param('id') bookId: string): string {
//     return this.bookService.deleteBookService(bookId);
//   }
//   @Post('/add')
//   addBook(@Body() book: Book): string {
//     return this.bookService.addBookService(book);
//   }
// }

// @Controller('book')
// export class BookController {
//   constructor(private bookService: BookService) {}
//   @Post('/add')
//   addBook(@Body() book: Book): string {
//     return this.bookService.addBookService(book);
//   }

//   @Get('/findAllBooks')
//   getAllBooks(): Book[] {
//     return this.bookService.findAllBooks();
//   }
// }
@Controller('book')
export class BookController {
  constructor(private bookService: BookServices) {}

  @Post('/add')
  addbook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }

  @Get('/findAllBooks')
  findAllBooks(): Book[] {
    return this.bookService.findAllBooks();
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string) {
    return this.bookService.deletBook(bookId);
  }

  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }
}
