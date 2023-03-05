import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.c5dej4c.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB database');
    return client.db('nestJsLearning');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
