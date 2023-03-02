import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';

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
  updateBook(): string {
    return 'this will update book';
  }

  // find all book
  @Get('/findAll')
  findAllBook(): string {
    return 'this will find all book';
  }

  @Get('/findbookById/:id')
  findBookById(@Param() params): string {
    return `this will find a book by id of #${params.id}`;
  }
}

// @Get(':id')
// findOne(@Param() params): string {
//   console.log(params.id);
//   return `This action returns a #${params.id} cat`;
// }
