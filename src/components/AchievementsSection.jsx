// src/components/AchievementsSection.jsx
import React from 'react';
import AchievementCard from './AchievementCard';
import { achievements } from '../data/reportData';

const AchievementsSection = ({ clientBrandColor }) => {
  return (
    <section className="mb-8">
      <h2 
        className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 border-b-2 pb-2"
        style={{ borderColor: clientBrandColor }}
      >
        Key Achievements and Tasks for September:
      </h2>

      {achievements.map((categoryGroup, index) => (
        <div key={index} className="mb-8 last:mb-0">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="inline-block h-6 w-1 rounded-full mr-3" style={{ backgroundColor: clientBrandColor }}></span>
            {categoryGroup.category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryGroup.items.map(item => (
              <AchievementCard 
                key={item.id}
                title={item.title}
                description={item.description}
                impact={item.impact}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AchievementsSection;