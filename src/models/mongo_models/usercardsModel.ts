import { Schema, model } from 'mongoose';
import IUserCards from '../../interfaces/IUserCards';

const userCardsSchema = new Schema<IUserCards>(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'Users' },
    card_id: { type: Schema.Types.ObjectId, ref: 'Cards' },
    quantity: Number,
    level: Number,
    cards_needed_next_level: Number,
  },
  { timestamps: true },
);
export const UserCards = model('UserCards', userCardsSchema);
