import { Module } from '@nestjs/common';
import { ChatModule } from './chat.module';
import { OrderModule } from './orders.module';
import { UsersModule } from './users/Users.module';

@Module({
  imports: [UsersModule, OrderModule, ChatModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('App module');
  }
}
