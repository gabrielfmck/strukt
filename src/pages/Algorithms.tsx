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
    initialCode: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    int swapped;

    for (i = 0; i < n - 1; i++) {
        swapped = 0;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        if (swapped == 0) break;
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int arr[] = {64, 34, 89, 12, 45, 10, 56, 35, 48 , 98};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Array original: ");
    printArray(arr, n);
    
    bubbleSort(arr, n);
    
    printf("\\nArray ordenado: ");
    printArray(arr, n);
    
    return 0;
}`
  },
  {
    id: 'selection',
    name: 'Selection Sort',
    description: 'Um algoritmo que divide a lista em uma parte ordenada e outra não ordenada, e repetidamente seleciona o menor elemento da parte não ordenada.',
    complexity: {
      time: 'O(n²)',
      space: 'O(1)',
    },
    initialCode: `#include <stdio.h>

void selectionSort(int arr[], int n) {
    int i, j, min_idx;
    
    for (i = 0; i < n-1; i++) {
        min_idx = i;
        for (j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        if(min_idx != i) {
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int arr[] = {64, 34, 89, 12, 45, 10, 56, 35, 48 , 98};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Array original: ");
    printArray(arr, n);
    
    selectionSort(arr, n);
    
    printf("\\nArray ordenado: ");
    printArray(arr, n);
    
    return 0;
}`
  },
  {
    id: 'quick',
    name: 'Quick Sort',
    description: 'Um algoritmo eficiente de ordenação que usa a estratégia "dividir para conquistar" com um elemento pivô.',
    complexity: {
      time: 'O(n log n)',
      space: 'O(log n)',
    },
    initialCode: `#include <stdio.h>

// Função para trocar dois elementos
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Função que encontra o pivô e o coloca na posição correta
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Escolhe o último elemento como pivô
    int i = (low - 1);      // Índice do menor elemento
    
    for (int j = low; j <= high - 1; j++) {
        // Se o elemento atual é menor que o pivô
        if (arr[j] < pivot) {
            i++;    // Incrementa o índice do menor elemento
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

// Função principal do Quick Sort
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // pi é o índice de particionamento
        int pi = partition(arr, low, high);
        
        // Ordena os elementos separadamente antes
        // e depois do particionamento
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Função auxiliar para imprimir o array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        printf("%d ", arr[i]);
}

// Função principal para teste
int main() {
    int arr[] = {64, 34, 89, 12, 45, 10, 56, 35, 48 , 98};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Array original: ");
    printArray(arr, n);
    
    quickSort(arr, 0, n-1);
    
    printf("Array ordenado: ");
    printArray(arr, n);
    
    return 0;
}
`
  }
];

const Algorithms = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0]);
  const [array, setArray] = useState([64, 34, 89, 12, 45, 10, 56, 35, 48 , 98]);
  const [speed, setSpeed] = useState(1000);

  const getSpeedLabel = (value: number) => {
    if (value < 500) return 'Muito Rápido';
    if (value < 1000) return 'Rápido';
    if (value < 1500) return 'Médio';
    if (value < 2000) return 'Lento';
    return 'Muito Lento';
  };

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

              {/* Bloco de visualização com controle de velocidade */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                {/* Controle de Velocidade */}
                <label 
                  htmlFor="speed" 
                  className="block text-sm font-medium text-gray-700 mb-2 flex justify-between"
                >
                  <span>Velocidade da Animação</span>
                  <span className="text-primary-600 font-semibold">
                    {getSpeedLabel(speed)}
                  </span>
                </label>
                <input
                  type="range"
                  id="speed"
                  min="100"
                  max="2000"
                  step="100"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1 mb-6">
                  <span>Mais Rápido</span>
                  <span>Mais Lento</span>
                </div>

                {/* Visualização */}
                <VisualizationPanel
                  algorithm={selectedAlgorithm.id as 'bubble' | 'selection' | 'quick'}
                  data={array}
                  speed={speed}
                />
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
