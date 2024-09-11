import express from "express";
import { getUGCByProduct, addUGC } from '../controllers/ugcController.js';

const router = express.Router();

router.get('/getugc/:pid', getUGCByProduct);
router.post('/ugc', addUGC);

export default router;
