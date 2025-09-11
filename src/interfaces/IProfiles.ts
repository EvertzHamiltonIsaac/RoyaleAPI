import mongoose from 'mongoose';

export default interface IProfiles extends mongoose.Document {
  user_id: mongoose.Schema.Types.ObjectId;
  level: number;
  experience: number;
  trophies: number;
  coins: number;
  gems: number;
  country: string;
  avatar_url: string;
  bio: string;
  max_decks: number;
}
