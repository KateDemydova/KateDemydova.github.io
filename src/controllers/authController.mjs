import { generateToken } from "../utils/jwtHelpers.mjs";

const fakeUsers = new Map();

export function register(req, res) {
  const {email, password} = req.body;

  if (!email || !password) {
    return res.status(400).json({error: 'Email and password required'});
  }

  if (fakeUsers.has(email)) {
    return res.status(409).json({error: 'User already exists'});
  }

  fakeUsers.set(email, {email, password});

  res.status(201).json({message: 'User registered'});
}

export function login(req, res) {
  const { email, password } = req.body;

  const user = fakeUsers.get(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = generateToken({email});

  res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 3600 * 1000,
  });

  res.json({ message: 'Login successful' });
}