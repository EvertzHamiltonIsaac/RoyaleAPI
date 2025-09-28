"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const usersController_1 = require("../controllers/usersController");
exports.userRouter = express_1.default.Router();
exports.userRouter.route('/users').post(usersController_1.createUser).get(usersController_1.findUsers);
exports.userRouter.route('/user/:id').get(usersController_1.findUser);
