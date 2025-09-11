import { Schema, model } from 'mongoose';
import IDecksCards from '../../interfaces/IDecksCards';

const decksCardsSchema = new Schema<IDecksCards>(
  {
    deck_id: { type: Schema.Types.ObjectId, ref: 'Decks', required: true },
    card_id: { type: Schema.Types.ObjectId, ref: 'Cards', required: true },
    position: { type: Number, required: true },
  },
  { timestamps: true },
);
export const DecksCards = model('DecksCards', decksCardsSchema);
