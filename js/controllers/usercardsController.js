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
exports.createUserCardDocument = void 0;
const usercardsModel_1 = require("../models/mongo_models/usercardsModel");
// CREATE
//TODO: Hay que agregar o validar que primero existan esos ID.
//TODO: Un mazo puede tener solo 8 Carta.
//TODO: Es insostenible debes de buscar la manera de que esto se segregue por usuario y de que sea mas eficiente.
const createUserCardDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, card_id, quantity, level, cards_needed_next_level } = req.body;
    try {
        const newUserCardDocument = yield usercardsModel_1.UserCards.create({
            user_id,
            card_id,
            quantity,
            level,
            cards_needed_next_level,
        });
        res.status(200).json({
            status: 'success!',
            data: newUserCardDocument,
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
exports.createUserCardDocument = createUserCardDocument;
