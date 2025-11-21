import express from 'express';
import { createDeck, findDeck, findDecks, updateDeck, deleteDeck } from '../controllers/decksController';

export const decksRouter = express.Router();

decksRouter.route('/decks').post(createDeck).get(findDecks);
decksRouter.route('/deck/:id').get(findDeck).put(updateDeck).delete(deleteDeck);
