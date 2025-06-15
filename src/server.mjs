import app from './app.mjs';
import {connectDB} from './db.mjs';

const PORT = 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err.message);
  }
};

start();

// Експорт для тестів
export {app};