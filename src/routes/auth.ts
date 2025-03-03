import { Router } from 'express';
import { handleRegister } from '../controllers/auth';
import { createvalidation } from '../validators/auth/createValidation';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

router.post('/register', createvalidation, validateRequest, handleRegister);

export default router;
