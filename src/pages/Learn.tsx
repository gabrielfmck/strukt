// src/pages/Learn.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/theme/ThemeContext';

const topics = [
  {
    id: 1,
    title: 'Introdução à Programação',
    description: 'Conceitos básicos de lógica de programação e algoritmos',
    modules: [
      { 
        id: 1, 
        title: 'O que é programação?', 
        duration: '10 min',
        path: '/learn/what-is-programming'
      },
      { 
        id: 2, 
        title: 'Variáveis e Tipos de Dados', 
        duration: '15 min',
        path: '/learn/variables'
      },
      { 
        id: 3, 
        title: 'Estruturas de Controle', 
        duration: '20 min',
        path: '/learn/control-structures'
      },
    ],
  },
  {
    id: 2,
    title: 'Estruturas de Dados Básicas',
    description: 'Arrays, listas ligadas e pilhas',
    modules: [
      { 
        id: 1, 
        title: 'Arrays e Vetores', 
        duration: '15 min',
        path: '/learn/arrays'
      },
      { 
        id: 2, 
        title: 'Listas Ligadas', 
        duration: '20 min',
        path: '/learn/linked-lists'
      },
      { 
        id: 3, 
        title: 'Pilhas e Filas', 
        duration: '25 min',
        path: '/learn/stacks-queues'
      },
    ],
  },
  {
    id: 3,
    title: 'Algoritmos de Ordenação',
    description: 'Bubble Sort, Selection Sort e Quick Sort',
    modules: [
      { 
        id: 1, 
        title: 'Bubble Sort', 
        duration: '15 min',
        path: '/learn/bubble-sort'
      },
      { 
        id: 2, 
        title: 'Selection Sort', 
        duration: '15 min',
        path: '/learn/selection-sort'
      },
      { 
        id: 3, 
        title: 'Quick Sort', 
        duration: '30 min',
        path: '/learn/quick-sort'
      },
    ],
  },
];

const Learn = () => {
  const { theme } = useTheme();
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div className={`min-h-screen py-12 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Trilha de Aprendizado
          </h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Escolha um tópico para começar sua jornada de aprendizado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar com tópicos */}
          <div className="lg:col-span-1">
            <div className={`rounded-lg shadow-lg overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="p-4">
                <h2 className={`text-lg font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Tópicos
                </h2>
                <nav className="space-y-2">
                  {topics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedTopic.id === topic.id
                          ? theme === 'dark'
                            ? 'bg-primary-900/50 text-primary-400'
                            : 'bg-primary-50 text-primary-600'
                          : theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <h3 className="font-medium">{topic.title}</h3>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {topic.description}
                      </p>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Área de conteúdo principal */}
          <div className="lg:col-span-2">
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-lg shadow-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="p-6">
                <h2 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedTopic.title}
                </h2>
                <p className={`mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {selectedTopic.description}
                </p>

                <div className="space-y-4">
                  {selectedTopic.modules.map((module) => (
                    <div
                      key={module.id}
                      className={`border rounded-lg p-4 transition-colors ${
                        theme === 'dark'
                          ? 'border-gray-700 hover:border-primary-500'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`font-medium ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {module.title}
                          </h3>
                          <p className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            Duração: {module.duration}
                          </p>
                        </div>
                        <Link
                          to={module.path}
                          className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 transition-colors"
                        >
                          Começar
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;