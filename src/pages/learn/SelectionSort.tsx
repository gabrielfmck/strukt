// src/pages/learn/SelectionSort.tsx
import { useState } from 'react';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import VisualizationPanel from '../../components/learning/VisualizationPanel';

const SelectionSort = () => {
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
      <h2>O que é Selection Sort?</h2>
      <p className="mb-6">
        Selection Sort é um algoritmo que divide o array em uma parte ordenada e outra não
        ordenada. A cada passo, encontra o menor elemento da parte não ordenada e o coloca
        na posição correta da parte ordenada.
      </p>

      {/* Como Funciona */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Como Funciona</h3>
        <div className="bg-blue-50 p-6 rounded-lg space-y-4">
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-2">1.</span>
            <p className="text-blue-700">
              Divide o array em duas partes: ordenada (inicialmente vazia) e não ordenada
            </p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-2">2.</span>
            <p className="text-blue-700">
              Encontra o menor elemento na parte não ordenada
            </p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-2">3.</span>
            <p className="text-blue-700">
              Troca este elemento com o primeiro elemento da parte não ordenada
            </p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-2">4.</span>
            <p className="text-blue-700">
              Aumenta a parte ordenada e diminui a não ordenada
            </p>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-blue-600 mr-2">5.</span>
            <p className="text-blue-700">
              Repete até todo o array estar ordenado
            </p>
          </div>
        </div>
      </div>

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
            algorithm="selection"
            data={[64, 34, 25, 12, 22, 11, 90]}
            speed={speed}
          />
        </div>
      </div>

      {/* Implementação */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Implementação</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <CodeEditor
            initialCode={`#include <stdio.h>

void selectionSort(int arr[], int n) {
    int i, j, min_idx, temp;
    
    // Um por um, move o limite da parte não ordenada
    for (i = 0; i < n-1; i++) {
        // Encontra o elemento mínimo na parte não ordenada
        min_idx = i;
        for (j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        
        // Troca o elemento mínimo encontrado com o primeiro
        // elemento da parte não ordenada
        if (min_idx != i) {
            temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
}

// Função auxiliar para imprimir o array
void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\\n");
}

// Função principal para teste
int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Array original: ");
    printArray(arr, n);
    
    selectionSort(arr, n);
    
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
                <td className="py-2 font-mono text-primary-600">O(n²)</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Caso médio:</td>
                <td className="py-2 font-mono text-primary-600">O(n²)</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Pior caso:</td>
                <td className="py-2 font-mono text-primary-600">O(n²)</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Espaço:</td>
                <td className="py-2 font-mono text-primary-600">O(1)</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-sm text-gray-600">
            Nota: Selection Sort sempre realiza O(n²) comparações, mas faz apenas O(n)
            trocas, o que pode ser vantajoso quando o custo de troca é alto.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Características</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Vantagens</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Simples de implementar</li>
                <li>Bom para arrays pequenos</li>
                <li>Número mínimo de trocas (O(n))</li>
                <li>Performance previsível</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">Desvantagens</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Ineficiente para arrays grandes</li>
                <li>Tempo quadrático em todos os casos</li>
                <li>Não é estável</li>
                <li>Não adaptativo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Comparação com Outros Algoritmos */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Comparação com Bubble Sort</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aspecto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Selection Sort</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bubble Sort</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">Complexidade</td>
                <td className="px-6 py-4">Sempre O(n²)</td>
                <td className="px-6 py-4">O(n) a O(n²)</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Número de Trocas</td>
                <td className="px-6 py-4">O(n)</td>
                <td className="px-6 py-4">O(n²)</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Estabilidade</td>
                <td className="px-6 py-4">Não estável</td>
                <td className="px-6 py-4">Estável</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Adaptativo</td>
                <td className="px-6 py-4">Não</td>
                <td className="px-6 py-4">Sim</td>
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
              Implemente uma versão do Selection Sort que ordene em ordem decrescente.
            </li>
            <li className="text-gray-700">
              Modifique o algoritmo para contar o número de comparações e trocas realizadas.
            </li>
            <li className="text-gray-700">
              Crie uma versão que encontre o maior elemento em vez do menor e o coloque
              no final do array.
            </li>
            <li className="text-gray-700">
              Implemente uma versão que ordene apenas os números pares do array,
              mantendo os ímpares em suas posições originais.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );

  return (
    <ContentPage
      title="Selection Sort"
      content={content}
      duration="15 min"
    />
  );
};

export default SelectionSort;