// src/components/Introduction.jsx
import React from 'react';
import { introductionText } from '../data/reportData';

const Introduction = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Dear Stay Master Team,</h2>
      <p className="text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
        {introductionText}
      </p>
    </section>
  );
};

export default Introduction;