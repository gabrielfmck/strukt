// src/pages/learn/WhatIsProgramming.tsx
import ContentPage from '../../components/learning/ContentPage';

const WhatIsProgramming = () => {
  const content = (
    <div>
      <h2>Introdução à Programação</h2>
      <p className="mb-6">
        Programação é a arte de criar instruções para computadores resolverem problemas.
        É como escrever uma receita detalhada que o computador pode seguir para realizar tarefas.
      </p>

      <h3 className="text-xl font-semibold mb-4">Por que aprender programação?</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li className="text-gray-700">
          <strong>Desenvolver pensamento lógico</strong> - A programação ajuda a pensar de forma estruturada e analítica
        </li>
        <li className="text-gray-700">
          <strong>Criar soluções para problemas reais</strong> - Você pode desenvolver ferramentas e aplicações úteis
        </li>
        <li className="text-gray-700">
          <strong>Automatizar tarefas repetitivas</strong> - Programe o computador para fazer trabalhos repetitivos por você
        </li>
        <li className="text-gray-700">
          <strong>Construir aplicações e sistemas</strong> - Desenvolva websites, aplicativos e muito mais
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-4">Conceitos Fundamentais</h3>
      <p className="mb-4">Na programação, trabalhamos com alguns conceitos básicos:</p>
      <div className="bg-gray-50 p-6 rounded-lg space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-primary-600">Algoritmos</h4>
          <p>Sequência de passos para resolver um problema</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-600">Variáveis</h4>
          <p>Espaços na memória para armazenar dados</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-600">Estruturas de Controle</h4>
          <p>Formas de controlar o fluxo do programa</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-600">Funções</h4>
          <p>Blocos de código reutilizáveis</p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h4 className="text-lg font-semibold text-blue-700 mb-2">Dica importante</h4>
        <p className="text-blue-600">
          Não se preocupe em memorizar todos os conceitos de uma vez. A programação é uma
          habilidade que se desenvolve com prática e tempo. Foque em entender os conceitos
          básicos primeiro e vá progredindo gradualmente.
        </p>
      </div>
    </div>
  );

  return (
    <ContentPage
      title="O que é programação?"
      content={content}
      duration="10 min"
    />
  );
};

export default WhatIsProgramming;