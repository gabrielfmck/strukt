// src\pages\Algorithms.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/theme/ThemeContext';
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
    initialCode: `#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída

// Função de ordenação Bubble Sort
void bubbleSort(int arr[], int n) {
    int i, j, temp;      // Declara variáveis auxiliares para o loop e troca de elementos
    int swapped;         // Variável para indicar se uma troca foi feita

    // Loop externo que percorre o array, controlando o número de passagens
    for (i = 0; i < n - 1; i++) {
        swapped = 0;  // Define 'swapped' como 0 antes de cada passagem

        // Loop interno para comparar e trocar elementos adjacentes
        for (j = 0; j < n - i - 1; j++) {
            // Se o elemento atual é maior que o próximo, troca-os
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];           // Armazena o valor atual em 'temp'
                arr[j] = arr[j + 1];     // Coloca o próximo valor na posição atual
                arr[j + 1] = temp;       // Coloca o valor armazenado na próxima posição
                swapped = 1;             // Indica que uma troca foi realizada
            }
        }
        
        // Se nenhuma troca foi feita, o array já está ordenado
        if (swapped == 0) break;
    }
}

// Função para imprimir os elementos do array
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);  // Imprime o elemento atual seguido de um espaço
    }
    printf("");  // Pula uma linha após imprimir o array
}

int main() {
    // Define um array de inteiros com alguns valores
    int arr[] = {100, 10, 80, 30, 50, 60, 40, 70, 20, 90};
    int n = sizeof(arr) / sizeof(arr[0]);  // Calcula o tamanho do array

    // Imprime o array original
    printf("Array original: ");
    printArray(arr, n);

    // Chama a função bubbleSort para ordenar o array
    bubbleSort(arr, n);

    // Imprime o array ordenado
    printf("| Array ordenado: ");
    printArray(arr, n);

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
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
    initialCode: `#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída

// Função de ordenação Selection Sort
void selectionSort(int arr[], int n) {
    int i, j, min_idx;  // Declara variáveis auxiliares para o loop e o índice do menor elemento

    // Loop que percorre todo o array, posição por posição
    for (i = 0; i < n - 1; i++) {
        min_idx = i;  // Define o índice do menor elemento como o atual

        // Loop para encontrar o menor elemento no restante do array
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx])  // Se encontrar um elemento menor, atualiza min_idx
                min_idx = j;
        }

        // Troca o menor elemento encontrado com o elemento atual se necessário
        if (min_idx != i) {
            int temp = arr[min_idx];  // Armazena o valor do menor elemento
            arr[min_idx] = arr[i];    // Coloca o elemento atual na posição do menor elemento
            arr[i] = temp;            // Coloca o menor elemento na posição atual
        }
    }
}

// Função para imprimir os elementos do array
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);  // Imprime o elemento atual seguido de um espaço
    }
    printf("");  // Pula uma linha após imprimir o array
}

int main() {
    // Define um array de inteiros com alguns valores
    int arr[] = {100, 10, 80, 30, 50, 60, 40, 70, 20, 90};
    int n = sizeof(arr) / sizeof(arr[0]);  // Calcula o tamanho do array

    // Imprime o array original
    printf("Array original: ");
    printArray(arr, n);

    // Chama a função selectionSort para ordenar o array
    selectionSort(arr, n);

    // Imprime o array ordenado
    printf("| Array ordenado: ");
    printArray(arr, n);

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
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
    initialCode: `#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída

// Função para trocar dois elementos do array
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Função que organiza o array em torno de um pivô e retorna a posição correta do pivô
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Escolhe o último elemento como pivô
    int i = (low - 1);      // Índice do menor elemento

    // Loop para reorganizar elementos em relação ao pivô
    for (int j = low; j <= high - 1; j++) {
        // Se o elemento atual é menor que o pivô
        if (arr[j] < pivot) {
            i++;    // Incrementa o índice do menor elemento
            swap(&arr[i], &arr[j]);  // Troca o elemento menor para a esquerda do pivô
        }
    }
    swap(&arr[i + 1], &arr[high]);  // Coloca o pivô na posição correta
    return (i + 1);  // Retorna o índice do pivô
}

// Função principal do Quick Sort que chama recursivamente o algoritmo para ordenar o array
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // Encontra o índice de particionamento e organiza o pivô na posição correta
        int pi = partition(arr, low, high);

        // Ordena os elementos à esquerda e à direita do pivô separadamente
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Função auxiliar para imprimir os elementos do array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("");  // Pula uma linha após imprimir o array
}

// Função principal para teste do Quick Sort
int main() {
    int arr[] = {100, 10, 80, 30, 50, 60, 40, 70, 20, 90};  // Define o array de inteiros
    int n = sizeof(arr) / sizeof(arr[0]);  // Calcula o tamanho do array

    // Imprime o array original
    printf("Array original: ");
    printArray(arr, n);

    // Chama a função quickSort para ordenar o array
    quickSort(arr, 0, n - 1);

    // Imprime o array ordenado
    printf("| Array ordenado: ");
    printArray(arr, n);

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
}`
  }
];

const Algorithms = () => {
  const { theme } = useTheme();
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0]);
  const [array, setArray] = useState([100, 10, 80, 30, 50, 60, 40, 70, 20 , 90]);
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
    <div className={`min-h-screen py-12 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Algoritmos de Ordenação
          </h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Visualize e aprenda como funcionam diferentes algoritmos de ordenação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar com algoritmos */}
          <div className="lg:col-span-1">
            <div className={`rounded-lg shadow-lg overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="p-4">
                <h2 className={`text-lg font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Algoritmos Disponíveis
                </h2>
                <nav className="space-y-2">
                  {algorithms.map((algorithm) => (
                    <button
                      key={algorithm.id}
                      onClick={() => setSelectedAlgorithm(algorithm)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedAlgorithm.id === algorithm.id
                          ? theme === 'dark'
                            ? 'bg-primary-900/50 text-primary-400'
                            : 'bg-primary-50 text-primary-600'
                          : theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <h3 className="font-medium">{algorithm.name}</h3>
                      <div className="mt-1 text-sm">
                        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                          Tempo: {algorithm.complexity.time}
                        </p>
                        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
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
              <div className={`rounded-lg shadow-lg p-6 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <h2 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedAlgorithm.name}
                </h2>
                <p className={`mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
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
              <div className={`rounded-lg shadow-lg p-6 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                {/* Controle de Velocidade */}
                <div className="flex justify-between items-center mb-2">
                  <label className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Velocidade da Animação
                  </label>
                  <span className="text-primary-600 font-semibold">
                    {getSpeedLabel(speed)}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="100"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600 dark:bg-gray-700"
                />
                <div className="flex justify-between text-xs mt-1 mb-6">
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                    Mais Rápido
                  </span>
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                    Mais Lento
                  </span>
                </div>

                {/* Visualização */}
                <VisualizationPanel
                  algorithm={selectedAlgorithm.id as 'bubble' | 'selection' | 'quick'}
                  data={array}
                  speed={speed}
                />
              </div>

              {/* Editor de código */}
              <div className={`rounded-lg shadow-lg p-6 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
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