import express from 'express';
import { createUserCardDocument } from '../controllers/usercardsController';

export const userCardRouter = express.Router();

userCardRouter.route('/user-cards').post(createUserCardDocument);
