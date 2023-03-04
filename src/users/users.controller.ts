import { Body, Controller, Post } from '@nestjs/common';
import { UsersServices } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersServices) {}

  @Post('/add')
  addUser(@Body() body) {
    return this.usersService.create(body);
  }
}
