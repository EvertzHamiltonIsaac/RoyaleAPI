"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const UsersSchema = new mongoose_1.Schema({
    username: String,
    email: String,
    password_hash: String,
    last_sign: Date,
    is_active: String,
}, { timestamps: true });
exports.Users = (0, mongoose_1.model)('Users', UsersSchema);
