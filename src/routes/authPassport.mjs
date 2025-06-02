import express from 'express';
import { users } from '../config/passport.mjs';
import { passport } from '../config/passport.mjs';

const router = express.Router();

router.post('/register', (req, res) => {
  const { email, password } = req.body;
  const id = String(Date.now());

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  users.set(id, { email, password });
  res.json({ message: 'User registered' });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Logged in', user: req.user });
});

router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).json({ error: 'Logout error' });
    res.json({ message: 'Logged out' });
  });
});

router.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json({ profile: req.user });
});

export default router;