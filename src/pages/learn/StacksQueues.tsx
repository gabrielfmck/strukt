// src/pages/learn/StacksQueues.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CodeEditor from '../../components/learning/CodeEditor';

const StacksQueues = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Pilhas e Filas</h1>
            <span className="text-sm text-gray-500">Duração: 25 min</span>
          </div>

          {/* Conteúdo */}
          <div className="prose max-w-none mb-8">
            <h2>Pilhas (Stacks)</h2>
            <p>
              Pilhas são estruturas de dados do tipo LIFO (Last In, First Out),
              onde o último elemento inserido é o primeiro a ser removido.
            </p>

            <h3>Implementação de Pilha</h3>
            <CodeEditor
              initialCode={`#include <stdio.h>
#include <stdlib.h>

// Estrutura do nó
struct Node {
    int data;
    struct Node* next;
};

// Função para empilhar (push)
struct Node* push(struct Node* top, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = top;
    return newNode;
}

// Função para desempilhar (pop)
struct Node* pop(struct Node* top) {
    if (top == NULL) {
        printf("A pilha está vazia.");
        return NULL;
    }
    struct Node* temp = top;
    top = top->next;
    free(temp);
    return top;
}

// Função para imprimir a pilha
void printStack(struct Node* top) {
    while (top != NULL) {
        printf("%d -> ", top->data);
        top = top->next;
    }
    printf("NULL");
}

// Função principal para teste
int main() {
    struct Node* top = NULL;

    // Empilhar elementos
    top = push(top, 10);
    top = push(top, 20);
    top = push(top, 30);

    // Imprimir a pilha
    printf("Pilha atual: ");
    printStack(top);

    // Desempilhar um elemento
    top = pop(top);
    printf("Pilha após pop: ");
    printStack(top);

    return 0;
}
`}
              language="c"
            />

            <h2>Filas (Queues)</h2>
            <p>
              Filas são estruturas de dados do tipo FIFO (First In, First Out),
              onde o primeiro elemento inserido é o primeiro a ser removido.
            </p>

            <h3>Implementação de Fila</h3>
            <CodeEditor
              initialCode={`#include <stdio.h>
#include <stdlib.h>

// Estrutura do nó
struct Node {
    int data;
    struct Node* next;
};

// Estrutura da fila
struct Queue {
    struct Node* front;
    struct Node* rear;
};

// Função para criar uma fila vazia
struct Queue* createQueue() {
    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));
    queue->front = queue->rear = NULL;
    return queue;
}

// Função para enfileirar (enqueue)
void enqueue(struct Queue* queue, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    if (queue->rear == NULL) {
        queue->front = queue->rear = newNode;
        return;
    }
    queue->rear->next = newNode;
    queue->rear = newNode;
}

// Função para desenfileirar (dequeue)
void dequeue(struct Queue* queue) {
    if (queue->front == NULL) {
        printf("A fila está vazia.");
        return;
    }
    struct Node* temp = queue->front;
    queue->front = queue->front->next;
    if (queue->front == NULL) queue->rear = NULL;
    free(temp);
}

// Função para imprimir a fila
void printQueue(struct Queue* queue) {
    struct Node* temp = queue->front;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL");
}

// Função principal para teste
int main() {
    struct Queue* queue = createQueue();

    // Enfileirar elementos
    enqueue(queue, 10);
    enqueue(queue, 20);
    enqueue(queue, 30);

    // Imprimir a fila
    printf("Fila atual: ");
    printQueue(queue);

    // Desenfileirar um elemento
    dequeue(queue);
    printf("Fila após dequeue: ");
    printQueue(queue);

    return 0;
}
`}
              language="c"
            />

            <h3>Comparação entre Pilhas e Filas</h3>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Característica</th>
                  <th className="px-4 py-2">Pilha</th>
                  <th className="px-4 py-2">Fila</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Ordem de acesso</td>
                  <td className="border px-4 py-2">LIFO</td>
                  <td className="border px-4 py-2">FIFO</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Inserção</td>
                  <td className="border px-4 py-2">push (topo)</td>
                  <td className="border px-4 py-2">enqueue (final)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Remoção</td>
                  <td className="border px-4 py-2">pop (topo)</td>
                  <td className="border px-4 py-2">dequeue (início)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Navegação */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link
              to="/learn/linked-lists"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Aula Anterior
            </Link>
            <Link
              to="/learn/bubble-sort"
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

export default StacksQueues;