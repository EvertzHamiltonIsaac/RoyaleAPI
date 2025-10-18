import express from 'express';
import {
  createUser,
  findUsers,
  findUser,
  updateUser,
  deleteUser,
  disableAllUsers,
} from '../controllers/usersController';

export const userRouter = express.Router();

userRouter.route('/users').post(createUser).get(findUsers);
userRouter.route('/users/disable').patch(disableAllUsers);
userRouter.route('/user/:id').get(findUser).put(updateUser).delete(deleteUser);
