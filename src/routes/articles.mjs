import express from "express";
import { getAllArticles,
  postAllArticles,
  getArticlesById,
  putArticlesById,
  deleteArticlesById} from "../controllers/articleController.mjs";
import {checkArticlePermissions} from "../middlewere/checkArticlePermissions.mjs";
import {validArticleData} from "../middlewere/validArticleData.mjs";

const router = express.Router();

router
  .route('/')
  .get(getAllArticles)
  .post(validArticleData, postAllArticles);

router
  .route('/:articleId')
  .get(getArticlesById)
  .put(validArticleData, checkArticlePermissions, putArticlesById)
  .delete(checkArticlePermissions, deleteArticlesById);

export default router;