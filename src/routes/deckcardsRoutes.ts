import express from 'express';
import { createDeckCardDocument } from '../controllers/deckcardsController';

export const deckCardRouter = express.Router();

deckCardRouter.route('/deck-card').post(createDeckCardDocument);
