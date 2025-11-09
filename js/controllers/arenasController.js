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
exports.toggleAllArenas = exports.deleteArena = exports.updateArena = exports.findArena = exports.findArenas = exports.createArena = void 0;
const arenasModel_1 = require("../models/mongo_models/arenasModel");
// CREATE
const createArena = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, trophy_requirement, image_url, background_url, is_active, release_date } = req.body;
    try {
        const newArena = yield arenasModel_1.Arenas.create({
            name,
            description,
            trophy_requirement,
            image_url,
            background_url,
            is_active,
            release_date,
        });
        res.status(200).json({
            status: 'success!',
            data: newArena,
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'failed!',
            error,
        });
        throw error;
    }
});
exports.createArena = createArena;
// READ ALL
const findArenas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allArenas = yield arenasModel_1.Arenas.find();
        res.status(200).json({
            status: 'success!',
            results: allArenas.length,
            data: allArenas,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting All Arenas',
            error: err,
        });
        throw err;
    }
});
exports.findArenas = findArenas;
// READ ONE
const findArena = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const arena = yield arenasModel_1.Arenas.findById(id);
        res.status(200).json({
            status: 'success!',
            data: arena,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting the Arena',
            error: err,
        });
        throw err;
    }
});
exports.findArena = findArena;
// UPDATE
const updateArena = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const arenaUpdated = yield arenasModel_1.Arenas.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            status: 'arena updated successfully!',
            data: arenaUpdated,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Updating the Arena',
            error: err,
        });
        throw err;
    }
});
exports.updateArena = updateArena;
// DELETE
const deleteArena = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield arenasModel_1.Arenas.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'arena deleted successfully!',
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Deleting the Arena',
            error: err,
        });
        throw err;
    }
});
exports.deleteArena = deleteArena;
// EXTRA: Disable/Enable all Arenas
const toggleAllArenas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { disable } = req.body;
        const arenasUpdated = yield arenasModel_1.Arenas.updateMany({ is_active: { $in: [true, false] } }, { $set: { is_active: !disable } });
        res.status(200).json({
            status: 'arenas updated successfully!',
            data: arenasUpdated,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error updating Arenas',
            error: err,
        });
        throw err;
    }
});
exports.toggleAllArenas = toggleAllArenas;
