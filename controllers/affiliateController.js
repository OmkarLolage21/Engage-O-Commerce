import Influencer from '../models/Influencer.js';

export const trackAffiliateLink = async (req, res) => {
  const { influencerId, productId } = req.params;
  try {
    const influencer = await Influencer.findById(influencerId);
    if (!influencer) return res.status(404).json({ message: 'Influencer not found' });

    // Logic to track and update commissions
    influencer.commissions += calculateCommission(productId);
    await influencer.save();

    res.redirect(`/products/${productId}`);
  } catch (err) {
    res.status(500).json({ message: 'Failed to track affiliate link', error: err.message });
  }
};

const calculateCommission = (productId) => {
  // Define your logic for calculating commission based on the product
  return 10; // Example: Fixed commission of $10
};
