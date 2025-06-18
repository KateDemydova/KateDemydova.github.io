import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {faker} from '@faker-js/faker';
import {UserModel} from './models/userModel.mjs';
import userRoutes from './routes/userRoutes.mjs';

dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async () => {
  try {
    console.log('📦 MONGO_URI:', process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ DB connection error:', err.message);
    process.exit(1);
  }
};

app.use('/api/users', userRoutes);

// HTML UI для виводу користувачів
app.get('/users-page', async (req, res) => {
  try {
    let users = await UserModel.find();

    if (users.length === 0) {
      const fakeUsers = Array.from({length: 5}, () => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
      }));

      await UserModel.insertMany(fakeUsers);
      users = await UserModel.find();
    }

    const html = `
      <html><head><title>Користувачі</title></head>
      <body>
        <h1>Список користувачів</h1>
        <ul>
          ${users.map(user => `<li><strong>${user.name}</strong> — ${user.email}</li>`).join('')}
        </ul>
      </body>
      </html>
    `;
    res.send(html);
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

const start = async () => {
  await connectDB();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

start();