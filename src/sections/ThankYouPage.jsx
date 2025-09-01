// src/sections/ThankYouPage.jsx
import React from 'react';
import './ThankYouPage.css';

const ThankYouPage = () => {
  return (
    <section className="thank-you-page">
      <div className="thank-you-content">
        <h2 className="thank-you-title">Thank You, Staymaster Team!</h2>
        <p className="thank-you-subtitle">We are grateful for your trust and collaboration.</p>
        <p className="thank-you-message">
          We are honored to be a part of this amazing journey with Staymaster. The progress of August 2025 is a result of our strong collaboration and shared vision with your team. We eagerly look forward to achieving even greater successes in the future.
        </p>
        <p className="signature">Sincerely,</p>
        <p className="team-name">Colladome IT Network Solutions PVT LTD</p>
        {/* Optional: Add contact info */}
        {/* <p className="contact-info">Contact: info@yourcompany.com</p> */}
      </div>
    </section>
  );
};

export default ThankYouPage;