// src/components/Header.jsx
import React from "react";
import logo from "../assets/logo.png"; // apna sahi path confirm kare

const Header = ({ companyName, clientName, month, reportDate, clientBrandColor }) => {
  return (
    <header className="bg-white shadow-md rounded-lg mb-8 overflow-hidden">
      <div
        className="relative p-6 lg:p-8 text-white"
        style={{ backgroundColor: clientBrandColor }}
      >
        {logo && (
          <img
            src={logo}
            alt={`${companyName} Logo`}
            className="absolute top-6 right-6 h-12 md:h-16 object-contain"
          />
        )}
        <h1 className="text-3xl lg:text-4xl font-extrabold mb-2">
          Monthly Progress Report
        </h1>
        <p className="text-xl lg:text-2xl font-semibold mb-1">For {clientName}</p>
        <p className="text-lg lg:text-xl font-medium">{month}</p>
      </div>
      <div className="p-4 lg:p-6 bg-gray-50 text-gray-700 flex justify-between items-center border-t border-gray-100">
        <p className="text-sm md:text-base">
          <span className="font-semibold">Report Date:</span> {reportDate}
        </p>
        <p className="text-sm md:text-base">
          <span className="font-semibold">By:</span> {companyName}
        </p>
      </div>
    </header>
  );
};

export default Header;
