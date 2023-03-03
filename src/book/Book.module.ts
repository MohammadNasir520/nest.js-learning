// import { Module } from '@nestjs/common';
// import { BookController } from './book.controller';
// import { BookService } from './book.service';

import { Module } from '@nestjs/common/decorators';
import { BookController } from './book.controller';
import { BookService } from './book.service';

// @Module({
//   imports: [],
//   controllers: [BookController],
//   providers: [BookService],
// })
// export class BookModule {}

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
