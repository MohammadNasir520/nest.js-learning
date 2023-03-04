// import { MongoClient } from 'mongodb';

// export const connectToDatabase = async () => {
//   const uri =
//     'mongodb+srv://<username>:<password>@<cluster-url>/test?retryWrites=true&w=majority'; // replace with your connection string
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   try {
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');
//     return client.db('mydatabase'); // replace with your database name
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// ----------------------------------------------------------------

// import { Controller, Get } from '@nestjs/common';
// import { connectToDatabase } from './mongo.connection';

// @Controller()
// export class MyController {
//   private db;

//   constructor() {
//     connectToDatabase()
//       .then(db => this.db = db)
//       .catch(err => console.error(err));
//   }

//   @Get()
//   async getData() {
//     const collection = this.db.collection('mycollection'); // replace with your collection name
//     const data = await collection.find().toArray();
//     return data;
//   }
// }
