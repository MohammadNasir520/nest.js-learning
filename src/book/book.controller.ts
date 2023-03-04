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
    return this.bookService.deleteBook(bookId);
  }

  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }
}
