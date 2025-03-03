import mongoose from 'mongoose';

export const connectDatabase = () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) throw new Error('MONGODB_URI is not set');

  mongoose.connect(MONGODB_URI).catch(error => {
    console.log('Error connecting to database:', error);
  });
};
