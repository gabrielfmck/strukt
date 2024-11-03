// src/pages/Algorithms.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import VisualizationPanel from '../components/learning/VisualizationPanel';
import CodeEditor from '../components/learning/CodeEditor';

const algorithms = [
  {
    id: 'bubble',
    name: 'Bubble Sort',
    description: 'Um algoritmo simples que percorre repetidamente a lista, compara elementos adjacentes e os troca se estiverem na ordem errada.',
    complexity: {
      time: 'O(n²)',
      space: 'O(1)',
    },
    initialCode: `void bubbleSort(int arr[], int n) {
    int i, j;
    for (i = 0; i < n-1; i++) {
        for (j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Troca os elementos
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
  },
  {
    id: 'selection',
    name: 'Selection Sort',
    description: 'Um algoritmo que divide a lista em uma parte ordenada e outra não ordenada, e repetidamente seleciona o menor elemento da parte não ordenada.',
    complexity: {
      time: 'O(n²)',
      space: 'O(1)',
    },
    initialCode: `void selectionSort(int arr[], int n) {
    int i, j, min_idx;
    for (i = 0; i < n-1; i++) {
        min_idx = i;
        for (j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        // Troca o elemento encontrado com o primeiro elemento
        if (min_idx != i) {
            int temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
        }
    }
}`,
  },
  {
    id: 'quick',
    name: 'Quick Sort',
    description: 'Um algoritmo eficiente de ordenação que usa a estratégia "dividir para conquistar" com um elemento pivô.',
    complexity: {
      time: 'O(n log n)',
      space: 'O(log n)',
    },
    initialCode: `void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // Troca arr[i] e arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // Troca arr[i + 1] e arr[high] (pivot)
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}`,
  },
];

const Algorithms = () => {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0]);
    const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
    const [speed, setSpeed] = useState(1000);
  
    const generateRandomArray = () => {
      const newArray = Array.from({ length: 10 }, () => 
        Math.floor(Math.random() * 100)
      );
      setArray(newArray);
    };
  
    const handleSpeedChange = (newSpeed: number) => {
      setSpeed(newSpeed);
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
            <motion.div
              key={selectedAlgorithm.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Informações do algoritmo */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedAlgorithm.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  {selectedAlgorithm.description}
                </p>

                {/* Controles */}
                <div className="flex justify-end">
                  <button
                    onClick={generateRandomArray}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 transition-colors"
                  >
                    Gerar Novo Array
                  </button>
                </div>
              </div>

              {/* Visualização */}
              <VisualizationPanel
        algorithm={selectedAlgorithm.id as 'bubble' | 'selection' | 'quick'}
        data={array}
        speed={speed}
      />

      {/* Adicione um controle de velocidade global */}
      <div className="flex items-center space-x-4 mb-4">
        <span className="text-sm text-gray-600">Velocidade de Animação:</span>
        <input
          type="range"
          min="100"
          max="2000"
          step="100"
          value={speed}
          onChange={(e) => handleSpeedChange(Number(e.target.value))}
          className="w-32"
        />
        <span className="text-sm text-gray-600">{speed}ms</span>
      </div>

              {/* Editor de código */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Implementação em C
                </h3>
                <CodeEditor
                  initialCode={selectedAlgorithm.initialCode}
                  language="c"
                  onCodeChange={(code: string) => {
                    console.log('Código atualizado:', code);
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithms;