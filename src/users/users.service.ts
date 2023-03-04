import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Injectable,
} from '@nestjs/common';
import { connectToDatabase } from './mongo.connection';

@Injectable()
export class UsersServices {
  private db;

  constructor() {
    connectToDatabase()
      .then((db) => (this.db = db))
      .catch((err) => console.error(err));
  }

  async findAll() {
    const users = await this.db.collection('users').find().toArray();
    return users;
  }

  async findOne(@Param('id') id: string) {
    const user = await this.db.collection('users').findOne({ _id: id });
    return user;
  }

  async create(body): Promise<string> {
    const user = await this.db.collection('users').insertOne(body);
    // return user.ops[0];
    return user;
  }

  async update(@Param('id') id: string, @Body() body) {
    await this.db.collection('users').updateOne({ _id: id }, { $set: body });
    const user = await this.db.collection('users').findOne({ _id: id });
    return user;
  }

  async remove(@Param('id') id: string) {
    const user = await this.db.collection('users').findOne({ _id: id });
    await this.db.collection('users').deleteOne({ _id: id });
    return user;
  }
}
