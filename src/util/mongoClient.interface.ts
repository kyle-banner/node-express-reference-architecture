interface IMongoClient {
  getCollection(collection: string, database: string): Promise<any[]>;
  updateCollection(collection: string, database: string, objectToInsert: any): Promise<any[]>;
}

export default IMongoClient;
