// src/pages/DataStructures.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../components/learning/CodeEditor';

const dataStructures = [
  {
    id: 'array',
    name: 'Arrays',
    description: 'Uma estrutura de dados que armazena uma coleção de elementos em um bloco contíguo de memória.',
    operations: [
      { name: 'Acesso', complexity: 'O(1)' },
      { name: 'Inserção', complexity: 'O(n)' },
      { name: 'Remoção', complexity: 'O(n)' },
      { name: 'Busca', complexity: 'O(n)' },
    ],
    initialCode: `// Exemplo de operações com Array
const array = [];

// Inserção
array.push(1);     // Adiciona ao final
array.unshift(0);  // Adiciona ao início

// Acesso
const elemento = array[0];

// Remoção
array.pop();       // Remove do final
array.shift();     // Remove do início

// Busca
const indice = array.indexOf(1);`,
  },
  {
    id: 'linkedList',
    name: 'Lista Ligada',
    description: 'Uma estrutura de dados linear onde cada elemento aponta para o próximo elemento na sequência.',
    operations: [
      { name: 'Acesso', complexity: 'O(n)' },
      { name: 'Inserção no início', complexity: 'O(1)' },
      { name: 'Remoção do início', complexity: 'O(1)' },
      { name: 'Busca', complexity: 'O(n)' },
    ],
    initialCode: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Inserir no início
  insertFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Remover do início
  removeFirst() {
    if (!this.head) return null;
    const removed = this.head;
    this.head = this.head.next;
    return removed.data;
  }
}`,
  },
  {
    id: 'stack',
    name: 'Pilha',
    description: 'Uma estrutura de dados LIFO (Last In, First Out) onde elementos são inseridos e removidos do topo.',
    operations: [
      { name: 'Push (Inserção)', complexity: 'O(1)' },
      { name: 'Pop (Remoção)', complexity: 'O(1)' },
      { name: 'Peek (Visualizar Topo)', complexity: 'O(1)' },
      { name: 'Busca', complexity: 'O(n)' },
    ],
    initialCode: `class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}`,
  },
  {
    id: 'queue',
    name: 'Fila',
    description: 'Uma estrutura de dados FIFO (First In, First Out) onde elementos são inseridos no final e removidos do início.',
    operations: [
      { name: 'Enqueue (Inserção)', complexity: 'O(1)' },
      { name: 'Dequeue (Remoção)', complexity: 'O(1)' },
      { name: 'Front (Primeiro)', complexity: 'O(1)' },
      { name: 'Busca', complexity: 'O(n)' },
    ],
    initialCode: `class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}`,
  },
];

const DataStructures = () => {
  const [selectedStructure, setSelectedStructure] = useState(dataStructures[0]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Estruturas de Dados
          </h1>
          <p className="text-xl text-gray-600">
            Aprenda as principais estruturas de dados e suas implementações
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Estruturas Disponíveis
                </h2>
                <nav className="space-y-2">
                  {dataStructures.map((structure) => (
                    <button
                      key={structure.id}
                      onClick={() => setSelectedStructure(structure)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedStructure.id === structure.id
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <h3 className="font-medium">{structure.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Clique para ver mais detalhes
                      </p>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Área principal */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              key={selectedStructure.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedStructure.name}
              </h2>
              <p className="text-gray-600 mb-6">
                {selectedStructure.description}
              </p>

              {/* Tabela de complexidade */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Complexidade das Operações
                </h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Operação
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Complexidade
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedStructure.operations.map((operation) => (
                        <tr key={operation.name}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {operation.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {operation.complexity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Editor de código */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Implementação
                </h3>
                <CodeEditor
  initialCode={selectedStructure.initialCode}
  language="c"
  onCodeChange={(code: string) => {
    console.log('Código atualizado:', code);
  }}
/>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStructures;