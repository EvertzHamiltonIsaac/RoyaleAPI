import { Schema, Types, model } from 'mongoose';
import IDecks from '../../interfaces/IDecks';

const decksSchema = new Schema<IDecks>(
  {
    user_id: { type: Types.ObjectId, Ref: 'Users' },
    name: String,
    is_main: { type: Boolean, default: false },
    total_elixir_cost: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
  },
  { timestamps: true },
);
export const Decks = model('Decks', decksSchema);
