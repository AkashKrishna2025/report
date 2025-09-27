// src/components/Footer.jsx
import React from 'react';

const Footer = ({ companyName, clientBrandColor }) => {
  return (
    <footer className="mt-12 p-6 lg:p-8 text-center text-white rounded-lg shadow-md" style={{ backgroundColor: clientBrandColor }}>
      <p className="text-lg font-medium">&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      <p className="text-sm mt-2">Colladome IT Network Solution - Committed to achieving your digital goals.</p>
    </footer>
  );
};

export default Footer;