import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('✅ Успішне підключення до MongoDB');
  } catch (err) {
    console.error('❌ Помилка підключення до MongoDB:', err.message);
    process.exit(1);
  }
};
