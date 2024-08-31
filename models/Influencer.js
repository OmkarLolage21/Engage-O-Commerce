import mongoose from 'mongoose';

const influencerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  socialMediaHandles: {
    instagram: { type: String },
    twitter: { type: String },
    facebook: { type: String },
  },
  affiliateLink: { type: String },
  commissions: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Influencer', influencerSchema);
