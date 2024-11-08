// src/pages/learn/QuickSort.tsx
import { useState } from 'react';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import VisualizationPanel from '../../components/learning/VisualizationPanel';

const QuickSort = () => {
  const [speed, setSpeed] = useState(1000);

  const getSpeedLabel = (value: number): string => {
    if (value < 500) return 'Muito Rápido';
    if (value < 1000) return 'Rápido';
    if (value < 1500) return 'Médio';
    if (value < 2000) return 'Lento';
    return 'Muito Lento';
  };

  const content = (
    <div>
      <h2>O que é Bubble Sort?</h2>
      <p className="mb-6">
        Bubble Sort é um algoritmo de ordenação simples que percorre repetidamente
        a lista, compara elementos adjacentes e os troca se estiverem na ordem errada.
        O algoritmo recebe esse nome porque elementos "flutuam" como bolhas para suas posições corretas.
      </p>

      {/* Visualização */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Visualização</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="mb-4">
            <label 
              htmlFor="speed" 
              className="block text-sm font-medium text-gray-700 mb-2 flex justify-between"
            >
              <span>Velocidade da Animação</span>
              <span className="text-primary-600 font-semibold">
                {getSpeedLabel(speed)}
              </span>
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                id="speed"
                min="100"
                max="2000"
                step="100"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Mais Rápido</span>
              <span>Mais Lento</span>
            </div>
          </div>
          <VisualizationPanel
            algorithm="bubble"
            data={[64, 34, 25, 12, 22, 11, 90]}
            speed={speed}
          />
        </div>
      </div>

      {/* Como Funciona */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Como Funciona</h3>
        <div className="bg-blue-50 p-6 rounded-lg space-y-4">
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-2">1.</span>
            <div>
              <p className="text-blue-700 font-medium">Escolha do Pivô</p>
              <p className="text-blue-600">Seleciona um elemento como pivô (geralmente o último)</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-2">2.</span>
            <div>
              <p className="text-blue-700 font-medium">Particionamento</p>
              <p className="text-blue-600">Rearranja o array de forma que elementos menores que o pivô fiquem à esquerda e maiores à direita</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-2">3.</span>
            <div>
              <p className="text-blue-700 font-medium">Recursão</p>
              <p className="text-blue-600">Aplica o mesmo processo recursivamente nas duas partições criadas</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-2">4.</span>
            <div>
              <p className="text-blue-700 font-medium">Combinação</p>
              <p className="text-blue-600">As subpartes já estarão ordenadas naturalmente após o processo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementação */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Implementação</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <CodeEditor
            initialCode={`#include <stdio.h>

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
    printf("\\n");
}

// Função principal para teste
int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Array original: ");
    printArray(arr, n);
    
    quickSort(arr, 0, n-1);
    
    printf("Array ordenado: ");
    printArray(arr, n);
    
    return 0;
}`}
            language="c"
          />
        </div>
      </div>

      {/* Análise de Complexidade */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Complexidade</h3>
          <table className="min-w-full">
            <tbody>
              <tr>
                <td className="py-2 font-medium">Melhor caso:</td>
                <td className="py-2 font-mono text-primary-600">O(n log n)</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Caso médio:</td>
                <td className="py-2 font-mono text-primary-600">O(n log n)</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Pior caso:</td>
                <td className="py-2 font-mono text-primary-600">O(n²)</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Espaço:</td>
                <td className="py-2 font-mono text-primary-600">O(log n)</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-sm text-gray-600">
            Nota: O pior caso O(n²) ocorre quando o pivô é sempre o menor ou maior elemento,
            mas isso é raro em arrays aleatórios.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Características</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Vantagens</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Eficiente na média</li>
                <li>In-place (pouca memória extra)</li>
                <li>Cache-friendly</li>
                <li>Paralelizável</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">Desvantagens</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Pior caso O(n²)</li>
                <li>Não é estável</li>
                <li>Sensível à escolha do pivô</li>
                <li>Recursivo (usa pilha)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Otimizações */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Otimizações Comuns</h3>
        <div className="bg-yellow-50 p-6 rounded-lg space-y-4">
          <div className="flex items-start">
            <span className="font-bold text-yellow-600 mr-2">1.</span>
            <div>
              <h4 className="font-semibold text-yellow-700">Mediana de Três</h4>
              <p className="text-yellow-600">
                Escolhe o pivô como a mediana entre primeiro, meio e último elemento,
                reduzindo a chance do pior caso.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-yellow-600 mr-2">2.</span>
            <div>
              <h4 className="font-semibold text-yellow-700">Insertion Sort para Partições Pequenas</h4>
              <p className="text-yellow-600">
                Usa Insertion Sort para partições menores que um certo limiar
                (geralmente 10-20 elementos).
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-yellow-600 mr-2">3.</span>
            <div>
              <h4 className="font-semibold text-yellow-700">Particionamento de Três Vias</h4>
              <p className="text-yellow-600">
                Lida melhor com arrays que têm muitos elementos duplicados,
                dividindo em três partes: menor, igual e maior que o pivô.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-yellow-600 mr-2">4.</span>
            <div>
              <h4 className="font-semibold text-yellow-700">Iterativo em vez de Recursivo</h4>
              <p className="text-yellow-600">
                Implementação iterativa usando uma pilha explícita para evitar
                overflow da pilha de recursão.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparação com Outros Algoritmos */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Comparação com Outros Algoritmos</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aspecto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quick Sort</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merge Sort</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Heap Sort</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">Melhor/Médio</td>
                <td className="px-6 py-4">O(n log n)</td>
                <td className="px-6 py-4">O(n log n)</td>
                <td className="px-6 py-4">O(n log n)</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Pior caso</td>
                <td className="px-6 py-4">O(n²)</td>
                <td className="px-6 py-4">O(n log n)</td>
                <td className="px-6 py-4">O(n log n)</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Espaço</td>
                <td className="px-6 py-4">O(log n)</td>
                <td className="px-6 py-4">O(n)</td>
                <td className="px-6 py-4">O(1)</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Estável</td>
                <td className="px-6 py-4">Não</td>
                <td className="px-6 py-4">Sim</td>
                <td className="px-6 py-4">Não</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Exercícios */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Exercícios</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ol className="list-decimal list-inside space-y-4">
            <li className="text-gray-700">
              Implemente o Quick Sort usando a estratégia de "Mediana de Três"
              para seleção do pivô.
            </li>
            <li className="text-gray-700">
              Modifique o algoritmo para usar Insertion Sort em partições menores
              que 10 elementos.
            </li>
            <li className="text-gray-700">
              Implemente uma versão iterativa do Quick Sort usando uma pilha
              explícita.
            </li>
            <li className="text-gray-700">
              Crie uma versão do Quick Sort que ordene strings em ordem
              alfabética.
            </li>
            <li className="text-gray-700">
              Implemente o particionamento de três vias para lidar melhor com
              elementos duplicados.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );

  return (
    <ContentPage
      title="Quick Sort"
      content={content}
      duration="30 min"
    />
  );
};

export default QuickSort;