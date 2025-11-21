"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesRouter = void 0;
const express_1 = __importDefault(require("express"));
const profilesController_1 = require("../controllers/profilesController");
exports.profilesRouter = express_1.default.Router();
exports.profilesRouter.route('/profiles').post(profilesController_1.createProfile).get(profilesController_1.findProfiles);
exports.profilesRouter.route('/profile/:id').get(profilesController_1.findProfile).put(profilesController_1.updateProfile).delete(profilesController_1.deleteProfile);
