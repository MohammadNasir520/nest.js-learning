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
import { ObjectId } from 'mongodb';
import { connectToDatabase } from './mongo.connection';

@Injectable()
export class UsersServices {
  private db;

  constructor() {
    connectToDatabase()
      .then((db) => (this.db = db))
      .catch((err) => console.error(err));
  }

  // add user
  async create(body): Promise<string> {
    const user = await this.db.collection('users').insertOne(body);

    return user;
  }

  // find all users
  async findAll() {
    const users = await this.db.collection('users').find().toArray();
    return users;
  }

  // find oneUsers by Id
  async findOne(id: string) {
    const user = await this.db
      .collection('users')
      .findOne({ _id: new ObjectId(id) });
    return user;
  }
  // update user
  async update(@Param('id') id: string, @Body() body) {
    const updateUser = await this.db
      .collection('users')
      .updateOne({ _id: new ObjectId(id) }, { $set: body });
    const user = await this.db
      .collection('users')
      .findOne({ _id: new ObjectId(id) });
    return { updateUser, user };
  }

  async deleteUser(@Param('id') id: string) {
    // const user = await this.db
    //   .collection('users')
    //   .findOne({ _id: new ObjectId(id) });
    const deleteUser = await this.db
      .collection('users')
      .deleteOne({ _id: new ObjectId(id) });
    return deleteUser;
  }
}
