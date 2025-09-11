"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cards = void 0;
const mongoose_1 = require("mongoose");
const ICards_1 = require("../../interfaces/ICards");
const CardStatsSchema = new mongoose_1.Schema({
    damage: { type: Number },
    hit_points: { type: Number },
    attack_speed: { type: Number },
    targets: [{ type: String, enum: ICards_1.TargetType, required: true }],
    range: { type: Number },
    duration: { type: Number },
    radius: { type: Number },
    summon_quantity: { type: Number },
    area_damage: { type: Number },
    crown_tower_damage: { type: Number },
    shield: { type: Number },
    spawn_speed: { type: Number },
});
const CardsSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    rarity: { type: String, enum: Object.values(ICards_1.Rarity), required: true },
    type: { type: String, enum: Object.values(ICards_1.Types), required: true },
    elixir: { type: Number, required: true },
    arena_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Arenas' },
    description: String,
    url_image: String,
    stats: { type: CardStatsSchema, required: true },
    max_level: Number,
}, { timestamps: true });
exports.Cards = (0, mongoose_1.model)('Cards', CardsSchema);
