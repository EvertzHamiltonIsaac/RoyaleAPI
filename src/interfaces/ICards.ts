import mongoose from 'mongoose';

export enum Rarity {
  COMMON = 'Common',
  SPECIAL = 'Special',
  EPIC = 'Epic',
  LEGENDARY = 'Legendary',
  CHAMPION = 'Champion',
}

export enum Types {
  TROOP = 'Troop',
  SPELL = 'Spell',
  BUILDING = 'Building',
}

export enum TargetType {
  GROUND = 'Ground',
  AIR = 'Air',
  BUILDING = 'Buildings',
}

export interface ICardStats {
  damage?: number;
  hit_points?: number;
  attack_speed?: number;
  targets?: TargetType[];
  range?: number;
  duration?: number;
  radius?: number;
  summon_quantity?: number;
  area_damage?: number;
  crown_tower_damage?: number;
  shield?: number;
  spawn_speed?: number;
}

export default interface ICards extends mongoose.Document {
  name: string;
  rarity: Rarity;
  type: Types;
  elixir: number;
  arena_id: mongoose.Schema.Types.ObjectId;
  description: string;
  url_image: string;
  stats: ICardStats;
  max_level: number;
}
