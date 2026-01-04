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
exports.deleteCard = exports.updateCard = exports.findCard = exports.findCards = exports.createCard = void 0;
const cardsModel_1 = require("../models/mongo_models/cardsModel");
//! BUG: No se comprueba si verdaderamente existe lo que se quiere actualizar o lo que se quiere eliminar.
//TODO: Agregar que la parte de Excluir los campos ['page', 'sort', 'limit', 'fields'] del req.query sea global en el API.
//TODO: Por alguna razon el ID de los Stats no son staticos cambian con cada petición al Get All Cards.
//TODO: Investigar si hay alguna forma de hacer que de error cuando no se cumplo lo que pusimos en el Enum para este modelo.
//TODO: El query debe aceptar independiente cada campo y en caso de que aparezca uno entonces si tomarlo en cuenta, todo esto en el Filtering Get All Cards.
// Hacer una funcion que construya el query antes de implementarlo para lograr esto
// CREATE
const createCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, rarity, type, elixir, arena_id, description, url_image, stats, max_level } = req.body;
    try {
        const newCard = yield cardsModel_1.Cards.create({
            name,
            rarity,
            type,
            elixir,
            arena_id,
            description,
            url_image,
            stats,
            max_level,
        });
        res.status(200).json({
            status: 'success!',
            data: newCard,
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
exports.createCard = createCard;
// READ ALL
const findCards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Filtering Avanzado
        let queryObj = Object.assign({}, req.query);
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach((el) => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj); // Volvemos el objeto en String.
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        let query = cardsModel_1.Cards.find().populate('arena_id'); // populate para traer info de la Arena
        // .where('rarity')
        // .equals(req.query.rarity)
        // .and([{ type: req.query.type }]);
        //Sorting
        if (req.query.sort) {
            query = query.sort(`${req.query.sort}`);
        }
        else {
            query = query.sort(`-createdAt`);
        }
        //Field Limiting
        if (req.query.fields && typeof req.query.fields === 'string') {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        }
        else {
            query = query.select('');
            console.log('El Field Limiting no funciono porque los valores del campo [fields] en la URL no son String.');
        }
        //Pagination
        if (req.query.page && req.query.limit) {
            const page = req.query.page || 1;
            const limit = req.query.limit || 100;
            const skip = (Number(page) - 1) * Number(limit);
            query = query.skip(skip).limit(Number(limit));
            const numTours = yield cardsModel_1.Cards.countDocuments();
            if (skip >= numTours)
                throw new Error('This page does not exist');
        }
        const allCards = yield query;
        res.status(200).json({
            status: 'success!',
            results: allCards.length,
            data: allCards,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting All Cards',
            error: err,
        });
        throw err;
    }
});
exports.findCards = findCards;
// READ ONE
const findCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const card = yield cardsModel_1.Cards.findById(id).populate('arena_id');
        res.status(200).json({
            status: 'success!',
            data: card,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Getting the Card',
            error: err,
        });
        throw err;
    }
});
exports.findCard = findCard;
// UPDATE
const updateCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cardUpdated = yield cardsModel_1.Cards.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (cardUpdated === null)
            throw 'card not exist';
        res.status(200).json({
            status: 'card updated successfully!',
            data: cardUpdated,
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Updating the Card',
            error: err,
        });
        throw err;
    }
});
exports.updateCard = updateCard;
// DELETE
const deleteCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield cardsModel_1.Cards.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'card deleted successfully!',
        });
    }
    catch (err) {
        res.status(404).json({
            status: 'failed!',
            message: 'Error Deleting the Card',
            error: err,
        });
        throw err;
    }
});
exports.deleteCard = deleteCard;
