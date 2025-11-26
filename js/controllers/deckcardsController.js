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
exports.createDeckCardDocument = void 0;
const deckcardsModel_1 = require("../models/mongo_models/deckcardsModel");
// CREATE
//TODO: Hay que agregar o validar que primero existan esos ID.
//TODO: Un mazo puede tener solo 8 Carta.
//TODO: Es insostenible debes de buscar la manera de que esto se segregue por usuario y de que sea mas eficiente.
const createDeckCardDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { card_id, deck_id, position } = req.body;
    try {
        const newDeckCardDocument = yield deckcardsModel_1.DecksCards.create({
            card_id,
            deck_id,
            position,
        });
        res.status(200).json({
            status: 'success!',
            data: newDeckCardDocument,
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
exports.createDeckCardDocument = createDeckCardDocument;
