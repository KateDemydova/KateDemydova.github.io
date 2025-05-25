import express from "express";
import { getAllArticles,
  postAllArticles,
  getArticlesById,
  putArticlesById,
  deleteArticlesById} from "../controllers/articleController.mjs";
import {checkArticlePermissions} from "../middlewere/checkArticlePermissions.mjs";

const router = express.Router();

router
  .route('/')
  .get(getAllArticles)
  .post(postAllArticles);

router
  .route('/:articleId')
  .get(getArticlesById)
  .put(checkArticlePermissions, putArticlesById)
  .delete(checkArticlePermissions, deleteArticlesById);

export default router;