// src\pages\learn\QuickSort.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import VisualizationPanel from '../../components/learning/VisualizationPanel';
import { useTheme } from '../../contexts/theme/ThemeContext';

const QuickSort = () => {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
          O que é Quick Sort?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Quick Sort é um algoritmo de ordenação eficiente que usa a estratégia de divisão
          e conquista. Ele escolhe um elemento como pivô e particiona o array ao redor
          deste pivô, repetindo o processo recursivamente nas partições resultantes.
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
            {
              title: 'Escolha do Pivô',
              desc: 'Seleciona um elemento como pivô (geralmente o último)'
            },
            {
              title: 'Particionamento',
              desc: 'Rearranja o array de forma que elementos menores que o pivô fiquem à esquerda e maiores à direita'
            },
            {
              title: 'Recursão',
              desc: 'Aplica o mesmo processo recursivamente nas duas partições criadas'
            },
            {
              title: 'Combinação',
              desc: 'As subpartes já estarão ordenadas naturalmente após o processo'
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-start mb-4 last:mb-0"
            >
              <span className={`font-bold text-lg ${
                isDark ? 'text-primary-400' : 'text-primary-600'
              }`}>•</span>
              <div className="ml-3">
                <h4 className={`font-medium ${
                  isDark ? 'text-primary-300' : 'text-primary-700'
                }`}>
                  {step.title}
                </h4>
                <p className="mt-1">{step.desc}</p>
              </div>
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
            algorithm="quick"
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

// Função para trocar dois elementos do array
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Função para dividir o array em duas partes e retornar o índice do pivô
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // Escolhe o último elemento como pivô
    int i = low - 1;        // Índice do menor elemento

    for (int j = low; j < high; j++) {
        // Se o elemento atual é menor ou igual ao pivô
        if (arr[j] <= pivot) {
            i++;           // Incrementa o índice do menor elemento
            swap(&arr[i], &arr[j]);  // Troca os elementos
        }
    }
    swap(&arr[i + 1], &arr[high]);  // Coloca o pivô na posição correta
    return i + 1;  // Retorna o índice do pivô
}

// Função principal do Quick Sort
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // 'pi' é o índice do pivô, e o array é dividido em duas partes
        int pi = partition(arr, low, high);

        // Ordena os elementos antes e depois do pivô
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
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

    // Chama a função quickSort para ordenar o array
    quickSort(arr, 0, n - 1);

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
                ['Melhor caso:', 'O(n log n)'],
                ['Caso médio:', 'O(n log n)'],
                ['Pior caso:', 'O(n²)'],
                ['Espaço:', 'O(log n)']
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
            Nota: O pior caso O(n²) ocorre quando o pivô é sempre o menor ou maior elemento,
            mas isso é raro em arrays aleatórios.
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
                  'Eficiente na média',
                  'In-place (pouca memória extra)',
                  'Cache-friendly',
                  'Paralelizável'
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
                  'Pior caso O(n²)',
                  'Não é estável',
                  'Sensível à escolha do pivô',
                  'Recursivo (usa pilha)'
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

      {/* Otimizações */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mt-8 rounded-lg p-6 border-l-4 ${
          isDark 
            ? 'bg-yellow-900/20 border-yellow-500 text-yellow-200'
            : 'bg-yellow-50 border-yellow-500 text-yellow-700'
        }`}
      >
        <h3 className={`text-xl font-semibold mb-4 flex items-center gap-3 ${
          isDark ? 'text-yellow-300' : 'text-yellow-800'
        }`}>
          <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Otimizações Comuns
        </h3>
        <ul className="space-y-4">
          {[
            {
              title: 'Mediana de Três',
              desc: 'Escolhe o pivô como a mediana entre primeiro, meio e último elemento, reduzindo a chance do pior caso.'
            },
            {
              title: 'Insertion Sort para Partições Pequenas',
              desc: 'Usa Insertion Sort para partições menores que um certo limiar (geralmente 10-20 elementos).'
            },
            {
              title: 'Particionamento de Três Vias',
              desc: 'Lida melhor com arrays que têm muitos elementos duplicados, dividindo em três partes: menor, igual e maior que o pivô.'
            },
            {
              title: 'Iterativo em vez de Recursivo',
              desc: 'Implementação iterativa usando uma pilha explícita para evitar overflow da pilha de recursão.'
            }
          ].map((opt, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-start gap-2"
            >
              <span className="font-bold text-lg">•</span>
              <div>
                <h4 className={`font-semibold ${
                  isDark ? 'text-yellow-300' : 'text-yellow-700'
                }`}>
                  {opt.title}
                </h4>
                <p className="mt-1">{opt.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Comparação com Outros Algoritmos */}
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
          Comparação com Outros Algoritmos
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className={isDark ? 'bg-gray-900' : 'bg-gray-50'}>
              <tr>
                {['Aspecto', 'Quick Sort', 'Merge Sort', 'Heap Sort'].map((header) => (
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
                ['Melhor/Médio', 'O(n log n)', 'O(n log n)', 'O(n log n)'],
                ['Pior caso', 'O(n²)', 'O(n log n)', 'O(n log n)'],
                ['Espaço', 'O(log n)', 'O(n)', 'O(1)'],
                ['Estável', 'Não', 'Sim', 'Não']
              ].map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {row.map((cell, i) => (
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
            'Implemente o Quick Sort usando a estratégia de "Mediana de Três" para seleção do pivô.',
            'Modifique o algoritmo para usar Insertion Sort em partições menores que 10 elementos.',
            'Implemente uma versão iterativa do Quick Sort usando uma pilha explícita.',
            'Crie uma versão do Quick Sort que ordene strings em ordem alfabética.',
            'Implemente o particionamento de três vias para lidar melhor com elementos duplicados.'
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
      title="Quick Sort"
      content={content}
      duration="30 min"
    />
  );
};

export default QuickSort;