import express from 'express';
import { requireAuth } from '../middleware/requireAuth.mjs';

const router = express.Router();

router.get('/protected', requireAuth, (req, res) => {
  res.json({ message: 'You have access to the protected route!', user: req.user });
});

export default router;