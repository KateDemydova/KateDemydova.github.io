import express from 'express';
import dotenv from 'dotenv';
import {connectDB, getDB} from './db.mjs';
import userRoutes from './routes/userRoutes.mjs';
import { faker } from "@faker-js/faker";


dotenv.config();

const app = express();
app.use(express.json());

await connectDB();

app.use('/api/users', userRoutes);

app.get('/users-page', async (req, res) => {
  try {
    const db = getDB();
    let users = await getDB().collection('users').find().toArray();

    if (users.length === 0) {
      const fakeUsers = Array.from({length: 5}, () => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
      }));

      await db.collection('users').insertMany(fakeUsers);

      users = await db.collection('users').find().toArray();
    }

    const html = `
      <!DOCTYPE html>
      <html lang="uk">
      <head>
        <meta charset="UTF-8">
        <title>Користувачі</title>
        <style>
          body { font-family: Arial; padding: 20px; }
          h1 { color: #444; }
          li { margin-bottom: 5px; }
        </style>
      </head>
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
    console.error('Error:', err.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));