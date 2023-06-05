import React from 'react';
import logoImage from './media/Logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="Logo" />
    </div>
  );
};

export default Logo;
