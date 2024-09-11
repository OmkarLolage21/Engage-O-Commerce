import express from "express";
import { registerInfluencer, loginInfluencer, getInfluencerDetails } from '../controllers/influenceController.js';
import{ requireSignIn} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register-influencer', registerInfluencer);
router.post('/login-influencer', loginInfluencer);
router.get('/influencer-me', requireSignIn, getInfluencerDetails);


export default router;
