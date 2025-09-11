"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decks = void 0;
const mongoose_1 = require("mongoose");
const decksSchema = new mongoose_1.Schema({
    arena_number: Number,
    name: String,
    description: String,
    trophy_requirement: Number,
    image_url: String,
    background_url: String,
    is_active: Boolean,
    release_date: { type: Date, default: Date.now },
}, { timestamps: true });
exports.Decks = (0, mongoose_1.model)('Decks', decksSchema);
