// src/pages/Practice.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../components/learning/CodeEditor';

const exercises = [
  {
    id: 1,
    title: 'Inverter Array',
    difficulty: 'Fácil',
    category: 'Arrays',
    description: 'Escreva uma função que inverta os elementos de um array sem usar métodos auxiliares.',
    template: `function inverterArray(arr) {
  // Seu código aqui
  return arr;
}`,
    testCases: [
      { input: '[1, 2, 3, 4, 5]', expectedOutput: '[5, 4, 3, 2, 1]' },
      { input: '[10, 20]', expectedOutput: '[20, 10]' },
    ],
  },
  {
    id: 2,
    title: 'Encontrar Elemento Duplicado',
    difficulty: 'Médio',
    category: 'Arrays',
    description: 'Encontre o primeiro elemento duplicado em um array de números.',
    template: `function encontrarDuplicado(arr) {
  // Seu código aqui
  return -1; // Retorna -1 se não encontrar duplicados
}`,
    testCases: [
      { input: '[1, 3, 4, 2, 2]', expectedOutput: '2' },
      { input: '[3, 1, 3, 4, 2]', expectedOutput: '3' },
    ],
  },
  {
    id: 3,
    title: 'Implementar Pilha',
    difficulty: 'Médio',
    category: 'Estruturas de Dados',
    description: 'Implemente uma pilha (stack) com as operações push, pop e peek.',
    template: `class Stack {
  constructor() {
    // Inicialização da pilha
  }

  push(element) {
    // Adicionar elemento
  }

  pop() {
    // Remover e retornar o elemento do topo
  }

  peek() {
    // Retornar o elemento do topo sem remover
  }

  isEmpty() {
    // Verificar se a pilha está vazia
  }
}`,
    testCases: [
      { 
        input: 'push(1), push(2), pop(), peek()', 
        expectedOutput: 'pop() retorna 2, peek() retorna 1' 
      },
    ],
  },
];

const Practice = () => {
  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);
  const [userCode, setUserCode] = useState(selectedExercise.template);
  const [results, setResults] = useState<string[]>([]);

  const handleRunTests = () => {
    // Aqui você implementaria a lógica real de testes
    // Por enquanto, vamos apenas simular alguns resultados
    setResults([
      'Teste 1: Passou ✅',
      'Teste 2: Falhou ❌ - Resultado esperado: [5, 4, 3, 2, 1], Obtido: [1, 2, 3, 4, 5]'
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Exercícios de Programação
          </h1>
          <p className="text-xl text-gray-600">
            Pratique seus conhecimentos resolvendo desafios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar com lista de exercícios */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Exercícios Disponíveis
                </h2>
                <nav className="space-y-2">
                  {exercises.map((exercise) => (
                    <button
                      key={exercise.id}
                      onClick={() => {
                        setSelectedExercise(exercise);
                        setUserCode(exercise.template);
                        setResults([]);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedExercise.id === exercise.id
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <h3 className="font-medium">{exercise.title}</h3>
                      <div className="flex items-center mt-1 space-x-2">
                        <span className={`
                          text-xs px-2 py-1 rounded-full
                          ${exercise.difficulty === 'Fácil' 
                            ? 'bg-green-100 text-green-800'
                            : exercise.difficulty === 'Médio'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'}
                        `}>
                          {exercise.difficulty}
                        </span>
                        <span className="text-xs text-gray-500">
                          {exercise.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Área principal */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              key={selectedExercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Descrição do exercício */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedExercise.title}
                </h2>
                <div className="flex items-center space-x-2 mb-4">
                  <span className={`
                    text-sm px-2 py-1 rounded-full
                    ${selectedExercise.difficulty === 'Fácil' 
                      ? 'bg-green-100 text-green-800'
                      : selectedExercise.difficulty === 'Médio'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'}
                  `}>
                    {selectedExercise.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">
                    {selectedExercise.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {selectedExercise.description}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Casos de Teste:
                  </h3>
                  <ul className="space-y-2">
                    {selectedExercise.testCases.map((testCase, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        <span className="font-mono">Input: {testCase.input}</span>
                        <br />
                        <span className="font-mono">Output esperado: {testCase.expectedOutput}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Editor de código e resultados */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Sua Solução
                  </h3>
                  <button
                    onClick={handleRunTests}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 transition-colors"
                  >
                    Executar Testes
                  </button>
                </div>

                <CodeEditor
                  initialCode={userCode}
                  onCodeChange={setUserCode}
                />

                {results.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Resultados
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      {results.map((result, index) => (
                        <div
                          key={index}
                          className={`text-sm ${
                            result.includes('Passou')
                              ? 'text-green-600'
                              : 'text-red-600'
                          }`}
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;