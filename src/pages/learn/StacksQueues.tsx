import { motion } from 'framer-motion';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import { useTheme } from '../../contexts/theme/ThemeContext';

const StacksQueues = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = (
    <div className="space-y-8">
      {/* Pilhas (Stacks) */}
      <section>
        {/* Introdução */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h2 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Pilhas (Stacks)
          </h2>
          <p className={`text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Pilhas são estruturas de dados do tipo LIFO (Last In, First Out),
            onde o último elemento inserido é o primeiro a ser removido. Pense em uma
            pilha de pratos: você sempre coloca e retira pratos do topo.
          </p>
        </motion.div>

        {/* Implementação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`mt-8 rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h3 className={`text-xl font-bold mb-4 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Implementação de Pilha
          </h3>
          <CodeEditor
            initialCode={`#include <stdio.h>
#include <stdlib.h>  // Inclui a biblioteca para alocação dinâmica de memória

// Estrutura do nó (Node)
struct Node {
    int data;               // Armazena o valor do nó
    struct Node* next;      // Ponteiro para o próximo nó na pilha
};

// Estrutura da pilha (Stack)
struct Stack {
    struct Node* top;       // Ponteiro para o topo da pilha
};

// Criar uma pilha vazia
struct Stack* createStack() {
    struct Stack* stack = (struct Stack*)malloc(sizeof(struct Stack));  // Aloca memória para a pilha
    stack->top = NULL;      // Inicializa o topo da pilha como NULL (vazia)
    return stack;           // Retorna o ponteiro para a pilha criada
}

// Verificar se a pilha está vazia
int isEmpty(struct Stack* stack) {
    return stack->top == NULL;  // Retorna 1 (true) se a pilha estiver vazia, 0 caso contrário
}

// Empilhar (push) - Adiciona um elemento ao topo da pilha
void push(struct Stack* stack, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));  // Aloca memória para um novo nó
    newNode->data = data;            // Define o valor do novo nó
    newNode->next = stack->top;      // Faz o novo nó apontar para o nó atual do topo
    stack->top = newNode;            // Atualiza o topo da pilha para o novo nó
    printf("%d empilhado | ", data);  // Mensagem de confirmação
}

// Desempilhar (pop) - Remove e retorna o elemento do topo da pilha
int pop(struct Stack* stack) {
    if (isEmpty(stack)) {            // Verifica se a pilha está vazia
        printf("Pilha vazia");     // Mensagem de erro se estiver vazia
        return -1;                   // Retorna -1 para indicar que não há elementos
    }
    struct Node* temp = stack->top;  // Guarda o nó atual do topo em 'temp'
    int popped = temp->data;         // Armazena o valor do nó a ser removido
    stack->top = stack->top->next;   // Move o topo para o próximo nó
    free(temp);                      // Libera a memória do nó removido
    return popped;                   // Retorna o valor desempilhado
}

// Visualizar o elemento no topo (peek) - Apenas verifica o valor no topo sem removê-lo
int peek(struct Stack* stack) {
    if (isEmpty(stack)) {            // Verifica se a pilha está vazia
        printf("Pilha vazia");     // Mensagem de erro se estiver vazia
        return -1;                   // Retorna -1 para indicar pilha vazia
    }
    return stack->top->data;         // Retorna o valor do nó no topo
}

// Imprimir todos os elementos da pilha
void printStack(struct Stack* stack) {
    if (isEmpty(stack)) {            // Verifica se a pilha está vazia
        printf("Pilha vazia");     // Mensagem se a pilha estiver vazia
        return;
    }
    struct Node* temp = stack->top;  // Inicia do topo da pilha
    printf("Pilha: ");
    while (temp != NULL) {           // Percorre todos os nós até o final
        printf("%d ", temp->data);   // Imprime o valor do nó atual
        temp = temp->next;           // Move para o próximo nó
    }
    printf("");
}

// Função principal para testar as operações da pilha
int main() {
    struct Stack* stack = createStack();  // Cria uma nova pilha vazia

    // Testa a função push
    push(stack, 10);  // Empilha o valor 10
    push(stack, 20);  // Empilha o valor 20
    push(stack, 30);  // Empilha o valor 30

    // Imprime a pilha
    printStack(stack);

    // Testa a função pop
    printf("| Elemento desempilhado: %d | ", pop(stack));  // Remove o elemento do topo (30)
    printStack(stack);  // Imprime a pilha atualizada

    // Testa a função peek
    printf("| Topo da pilha: %d", peek(stack));  // Visualiza o elemento atual do topo

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
}`}
            language="c"
          />
        </motion.div>

        {/* Operações e Aplicações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Operações */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`rounded-lg p-6 border-l-4 ${
              isDark 
                ? 'bg-green-900/20 border-green-500 text-green-200'
                : 'bg-green-50 border-green-500 text-green-800'
            }`}
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-green-300' : 'text-green-800'
            }`}>
              Principais Operações
            </h4>
            <ul className="space-y-2">
              {[
                'push(): Adiciona elemento no topo',
                'pop(): Remove elemento do topo',
                'peek(): Visualiza elemento do topo',
                'isEmpty(): Verifica se está vazia'
              ].map((op, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <span>•</span>
                  <span>{op}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Aplicações */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`rounded-lg p-6 border-l-4 ${
              isDark 
                ? 'bg-primary-900/20 border-primary-500 text-primary-200'
                : 'bg-primary-50 border-primary-500 text-primary-800'
            }`}
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-primary-300' : 'text-primary-800'
            }`}>
              Aplicações
            </h4>
            <ul className="space-y-2">
              {[
                'Desfazer/Refazer em editores',
                'Navegação em browsers',
                'Avaliação de expressões',
                'Chamadas de funções'
              ].map((app, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <span>•</span>
                  <span>{app}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Filas (Queues) */}
      <section className="mt-12">
        {/* Introdução Filas */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h2 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            Filas (Queues)
          </h2>
          <p className={`text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Filas são estruturas de dados do tipo FIFO (First In, First Out),
            onde o primeiro elemento inserido é o primeiro a ser removido. Similar
            a uma fila de banco: a primeira pessoa a chegar é a primeira a ser atendida.
          </p>
        </motion.div>

        {/* Implementação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`mt-8 rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h3 className={`text-xl font-bold mb-4 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Implementação de Fila
          </h3>
          <CodeEditor
            initialCode={`#include <stdio.h>
#include <stdlib.h>  // Inclui a biblioteca para alocação dinâmica de memória

// Estrutura do nó (Node)
struct Node {
    int data;               // Armazena o valor do nó
    struct Node* next;      // Ponteiro para o próximo nó na fila
};

// Estrutura da fila (Queue)
struct Queue {
    struct Node *front, *rear;  // Ponteiros para o primeiro e o último nó da fila
};

// Criar uma fila vazia
struct Queue* createQueue() {
    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));  // Aloca memória para a fila
    queue->front = queue->rear = NULL;  // Inicializa 'front' e 'rear' como NULL, indicando fila vazia
    return queue;                       // Retorna o ponteiro para a fila criada
}

// Verificar se a fila está vazia
int isEmpty(struct Queue* queue) {
    return queue->front == NULL;  // Retorna 1 (true) se a fila estiver vazia, 0 caso contrário
}

// Enfileirar (enqueue) - Adiciona um elemento ao final da fila
void enqueue(struct Queue* queue, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));  // Aloca memória para um novo nó
    newNode->data = data;            // Define o valor do novo nó
    newNode->next = NULL;            // Define o 'next' como NULL, pois será o último nó

    if (isEmpty(queue)) {            // Se a fila está vazia
        queue->front = queue->rear = newNode;  // O novo nó é o primeiro e o último
    } else {                         // Se a fila não está vazia
        queue->rear->next = newNode; // Aponta o 'next' do último nó atual para o novo nó
        queue->rear = newNode;       // Atualiza o último nó da fila
    }
    printf("%d enfileirado | ", data);  // Mensagem de confirmação
}

// Desenfileirar (dequeue) - Remove e retorna o primeiro elemento da fila
int dequeue(struct Queue* queue) {
    if (isEmpty(queue)) {            // Verifica se a fila está vazia
        printf("Fila vazia");      // Mensagem de erro se estiver vazia
        return -1;                   // Retorna -1 para indicar que não há elementos
    }

    struct Node* temp = queue->front;  // Guarda o nó atual do início em 'temp'
    int item = temp->data;             // Armazena o valor do nó a ser removido
    queue->front = queue->front->next; // Move o início da fila para o próximo nó

    if (queue->front == NULL)          // Se a fila ficou vazia após o dequeue
        queue->rear = NULL;            // Define o 'rear' como NULL também

    free(temp);                        // Libera a memória do nó removido
    return item;                       // Retorna o valor desenfileirado
}

// Visualizar o primeiro elemento (peek) - Apenas verifica o valor no início sem removê-lo
int peek(struct Queue* queue) {
    if (isEmpty(queue)) {            // Verifica se a fila está vazia
        printf("Fila vazia");      // Mensagem de erro se estiver vazia
        return -1;                   // Retorna -1 para indicar fila vazia
    }
    return queue->front->data;       // Retorna o valor do nó no início
}

// Imprimir todos os elementos da fila
void printQueue(struct Queue* queue) {
    if (isEmpty(queue)) {            // Verifica se a fila está vazia
        printf("Fila vazia");      // Mensagem se a fila estiver vazia
        return;
    }
    struct Node* temp = queue->front;  // Inicia do início da fila
    printf("Fila: ");
    while (temp != NULL) {             // Percorre todos os nós até o final
        printf("%d ", temp->data);     // Imprime o valor do nó atual
        temp = temp->next;             // Move para o próximo nó
    }
    printf("| ");
}

// Função principal para testar as operações da fila
int main() {
    struct Queue* queue = createQueue();  // Cria uma nova fila vazia

    // Testa a função enqueue
    enqueue(queue, 10);  // Enfileira o valor 10
    enqueue(queue, 20);  // Enfileira o valor 20
    enqueue(queue, 30);  // Enfileira o valor 30

    // Imprime a fila
    printQueue(queue);

    // Testa a função dequeue
    printf("Elemento desenfileirado: %d | ", dequeue(queue));  // Remove o primeiro elemento (10)
    printQueue(queue);  // Imprime a fila atualizada

    // Testa a função peek
    printf("Primeiro elemento da fila: %d", peek(queue));  // Visualiza o primeiro elemento da fila

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
}`}
            language="c"
          />
        </motion.div>

        {/* Operações e Aplicações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Operações */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`rounded-lg p-6 border-l-4 ${
              isDark 
                ? 'bg-green-900/20 border-green-500 text-green-200'
                : 'bg-green-50 border-green-500 text-green-800'
            }`}
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-green-300' : 'text-green-800'
            }`}>
              Principais Operações
            </h4>
            <ul className="space-y-2">
              {[
                'enqueue(): Adiciona elemento no final',
                'dequeue(): Remove elemento do início',
                'peek(): Visualiza primeiro elemento',
                'isEmpty(): Verifica se está vazia'
              ].map((op, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <span>•</span>
                  <span>{op}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Aplicações */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`rounded-lg p-6 border-l-4 ${
              isDark 
                ? 'bg-primary-900/20 border-primary-500 text-primary-200'
                : 'bg-primary-50 border-primary-500 text-primary-800'
            }`}
          >
            <h4 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-primary-300' : 'text-primary-800'
            }`}>
              Aplicações
            </h4>
            <ul className="space-y-2">
              {[
                'Processos em sistemas operacionais',
                'Buffers de impressão',
                'Gestão de eventos',
                'Simulações'
              ].map((app, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2"
                >
                  <span>•</span>
                  <span>{app}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Comparação */}
      <section className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg shadow-md border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h2 className={`p-6 border-b text-2xl font-bold flex items-center gap-3 ${
            isDark 
              ? 'text-white border-gray-700' 
              : 'text-gray-900 border-gray-200'
          }`}>
            <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Comparação
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className={isDark ? 'bg-gray-900' : 'bg-gray-50'}>
                <tr>
                  {['Característica', 'Pilha', 'Fila'].map((header) => (
                    <th
                      key={header}
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                        isDark ? 'text-gray-300' : 'text-gray-500'
                      }`}
                    >
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
                ].map((row, index) => (
                  <tr key={index}>
                    {row.map((cell, i) => (
                      <td key={i} className={`px-6 py-4 text-sm whitespace-nowrap ${
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
        </motion.div>
      </section>

      {/* Dicas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`mt-8 rounded-lg p-6 border-l-4 ${
          isDark 
            ? 'bg-yellow-900/20 border-yellow-500 text-yellow-200'
            : 'bg-yellow-50 border-yellow-500 text-yellow-700'
        }`}
      >
        <h4 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
          isDark ? 'text-yellow-300' : 'text-yellow-800'
        }`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Dicas de Implementação
        </h4>
        <ul className="space-y-3">
          {[
            'Sempre verifique se a estrutura está vazia antes de remover elementos',
            'Mantenha referências tanto para o início quanto para o fim em filas',
            'Libere a memória corretamente ao remover elementos',
            'Considere usar arrays circulares para implementações mais eficientes'
          ].map((tip, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-start gap-2"
            >
              <span>•</span>
              <span>{tip}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
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