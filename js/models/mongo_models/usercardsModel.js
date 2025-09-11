"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCards = void 0;
const mongoose_1 = require("mongoose");
const userCardsSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Users' },
    card_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Cards' },
    quantity: Number,
    level: Number,
    cards_needed_next_level: Number,
}, { timestamps: true });
exports.UserCards = (0, mongoose_1.model)('UserCards', userCardsSchema);
