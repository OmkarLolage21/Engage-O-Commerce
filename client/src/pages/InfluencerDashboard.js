import React from 'react';
import { Card, List } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/InfluencerDashboard.css'; // Make sure to create this CSS file for styling

const InfluencerDashboard = ({ influencers }) => {
  return (
    <div className="influencer-dashboard">
      <h2>Influencer Dashboard</h2>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={influencers}
        renderItem={influencer => (
          <List.Item>
            <Card
              title={influencer.name}
              extra={<Link to={`/influencer/${influencer._id}`}>View Profile</Link>}
              hoverable
            >
              <p><strong>Instagram:</strong> {influencer.socialMediaHandles.instagram}</p>
              <p><strong>Twitter:</strong> {influencer.socialMediaHandles.twitter}</p>
              <p><strong>Commission:</strong> ${influencer.commissions.toFixed(2)}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default InfluencerDashboard;
