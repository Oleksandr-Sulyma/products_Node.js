import { Router } from 'express';
import { registerUser } from '../controllers/authController.js';
import { celebrate } from 'celebrate';
import { registerUserSchema } from '../validation/authValidation.js';

const router = Router();
router.post('/auth/register', celebrate(registerUserSchema), registerUser);
export default router;
