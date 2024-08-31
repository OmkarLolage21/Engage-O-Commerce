import express from "express";
import { getUGCByProduct, addUGC } from '../controllers/ugcController.js';

const router = express.Router();

router.get('/:pid', getUGCByProduct);
router.post('/', addUGC);

export default router;
