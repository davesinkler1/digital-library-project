import { Collection, Db, Document, MongoClient } from 'mongodb'

const uri = "mongodb+srv://jaudanafzal61_db_user:admin@cluster0.f33xnxx.mongodb.net/?appName=Cluster0";
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}
const dbName = 'library_db';

let client;
let clientPromise;
let db:Db;
let books: Collection<Document>

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
export default clientPromise = global._mongoClientPromise;

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = client.db(dbName)
    books = db.collection("library_collection")
  } catch (error) {
    throw new Error('Failed to connect to the database')
  }
}

export const getBook = async ({
  page = 1,
  limit = 10
}: {
  query?: string
  page: number
  limit: number
}) => {
  try {
    if (!books) await init()
    const skip = (page - 1) * limit

    const result = await books
      .find()
      .limit(limit)
      .skip(skip)
      .toArray()

      console.log(result)

      return { books: result }
  } catch (error) {
    return { error }
  }
}


export async function getDB() {
  const client = await clientPromise;
  const db = client.db(dbName);

  const books = await db.collection('library_collection').find().toArray();

  // Simulate delay for learning purpose
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return books;

}
