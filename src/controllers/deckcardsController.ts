import IDecksCards from '../interfaces/IDecksCards';
import { DecksCards } from '../models/mongo_models/deckcardsModel';
import { Request, Response } from 'express';

// CREATE
//TODO: Hay que agregar o validar que primero existan esos ID.
//TODO: Un mazo puede tener solo 8 Carta.
//TODO: Es insostenible debes de buscar la manera de que esto se segregue por usuario y de que sea mas eficiente.
export const createDeckCardDocument = async (req: Request, res: Response) => {
  const { card_id, deck_id, position }: IDecksCards = req.body;

  try {
    const newDeckCardDocument = await DecksCards.create({
      card_id,
      deck_id,
      position,
    });

    res.status(200).json({
      status: 'success!',
      data: newDeckCardDocument,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed!',
      error,
    });
    throw error;
  }
};
