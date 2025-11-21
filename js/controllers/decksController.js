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
exports.deleteDeck = exports.updateDeck = exports.findDeck = exports.findDecks = exports.createDeck = void 0;
const decksModel_1 = require("../models/mongo_models/decksModel");
// CREATE
const createDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const newDeck = yield decksModel_1.Decks.create(body);
        res.status(200).json({
            status: 'success!',
            data: newDeck,
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
exports.createDeck = createDeck;
// READ ALL
const findDecks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allDecks = yield decksModel_1.Decks.find().populate('user_id'); // populate si el deck pertenece a un usuario
        res.status(200).json({
            status: 'success!',
            results: allDecks.length,
            data: allDecks,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting All Decks',
            error: err,
        });
        throw err;
    }
});
exports.findDecks = findDecks;
// READ ONE
const findDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deck = yield decksModel_1.Decks.findById(id).populate('user_id');
        if (!deck) {
            return res.status(404).json({
                status: 'failed!',
                message: 'Deck not found',
            });
        }
        res.status(200).json({
            status: 'success!',
            data: deck,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting the Deck',
            error: err,
        });
        throw err;
    }
});
exports.findDeck = findDeck;
// UPDATE
const updateDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deckUpdated = yield decksModel_1.Decks.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!deckUpdated) {
            return res.status(404).json({
                status: 'failed!',
                message: 'Deck not found',
            });
        }
        res.status(200).json({
            status: 'deck updated successfully!',
            data: deckUpdated,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Updating the Deck',
            error: err,
        });
        throw err;
    }
});
exports.updateDeck = updateDeck;
// DELETE
const deleteDeck = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedDeck = yield decksModel_1.Decks.findByIdAndDelete(req.params.id);
        if (!deletedDeck) {
            return res.status(404).json({
                status: 'failed!',
                message: 'Deck not found',
            });
        }
        res.status(200).json({
            status: 'deck deleted successfully!',
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Deleting the Deck',
            error: err,
        });
        throw err;
    }
});
exports.deleteDeck = deleteDeck;
