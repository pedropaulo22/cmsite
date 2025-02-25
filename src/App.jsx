import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Feature from './components/Feature';
import FloatingButton from './components/FloatingButton';
import Plans from './components/Plans';
import './App.css';


const App = () => (
  <div>
    <Header />
    <main>
      
    <section className="marketing-conversation">
  <div className="text-block">
    <img alt="man on the cloud" src="/src/assets/02_robocm.png" className="marketing-img" />
    <div className="img-container"></div>
    <button>TESTAR BOT</button>
  </div>
  <div className="title">
    CHATBOT COM IA
    <div className="sub-title">
      Agora você pode automatizar seu marketing, geração de lead, atendimento e muito mais com um robô. Em uma tarde você constrói o seu utilizando o nosso construtor arrasta e solta.
    </div>
  </div>
  <div className="img-container"></div>
</section>

      <section className="marketing-conversation">
        <div className="text-block">
          <div className="title">KANBAN E CRM Inteligente</div>
          <div className="sub-title">Simplifique seus fluxos de trabalho com o sistema de Kanban integrado. Visualize, organize e gerencie tarefas em um único lugar.</div>
       
          <a href="#plans-section"><button>COMEÇAR AGORA</button></a>

          
        </div>
        <div className="img-container">
          <img alt="man on the cloud" src="/src/assets/01kanban.gif" className="marketing-img" />
        </div>
      </section>

      
      <section>
        <h2>Funcionalidades</h2>
        <Feature title="Atendimento Automático" description="Nosso bot responde a clientes 24/7." />
        <Feature title="Personalização" description="Adapte o bot ao tom da sua empresa." />
        <Feature title="Relatórios" description="Receba insights detalhados sobre as interações." />
      </section>
      <Plans />
    </main>
    <Footer />
    <FloatingButton />
  </div>
);

export default App;