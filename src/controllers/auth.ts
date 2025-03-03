import { Request, Response } from 'express';
import { userLogin, userRegistraion } from '../services/auth';

export const handleRegister = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const reslut = await userRegistraion(email, password);

    res.status(201).json({ user: reslut });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const handleLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await userLogin(email, password);

    res.status(200).json({ message: 'Login successfull', jwt_token: result });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
