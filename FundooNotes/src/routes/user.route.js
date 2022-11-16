import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuthReset } from '../middlewares/auth.middleware';


const router = express.Router();
//route to create a new user
router.post('/register', newUserValidator, userController.userRegistration);
router.post('/login', userController.userLogin);
router.post('/forgotPwd',userController.forgotPassword);
router.put('/resetPwd/:token', userAuthReset, userController.resetPassword);

export default router;
