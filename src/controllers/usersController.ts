import IUser from '../interfaces/IUsers';
import { Users } from '../models/mongo_models/usersModel';
import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password_hash, last_sign, is_active }: IUser = req.body;

  try {
    const newUser = await Users.create({
      username,
      email,
      password_hash,
      is_active,
    });

    res.status(200).json({
      status: 'success!',
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed!',
      error: '',
    });
    throw error;
  }
};

export const findUsers = async (req: Request, res: Response) => {
  try {
    const AllUsers = await Users.find();
    res.status(200).json({
      status: 'success!',
      results: AllUsers.length,
      data: AllUsers,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting All Users',
      error: err,
    });
    throw err;
  }
};

export const findUser = async (req: Request, res: Response) => {
  //Debes de tomar el nombre del param que estableciste en el route (/api/v1/user/:id).
  const { id } = req.params;
  try {
    const User = await Users.findById(id);
    res.status(200).json({
      status: 'success!',
      data: User,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting the User',
      error: err,
    });
    throw err;
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userUpdated = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json({
      status: 'user updated successfully!',
      data: userUpdated,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting the User',
      error: err,
    });
    throw err;
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userDeleted = await Users.findByIdAndDelete(req.params.id, req.body);

    res.status(200).json({
      status: 'user deleted successfully!',
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting the User',
      error: err,
    });
    throw err;
  }
};

export const disableAllUsers = async (req: Request, res: Response) => {
  try {
    const { disable }: { disable: boolean } = req.body;

    const usersUpdated = await Users.updateMany(
      { is_active: { $in: [true, false] } },
      { $set: { is_Disabled: disable } },
    );

    res.status(200).json({
      status: 'users updated successfully!',
      data: usersUpdated,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error updating Users',
      error: err,
    });
    throw err;
  }
};
