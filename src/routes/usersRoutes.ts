import express from 'express';
import { createUser, findUsers, findUser } from '../controllers/usersController';

export const userRouter = express.Router();

userRouter.route('/users').post(createUser).get(findUsers);
userRouter.route('/user/:id').get(findUser);
