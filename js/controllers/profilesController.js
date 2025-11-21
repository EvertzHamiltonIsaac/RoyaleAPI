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
exports.deleteProfile = exports.updateProfile = exports.findProfile = exports.findProfiles = exports.createProfile = void 0;
const profilesModel_1 = require("../models/mongo_models/profilesModel");
// CREATE
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const newProfile = yield profilesModel_1.Profiles.create(body);
        res.status(200).json({
            status: 'success!',
            data: newProfile,
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
exports.createProfile = createProfile;
// READ ALL
const findProfiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProfiles = yield profilesModel_1.Profiles.find().populate('user_id');
        res.status(200).json({
            status: 'success!',
            results: allProfiles.length,
            data: allProfiles,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting All Profiles',
            error: err,
        });
        throw err;
    }
});
exports.findProfiles = findProfiles;
// READ ONE
const findProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const profile = yield profilesModel_1.Profiles.findById(id);
        if (!profile) {
            return res.status(404).json({
                status: 'failed!',
                message: 'Profile not found',
            });
        }
        res.status(200).json({
            status: 'success!',
            data: profile,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting the Profile',
            error: err,
        });
        throw err;
    }
});
exports.findProfile = findProfile;
// UPDATE
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profileUpdated = yield profilesModel_1.Profiles.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!profileUpdated) {
            return res.status(404).json({
                status: 'failed!',
                message: 'Profile not found',
            });
        }
        res.status(200).json({
            status: 'profile updated successfully!',
            data: profileUpdated,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Updating the Profile',
            error: err,
        });
        throw err;
    }
});
exports.updateProfile = updateProfile;
// DELETE
const deleteProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProfile = yield profilesModel_1.Profiles.findByIdAndDelete(req.params.id);
        if (!deletedProfile) {
            return res.status(404).json({
                status: 'failed!',
                message: 'Profile not found',
            });
        }
        res.status(200).json({
            status: 'profile deleted successfully!',
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Deleting the Profile',
            error: err,
        });
        throw err;
    }
});
exports.deleteProfile = deleteProfile;
