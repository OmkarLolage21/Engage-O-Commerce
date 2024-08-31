import mongoose from 'mongoose';

const ugcSchema = new mongoose.Schema({
  platform: { type: String, required: true },  // e.g., 'instagram', 'twitter'
  mediaUrl: { type: String, required: true },
  caption: { type: String, required: true },
  permalink: { type: String, required: true },
  userHandle: { type: String, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  influencer: { type: Boolean, default: false },  // Whether this is an influencer post
}, { timestamps: true });

export default mongoose.model('UGC', ugcSchema);
