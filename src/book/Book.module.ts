import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookServices } from './book.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookServices],
})
export class BookModule {}
