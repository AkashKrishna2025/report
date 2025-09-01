// src/components/FeatureCard.jsx
import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ title, icon, description, impact, visual }) => {
  return (
    <div className="feature-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {impact && <p className="card-impact">**Impact:** {impact}</p>}
      {visual && (
        <div className="card-visual">
          <img src={visual} alt={title} />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;