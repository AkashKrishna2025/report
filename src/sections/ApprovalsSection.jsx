// src/sections/ApprovalsSection.jsx
import React from 'react';
import './ApprovalsSection.css';
import { FaThumbsUp, FaMoneyBillWave, FaCloudUploadAlt } from 'react-icons/fa'; // Icons

const ApprovalsSection = () => {
  return (
    <section className="approvals-section">
      <div className="container">
        <h2 className="approvals-title">Important Approvals Required</h2>
        <ul className="approval-list">
          <li className="approval-item">
            <h3><FaThumbsUp /> Approve September Sprint</h3>
            <p>Please approve our September sprint plan. Our team is fully prepared and ready to commence work on the outlined tasks to continue enhancing the Staymaster platform.</p>
          </li>
          <li className="approval-item">
            <h3><FaMoneyBillWave /> Recharge Twilio Account</h3>
            <p>We kindly request that you recharge your Twilio account. This is essential to ensure uninterrupted communication services for OTPs, notifications, and other critical platform functionalities.</p>
          </li>
          <li className="approval-item">
            <h3><FaCloudUploadAlt /> Server Infrastructure Increase</h3>
            <p>We require your approval to increase our server infrastructure. This upgrade is crucial for supporting future growth, accommodating increased traffic, and maintaining optimal performance and scalability of all Staymaster services.</p>
            <p className="note">
              <strong>Note on Server Infrastructure Upgrade:</strong> After your approval, we will initiate the process of taking comprehensive backups of all our code and commence the redeployment. This critical procedure will result in an estimated downtime of approximately 5 hours for all your website and services. To minimize any impact on business operations, we propose scheduling this activity during off-peak night hours.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ApprovalsSection;