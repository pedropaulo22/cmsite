import React from 'react';
import './index.css';

const Header: React.FC = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEntrarClick = () => {
    // Redirecionar para o site de login
    window.location.href = 'https://app.atendecm.com/';
  };

  return (
    <header>
      <nav>
        <img src="/src/assets/logo.png" alt="Logo" />
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">FUNCIONALIDADES</a></li>
          <li><a href="#plans-section" onClick={scrollToPlans}>PLANOS</a></li>
          <li><a href="#">CONTATO</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <div className="button-container">
          <button className="button-entrar" onClick={handleEntrarClick}>ENTRAR</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;