import { UserAttributes } from 'user';
import User from '../models/User';
import bcrypt from 'bcrypt';

export const userRegistraion = async (email: string, password: string): Promise<UserAttributes> => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = new User({ email: email, password: hashedPassword });
  await user.save();

  return user;
};
