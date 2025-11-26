"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCardRouter = void 0;
const express_1 = __importDefault(require("express"));
const usercardsController_1 = require("../controllers/usercardsController");
exports.userCardRouter = express_1.default.Router();
exports.userCardRouter.route('/user-cards').post(usercardsController_1.createUserCardDocument);
