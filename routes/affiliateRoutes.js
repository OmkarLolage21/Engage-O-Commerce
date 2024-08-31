import express from "express";
import { trackAffiliateLink } from '../controllers/affiliateController.js';
const router = express.Router();

router.get('/:influencerId/:pid', trackAffiliateLink);

export default router;
