// src/pages/learn/WhatIsProgramming.tsx
import ContentPage from '../../components/learning/ContentPage';
import { useTheme } from '../../contexts/theme/ThemeContext';

const WhatIsProgramming = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = (
    <div>
      <h2 className={isDark ? 'text-white' : 'text-gray-900'}>
        Introdução à Programação
      </h2>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Programação é a arte de criar instruções para computadores resolverem problemas.
        É como escrever uma receita detalhada que o computador pode seguir para realizar tarefas.
      </p>

      <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Por que aprender programação?
      </h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>
          <strong className={isDark ? 'text-white' : 'text-gray-900'}>Desenvolver pensamento lógico</strong> - 
          A programação ajuda a pensar de forma estruturada e analítica
        </li>
        <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>
          <strong className={isDark ? 'text-white' : 'text-gray-900'}>Criar soluções para problemas reais</strong> - 
          Você pode desenvolver ferramentas e aplicações úteis
        </li>
        <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>
          <strong className={isDark ? 'text-white' : 'text-gray-900'}>Automatizar tarefas repetitivas</strong> - 
          Programe o computador para fazer trabalhos repetitivos por você
        </li>
        <li className={isDark ? 'text-gray-300' : 'text-gray-700'}>
          <strong className={isDark ? 'text-white' : 'text-gray-900'}>Construir aplicações e sistemas</strong> - 
          Desenvolva websites, aplicativos e muito mais
        </li>
      </ul>

      <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Conceitos Fundamentais
      </h3>
      <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Na programação, trabalhamos com alguns conceitos básicos:
      </p>
      
      <div className={`p-6 rounded-lg space-y-4 mb-6 ${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div>
          <h4 className="font-semibold text-primary-600">Algoritmos</h4>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            Sequência de passos para resolver um problema
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-600">Variáveis</h4>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            Espaços na memória para armazenar dados
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-600">Estruturas de Controle</h4>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            Formas de controlar o fluxo do programa
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-600">Funções</h4>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            Blocos de código reutilizáveis
          </p>
        </div>
      </div>

      <div className={`p-6 rounded-lg border-l-4 border-blue-500 ${
        isDark ? 'bg-blue-900/20' : 'bg-blue-50'
      }`}>
        <h4 className={`text-lg font-semibold mb-2 ${
          isDark ? 'text-blue-400' : 'text-blue-700'
        }`}>
          Dica importante
        </h4>
        <p className={isDark ? 'text-blue-300' : 'text-blue-600'}>
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