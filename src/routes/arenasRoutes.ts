import express from 'express';
import {
  createArena,
  findArenas,
  findArena,
  updateArena,
  deleteArena,
  toggleAllArenas,
} from '../controllers/arenasController';

export const arenaRouter = express.Router();

arenaRouter.route('/arenas').post(createArena).get(findArenas);
arenaRouter.route('/arenas/disable').patch(toggleAllArenas);
arenaRouter.route('/arena/:id').get(findArena).put(updateArena).delete(deleteArena);
