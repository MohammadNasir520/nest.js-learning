import { Param, Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from './mongo.connection';
import { User } from './data/user.dto';
@Injectable()
export class UsersServices {
  private db;
  private usersCollection;
  constructor() {
    connectToDatabase()
      .then((db) => {
        this.db = db;
        this.usersCollection = db.collection('users');
      })
      .catch((err) => console.error(err));
  }

  // add user
  async addUser(body: User): Promise<User> {
    const user = await this.usersCollection.insertOne(body);

    return user;
  }

  // find all users
  async findAll() {
    const users = await this.usersCollection.find().toArray();
    return users;
  }

  // find oneUsers by Id
  async findOne(id: string) {
    const user = await this.usersCollection.findOne({ _id: new ObjectId(id) });
    return user;
  }
  // update user
  async update(id: string, body: User) {
    const updateUser = await this.usersCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body },
    );
    const user = await this.usersCollection.findOne({ _id: new ObjectId(id) });
    return { updateUser, user };
  }

  async deleteUser(id: string) {
    const deleteUser = await this.usersCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return deleteUser;
  }
}
