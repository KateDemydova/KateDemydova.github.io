import express from "express";
import { setTheme, getTheme } from "../controllers/themeController.mjs";

const router = express.Router();

router.post('/theme', setTheme);
router.get('/theme', getTheme);

export default router;