import { motion } from 'framer-motion';
import { useState } from 'react';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import VisualizationPanel from '../../components/learning/VisualizationPanel';
import { useTheme } from '../../contexts/theme/ThemeContext';

const BubbleSort = () => {
  const [speed, setSpeed] = useState(1000);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getSpeedLabel = (value: number) => {
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          O que é Bubble Sort?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Bubble Sort é um algoritmo de ordenação simples que percorre repetidamente
          a lista, compara elementos adjacentes e os troca se estiverem na ordem errada.
          O algoritmo recebe esse nome porque elementos "flutuam" como bolhas para suas posições corretas.
        </motion.p>
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
            algorithm="bubble"
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

// Função de ordenação Bubble Sort
void bubbleSort(int arr[], int n) {
    int i, j, temp;      // Declara variáveis auxiliares para o loop e troca de elementos
    int swapped;         // Variável para indicar se uma troca foi feita

    // Loop externo que percorre todo o array
    for (i = 0; i < n - 1; i++) {
        swapped = 0;  // Define 'swapped' como 0 antes de cada iteração

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
    int arr[] = {100, 10, 80, 30, 50, 60, 40, 70, 20 , 90};
    int n = sizeof(arr) / sizeof(arr[0]);  // Calcula o tamanho do array

    // Imprime o array original
    printf("Array original: ");
    printArray(arr, n);

    // Chama a função bubbleSort para ordenar o array
    bubbleSort(arr, n);

    // Imprime o array ordenado
    printf("Array ordenado: | ");
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
                ['Melhor caso:', 'O(n)'],
                ['Caso médio:', 'O(n²)'],
                ['Pior caso:', 'O(n²)'],
                ['Espaço:', 'O(1)']
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className={`py-2 font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-900'
                  }`}>{label}</td>
                  <td className="py-2 font-mono text-primary-500">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={`mt-4 text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            O melhor caso O(n) ocorre quando o array já está ordenado e a flag
            de otimização é usada.
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
              <ul className={`space-y-2 ${
                isDark ? 'text-green-300' : 'text-green-700'
              }`}>
                {[
                  'Fácil de implementar',
                  'Bom para arrays pequenos',
                  'Estável (mantém ordem de elementos iguais)',
                  'In-place (não usa memória extra)'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2"
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
              <ul className={`space-y-2 ${
                isDark ? 'text-red-300' : 'text-red-700'
              }`}>
                {[
                  'Ineficiente para arrays grandes',
                  'Complexidade quadrática',
                  'Muitas operações de troca'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-2"
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
            ? 'bg-primary-900/20 border-primary-500 text-primary-200'
            : 'bg-primary-50 border-primary-500 text-primary-800'
        }`}
      >
        <h3 className={`text-xl font-semibold mb-4 flex items-center gap-3 ${
          isDark ? 'text-primary-300' : 'text-primary-800'
        }`}>
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Otimizações Possíveis
        </h3>
        <ul className="space-y-4">
          {[
            {
              title: 'Flag de troca:',
              desc: 'Adicionar uma flag que indica se houve trocas no último passe. Se não houve trocas, o array já está ordenado.'
            },
            {
              title: 'Limite de comparações:',
              desc: 'Reduzir o número de comparações a cada passe, já que os últimos elementos já estão ordenados.'
            },
            {
              title: 'Bubble Sort bidirecional:',
              desc: 'Também conhecido como Cocktail Sort, percorre o array em ambas as direções, reduzindo o número de passes necessários.'
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
                <strong className={isDark ? 'text-primary-300' : 'text-primary-700'}>
                  {opt.title}
                </strong>
                <p className={`mt-1 ${isDark ? 'text-primary-200' : 'text-primary-600'}`}>
                  {opt.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
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
            'Implemente uma versão do Bubble Sort que conte o número total de trocas realizadas.',
            'Modifique o algoritmo para ordenar em ordem decrescente em vez de crescente.',
            'Implemente a versão bidirecional (Cocktail Sort) e compare sua eficiência.',
            'Crie uma função que verifica se um array está ordenado usando o conceito do Bubble Sort (comparações adjacentes).'
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
      title="Bubble Sort"
      content={content}
      duration="15 min"
    />
  );
};

export default BubbleSort;