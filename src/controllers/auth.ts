import { Request, Response } from 'express';
import { userRegistraion } from '../services/auth';

export const handleRegister = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    const reslut = await userRegistraion(email, password);

    res.status(201).json({ user: reslut });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
