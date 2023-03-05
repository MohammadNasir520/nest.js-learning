import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersServices } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersServices) {}

  @Post('/add')
  addUser(@Body() body) {
    return this.usersService.create(body);
  }

  @Get('/getUsers')
  getUsers() {
    return this.usersService.findAll();
  }

  @Get('/get/:id')
  getUser(@Param('id') Userid: string) {
    return this.usersService.findOne(Userid);
  }

  @Put('/update/:id')
  updateUser(@Param('id') id: string, @Body() body) {
    return this.usersService.update(id, body);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') userId: string) {
    return this.usersService.deleteUser(userId);
  }
}
