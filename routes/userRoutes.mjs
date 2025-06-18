import express from 'express';
import {UserModel} from "../models/userModel.mjs";


const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({message: 'Fetch failed', error: err.message})
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('📥 New user request body:', req.body);
    const {name, email} = req.body;
    const user = new UserModel({name, email});
    const saved = await user.save();
    console.log('✅ User saved:', saved);
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({message: 'Create failed', error: err.message});
  }
});

router.post('/bulk', async (req, res) => {
  const users = req.body;
  try {
    const inserted = await UserModel.insertMany(users);
    res.status(201).json({insertedCount: inserted.length, inserted});
  } catch (err) {
    res.status(400).json({message: 'Bulk insert failed', error: err.message});
  }
});

router.patch('/many', async (req, res) => {
  const {filter, updates} = req.body;
  try {
    const result = await UserModel.updateMany(filter, {$set: updates});
    res.json({
      matchedCount: result.matchedCount,
      modifiedCount: result.modifiedCount,
    });
  } catch (err) {
    res.status(500).json({message: 'Update failed', error: err.message});
  }
});

router.delete('/many', async (req, res) => {
  const {filter} = req.body;
  try {
    const result = await UserModel.deleteMany(filter);
    res.json({deletedCount: result.deletedCount});
  } catch (err) {
    res.status(500).json({message: 'Delete failed', error: err.message});
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const result = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!result) return res.status(404).json({message: 'User not found'});
    res.json(result);
  } catch (err) {
    res.status(400).json({message: 'Update failed', error: err.message});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await UserModel.findOneAndReplace({_id: req.params.id}, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({message: 'User not found'});
    res.json(updated);
  } catch (err) {
    res.status(400).json({message: 'Replace failed', error: err.message});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await UserModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({message: 'User not found'});
    res.json({message: 'User deleted successfully'});
  } catch (err) {
    res.status(500).json({message: 'Delete failed', error: err.message});
  }
});

export default router;
