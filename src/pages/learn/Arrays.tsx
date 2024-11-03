// src/pages/learn/Arrays.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CodeEditor from '../../components/learning/CodeEditor';

const Arrays = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Arrays e Vetores</h1>
            <span className="text-sm text-gray-500">Duração: 15 min</span>
          </div>

          {/* Conteúdo */}
          <div className="prose max-w-none mb-8">
            <h2>O que são Arrays?</h2>
            <p>
              Arrays são estruturas de dados que armazenam elementos do mesmo tipo em sequência.
              Cada elemento pode ser acessado através de um índice numérico.
            </p>

            <h3>Declaração e Inicialização</h3>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-100">
{`// Em C
int numeros[5] = {1, 2, 3, 4, 5};
char texto[6] = "Hello";

// Acessando elementos
printf("%d", numeros[0]);  // Imprime: 1
printf("%c", texto[0]);    // Imprime: H`}
              </code>
            </pre>

            <h3>Operações Comuns</h3>
            <h4>1. Inserção em Array</h4>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-100">
{`void inserir(int arr[], int n, int elemento, int posicao) {
    // Move elementos para abrir espaço
    for(int i = n; i > posicao; i--) {
        arr[i] = arr[i-1];
    }
    // Insere o elemento
    arr[posicao] = elemento;
}`}
              </code>
            </pre>

            <h4>2. Remoção de Elemento</h4>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-100">
{`void remover(int arr[], int n, int posicao) {
    // Move elementos para preencher o espaço
    for(int i = posicao; i < n-1; i++) {
        arr[i] = arr[i+1];
    }
}`}
              </code>
            </pre>

            <h3>Vantagens e Desvantagens</h3>
            <h4>Vantagens:</h4>
            <ul>
              <li>Acesso rápido a elementos (O(1))</li>
              <li>Uso eficiente de memória</li>
              <li>Fácil de percorrer sequencialmente</li>
            </ul>

            <h4>Desvantagens:</h4>
            <ul>
              <li>Tamanho fixo (em C)</li>
              <li>Inserção e remoção podem ser custosas</li>
              <li>Desperdício de memória se não utilizar todo o espaço</li>
            </ul>

            <h3>Exercício Prático</h3>
            <p>Implemente uma função que inverte um array:</p>
            <CodeEditor
              initialCode={`void inverterArray(int arr[], int n) {
    // Seu código aqui
}`}
              language="c"
            />
          </div>

          {/* Navegação */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link
              to="/learn/control-structures"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Aula Anterior
            </Link>
            <Link
              to="/learn/linked-lists"
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

export default Arrays;