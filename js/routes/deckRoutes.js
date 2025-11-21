"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decksRouter = void 0;
const express_1 = __importDefault(require("express"));
const decksController_1 = require("../controllers/decksController");
exports.decksRouter = express_1.default.Router();
exports.decksRouter.route('/decks').post(decksController_1.createDeck).get(decksController_1.findDecks);
exports.decksRouter.route('/deck/:id').get(decksController_1.findDeck).put(decksController_1.updateDeck).delete(decksController_1.deleteDeck);
