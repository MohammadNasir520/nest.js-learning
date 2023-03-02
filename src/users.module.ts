import { Module } from '@nestjs/common';
import { OrderModule } from './orders.module';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class UsersModule {
  constructor() {
    console.log('Users module');
  }
}
