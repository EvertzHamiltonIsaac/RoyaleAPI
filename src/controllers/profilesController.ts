import IProfiles from '../interfaces/IProfiles';
import { Profiles } from '../models/mongo_models/profilesModel';
import { Request, Response } from 'express';

// CREATE
export const createProfile = async (req: Request, res: Response) => {
  const body: IProfiles = req.body;

  try {
    const newProfile = await Profiles.create(body);

    res.status(200).json({
      status: 'success!',
      data: newProfile,
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
export const findProfiles = async (req: Request, res: Response) => {
  try {
    const allProfiles = await Profiles.find().populate('user_id');
    res.status(200).json({
      status: 'success!',
      results: allProfiles.length,
      data: allProfiles,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting All Profiles',
      error: err,
    });
    throw err;
  }
};

// READ ONE
export const findProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const profile = await Profiles.findById(id);
    if (!profile) {
      return res.status(404).json({
        status: 'failed!',
        message: 'Profile not found',
      });
    }
    res.status(200).json({
      status: 'success!',
      data: profile,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Getting the Profile',
      error: err,
    });
    throw err;
  }
};

// UPDATE
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const profileUpdated = await Profiles.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!profileUpdated) {
      return res.status(404).json({
        status: 'failed!',
        message: 'Profile not found',
      });
    }
    res.status(200).json({
      status: 'profile updated successfully!',
      data: profileUpdated,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Updating the Profile',
      error: err,
    });
    throw err;
  }
};

// DELETE
export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const deletedProfile = await Profiles.findByIdAndDelete(req.params.id);
    if (!deletedProfile) {
      return res.status(404).json({
        status: 'failed!',
        message: 'Profile not found',
      });
    }
    res.status(200).json({
      status: 'profile deleted successfully!',
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed!',
      message: 'Error Deleting the Profile',
      error: err,
    });
    throw err;
  }
};
