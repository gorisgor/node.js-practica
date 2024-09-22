import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { userRegisterSchema } from '../validation/users.js';
import validateBody from '../utils/validateBody.js';
import { registerUserController } from '../controllers/users.js';

const router = Router();

router.post(
  '/register',
  validateBody(userRegisterSchema),
  ctrlWrapper(registerUserController),
);

export default router;
