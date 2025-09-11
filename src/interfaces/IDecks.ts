import mongoose from 'mongoose';

export default interface IDecks {
  user_id: mongoose.Schema.Types.ObjectId;
  name: string;
  is_main: boolean;
  total_elixir_cost: number;
  wins: number;
  losses: number;
}
