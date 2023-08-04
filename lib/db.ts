import {Db, MongoClient } from "mongodb";

const MONGODB_URL =  process.env.MONGODB_URL;
const MONGODB_DB =  process.env.MONGODB_DB;

let cachedClient: MongoClient;
let cachedDb: Db;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const opt = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    if(!MONGODB_URL){
        throw new Error("Please define the MONGODB_URL environment variable inside .env.local");
    }
    if(!MONGODB_DB){
        throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
    }

    let client = new MongoClient(MONGODB_URL);
    await client.connect();
    let db = client.db(MONGODB_DB);

    cachedClient = client;
    cachedDb = db;

    return { client: cachedClient, db: cachedDb };

}