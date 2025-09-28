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
exports.deleteUsers = exports.disableUsers = exports.updateUsers = exports.findUser = exports.findUsers = exports.createUser = void 0;
const usersModel_1 = require("../models/mongo_models/usersModel");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password_hash, last_sign, is_active } = req.body;
    try {
        const newUser = yield usersModel_1.Users.create({
            username,
            email,
            password_hash,
            is_active,
        });
        res.status(200).json({
            status: 'success!',
            data: newUser,
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'failed!',
            error: '',
        });
        throw error;
    }
});
exports.createUser = createUser;
const findUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AllUsers = yield usersModel_1.Users.find();
        res.status(200).json({
            status: 'success!',
            results: AllUsers.length,
            data: AllUsers,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting All Users',
            error: err,
        });
        throw err;
    }
});
exports.findUsers = findUsers;
const findUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Debes de tomar el nombre del param que estableciste en el route (/api/v1/user/:id).
    const { id } = req.params;
    try {
        const User = yield usersModel_1.Users.findById(id);
        res.status(200).json({
            status: 'success!',
            data: User,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting the User',
            error: err,
        });
        throw err;
    }
});
exports.findUser = findUser;
const updateUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateUsers = updateUsers;
const disableUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.disableUsers = disableUsers;
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteUsers = deleteUsers;
