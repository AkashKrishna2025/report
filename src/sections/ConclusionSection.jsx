// src/sections/ConclusionSection.jsx
import React from 'react';
import './ConclusionSection.css';

const ConclusionSection = () => {
  return (
    <section className="conclusion">
      <div className="container">
        <h2 className="conclusion-title">Conclusion & Looking Ahead</h2>
        <p className="conclusion-text">
          August 2025 has been an exceptionally productive month for the Staymaster project. We successfully navigated significant technical challenges and implemented crucial enhancements, thereby strengthening the platform's foundation and substantially improving its overall performance. Our partnership with Staymaster remains a priority, and we are deeply committed to ensuring your platform's continuous growth and success.
        </p>
        <p className="bms-update-note mb-4">An update regarding the BMS will be provided by tomorrow.</p>
        <button className="contact-button">Contact Our Team</button> {/* Optional: Link to a contact page or email */}
      </div>
    </section>
  );
};

export default ConclusionSection;