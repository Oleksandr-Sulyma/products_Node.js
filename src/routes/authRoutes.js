import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { celebrate } from 'celebrate';
import { registerUserSchema, loginUserSchema } from '../validation/authValidation.js';

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);


export default router;
