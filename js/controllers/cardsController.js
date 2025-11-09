"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCard = exports.updateCard = exports.findCard = exports.findCards = exports.createCard = void 0;
const cardsModel_1 = require("../models/mongo_models/cardsModel");
// CREATE
const createCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, rarity, type, elixir, arena_id, description, url_image, stats, max_level } = req.body;
    try {
        const newCard = yield cardsModel_1.Cards.create({
            name,
            rarity,
            type,
            elixir,
            arena_id,
            description,
            url_image,
            stats,
            max_level,
        });
        res.status(200).json({
            status: 'success!',
            data: newCard,
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'failed!',
            error,
        });
        throw error;
    }
});
exports.createCard = createCard;
// READ ALL
const findCards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCards = yield cardsModel_1.Cards.find().populate('arena_id'); // populate para traer info de la Arena
        res.status(200).json({
            status: 'success!',
            results: allCards.length,
            data: allCards,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting All Cards',
            error: err,
        });
        throw err;
    }
});
exports.findCards = findCards;
// READ ONE
const findCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const card = yield cardsModel_1.Cards.findById(id).populate('arena_id');
        res.status(200).json({
            status: 'success!',
            data: card,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting the Card',
            error: err,
        });
        throw err;
    }
});
exports.findCard = findCard;
// UPDATE
const updateCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cardUpdated = yield cardsModel_1.Cards.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            status: 'card updated successfully!',
            data: cardUpdated,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Updating the Card',
            error: err,
        });
        throw err;
    }
});
exports.updateCard = updateCard;
// DELETE
const deleteCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield cardsModel_1.Cards.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'card deleted successfully!',
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Deleting the Card',
            error: err,
        });
        throw err;
    }
});
exports.deleteCard = deleteCard;
