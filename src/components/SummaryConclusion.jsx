// src/components/SummaryConclusion.jsx
import React from 'react';
import { summaryConclusionText, reportInfo } from '../data/reportData';

const SummaryConclusion = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Summary and Way Forward:</h2>
      <p className="text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-6">
        {summaryConclusionText}
      </p>
      <div className="mt-8 pt-4 border-t border-gray-200">
        <p className="text-lg font-semibold text-gray-800 mb-1">Sincerely,</p>
        <p className="text-xl font-bold text-gray-900">{reportInfo.companyName}</p>
      </div>
    </section>
  );
};

export default SummaryConclusion;