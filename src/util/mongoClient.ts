import { MongoClient as mongo } from 'mongodb';

async function getCollection(collection: string, database: string = 'test') {
  const dbUrl: string = process.env.DB_URL || 'mongodb://localhost:27017';
  const db = await mongo.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const dbCollection = await db.db(database).collection(collection);
  return await dbCollection.find().toArray();
}

export default getCollection;
