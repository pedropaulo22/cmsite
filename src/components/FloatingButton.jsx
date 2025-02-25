import React from 'react';
import './FloatingButton.css';

const FloatingButton = () => (
  <a 
    href="https://wa.me/55999999999" 
    className="floating-button" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img src="/src/assets/whatsapp-icon.png" alt="WhatsApp" />
  </a>
);

export default FloatingButton;