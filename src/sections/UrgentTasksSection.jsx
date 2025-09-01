// src/sections/UrgentTasksSection.jsx
import React from 'react';
import './UrgentTasksSection.css';
import { FaApple, FaRocket } from 'react-icons/fa'; // Icons

const UrgentTasksSection = () => {
  return (
    <section className="urgent-tasks-section">
      <div className="container">
        <h2 className="urgent-tasks-title">Upcoming Urgent Tasks (September Sprint)</h2>
        <ul className="tasks-list">
          <li className="task-item">
            <span className="icon"><FaApple /></span>
            <p>Update our APK on iOS Module also (Begin porting/updating the mobile application for iOS platforms).</p>
          </li>
          <li className="task-item">
            <span className="icon"><FaRocket /></span>
            <p>Setup App account & Deploy (Prepare the necessary app store accounts and proceed with the deployment of both Android and iOS applications).</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UrgentTasksSection;