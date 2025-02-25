import React, { useState } from 'react';
import './Plans.css';

const Plans: React.FC = () => {
  const [planType, setPlanType] = useState<'monthly' | 'yearly'>('monthly');

  const togglePlanType = () => {
    setPlanType(planType === 'monthly' ? 'yearly' : 'monthly');
  };

  const plans = [
    {
      title: 'BÁSICO',
      monthlyPrice: 99.99,
      description: 'Todas as funcionalidades que um pequeno/médio negócio precisa para automatizar o atendimento e vendas do WhatsApp.',
      features: [
        '1 número de WhatsApp conectado',
        'Acesso a um painel de controle',
        'Acesso a um CRM para contatos',
        'Acesso a criação de etiquetas',
        'Acesso a criação de campos personalizados',
        'Acesso ao bate papo (5 atendentes inclusos)',
        'Acesso a campanhas de QR code',
        'Acesso ao criador de automações (sequências e palavras chave)',
        'Acesso ao construtor "arrasta e solta" mais simples do Brasil',
        'Fluxos de conversa (robôs) ilimitados',
        'Palavras chaves ilimitadas',
        'Sequências Ilimitadas',
      ],
      link: 'https://pay.cakto.com.br/9eZctdf',
    },
    {
      title: 'PRO',
      monthlyPrice: 249.99,
      description: 'Funcionalidades avançadas para empresas que precisam de mais automação e integração.',
      features: [
        '3 números de WhatsApp conectados',
        'Acesso a um painel de controle',
        'Acesso a um CRM para contatos',
        'Acesso a criação de etiquetas',
        'Acesso ao bate papo (10 atendentes inclusos)',
        'Acesso a campanhas de QR code',
        'Acesso ao criador de automações (sequências e palavras chave)',
        'Acesso ao construtor "arrasta e solta" mais simples do Brasil',
        'Fluxos de conversa (robôs) ilimitados',
        'Palavras chaves ilimitadas',
        'Sequências Ilimitadas',
      ],
      link: 'https://pay.cakto.com.br/9eZctdf',
    },
    {
      title: 'MASTER',
      monthlyPrice: 799,
      description: 'Soluções personalizadas para grandes empresas com necessidades específicas de automação.',
      features: [
        'Números de WhatsApp ilimitados',
        'Acesso a um painel de controle',
        'Acesso a um CRM para contatos',
        'Acesso a criação de etiquetas',
        'Acesso a criação de campos personalizados',
        'Acesso ao bate papo (atendentes ilimitados)',
        'Acesso a campanhas de QR code',
        'Acesso ao criador de automações (sequências e palavras chave)',
        'Acesso ao construtor "arrasta e solta" mais simples do Brasil',
        'Fluxos de conversa (robôs) ilimitados',
        'Palavras chaves ilimitadas',
        'Sequências Ilimitadas',
      ],
      link: 'https://pay.cakto.com.br/9eZctdf',
    },
  ];

  return (
    <section id="plans-section" className="plans-section">
      <div className="plan-toggle">
        <button onClick={togglePlanType}>
          {planType === 'monthly' ? 'Ver Planos Anuais' : 'Ver Planos Mensais'}
        </button>
      </div>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>
            <div className="plan-title">{plan.title}</div>
            <div className="plan-price">
              {planType === 'monthly'
                ? `R$${plan.monthlyPrice.toFixed(2)}/mês`
                : `R$${(plan.monthlyPrice * 10).toFixed(2)}/ano`}
            </div>
            <div className="plan-description">{plan.description}</div>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="plan-button">
              <a href={plan.link} target="_blank" rel="noopener noreferrer">
                COMEÇAR AGORA
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;