// src\pages\learn\WhatIsProgramming.tsx
import { motion } from 'framer-motion';
import ContentPage from '../../components/learning/ContentPage';

const WhatIsProgramming = () => {
  const content = (
    <div className="space-y-8 mx-auto max-w-4xl">
      {/* Introdução */}
      <section className="bg-white dark:bg-gray-900/30 rounded-xl p-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100"
        >
          Introdução à Programação
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        >
          Programação é a arte de criar instruções para computadores resolverem problemas.
          É como escrever uma receita detalhada que o computador pode seguir para realizar tarefas.
        </motion.p>
      </section>

      {/* Por que aprender programação */}
      <section>
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3"
        >
          <svg className="w-6 h-6 text-primary-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Por que aprender programação?
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Desenvolver pensamento lógico',
              description: 'A programação ajuda a pensar de forma estruturada e analítica',
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )
            },
            {
              title: 'Criar soluções para problemas reais',
              description: 'Desenvolva ferramentas e aplicações úteis',
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              )
            },
            {
              title: 'Automatizar tarefas repetitivas',
              description: 'Programe o computador para fazer trabalhos repetitivos por você',
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              )
            },
            {
              title: 'Construir aplicações e sistemas',
              description: 'Desenvolva websites, aplicativos e muito mais',
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              )
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-700/50 hover:border-primary-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-primary-600 dark:text-blue-400">
                  {item.icon}
                </span>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conceitos Fundamentais */}
      <section>
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3"
        >
          <svg className="w-6 h-6 text-primary-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Conceitos Fundamentais
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Algoritmos',
              description: 'Sequência de passos para resolver um problema',
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              )
            },
            {
              title: 'Variáveis',
              description: 'Espaços na memória para armazenar dados',
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              )
            },
            {
              title: 'Estruturas de Controle',
              description: 'Formas de controlar o fluxo do programa',
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              )
            },
            {
              title: 'Funções',
              description: 'Blocos de código reutilizáveis',
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              )
            }
          ].map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-700/50 hover:border-primary-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-primary-600 dark:text-blue-400">
                  {concept.icon}
                </span>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {concept.title}
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-400">
                {concept.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dica Importante */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-primary-50/50 dark:bg-blue-900/20 border-l-4 border-primary-500 dark:border-blue-500 p-6 rounded-r-xl"
      >
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-primary-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary-900 dark:text-blue-300">
              Dica importante
            </h4>
            <p className="mt-2 text-primary-800 dark:text-blue-200/90">
              Não se preocupe em memorizar todos os conceitos de uma vez. A programação é uma
              habilidade que se desenvolve com prática e tempo. Foque em entender os conceitos
              básicos primeiro e vá progredindo gradualmente.
            </p>
          </div>
        </div>
      </motion.div>
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