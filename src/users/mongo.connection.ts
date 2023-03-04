import { MongoClient, ServerApiVersion } from 'mongodb';
export const mongoDBConnection = async () => {
  // nestJs-learning
  // lyEXTeXdLjXsTbx7

  const uri =
    'mongodb+srv://nestJs-learning:lyEXTeXdLjXsTbx7@cluster0.c5dej4c.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  try {
    client.connect();

    return client.db('nestJs-learning');
  } catch (error) {
    console.log(error);
  }
};
