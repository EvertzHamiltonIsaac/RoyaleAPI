"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardsRouter = void 0;
const express_1 = __importDefault(require("express"));
const cardsController_1 = require("../controllers/cardsController");
exports.cardsRouter = express_1.default.Router();
exports.cardsRouter.route('/cards').post(cardsController_1.createCard).get(cardsController_1.findCards);
exports.cardsRouter.route('/card/:id').get(cardsController_1.findCard).put(cardsController_1.updateCard).delete(cardsController_1.deleteCard);
