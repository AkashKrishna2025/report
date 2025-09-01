// src/sections/MonthlyProgress.jsx
import React from 'react';
import FeatureCard from '../components/FeatureCard';
import './MonthlyProgress.css';
// Import more icons as needed for new achievements
import { FaServer, FaCalendarAlt, FaImage, FaPercentage, FaCheckSquare, FaUpload, FaHome, FaMobileAlt } from 'react-icons/fa';

const MonthlyProgress = () => {
  const achievements = [
    {
      title: "New Backend Controller for Ezee Integration",
      icon: <FaServer />,
      description: "Developed a new backend controller for seamless Ezee integration, ensuring accurate fetching of booking data from the Ezee portal.",
      impact: "Improved data accuracy, streamlined booking management."
    },
    {
      title: "Website Calendar & API Update",
      icon: <FaCalendarAlt />,
      description: "Updated the website calendar and its API integration to fetch real-time, accurate booking data directly from the new Ezee controller.",
      impact: "Real-time data synchronization, enhanced user experience."
    },
    {
      title: "Concierge Images Update",
      icon: <FaImage />,
      description: "Successfully updated and optimized Concierge service images, enhancing visual appeal and user engagement.",
      impact: "Improved visual branding, better user interface."
    },
    {
      title: "Tax Issue Resolution (12% & 18%)",
      icon: <FaPercentage />,
      description: "Completely resolved the persistent 12% and 18% tax calculation and display issues across both frontend and backend systems.",
      impact: "Accurate financial reporting, compliance assurance."
    },
    {
      title: "Confirmed Booking Component Ready for Prod",
      icon: <FaCheckSquare />,
      description: "Developed and made ready for production the confirmed booking component and its associated form, complete with robust validation.",
      impact: "Streamlined booking process, enhanced data integrity."
    },
    {
      title: "Image Size Upload Issue Resolved",
      icon: <FaUpload />,
      description: "Successfully resolved the image size upload issue, allowing for smooth and efficient image handling across the platform.",
      impact: "Improved content management, stable image uploads."
    },
    {
      title: "Add Property Issue Resolved",
      icon: <FaHome />,
      description: "Add property functionality issues have been identified and fully resolved, ensuring seamless property onboarding.",
      impact: "Efficient property management, expanded inventory."
    },
    {
      title: "Updated APK with Working Features",
      icon: <FaMobileAlt />,
      description: "Developed and delivered an updated Android Package Kit (APK) with all features fully functional and thoroughly tested.",
      impact: "Stable mobile application, improved user accessibility."
    }
  ];

  return (
    <section className="monthly-progress">
      <div className="container">
        <h2 className="section-title">August 2025: Key Achievements</h2>
        <p className="section-description">
          This month was highly productive, with our team successfully implementing a range of critical enhancements and resolving long-standing issues to elevate the Staymaster platform's performance and reliability.
        </p>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <FeatureCard
              key={index}
              title={achievement.title}
              icon={achievement.icon}
              description={achievement.description}
              impact={achievement.impact}
              visual={achievement.visual}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonthlyProgress;