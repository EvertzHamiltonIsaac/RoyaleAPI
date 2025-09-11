"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecksCards = void 0;
const mongoose_1 = require("mongoose");
const decksCardsSchema = new mongoose_1.Schema({
    deck_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Decks', required: true },
    card_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Cards', required: true },
    position: { type: Number, required: true },
}, { timestamps: true });
exports.DecksCards = (0, mongoose_1.model)('DecksCards', decksCardsSchema);
