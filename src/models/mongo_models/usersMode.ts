import { Schema, model } from 'mongoose';
import IUser from '../../interfaces/IUsers';

const UsersSchema = new Schema<IUser>(
  {
    username: String,
    email: String,
    password_hash: String,
    last_sign: Date,
    is_active: String,
  },
  { timestamps: true },
);

export const Users = model('Users', UsersSchema);
