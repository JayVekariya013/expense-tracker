import { UserAttributes } from 'user';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userRegistraion = async (email: string, password: string): Promise<UserAttributes> => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = new User({ email: email, password: hashedPassword });
  await user.save();

  return user;
};

export const userLogin = async (email: string, password: string): Promise<string> => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) throw new Error('Invalid credentials');

  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) throw new Error('JWT_SECRET not found');

  const token = jwt.sign({ email: email, id: user._id }, JWT_SECRET, { expiresIn: '1d' });

  return token;
};
