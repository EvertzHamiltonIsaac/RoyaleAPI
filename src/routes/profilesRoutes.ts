import express from 'express';
import {
  createProfile,
  findProfile,
  findProfiles,
  updateProfile,
  deleteProfile,
} from '../controllers/profilesController';

export const profilesRouter = express.Router();

profilesRouter.route('/profiles').post(createProfile).get(findProfiles);
profilesRouter.route('/profile/:id').get(findProfile).put(updateProfile).delete(deleteProfile);
