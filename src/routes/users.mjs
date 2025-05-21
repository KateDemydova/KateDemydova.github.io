import express from 'express';
import {
  getAllUsers,
  postAllUsers,
  getUserById,
  putUserById,
  deleteUser
} from '../controllers/userController.mjs';

const router = express.Router();

router
  .route('/')
  .get(getAllUsers)
  .post(postAllUsers);

router
  .route('/:userId')
  .get(getUserById)
  .put(putUserById)
  .delete(deleteUser);

export default router;
