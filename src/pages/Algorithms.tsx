// src/pages/Algorithms.tsx
import { useState } from 'react';
import VisualizationPanel from '../components/learning/VisualizationPanel';
import CodeEditor from '../components/learning/CodeEditor';

const algorithms = [
  {
    id: 'bubble',
    name: 'Bubble Sort',
    description: 'Um algoritmo de ordenação simples que percorre repetidamente a lista, compara elementos adjacentes e os troca se estiverem na ordem errada.',
    complexity: {
      time: 'O(n²)',
      space: 'O(1)',
    },
    initialCode: `function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Troca os elementos
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}`,
  },
  {
    id: 'selection',
    name: 'Selection Sort',
    description: 'Um algoritmo de ordenação que divide a lista em uma parte ordenada e outra não ordenada, e repetidamente seleciona o menor elemento da parte não ordenada.',
    complexity: {
      time: 'O(n²)',
      space: 'O(1)',
    },
    initialCode: `function selectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    
    // Troca o elemento encontrado com o primeiro elemento
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  
  return arr;
}`,
  },
];

const Algorithms = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0]);
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 10 }, () => 
      Math.floor(Math.random() * 100)
    );
    setArray(newArray);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Algoritmos de Ordenação
          </h1>
          <p className="text-xl text-gray-600">
            Visualize e aprenda como funcionam diferentes algoritmos de ordenação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar com algoritmos */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Algoritmos Disponíveis
                </h2>
                <nav className="space-y-2">
                  {algorithms.map((algorithm) => (
                    <button
                      key={algorithm.id}
                      onClick={() => setSelectedAlgorithm(algorithm)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedAlgorithm.id === algorithm.id
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <h3 className="font-medium">{algorithm.name}</h3>
                      <div className="mt-1 text-sm">
                        <p className="text-gray-500">
                          Tempo: {algorithm.complexity.time}
                        </p>
                        <p className="text-gray-500">
                          Espaço: {algorithm.complexity.space}
                        </p>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Área principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Painel de visualização */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedAlgorithm.name}
                </h2>
                <button
                  onClick={generateRandomArray}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 transition-colors"
                >
                  Gerar Novo Array
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">
                {selectedAlgorithm.description}
              </p>

              <VisualizationPanel
                type="array"
                data={array}
                speed={1000}
              />
            </div>

            {/* Editor de código */}
            <CodeEditor
              initialCode={selectedAlgorithm.initialCode}
              onRunCode={(code) => {
                console.log('Executando código:', code);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithms;