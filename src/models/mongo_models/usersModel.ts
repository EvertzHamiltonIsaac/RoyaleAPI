import { Schema, model } from 'mongoose';
import IUser from '../../interfaces/IUsers';

const UsersSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password_hash: String,
    last_sign: { type: Date, required: true, default: Date.now() },
    is_active: Boolean,
  },
  { timestamps: true },
);

export const Users = model('Users', UsersSchema);
