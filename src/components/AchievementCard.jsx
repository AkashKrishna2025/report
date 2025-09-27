// src/components/AchievementCard.jsx
import React from 'react';

const AchievementCard = ({ title, description, impact }) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="mb-3 text-gray-700 text-base">
        <p className="font-medium">Description:</p>
        <p>{description}</p>
      </div>
      <div className="text-gray-700 text-base">
        <p className="font-medium">Impact:</p>
        <p>{impact}</p>
      </div>
    </div>
  );
};

export default AchievementCard;