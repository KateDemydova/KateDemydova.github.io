import express from 'express';
import {
  getAllUsers,
  postAllUsers,
  getUserById,
  putUserById,
  deleteUser
} from '../controllers/userController.mjs';
import {checkUserAccess, validUserData} from "../middleware/userValidation.mjs";

const router = express.Router();

router
  .get('/', getAllUsers)
  .post('/', validUserData, postAllUsers);

router
  .route('/:userId')
  .get(checkUserAccess, getUserById)
  .put(checkUserAccess, validUserData, putUserById)
  .delete(checkUserAccess, deleteUser);

export default router;
