import { injectable } from 'inversify';
import { MongoClient as mongo } from 'mongodb';
import IMongoClient from './mongoClient.interface';

@injectable()
class MongoClient implements IMongoClient {
  private dbUrl: string = process.env.DB_URL || 'mongodb://localhost:27017';
  public client: any;

  constructor() {
    if (!this.client) {
      mongo.connect(
        this.dbUrl,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (error, result) => {
          if (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
          }
          this.client = result;
        }
      );
    }
  }

  public async getCollection(collection: string, database: string): Promise<any[]> {
    const dbCollection = await this.client.db(database).collection(collection);
    return await dbCollection.find().toArray();
  }

  public async updateCollection(collection: string, database: string, objectToInsert: any): Promise<any[]> {
    const dbCollection = await this.client.db(database).collection(collection);
    await dbCollection.insertOne(objectToInsert);
    return objectToInsert;
  }
}

export default MongoClient;