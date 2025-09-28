"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const UsersSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password_hash: String,
    last_sign: { type: Date, required: true, default: Date.now() },
    is_active: Boolean,
}, { timestamps: true });
exports.Users = (0, mongoose_1.model)('Users', UsersSchema);
