import { motion } from 'framer-motion';
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
    <div className="space-y-8">
      {/* Introdução */}
      <section className={`rounded-lg shadow-md p-6 border ${
        isDark 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-2xl font-bold mb-4 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
          </svg>
          O que é Selection Sort?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Selection Sort é um algoritmo que divide o array em uma parte ordenada e outra não
          ordenada. A cada passo, encontra o menor elemento da parte não ordenada e o coloca
          na posição correta da parte ordenada.
        </motion.p>
      </section>

      {/* Como Funciona */}
      <section>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Como Funciona
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg p-6 border-l-4 ${
            isDark 
              ? 'bg-primary-900/20 border-primary-500 text-primary-200'
              : 'bg-primary-50 border-primary-500 text-primary-800'
          }`}
        >
          {[
            'Divide o array em duas partes: ordenada (inicialmente vazia) e não ordenada',
            'Encontra o menor elemento na parte não ordenada',
            'Troca este elemento com o primeiro elemento da parte não ordenada',
            'Aumenta a parte ordenada e diminui a não ordenada',
            'Repete até todo o array estar ordenado'
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-start gap-2 mb-3 last:mb-0"
            >
              <span className={`font-bold text-lg ${
                isDark ? 'text-primary-400' : 'text-primary-600'
              }`}>•</span>
              <p>{step}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Visualização */}
      <section>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Visualização
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
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
            data={[100, 10, 80, 30, 50, 60, 40, 70, 20 , 90]}
            speed={speed}
          />
        </motion.div>
      </section>

      {/* Implementação */}
      <section>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Implementação
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <CodeEditor
            initialCode={`#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída

// Função de ordenação Selection Sort
void selectionSort(int arr[], int n) {
    int i, j, minIdx, temp;  // Declara variáveis auxiliares para o loop e a troca de elementos

    // Loop que percorre todo o array
    for (i = 0; i < n - 1; i++) {
        minIdx = i;  // Inicializa o índice do menor elemento como o atual

        // Loop para encontrar o menor elemento no restante do array
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;  // Atualiza o índice do menor elemento
            }
        }

        // Troca o menor elemento encontrado com o elemento atual
        if (minIdx != i) {
            temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
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
}`}
            language="c"
          />
        </motion.div>
      </section>
      
      {/* Análise de Complexidade */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Complexidade */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h3 className={`text-xl font-semibold mb-4 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Complexidade
          </h3>
          <table className="min-w-full">
            <tbody>
              {[
                ['Melhor caso:', 'O(n²)'],
                ['Caso médio:', 'O(n²)'],
                ['Pior caso:', 'O(n²)'],
                ['Espaço:', 'O(1)']
              ].map(([label, value]) => (
                <tr key={label}>
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
        </motion.div>

        {/* Características */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h3 className={`text-xl font-semibold mb-4 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Características
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className={`font-semibold mb-2 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                Vantagens
              </h4>
              <ul className="space-y-2">
                {[
                  'Simples de implementar',
                  'Bom para arrays pequenos',
                  'Número mínimo de trocas (O(n))',
                  'Performance previsível'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`flex items-center gap-2 ${
                      isDark ? 'text-green-300' : 'text-green-700'
                    }`}
                  >
                    <span>•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${
                isDark ? 'text-red-400' : 'text-red-600'
              }`}>
                Desvantagens
              </h4>
              <ul className="space-y-2">
                {[
                  'Ineficiente para arrays grandes',
                  'Tempo quadrático em todos os casos',
                  'Não é estável',
                  'Não adaptativo'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`flex items-center gap-2 ${
                      isDark ? 'text-red-300' : 'text-red-700'
                    }`}
                  >
                    <span>•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Comparação com Bubble Sort */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mt-8 rounded-lg shadow-md border ${
          isDark 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}
      >
        <h3 className={`p-6 border-b text-xl font-semibold flex items-center gap-3 ${
          isDark 
            ? 'text-white border-gray-700' 
            : 'text-gray-900 border-gray-200'
        }`}>
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Comparação com Bubble Sort
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className={isDark ? 'bg-gray-900' : 'bg-gray-50'}>
              <tr>
                {['Aspecto', 'Selection Sort', 'Bubble Sort'].map((header) => (
                  <th
                    key={header}
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDark ? 'text-gray-300' : 'text-gray-500'
                    }`}
                  >
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
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {[aspect, selection, bubble].map((cell, i) => (
                    <td
                      key={i}
                      className={`px-6 py-4 text-sm whitespace-nowrap ${
                        isDark ? 'text-gray-300' : 'text-gray-900'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Exercícios */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mt-8 rounded-lg shadow-md p-6 border ${
          isDark 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}
      >
        <h3 className={`text-xl font-semibold mb-4 flex items-center gap-3 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Exercícios
        </h3>
        <ol className="space-y-4">
          {[
            'Implemente uma versão do Selection Sort que ordene em ordem decrescente.',
            'Modifique o algoritmo para contar o número de comparações e trocas realizadas.',
            'Crie uma versão que encontre o maior elemento em vez do menor e o coloque no final do array.',
            'Implemente uma versão que ordene apenas os números pares do array, mantendo os ímpares em suas posições originais.'
          ].map((exercise, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`flex items-start gap-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              <span className="font-semibold">{index + 1}.</span>
              <span>{exercise}</span>
            </motion.li>
          ))}
        </ol>
      </motion.div>
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