// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import AchievementsSection from './components/AchievementsSection';
import SummaryConclusion from './components/SummaryConclusion';
import Footer from './components/Footer';

import { reportInfo } from './data/reportData'; // Import data

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 antialiased">
      <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
        <Header 
          companyName={reportInfo.companyName}
          reportTitle="Monthly Progress Report"
          clientName={reportInfo.clientName}
          month={reportInfo.month}
          reportDate={reportInfo.reportDate}
          clientBrandColor={reportInfo.clientBrandColor}
          logo={reportInfo.logo}
        />
        
        <main className="mt-8 bg-white shadow-xl rounded-lg p-6 md:p-8">
          <Introduction />
          <AchievementsSection clientBrandColor={reportInfo.clientBrandColor} />
          <SummaryConclusion />
        </main>

        <Footer 
          companyName={reportInfo.companyName} 
          clientBrandColor={reportInfo.clientBrandColor} 
        />
      </div>
    </div>
  );
}

export default App;