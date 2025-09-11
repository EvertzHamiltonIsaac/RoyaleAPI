"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profiles = void 0;
const mongoose_1 = require("mongoose");
const profilesSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Users' },
    level: Number,
    experience: Number,
    trophies: Number,
    gems: Number,
    country: String,
    avatar_url: String,
    bio: String,
    max_decks: Number,
}, { timestamps: true });
exports.Profiles = (0, mongoose_1.model)('Profiles', profilesSchema);
