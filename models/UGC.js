import mongoose from 'mongoose';

const ugcSchema = new mongoose.Schema({
  platform: { type: String, required: true },  
  mediaUrl: { type: String, required: true },
  caption: { type: String, required: true },
  permalink: { type: String, required: true },
  userHandle: { type: String, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  influencer: { type: Boolean, default: false },  
}, { timestamps: true });

export default mongoose.model('UGC', ugcSchema);
