// src/pages/learn/StacksQueues.tsx
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import { useTheme } from '../../contexts/theme/ThemeContext';

const StacksQueues = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getCardClasses = (type: 'green' | 'blue') => {
    const baseClasses = 'p-6 rounded-lg transition-colors duration-200';
    if (type === 'green') {
      return `${baseClasses} ${
        isDark 
          ? 'bg-green-900/20 hover:bg-green-900/30 text-green-300' 
          : 'bg-green-50 hover:bg-green-100 text-green-600'
      }`;
    }
    return `${baseClasses} ${
      isDark 
        ? 'bg-blue-900/20 hover:bg-blue-900/30 text-blue-300' 
        : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
    }`;
  };

  const content = (
    <div>
      {/* Pilhas (Stacks) */}
      <section>
        <h2 className={`text-2xl font-bold mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Pilhas (Stacks)
        </h2>
        <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Pilhas são estruturas de dados do tipo LIFO (Last In, First Out),
          onde o último elemento inserido é o primeiro a ser removido. Pense em uma
          pilha de pratos: você sempre coloca e retira pratos do topo.
        </p>

        <div className={`p-6 rounded-lg mb-8 transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        }`}>
          <h3 className={`text-xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Implementação de Pilha
          </h3>
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
          <div className={getCardClasses('green')}>
            <h4 className={`font-semibold mb-3 ${
              isDark ? 'text-green-400' : 'text-green-700'
            }`}>
              Principais Operações
            </h4>
            <ul className="space-y-2">
              <li>• push(): Adiciona elemento no topo</li>
              <li>• pop(): Remove elemento do topo</li>
              <li>• peek(): Visualiza elemento do topo</li>
              <li>• isEmpty(): Verifica se está vazia</li>
            </ul>
          </div>
          <div className={getCardClasses('blue')}>
            <h4 className={`font-semibold mb-3 ${
              isDark ? 'text-blue-400' : 'text-blue-700'
            }`}>
              Aplicações
            </h4>
            <ul className="space-y-2">
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
        <h2 className={`text-2xl font-bold mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Filas (Queues)
        </h2>
        <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Filas são estruturas de dados do tipo FIFO (First In, First Out),
          onde o primeiro elemento inserido é o primeiro a ser removido. Similar
          a uma fila de banco: a primeira pessoa a chegar é a primeira a ser atendida.
        </p>

        <div className={`p-6 rounded-lg mb-8 transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        }`}>
          <h3 className={`text-xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Implementação de Fila
          </h3>
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
          <div className={getCardClasses('green')}>
            <h4 className={`font-semibold mb-3 ${
              isDark ? 'text-green-400' : 'text-green-700'
            }`}>
              Principais Operações
            </h4>
            <ul className="space-y-2">
              <li>• enqueue(): Adiciona elemento no final</li>
              <li>• dequeue(): Remove elemento do início</li>
              <li>• peek(): Visualiza primeiro elemento</li>
              <li>• isEmpty(): Verifica se está vazia</li>
            </ul>
          </div>
          <div className={getCardClasses('blue')}>
            <h4 className={`font-semibold mb-3 ${
              isDark ? 'text-blue-400' : 'text-blue-700'
            }`}>
              Aplicações
            </h4>
            <ul className="space-y-2">
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
        <h2 className={`text-2xl font-bold mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Comparação
        </h2>
        <div className="overflow-x-auto rounded-lg">
          <table className={`min-w-full overflow-hidden shadow-lg ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <thead className={isDark ? 'bg-gray-900' : 'bg-gray-50'}>
              <tr>
                {['Característica', 'Pilha', 'Fila'].map((header) => (
                  <th key={header} className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                    isDark ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`divide-y ${
              isDark ? 'divide-gray-700' : 'divide-gray-200'
            }`}>
              {[
                ['Ordem de acesso', 'LIFO', 'FIFO'],
                ['Inserção', 'push (topo)', 'enqueue (final)'],
                ['Remoção', 'pop (topo)', 'dequeue (início)'],
                ['Complexidade', 'O(1) todas operações', 'O(1) todas operações']
              ].map(([prop, stack, queue], index) => (
                <tr key={index}>
                  {[prop, stack, queue].map((cell, i) => (
                    <td key={i} className={`px-6 py-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-900'
                    }`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Dicas */}
      <div className={`p-6 rounded-lg mt-8 border-l-4 ${
        isDark 
          ? 'bg-yellow-900/20 border-yellow-500 text-yellow-300' 
          : 'bg-yellow-50 border-yellow-500 text-yellow-700'
      }`}>
        <h4 className={`text-lg font-semibold mb-4 ${
          isDark ? 'text-yellow-300' : 'text-yellow-800'
        }`}>
          Dicas de Implementação
        </h4>
        <ul className="space-y-3">
          {[
            'Sempre verifique se a estrutura está vazia antes de remover elementos',
            'Mantenha referências tanto para o início quanto para o fim em filas',
            'Libere a memória corretamente ao remover elementos',
            'Considere usar arrays circulares para implementações mais eficientes'
          ].map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className={`font-bold mr-2 ${
                isDark ? 'text-yellow-400' : 'text-yellow-600'
              }`}>•</span>
              <span>{tip}</span>
            </li>
          ))}
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