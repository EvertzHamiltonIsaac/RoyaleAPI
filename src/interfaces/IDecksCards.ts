import mongoose from 'mongoose';

export default interface IDecksCards extends mongoose.Document {
  deck_id: mongoose.Schema.Types.ObjectId;
  card_id: mongoose.Schema.Types.ObjectId;
  position: number;
}
