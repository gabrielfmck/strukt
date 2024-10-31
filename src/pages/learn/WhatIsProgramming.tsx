// src/pages/learn/WhatIsProgramming.tsx
import ContentPage from '../../components/learning/ContentPage';

const WhatIsProgramming = () => {
  return (
    <ContentPage
      title="O que é programação?"
      duration="10 min"
      nextModule="/learn/variables"
      content={
        <div>
          <h2>Introdução à Programação</h2>
          <p>
            Programação é a arte de criar instruções para computadores resolverem problemas.
            É como escrever uma receita detalhada que o computador pode seguir para realizar tarefas.
          </p>

          <h3>Por que aprender programação?</h3>
          <ul>
            <li>Desenvolver pensamento lógico</li>
            <li>Criar soluções para problemas reais</li>
            <li>Automatizar tarefas repetitivas</li>
            <li>Construir aplicações e sistemas</li>
          </ul>

          <h3>Conceitos Fundamentais</h3>
          <p>Na programação, trabalhamos com alguns conceitos básicos:</p>
          <ul>
            <li><strong>Algoritmos:</strong> Sequência de passos para resolver um problema</li>
            <li><strong>Variáveis:</strong> Espaços na memória para armazenar dados</li>
            <li><strong>Estruturas de Controle:</strong> Formas de controlar o fluxo do programa</li>
            <li><strong>Funções:</strong> Blocos de código reutilizáveis</li>
          </ul>
        </div>
      }
    />
  );
};

export default WhatIsProgramming;