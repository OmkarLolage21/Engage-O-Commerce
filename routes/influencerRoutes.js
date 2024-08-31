import express from "express";
import { registerInfluencer, loginInfluencer, getInfluencerDetails } from '../controllers/influenceController.js';
import{ requireSignIn} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerInfluencer);
router.post('/login', loginInfluencer);
router.get('/me', requireSignIn, getInfluencerDetails);


export default router;
