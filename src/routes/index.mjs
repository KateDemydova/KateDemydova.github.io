import express from 'express';
import { requestLogger } from '../middleware/requestLogger.mjs';

const router = express.Router();

router.get('/', requestLogger, (req, res) => {
  res.status(200).send('Get root route');
});

export default router;
