import mongoose from 'mongoose';

export default interface IDecks extends mongoose.Document {
  user_id: mongoose.Schema.Types.ObjectId;
  name: string;
  is_main: boolean;
  total_elixir_cost: number;
  wins: number;
  losses: number;
}
