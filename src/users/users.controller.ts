import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { User } from './data/user.dto';
import { UserGuards } from './user.Guards';
import { UsersServices } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersServices) {}

  @Post('/add')
  addUser(@Body(new ValidationPipe()) body: User) {
    return this.usersService.addUser(body);
  }

  @Get('/getUsers')
  @UseGuards(new UserGuards())
  getUsers() {
    return this.usersService.findAll();
  }

  @Get('/get/:id')
  getUser(@Param('id') Userid: string) {
    return this.usersService.findOne(Userid);
  }

  @Put('/update/:id')
  updateUser(@Param('id') id: string, @Body() body: User) {
    return this.usersService.update(id, body);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') userId: string) {
    return this.usersService.deleteUser(userId);
  }
}
