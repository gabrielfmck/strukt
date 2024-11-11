// src/pages/learn/SelectionSort.tsx
import { useState } from 'react';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import VisualizationPanel from '../../components/learning/VisualizationPanel';
import { useTheme } from '../../contexts/theme/ThemeContext';

const SelectionSort = () => {
  const [speed, setSpeed] = useState(1000);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const getSpeedLabel = (value: number): string => {
    if (value < 500) return 'Muito Rápido';
    if (value < 1000) return 'Rápido';
    if (value < 1500) return 'Médio';
    if (value < 2000) return 'Lento';
    return 'Muito Lento';
  };

  const content = (
    <div>
      <h2 className={`text-2xl font-bold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        O que é Selection Sort?
      </h2>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Selection Sort é um algoritmo que divide o array em uma parte ordenada e outra não
        ordenada. A cada passo, encontra o menor elemento da parte não ordenada e o coloca
        na posição correta da parte ordenada.
      </p>

      {/* Como Funciona */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Como Funciona
        </h3>
        <div className={`p-6 rounded-lg space-y-4 transition-colors duration-200 ${
          isDark 
            ? 'bg-blue-900/20 text-blue-300' 
            : 'bg-blue-50 text-blue-700'
        }`}>
          {[
            'Divide o array em duas partes: ordenada (inicialmente vazia) e não ordenada',
            'Encontra o menor elemento na parte não ordenada',
            'Troca este elemento com o primeiro elemento da parte não ordenada',
            'Aumenta a parte ordenada e diminui a não ordenada',
            'Repete até todo o array estar ordenado'
          ].map((step, index) => (
            <div key={index} className="flex items-start">
              <span className={`font-bold mr-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {index + 1}.
              </span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visualização */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Visualização
        </h3>
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        }`}>
          <div className="mb-4">
            <label 
              htmlFor="speed" 
              className={`block text-sm font-medium mb-2 flex justify-between ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              <span>Velocidade da Animação</span>
              <span className="text-primary-500 font-semibold">
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
                className={`flex-grow h-2 rounded-lg appearance-none cursor-pointer ${
                  isDark ? 'bg-gray-700' : 'bg-gray-200'
                } accent-primary-500`}
              />
            </div>
            <div className={`flex justify-between text-xs mt-1 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
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
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Implementação
        </h3>
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        }`}>
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
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        }`}>
          <h3 className={`text-xl font-semibold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Complexidade
          </h3>
          <table className="min-w-full">
            <tbody>
              {[
                ['Melhor caso:', 'O(n²)'],
                ['Caso médio:', 'O(n²)'],
                ['Pior caso:', 'O(n²)'],
                ['Espaço:', 'O(1)']
              ].map(([label, value], index) => (
                <tr key={index}>
                  <td className={`py-2 font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-900'
                  }`}>
                    {label}
                  </td>
                  <td className="py-2 font-mono text-primary-500">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={`mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Nota: Selection Sort sempre realiza O(n²) comparações, mas faz apenas O(n)
            trocas, o que pode ser vantajoso quando o custo de troca é alto.
          </p>
        </div>

        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        }`}>
          <h3 className={`text-xl font-semibold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Características
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className={`font-semibold mb-2 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                Vantagens
              </h4>
              <ul className={`list-disc pl-5 space-y-1 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Simples de implementar</li>
                <li>Bom para arrays pequenos</li>
                <li>Número mínimo de trocas (O(n))</li>
                <li>Performance previsível</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${
                isDark ? 'text-red-400' : 'text-red-600'
              }`}>
                Desvantagens
              </h4>
              <ul className={`list-disc pl-5 space-y-1 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
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
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Comparação com Bubble Sort
        </h3>
        <div className="overflow-x-auto rounded-lg">
          <table className={`min-w-full overflow-hidden shadow-lg ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <thead className={isDark ? 'bg-gray-900' : 'bg-gray-50'}>
              <tr>
                {['Aspecto', 'Selection Sort', 'Bubble Sort'].map((header) => (
                  <th key={header} className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                    isDark ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`divide-y ${
              isDark ? 'divide-gray-700' : 'divide-gray-200'
            }`}>
              {[
                ['Complexidade', 'Sempre O(n²)', 'O(n) a O(n²)'],
                ['Número de Trocas', 'O(n)', 'O(n²)'],
                ['Estabilidade', 'Não estável', 'Estável'],
                ['Adaptativo', 'Não', 'Sim']
              ].map(([aspect, selection, bubble], index) => (
                <tr key={index}>
                  {[aspect, selection, bubble].map((cell, i) => (
                    <td key={i} className={`px-6 py-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-900'
                    }`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Exercícios */}
      <div>
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Exercícios
        </h3>
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        }`}>
          <ol className={`list-decimal list-inside space-y-4 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <li>
              Implemente uma versão do Selection Sort que ordene em ordem decrescente.
            </li>
            <li>
              Modifique o algoritmo para contar o número de comparações e trocas realizadas.
            </li>
            <li>
              Crie uma versão que encontre o maior elemento em vez do menor e o coloque
              no final do array.
            </li>
            <li>
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