import mongoose from 'mongoose';
export default interface IArena extends mongoose.Document {
  arena_number: number;
  name: string;
  description: string;
  trophy_requirement: number;
  image_url: string;
  background_url: string;
  is_active: boolean;
  release_date: Date;
  is_disabled: boolean;
}
