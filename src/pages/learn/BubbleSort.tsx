// src/pages/learn/BubbleSort.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CodeEditor from '../../components/learning/CodeEditor';
import VisualizationPanel from '../../components/learning/VisualizationPanel';

const BubbleSort = () => {
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [speed, setSpeed] = useState(1000);

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 8 }, () => 
      Math.floor(Math.random() * 100)
    );
    setArray(newArray);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* Cabeçalho */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Bubble Sort</h1>
            <span className="text-sm text-gray-500">Duração: 15 min</span>
          </div>

          {/* Conteúdo */}
          <div className="prose max-w-none mb-8">
            <h2>O que é Bubble Sort?</h2>
            <p>
              Bubble Sort é um algoritmo de ordenação simples que compara repetidamente
              pares de elementos adjacentes e os troca se estiverem na ordem errada.
              O algoritmo percorre a lista várias vezes até que nenhuma troca seja necessária.
            </p>

            <h3>Visualização</h3>
            <div className="my-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold">Demonstração Interativa</h4>
                <button
                  onClick={generateRandomArray}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 transition-colors"
                >
                  Gerar Novo Array
                </button>
              </div>
              <VisualizationPanel
                algorithm="bubble"
                data={array}
                speed={speed}
              />
              <div className="flex items-center mt-4">
                <span className="text-sm text-gray-600 mr-4">Velocidade:</span>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="100"
                  value={speed}
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  className="w-48"
                />
                <span className="text-sm text-gray-600 ml-4">{speed}ms</span>
              </div>
            </div>

            <h3>Implementação em C</h3>
            <CodeEditor
              initialCode={`void bubbleSort(int arr[], int n) {
    int i, j;
    bool swapped;
    
    for (i = 0; i < n-1; i++) {
        swapped = false;
        // Últimos i elementos já estão no lugar
        for (j = 0; j < n-i-1; j++) {
            // Compara elementos adjacentes
            if (arr[j] > arr[j+1]) {
                // Troca arr[j] e arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        // Se nenhuma troca ocorreu no passe interno
        // o array já está ordenado
        if (!swapped) {
            break;
        }
    }
}`}
              language="c"
            />

            <h3>Análise de Complexidade</h3>
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Complexidade de Tempo</h4>
                <ul className="mt-2 space-y-2">
                  <li>Melhor caso: O(n)</li>
                  <li>Caso médio: O(n²)</li>
                  <li>Pior caso: O(n²)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold">Complexidade de Espaço</h4>
                <p className="mt-2">O(1) - Apenas uma variável auxiliar para troca</p>
              </div>
            </div>

            <h3>Características</h3>
            <div className="grid grid-cols-2 gap-4 my-4">
              <div>
                <h4 className="font-semibold text-green-600">Vantagens</h4>
                <ul className="mt-2 space-y-1">
                  <li>Fácil de implementar</li>
                  <li>Bom para arrays pequenos</li>
                  <li>Estável (mantém ordem de elementos iguais)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600">Desvantagens</h4>
                <ul className="mt-2 space-y-1">
                  <li>Ineficiente para grandes arrays</li>
                  <li>Complexidade quadrática</li>
                  <li>Muitas operações de troca</li>
                </ul>
              </div>
            </div>

            <h3>Exercícios</h3>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <ol className="space-y-4">
                <li>
                  <strong>Exercício 1:</strong> Implemente uma versão do Bubble Sort
                  que conte o número total de trocas realizadas.
                </li>
                <li>
                  <strong>Exercício 2:</strong> Modifique o algoritmo para ordenar
                  em ordem decrescente em vez de crescente.
                </li>
                <li>
                  <strong>Exercício 3:</strong> Implemente uma versão que pare a
                  execução se o array já estiver ordenado.
                </li>
              </ol>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link
              to="/learn/stacks-queues"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Aula Anterior
            </Link>
            <Link
              to="/learn/selection-sort"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Próxima Aula →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BubbleSort;