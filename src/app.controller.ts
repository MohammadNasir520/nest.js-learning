import { Controller, Delete, Get, Post, Put } from '@nestjs/common/decorators';
import { get } from 'http';

@Controller('book')
export class BookController {
  // add book
  @Post('/add')
  addBook(): string {
    return 'this will return add book';
  }

  // delete book
  @Delete('/delete')
  deleteBook(): string {
    return 'this will delete book';
  }

  // update book
  @Put('/update')
  updateBoo(): string {
    return 'this will update book';
  }

  // find all book
  @Get('/findAll')
  findAllBook(): string {
    return 'this will find all book';
  }
}
