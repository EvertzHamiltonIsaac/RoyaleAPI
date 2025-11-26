"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deckCardRouter = void 0;
const express_1 = __importDefault(require("express"));
const deckcardsController_1 = require("../controllers/deckcardsController");
exports.deckCardRouter = express_1.default.Router();
exports.deckCardRouter.route('/deck-card').post(deckcardsController_1.createDeckCardDocument);
