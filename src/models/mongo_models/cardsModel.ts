import { Schema, model } from 'mongoose';
import ICards, { Rarity, Types, ICardStats, TargetType } from '../../interfaces/ICards';

const CardStatsSchema = new Schema<ICardStats>({
  damage: { type: Number },
  hit_points: { type: Number },
  attack_speed: { type: Number },
  targets: [{ type: String, enum: TargetType, required: true }],
  range: { type: Number },
  duration: { type: Number },
  radius: { type: Number },
  summon_quantity: { type: Number },
  area_damage: { type: Number },
  crown_tower_damage: { type: Number },
  shield: { type: Number },
  spawn_speed: { type: Number },
});

const CardsSchema = new Schema<ICards>(
  {
    name: { type: String, required: true },
    rarity: { type: String, enum: Object.values(Rarity), required: true },
    type: { type: String, enum: Object.values(Types), required: true },
    elixir: { type: Number, required: true },
    arena_id: { type: Schema.Types.ObjectId, ref: 'Arenas' },
    description: String,
    url_image: String,
    stats: { type: CardStatsSchema, required: true },
    max_level: Number,
  },
  { timestamps: true },
);

export const Cards = model('Cards', CardsSchema);
