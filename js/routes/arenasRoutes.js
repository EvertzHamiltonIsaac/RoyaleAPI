"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arenaRouter = void 0;
const express_1 = __importDefault(require("express"));
const arenasController_1 = require("../controllers/arenasController");
exports.arenaRouter = express_1.default.Router();
exports.arenaRouter.route('/arenas').post(arenasController_1.createArena).get(arenasController_1.findArenas);
exports.arenaRouter.route('/arenas/disable').patch(arenasController_1.toggleAllArenas);
exports.arenaRouter.route('/arena/:id').get(arenasController_1.findArena).put(arenasController_1.updateArena).delete(arenasController_1.deleteArena);
