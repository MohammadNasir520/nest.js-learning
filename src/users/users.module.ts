import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersServices } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersServices],
  exports: [],
})
export class UsersModule {
  constructor() {
    console.log('Users module');
  }
}
