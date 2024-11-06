// src/pages/learn/QuickSort.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CodeEditor from '../../components/learning/CodeEditor';

const QuickSort = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Quick Sort</h1>
            <span className="text-sm text-gray-500">Duração: 30 min</span>
          </div>

          {/* Conteúdo */}
          <div className="prose max-w-none mb-8">
            <h2>O que é Quick Sort?</h2>
            <p>
              Quick Sort é um algoritmo de ordenação eficiente que usa a estratégia 
              "dividir para conquistar". Ele escolhe um elemento como pivô e particiona
              o array ao redor deste pivô.
            </p>

            <h3>Implementação</h3>
            <CodeEditor
              initialCode={`// Função para trocar dois elementos
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Função para particionar o array
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

// Função principal do QuickSort
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`}
              language="c"
            />

            <h3>Complexidade</h3>
            <ul>
              <li>Tempo (Melhor/Médio): O(n log n)</li>
              <li>Tempo (Pior): O(n²)</li>
              <li>Espaço: O(log n)</li>
            </ul>

            <h3>Vantagens e Desvantagens</h3>
            <h4>Vantagens:</h4>
            <ul>
              <li>Eficiente na média</li>
              <li>Baixo uso de memória</li>
              <li>Bom para grandes conjuntos de dados</li>
            </ul>

            <h4>Desvantagens:</h4>
            <ul>
              <li>Complexidade quadrática no pior caso</li>
              <li>Não é estável</li>
              <li>Recursivo (pode causar stack overflow)</li>
            </ul>
          </div>

          {/* Navegação */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link
              to="/learn/selection-sort"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Aula Anterior
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuickSort;