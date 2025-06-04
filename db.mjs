import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

export const connectDB = async () => {
  try {
    await client.connect();
    db = client.db();
    console.log('Mongo connected!');
  } catch (err) {
    console.error('DB connection error:', err.message);
    process.exit(1);
  }
};

export const getDB = () => db;