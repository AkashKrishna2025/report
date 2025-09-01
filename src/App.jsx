// src/App.jsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import MonthlyProgress from './sections/MonthlyProgress';
import ApprovalsSection from './sections/ApprovalsSection'; // New section
import UrgentTasksSection from './sections/UrgentTasksSection'; // New section
import ConclusionSection from './sections/ConclusionSection';
import ThankYouPage from './sections/ThankYouPage';
import Footer from './components/Footer';

// Make sure these global styles are correctly imported
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <MonthlyProgress />
        <ApprovalsSection /> {/* New section */}
        <UrgentTasksSection /> {/* New section */}
        <ConclusionSection />
        <ThankYouPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;