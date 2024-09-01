import Influencer from '../models/Influencer.js';

export const trackAffiliateLink = async (req, res) => {
  const { influencerId, productId } = req.params;
  try {
    const influencer = await Influencer.findById(influencerId);
    if (!influencer) return res.status(404).json({ message: 'Influencer not found' });

    influencer.commissions += calculateCommission(productId);
    await influencer.save();

    res.redirect(`/products/${productId}`);
  } catch (err) {
    res.status(500).json({ message: 'Failed to track affiliate link', error: err.message });
  }
};

const calculateCommission = (productId) => {
  return 10; 
};
