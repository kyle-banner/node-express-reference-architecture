/* tslint:disable */
import { MongoClient as mongo } from 'mongodb';

async function query() {
  const db = await mongo.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const collection = await db.db('test').collection('asdf');
  return await collection.find().toArray();
}

export default query;
