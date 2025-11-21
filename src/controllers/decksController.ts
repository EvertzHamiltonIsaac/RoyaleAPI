import IDecks from '../interfaces/IDecks';
import { Decks } from '../models/mongo_models/decksModel';
import { Request, Response } from 'express';

// CREATE
export const createDeck = async (req: Request, res: Response) => {
  const body: IDecks = req.body;

  try {
    const newDeck = await Decks.create(body);

    res.status(200).json({
      status: 'success!',
      data: newDeck,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed!',
      error,
    });
    throw error;
  }
};

// READ ALL
export const findDecks = async (req: Request, res: Response) => {
  try {
    const allDecks = await Decks.find().populate('user_id'); // populate si el deck pertenece a un usuario
    res.status(200).json({
      status: 'success!',
      results: allDecks.length,
      data: allDecks,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting All Decks',
      error: err,
    });
    throw err;
  }
};

// READ ONE
export const findDeck = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deck = await Decks.findById(id).populate('user_id');
    if (!deck) {
      return res.status(404).json({
        status: 'failed!',
        message: 'Deck not found',
      });
    }
    res.status(200).json({
      status: 'success!',
      data: deck,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting the Deck',
      error: err,
    });
    throw err;
  }
};

// UPDATE
export const updateDeck = async (req: Request, res: Response) => {
  try {
    const deckUpdated = await Decks.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!deckUpdated) {
      return res.status(404).json({
        status: 'failed!',
        message: 'Deck not found',
      });
    }
    res.status(200).json({
      status: 'deck updated successfully!',
      data: deckUpdated,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Updating the Deck',
      error: err,
    });
    throw err;
  }
};

// DELETE
export const deleteDeck = async (req: Request, res: Response) => {
  try {
    const deletedDeck = await Decks.findByIdAndDelete(req.params.id);
    if (!deletedDeck) {
      return res.status(404).json({
        status: 'failed!',
        message: 'Deck not found',
      });
    }
    res.status(200).json({
      status: 'deck deleted successfully!',
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Deleting the Deck',
      error: err,
    });
    throw err;
  }
};
