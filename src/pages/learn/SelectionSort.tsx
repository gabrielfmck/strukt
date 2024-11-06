// src/pages/learn/SelectionSort.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CodeEditor from '../../components/learning/CodeEditor';

const SelectionSort = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Selection Sort</h1>
            <span className="text-sm text-gray-500">Duração: 15 min</span>
          </div>

          {/* Conteúdo */}
          <div className="prose max-w-none mb-8">
            <h2>O que é Selection Sort?</h2>
            <p>
              Selection Sort é um algoritmo de ordenação que divide o array em uma parte 
              ordenada e outra não ordenada, selecionando repetidamente o menor elemento
              da parte não ordenada e o colocando no final da parte ordenada.
            </p>

            <h3>Implementação</h3>
            <CodeEditor
              initialCode={`void selectionSort(int arr[], int n) {
    int i, j, min_idx;
    
    for (i = 0; i < n-1; i++) {
        // Encontra o menor elemento no array não ordenado
        min_idx = i;
        for (j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }
        
        // Troca o elemento encontrado com o primeiro elemento
        if (min_idx != i) {
            int temp = arr[i];
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
        }
    }
}`}
              language="c"
            />

            <h3>Complexidade</h3>
            <ul>
              <li>Tempo: O(n²) em todos os casos</li>
              <li>Espaço: O(1)</li>
            </ul>

            <h3>Vantagens e Desvantagens</h3>
            <h4>Vantagens:</h4>
            <ul>
              <li>Simples de implementar</li>
              <li>Funciona bem para arrays pequenos</li>
              <li>Número mínimo de trocas (O(n))</li>
            </ul>

            <h4>Desvantagens:</h4>
            <ul>
              <li>Ineficiente para arrays grandes</li>
              <li>Tempo quadrático em todos os casos</li>
              <li>Não é estável</li>
            </ul>
          </div>

          {/* Navegação */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link
              to="/learn/bubble-sort"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Aula Anterior
            </Link>
            <Link
              to="/learn/quick-sort"
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

export default SelectionSort;