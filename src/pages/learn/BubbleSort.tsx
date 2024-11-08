// src/pages/learn/BubbleSort.tsx

import { useState } from 'react';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import VisualizationPanel from '../../components/learning/VisualizationPanel';

const BubbleSort = () => {
  const [speed, setSpeed] = useState(1000);

  const getSpeedLabel = (value: number) => {
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

      {/* Implementação */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Implementação</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <CodeEditor
            initialCode={`#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    int swapped;  // Flag para otimização
    
    for (i = 0; i < n - 1; i++) {
        swapped = 0;  // Inicializa flag
        
        // Últimas i posições já estão ordenadas
        for (j = 0; j < n - i - 1; j++) {
            // Compara elementos adjacentes
            if (arr[j] > arr[j + 1]) {
                // Troca elementos se estiverem na ordem errada
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;  // Marca que houve troca
            }
        }
        
        // Se nenhuma troca ocorreu no passe, array está ordenado
        if (swapped == 0)
            break;
    }
}

// Função para imprimir o array
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
    
    bubbleSort(arr, n);
    
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
                <td className="py-2 font-mono text-primary-600">O(n)</td>
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
            O melhor caso O(n) ocorre quando o array já está ordenado e a flag
            de otimização é usada.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Características</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Vantagens</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Fácil de implementar</li>
                <li>Bom para arrays pequenos</li>
                <li>Estável (mantém ordem de elementos iguais)</li>
                <li>In-place (não usa memória extra)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">Desvantagens</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Ineficiente para arrays grandes</li>
                <li>Complexidade quadrática</li>
                <li>Muitas operações de troca</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Otimizações */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Otimizações Possíveis</h3>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="font-bold text-blue-600 mr-2">1.</span>
              <div>
                <strong className="text-blue-700">Flag de troca:</strong>
                <p className="text-blue-600">
                  Adicionar uma flag que indica se houve trocas no último passe.
                  Se não houve trocas, o array já está ordenado.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-blue-600 mr-2">2.</span>
              <div>
                <strong className="text-blue-700">Limite de comparações:</strong>
                <p className="text-blue-600">
                  Reduzir o número de comparações a cada passe, já que os últimos
                  elementos já estão ordenados.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-blue-600 mr-2">3.</span>
              <div>
                <strong className="text-blue-700">Bubble Sort bidirecional:</strong>
                <p className="text-blue-600">
                  Também conhecido como Cocktail Sort, percorre o array em ambas as
                  direções, reduzindo o número de passes necessários.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Exercícios */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Exercícios</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ol className="list-decimal list-inside space-y-4">
            <li className="text-gray-700">
              Implemente uma versão do Bubble Sort que conte o número total de trocas realizadas.
            </li>
            <li className="text-gray-700">
              Modifique o algoritmo para ordenar em ordem decrescente em vez de crescente.
            </li>
            <li className="text-gray-700">
              Implemente a versão bidirecional (Cocktail Sort) e compare sua eficiência.
            </li>
            <li className="text-gray-700">
              Crie uma função que verifica se um array está ordenado usando o conceito
              do Bubble Sort (comparações adjacentes).
            </li>
          </ol>
        </div>
      </div>
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
