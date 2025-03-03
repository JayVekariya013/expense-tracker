import { Router, Request, Response } from 'express';
import { handleLogin, handleRegister } from '../controllers/auth';
import { validateRequest } from '../middlewares/validateRequest';
import { createValidation } from '../validators/auth/createValidation';
import { loginValidation } from '../validators/auth/loginValidation';
import { authToken } from '../middlewares/authToken';

const router = Router();

router.post('/register', createValidation, validateRequest, handleRegister);
router.post('/login', loginValidation, validateRequest, handleLogin);

// router.get('/test', authToken, (req: Request, res: Response) => {
//   res.status(200).json({ message: 'Authorized' });
// });

export default router;
