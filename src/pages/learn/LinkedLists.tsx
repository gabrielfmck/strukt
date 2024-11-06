// src/pages/learn/LinkedLists.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CodeEditor from '../../components/learning/CodeEditor';

const LinkedLists = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Listas Ligadas</h1>
            <span className="text-sm text-gray-500">Duração: 20 min</span>
          </div>

          {/* Conteúdo */}
          <div className="prose max-w-none mb-8">
            <h2>O que são Listas Ligadas?</h2>
            <p>
              Listas ligadas são estruturas de dados dinâmicas onde cada elemento (nó)  
              contém um valor e uma referência para o próximo elemento da lista.
            </p>

            <h3>Estrutura Básica</h3>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-100">
{`struct Node {
    int data;           // Dado armazenado
    struct Node* next;  // Ponteiro para próximo nó
};`}
              </code>
            </pre>

            <h3>Implementação</h3>
            <CodeEditor
              initialCode={`struct Node {
    int data;
    struct Node* next;
};

// Criar novo nó
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Inserir no início
struct Node* insertAtBegin(struct Node* head, int data) {
    struct Node* newNode = createNode(data);
    newNode->next = head;
    return newNode;
}

// Imprimir lista
void printList(struct Node* head) {
    struct Node* temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}`}
              language="c"
            />

            <h3>Operações Principais</h3>
            <ul>
              <li>Inserção no início: O(1)</li>
              <li>Inserção no final: O(n)</li>
              <li>Remoção: O(1) ou O(n)</li>
              <li>Busca: O(n)</li>
            </ul>

            <h3>Vantagens e Desvantagens</h3>
            <h4>Vantagens:</h4>
            <ul>
              <li>Tamanho dinâmico</li>
              <li>Inserção e remoção eficientes no início</li>
              <li>Memória alocada conforme necessário</li>
            </ul>

            <h4>Desvantagens:</h4>
            <ul>
              <li>Acesso não sequencial</li>
              <li>Memória extra para ponteiros</li>
              <li>Não tem acesso direto aos elementos</li>
            </ul>
          </div>

          {/* Navegação */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link
              to="/learn/arrays"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Aula Anterior
            </Link>
            <Link
              to="/learn/stacks-queues"
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

export default LinkedLists;