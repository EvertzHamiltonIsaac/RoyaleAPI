import express from 'express';
import { createCard, findCards, findCard, updateCard, deleteCard } from '../controllers/cardsController';

export const cardsRouter = express.Router();

cardsRouter.route('/cards').post(createCard).get(findCards);
cardsRouter.route('/card/:id').get(findCard).put(updateCard).delete(deleteCard);
