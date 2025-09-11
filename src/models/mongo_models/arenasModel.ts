import { Schema, model } from 'mongoose';
import IArena from '../../interfaces/IArenas';

const arenasSchema = new Schema<IArena>(
  {
    arena_number: Number,
    name: String,
    description: String,
    trophy_requirement: Number,
    image_url: String,
    background_url: String,
    is_active: Boolean,
    release_date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);
export const Arenas = model('Arenas', arenasSchema);
