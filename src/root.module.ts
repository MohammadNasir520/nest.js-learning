import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { ChatModule } from './chat.module';
import { OrderModule } from './orders.module';
import { UsersModule } from './users/Users.module';

@Module({
  imports: [UsersModule, OrderModule, ChatModule],
  controllers: [BookController],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('App module');
  }
}
