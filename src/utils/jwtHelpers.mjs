import jwt from 'jsonwebtoken';

const SECRET = 'your_super_secret_key';

export function generateToken(payload, expiresIn='1h') {
  return jwt.sign(payload, SECRET, { expiresIn });
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET);
}