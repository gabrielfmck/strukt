// src/pages/learn/StacksQueues.tsx
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';

const StacksQueues = () => {
  const content = (
    <div>
      {/* Pilhas (Stacks) */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Pilhas (Stacks)</h2>
        <p className="mb-6">
          Pilhas são estruturas de dados do tipo LIFO (Last In, First Out),
          onde o último elemento inserido é o primeiro a ser removido. Pense em uma
          pilha de pratos: você sempre coloca e retira pratos do topo.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4">Implementação de Pilha</h3>
          <CodeEditor
            initialCode={`#include <stdio.h>
#include <stdlib.h>

// Estrutura do nó
struct Node {
    int data;
    struct Node* next;
};

// Estrutura da pilha
struct Stack {
    struct Node* top;
};

// Criar pilha vazia
struct Stack* createStack() {
    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));
    stack->top = NULL;
    return stack;
}

// Verificar se está vazia
int isEmpty(struct Stack* stack) {
    return stack->top == NULL;
}

// Empilhar (push)
void push(struct Stack* stack, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = stack->top;
    stack->top = newNode;
    printf("%d empilhado\\n", data);
}

// Desempilhar (pop)
int pop(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Pilha vazia\\n");
        return -1;
    }
    struct Node* temp = stack->top;
    int popped = temp->data;
    stack->top = stack->top->next;
    free(temp);
    return popped;
}

// Visualizar topo (peek)
int peek(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Pilha vazia\\n");
        return -1;
    }
    return stack->top->data;
}

// Imprimir pilha
void printStack(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Pilha vazia\\n");
        return;
    }
    struct Node* temp = stack->top;
    printf("Pilha: ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\\n");
}`}
            language="c"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-3">Principais Operações</h4>
            <ul className="space-y-2 text-green-600">
              <li>• push(): Adiciona elemento no topo</li>
              <li>• pop(): Remove elemento do topo</li>
              <li>• peek(): Visualiza elemento do topo</li>
              <li>• isEmpty(): Verifica se está vazia</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-3">Aplicações</h4>
            <ul className="space-y-2 text-blue-600">
              <li>• Desfazer/Refazer em editores</li>
              <li>• Navegação em browsers</li>
              <li>• Avaliação de expressões</li>
              <li>• Chamadas de funções</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Filas (Queues) */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Filas (Queues)</h2>
        <p className="mb-6">
          Filas são estruturas de dados do tipo FIFO (First In, First Out),
          onde o primeiro elemento inserido é o primeiro a ser removido. Similar
          a uma fila de banco: a primeira pessoa a chegar é a primeira a ser atendida.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4">Implementação de Fila</h3>
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
    struct Node *front, *rear;
};

// Criar fila vazia
struct Queue* createQueue() {
    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));
    queue->front = queue->rear = NULL;
    return queue;
}

// Verificar se está vazia
int isEmpty(struct Queue* queue) {
    return queue->front == NULL;
}

// Enfileirar (enqueue)
void enqueue(struct Queue* queue, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;

    if (isEmpty(queue)) {
        queue->front = queue->rear = newNode;
        return;
    }

    queue->rear->next = newNode;
    queue->rear = newNode;
    printf("%d enfileirado\\n", data);
}

// Desenfileirar (dequeue)
int dequeue(struct Queue* queue) {
    if (isEmpty(queue)) {
        printf("Fila vazia\\n");
        return -1;
    }

    struct Node* temp = queue->front;
    int item = temp->data;
    queue->front = queue->front->next;

    if (queue->front == NULL)
        queue->rear = NULL;

    free(temp);
    return item;
}

// Visualizar primeiro elemento
int peek(struct Queue* queue) {
    if (isEmpty(queue)) {
        printf("Fila vazia\\n");
        return -1;
    }
    return queue->front->data;
}

// Imprimir fila
void printQueue(struct Queue* queue) {
    if (isEmpty(queue)) {
        printf("Fila vazia\\n");
        return;
    }
    struct Node* temp = queue->front;
    printf("Fila: ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\\n");
}`}
            language="c"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-semibold text-green-700 mb-3">Principais Operações</h4>
            <ul className="space-y-2 text-green-600">
              <li>• enqueue(): Adiciona elemento no final</li>
              <li>• dequeue(): Remove elemento do início</li>
              <li>• peek(): Visualiza primeiro elemento</li>
              <li>• isEmpty(): Verifica se está vazia</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-3">Aplicações</h4>
            <ul className="space-y-2 text-blue-600">
              <li>• Processos em sistemas operacionais</li>
              <li>• Buffers de impressão</li>
              <li>• Gestão de eventos</li>
              <li>• Simulações</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparação */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Comparação</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Característica</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pilha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fila</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">Ordem de acesso</td>
                <td className="px-6 py-4">LIFO</td>
                <td className="px-6 py-4">FIFO</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Inserção</td>
                <td className="px-6 py-4">push (topo)</td>
                <td className="px-6 py-4">enqueue (final)</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Remoção</td>
                <td className="px-6 py-4">pop (topo)</td>
                <td className="px-6 py-4">dequeue (início)</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Complexidade</td>
                <td className="px-6 py-4">O(1) todas operações</td>
                <td className="px-6 py-4">O(1) todas operações</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Dicas */}
      <div className="bg-yellow-50 p-6 rounded-lg mt-8 border-l-4 border-yellow-500">
        <h4 className="text-lg font-semibold text-yellow-800 mb-4">Dicas de Implementação</h4>
        <ul className="space-y-3 text-yellow-700">
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Sempre verifique se a estrutura está vazia antes de remover elementos</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Mantenha referências tanto para o início quanto para o fim em filas</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Libere a memória corretamente ao remover elementos</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Considere usar arrays circulares para implementações mais eficientes</span>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <ContentPage
      title="Pilhas e Filas"
      content={content}
      duration="25 min"
    />
  );
};

export default StacksQueues;