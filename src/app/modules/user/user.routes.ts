import express from 'express';
import { userController } from './user.controller';

const router = express.Router();


router.get('/', userController.getAllUsers);
router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUserById);

export const userRoutes = router;