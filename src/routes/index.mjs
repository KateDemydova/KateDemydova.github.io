import express from 'express';
import { requestLogger } from '../middlewere/requestLogger.mjs';

const router = express.Router();

router.get('/', requestLogger, (req, res) => {
  res.status(200).send('Get root route');
});

export default router;
