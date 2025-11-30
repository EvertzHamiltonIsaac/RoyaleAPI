import ICard, { Rarity } from '../interfaces/ICards';
import { Cards } from '../models/mongo_models/cardsModel';
import { Request, Response } from 'express';

//! BUG: No se comprueba si verdaderamente existe lo que se quiere actualizar o lo que se quiere eliminar.

//TODO: Agregar que la parte de Excluir los campos ['page', 'sort', 'limit', 'fields'] del req.query sea global en el API.

//TODO: Por alguna razon el ID de los Stats no son staticos cambian con cada petición al Get All Cards.

//TODO: Investigar si hayt alguna forma de hacer que de error cuando no se cumplo lo que pusimos en el Enum para este modelo.

//TODO: El query debe aceptar independiente cada campo y en caso de que aparezca uno entonces si tomarlo en cuenta, todo esto en el Filtering Get All Cards.
// Hacer una funcion que construya el query antes de implementarlo para lograr esto

// CREATE
export const createCard = async (req: Request, res: Response) => {
  const { name, rarity, type, elixir, arena_id, description, url_image, stats, max_level }: ICard = req.body;

  try {
    const newCard = await Cards.create({
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
  } catch (error) {
    res.status(400).json({
      status: 'failed!',
      error,
    });
    throw error;
  }
};

// READ ALL
export const findCards = async (req: Request, res: Response) => {
  try {
    let queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj); // Volvemos el objeto en String.
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Cards.find().populate('arena_id');
    // .where('rarity')
    // .equals(req.query.rarity)
    // .and([{ type: req.query.type }]); // populate para traer info de la Arena

    if (req.query.sort) {
      query = query.sort(`${req.query.sort}`);
    } else {
      query = query.sort(`-createdAt`);
    }

    const allCards = await query;

    res.status(200).json({
      status: 'success!',
      results: allCards.length,
      data: allCards,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting All Cards',
      error: err,
    });
    throw err;
  }
};

// READ ONE
export const findCard = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const card = await Cards.findById(id).populate('arena_id');
    res.status(200).json({
      status: 'success!',
      data: card,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting the Card',
      error: err,
    });
    throw err;
  }
};

// UPDATE
export const updateCard = async (req: Request, res: Response) => {
  try {
    const cardUpdated = await Cards.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (cardUpdated === null) throw 'card not exist';
    res.status(200).json({
      status: 'card updated successfully!',
      data: cardUpdated,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Updating the Card',
      error: err,
    });
    throw err;
  }
};

// DELETE
export const deleteCard = async (req: Request, res: Response) => {
  try {
    await Cards.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'card deleted successfully!',
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Deleting the Card',
      error: err,
    });
    throw err;
  }
};
