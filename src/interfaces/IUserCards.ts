import mongoose from 'mongoose';

export default interface IUserCards extends mongoose.Document {
  user_id: mongoose.Schema.Types.ObjectId;
  card_id: mongoose.Schema.Types.ObjectId;
  quantity: number;
  level: number;
  cards_needed_next_level: number;
}
