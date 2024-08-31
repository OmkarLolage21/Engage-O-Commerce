import React from 'react';
import { Carousel } from 'antd';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/SocialProof.css'; // Create this CSS file

const SocialProof = ({ ugc, influencers }) => {
  return (
    <div className="social-proof">
      <h2>What People Are Saying</h2>
      <Carousel autoplay>
        {ugc.map((item) => (
          <div key={item._id} className="ugc-item">
            <img src={item.mediaUrl} className="ugc-image" />
            <p>{item.caption}</p>
            <small>{item.userHandle}</small>
          </div>
        ))}
      </Carousel>

      <h2>Featured Influencers</h2>
      <div className="influencers-list">
        {influencers.map((influencer) => (
          <div key={influencer._id} className="influencer-card">
            <FaUserCircle size={50} className="influencer-avatar" />
            <h3>{influencer.name}</h3>
            <p>Instagram: {influencer.socialMediaHandles.instagram}</p>
            <p>Twitter: {influencer.socialMediaHandles.twitter}</p>
            {/* <p>Commissions: ${influencer.commissions.toFixed(2)}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
