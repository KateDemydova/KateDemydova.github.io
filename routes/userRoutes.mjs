import express from 'express';
import { getDB } from '../db.mjs';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await getDB().collection('users').find().toArray();
  res.json(users);
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  const result = await getDB().collection('users').insertOne({ name, email });

  res.status(201).json({
    _id: result.insertedId,
    name,
    email,
  });
});
export default router;