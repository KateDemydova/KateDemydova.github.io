import express from "express";
import { getAllArticles,
  postAllArticles,
  getArticlesById,
  putArticlesById,
  deleteArticlesById} from "../controllers/articleController.mjs";
import {checkArticlePermissions} from "../middleware/checkArticlePermissions.mjs";
import {validArticleData} from "../middleware/validArticleData.mjs";
import {requireAuth} from "../middleware/requireAuth.mjs";

const router = express.Router();

router.get('/', getAllArticles);
router.get('/:articleId', getArticlesById);

router.post('/', requireAuth, validArticleData, postAllArticles);
router.put('/:articleId', requireAuth, checkArticlePermissions, validArticleData, putArticlesById);
router.delete('/:articleId', requireAuth, checkArticlePermissions, deleteArticlesById);

export default router;