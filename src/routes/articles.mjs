import express from "express";
import { getAllArticles,
  postAllArticles,
  getArticlesById,
  putArticlesById,
  deleteArticlesById} from "../controllers/articleController.mjs";

const router = express.Router();

router
  .route('/')
  .get(getAllArticles)
  .post(postAllArticles);

router
  .route('/:articleId')
  .get(getArticlesById)
  .put(putArticlesById)
  .delete(deleteArticlesById);

export default router;