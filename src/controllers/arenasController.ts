import IArena from '../interfaces/IArenas';
import { Arenas } from '../models/mongo_models/arenasModel';
import { Request, Response } from 'express';

// CREATE
export const createArena = async (req: Request, res: Response) => {
  const { name, description, trophy_requirement, image_url, background_url, is_active, release_date }: IArena =
    req.body;

  try {
    const newArena = await Arenas.create({
      name,
      description,
      trophy_requirement,
      image_url,
      background_url,
      is_active,
      release_date,
    });

    res.status(200).json({
      status: 'success!',
      data: newArena,
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
export const findArenas = async (req: Request, res: Response) => {
  try {
    const allArenas = await Arenas.find();
    res.status(200).json({
      status: 'success!',
      results: allArenas.length,
      data: allArenas,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting All Arenas',
      error: err,
    });
    throw err;
  }
};

// READ ONE
export const findArena = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const arena = await Arenas.findById(id);
    res.status(200).json({
      status: 'success!',
      data: arena,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting the Arena',
      error: err,
    });
    throw err;
  }
};

// UPDATE
export const updateArena = async (req: Request, res: Response) => {
  try {
    const arenaUpdated = await Arenas.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json({
      status: 'arena updated successfully!',
      data: arenaUpdated,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Updating the Arena',
      error: err,
    });
    throw err;
  }
};

// DELETE
export const deleteArena = async (req: Request, res: Response) => {
  try {
    await Arenas.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'arena deleted successfully!',
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Deleting the Arena',
      error: err,
    });
    throw err;
  }
};

// EXTRA: Disable/Enable all Arenas
export const toggleAllArenas = async (req: Request, res: Response) => {
  try {
    const { disable }: { disable: boolean } = req.body;

    const arenasUpdated = await Arenas.updateMany(
      { is_active: { $in: [true, false] } },
      { $set: { is_active: !disable } }, // aquí puedes decidir si quieres invertir o setear directo
    );

    res.status(200).json({
      status: 'arenas updated successfully!',
      data: arenasUpdated,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error updating Arenas',
      error: err,
    });
    throw err;
  }
};
