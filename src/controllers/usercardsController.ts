import IUserCards from '../interfaces/IUserCards';
import { UserCards } from '../models/mongo_models/usercardsModel';
import { Request, Response } from 'express';

// CREATE
//TODO: Hay que agregar o validar que primero existan esos ID.
//TODO: Un mazo puede tener solo 8 Carta.
//TODO: Es insostenible debes de buscar la manera de que esto se segregue por usuario y de que sea mas eficiente.
export const createUserCardDocument = async (req: Request, res: Response) => {
  const { user_id, card_id, quantity, level, cards_needed_next_level }: IUserCards = req.body;

  try {
    const newUserCardDocument = await UserCards.create({
      user_id,
      card_id,
      quantity,
      level,
      cards_needed_next_level,
    });

    res.status(200).json({
      status: 'success!',
      data: newUserCardDocument,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed!',
      error,
    });
    throw error;
  }
};
