import { UserAttributes } from 'user';
import mongoose from 'mongoose';

const UserSchema: mongoose.Schema<UserAttributes> = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const User: mongoose.Model<UserAttributes> = mongoose.model<UserAttributes>('User', UserSchema);
export default User;
