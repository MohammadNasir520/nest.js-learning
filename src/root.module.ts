import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { BookModule } from './book/Book.module';
import { ChatModule } from './chat.module';
import { OrderModule } from './orders.module';
import { UsersModule } from './users/Users.module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('App module');
  }
}
