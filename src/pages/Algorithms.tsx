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
    initialCode: `#include <stdio.h>

// Função para realizar o Bubble Sort
void bubbleSort(int arr[], int n) {
    int i, j, temp;
    int swapped;

    // Percorrer todos os elementos do array
    for (i = 0; i < n - 1; i++) {
        swapped = 0; // Inicializa a variável swapped como 0

        // Últimos i elementos já estão em ordem
        for (j = 0; j < n - i - 1; j++) {
            // Se o elemento atual é maior que o próximo, troca
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1; // Define swapped como 1 para indicar que houve troca
            }
        }

        // Se não houve troca na passagem, o array já está ordenado
        if (swapped == 0) {
            break;
        }
    }
}

// Função para imprimir o array
void printArray(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
}

// Função principal
int main() {
    int n, i;

    // Solicita o tamanho do array
    printf("Digite o número de elementos: ");
    scanf("%d", &n);

    int arr[n]; // Cria um array com o tamanho fornecido

    // Solicita os elementos do array
    printf("Digite os elementos do array: ");
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Array original: ");
    printArray(arr, n);

    bubbleSort(arr, n);

    printf("Array ordenado: ");
    printArray(arr, n);

    return 0;
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
    initialCode: `#include <stdio.h>

// Função para realizar a ordenação por seleção
void selectionSort(int arr[], int n) {
    int i, j, min_idx, temp;

    // Passo para cada elemento do array
    for (i = 0; i < n - 1; i++) {
        // Assume que o primeiro elemento da parte não ordenada é o menor
        min_idx = i;

        // Busca pelo menor elemento na parte não ordenada
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        // Troca o menor elemento encontrado com o primeiro elemento da parte não ordenada
        temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

// Função para imprimir o array
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Array original: ");
    printArray(arr, n);

    selectionSort(arr, n);

    printf("Array ordenado: ");
    printArray(arr, n);

    return 0;
}
`,
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
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Função de partição para dividir o array com base no pivô
int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // Escolhe o último elemento como pivô
    int i = (low - 1); // Índice do menor elemento

    for (int j = low; j <= high - 1; j++) {
        // Se o elemento atual é menor ou igual ao pivô
        if (arr[j] <= pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

// Função recursiva do Quick Sort
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // Encontra o índice de partição
        int pi = partition(arr, low, high);

        // Ordena os elementos antes e depois da partição
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Função para imprimir o array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Array original: ");
    printArray(arr, n);

    quickSort(arr, 0, n - 1);

    printf("Array ordenado: ");
    printArray(arr, n);

    return 0;
}
`,
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