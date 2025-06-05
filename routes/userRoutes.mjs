import express from 'express';
import { ObjectId } from "mongodb";
import { getDB } from '../db.mjs';


const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await getDB().collection('users').find({}, {projection: {name: 1, email: 1, _id: 0}}).toArray();
  res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message })
  }
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

router.post('/bulk', async (req, res) => {
  const users = req.body;

  if (!Array.isArray(users) || users.length === 0 ) {
    return res.status(400).json({message: 'Array of users required'});
  }

  const validUsers = users.filter(user => user.name && user.email);

  if (validUsers.length === 0) {
    return res.status(400).json({message: 'No valid users found'})
  }

  const result = await getDB().collection('users').insertMany(validUsers);

  res.status(201).json({
    insertedCount: result.insertedCount,
    insertedIds: result.insertedIds,
  });
});

router.patch('/many', async (req, res) => {
  const { filter, updates } = req.body;

  if (!filter || !updates) {
    return res.status(400).json({ message: 'filter and updates are required' });
  }

  if (filter._id) {
    try {
      if (typeof filter._id === 'string' && /^[a-f\d]{24}$/i.test(filter._id)) {
        filter._id = new ObjectId(filter._id);
      } else {
        throw new Error('Invalid ObjectId');
      }
    } catch (err) {
      return res.status(400).json({ message: 'Invalid _id format in filter' });
    }
  }

  try {
    const result = await getDB().collection('users').updateMany(
      filter,
      { $set: updates }
    );

    res.json({
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount,
      message: 'Documents updated successfully'
    });
  } catch (err) {
    res.status(500).json({
      message: 'Update failed',
      error: err.message
    });
  }
});

router.delete('/many', async (req, res) => {
  const { filter } = req.body;

  if (!filter ) {
    return res.status(400).json({ message: 'filter is required' });
  }

  if (filter._id) {
    try {
      if (typeof filter._id === 'string' && /^[a-f\d]{24}$/i.test(filter._id)) {
        filter._id = new ObjectId(filter._id);
      } else {
        throw new Error('Invalid ObjectId');
      }
    } catch (err) {
      return res.status(400).json({ message: 'Invalid _id format in filter' });
    }
  }

  try {
    const result = await getDB().collection('users').deleteMany(filter);

    res.json({
      deletedCount: result.deletedCount,
      message: 'Documents deleted successfully'
    });
  } catch (err) {
    res.status(500).json({
      message: 'Delete failed',
      error: err.message
    });
  }
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (!updates || Object.keys(updates).length === 0) {
    return res.status(400).json({ message: 'No update data provided' });
  }

  try {
    const objectId = new ObjectId(id);

    const result = await getDB().collection('users').updateOne(
      { _id: objectId },
      { $set: updates }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      message: 'User updated successfully',
      modifiedCount: result.modifiedCount
    });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const newUser = req.body;

  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ message: 'Name and email are required' });
}
  try {
    const result = await getDB().collection('users').replaceOne(
      { _id: new ObjectId(id)},
      newUser
    );

    if (result.matchedCount === 0 ) {
      return res.status(404).json({message: 'User not found'});
    }

    res.json({
      message: 'User fully replaced',
      modifiedCount: result.modifiedCount
    });
  } catch (err) {
   return  res.status(500).json({ message: 'Replace failed', error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await getDB().collection('users').deleteOne({
      _id: new ObjectId(id)
    });

    if (result.delegateCount === 0) {
      returnres.status(404).json({ message: 'User not found' });
    }

    res.json({  message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
});




export default router;