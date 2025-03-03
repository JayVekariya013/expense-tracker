import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface AuthUser {
  id: string;
  email: string;
}

interface AuthRequest extends Request {
  user?: AuthUser;
}

export const authToken = async (req: AuthRequest, res: Response, next: NextFunction): Promise<any> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      if (decoded && typeof decoded === 'object' && 'id' in decoded && 'email' in decoded) {
        req.user = { id: decoded.id, email: decoded.email };
      }
      next();
    });
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
