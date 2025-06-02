import express from 'express';
import { register, login } from '../controllers/authController.mjs';
import {requireAuth} from "../middleware/requireAuth.mjs";

const router = express.Router();

router.get('/profile', requireAuth, (req, res) => {
  res.json({ profile: req.user });
});

router.post('/register', register);
router.post('/login', login);

export default router;