import createHttpError from 'http-errors';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const useUser = await User.findOne({ email });
  if (useUser) {
    throw createHttpError(409, 'email is used');
  }
  const hashPassword = await bcrypt.hash(password, 5);
  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
  });

  res.status(201).json(newUser);
};
