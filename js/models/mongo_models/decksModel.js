"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decks = void 0;
const mongoose_1 = require("mongoose");
const decksSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Types.ObjectId, Ref: 'Users' },
    name: String,
    is_main: { type: Boolean, default: false },
    total_elixir_cost: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
}, { timestamps: true });
exports.Decks = (0, mongoose_1.model)('Decks', decksSchema);
