import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

let db;

export const connectDB = async () => {
  try {
    await client.connect();
    console.log('📦 DB_NAME from env:', process.env.DB_NAME);
    db = client.db(process.env.DB_NAME || 'users');
    console.log('✅ Connected to MongoDB:', process.env.DB_NAME);
  } catch (err) {
    console.error('❌ DB connection error:', err.message);
    process.exit(1);
  }
};

export const getDB = () => {
  if (!db) throw new Error('Database not connected');
  return db;
};
