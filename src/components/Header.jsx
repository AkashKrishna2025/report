// src/components/Header.jsx
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img src={logo} alt="Staymaster Logo" className="logo" />
          <h1 className="report-title">Staymaster: Monthly Progress Report - August 2025</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;