import { Schema, model } from 'mongoose';
import IProfiles from '../../interfaces/IProfiles';

const profilesSchema = new Schema<IProfiles>(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'Users' },
    level: Number,
    experience: Number,
    trophies: Number,
    gems: Number,
    country: String,
    avatar_url: String,
    bio: String,
    max_decks: Number,
  },
  { timestamps: true },
);
export const Profiles = model('Profiles', profilesSchema);
