import Influencer from '../models/Influencer.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const registerInfluencer = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingInfluencer = await Influencer.findOne({ email });
    if (existingInfluencer) return res.status(400).json({ message: 'Influencer already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newInfluencer = new Influencer({ name, email, password: hashedPassword });
    await newInfluencer.save();

    const token = jwt.sign({ id: newInfluencer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token, influencer: newInfluencer });
  } catch (err) {
    res.status(500).json({ message: 'Failed to register influencer', error: err.message });
  }
};

// Login an influencer
export const loginInfluencer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const influencer = await Influencer.findOne({ email });
    if (!influencer) return res.status(404).json({ message: 'Influencer not found' });

    const isPasswordValid = await bcrypt.compare(password, influencer.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: influencer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, influencer });
  } catch (err) {
    res.status(500).json({ message: 'Failed to login', error: err.message });
  }
};

// Get influencer details
export const getInfluencerDetails = async (req, res) => {
  try {
    const influencer = await Influencer.findById(req.influencer.id);
    if (!influencer) return res.status(404).json({ message: 'Influencer not found' });
    res.status(200).json(influencer);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch influencer details', error: err.message });
  }
};
