import UGC from "../models/UGC.js";

export const getUGCByProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const ugc = await UGC.find({ productId });
    res.status(200).json(ugc);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch UGC', error: err.message });
  }
};

export const addUGC = async (req, res) => {
  const { platform, mediaUrl, caption, permalink, userHandle, productId, influencer } = req.body;
  try {
    const newUGC = new UGC({ platform, mediaUrl, caption, permalink, userHandle, productId, influencer });
    await newUGC.save();
    res.status(201).json(newUGC);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add UGC', error: err.message });
  }
};
