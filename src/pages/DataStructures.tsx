// src/pages/DataStructures.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/theme/ThemeContext';
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
    initialCode: `#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída

int main() {
    // Declaração e inicialização de um array de inteiros com 5 elementos
    int arr[5] = {10, 20, 30, 40, 50};

    // Acesso e impressão dos elementos do array
    printf("Elementos do array: ");
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d", i, arr[i]);  // Acessa e imprime cada elemento do array
    }

    // Modificando um elemento do array
    arr[2] = 100;  // Altera o valor do terceiro elemento (índice 2) para 100

    // Imprime o array após a modificação
    printf("| Array após modificação: ");
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d", i, arr[i]);  // Acessa e imprime cada elemento do array
    }

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
}`,
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
    initialCode: `#include <stdio.h>
#include <stdlib.h>  // Inclui a biblioteca para alocação dinâmica de memória

// Definição da estrutura de um nó para a lista ligada
struct Node {
    int data;              // Armazena o valor do nó
    struct Node* next;     // Ponteiro para o próximo nó na lista
};

// Função para adicionar um nó no início da lista
void insertAtBeginning(struct Node** head, int newData) {
    // Aloca memória para um novo nó
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = newData;    // Define o valor do novo nó
    newNode->next = *head;      // Aponta o próximo do novo nó para o nó atual da cabeça
    *head = newNode;            // Atualiza a cabeça da lista para o novo nó
}

// Função para adicionar um nó no final da lista
void insertAtEnd(struct Node** head, int newData) {
    // Aloca memória para um novo nó
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = newData;    // Define o valor do novo nó
    newNode->next = NULL;       // Define o próximo do novo nó como NULL, pois será o último

    // Se a lista estiver vazia, o novo nó se torna o primeiro nó
    if (*head == NULL) {
        *head = newNode;
        return;
    }

    // Caso contrário, percorre até o último nó
    struct Node* last = *head;
    while (last->next != NULL) {
        last = last->next;
    }

    last->next = newNode;  // Aponta o próximo do último nó para o novo nó
}

// Função para imprimir todos os elementos da lista
void printList(struct Node* node) {
    while (node != NULL) {
        printf("%d -> ", node->data);  // Imprime o valor do nó atual
        node = node->next;             // Move para o próximo nó
    }
    printf("NULL");  // Indica o final da lista
}

int main() {
    struct Node* head = NULL;  // Inicializa a lista como vazia

    // Insere elementos na lista
    insertAtEnd(&head, 10);
    insertAtBeginning(&head, 20);
    insertAtEnd(&head, 30);
    insertAtBeginning(&head, 40);

    // Imprime a lista
    printf("Lista ligada: ");
    printList(head);

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
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
    initialCode: `#include <stdio.h>
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
    initialCode: `#include <stdio.h>
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
}`,
  },
];

const DataStructures = () => {
  const { theme } = useTheme();
  const [selectedStructure, setSelectedStructure] = useState(dataStructures[0]);

  return (
    <div className={`min-h-screen py-12 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Estruturas de Dados
          </h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Aprenda as principais estruturas de dados e suas implementações
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={`rounded-lg shadow-lg overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="p-4">
                <h2 className={`text-lg font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Estruturas Disponíveis
                </h2>
                <nav className="space-y-2">
                  {dataStructures.map((structure) => (
                    <button
                      key={structure.id}
                      onClick={() => setSelectedStructure(structure)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedStructure.id === structure.id
                          ? theme === 'dark'
                            ? 'bg-primary-900/50 text-primary-400'
                            : 'bg-primary-50 text-primary-600'
                          : theme === 'dark'
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <h3 className="font-medium">{structure.name}</h3>
                      <p className={`text-sm mt-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
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
              className={`rounded-lg shadow-lg p-6 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {selectedStructure.name}
              </h2>
              <p className={`mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {selectedStructure.description}
              </p>

              {/* Tabela de complexidade */}
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Complexidade das Operações
                </h3>
                <div className={`rounded-lg overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
                }`}>
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className={theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}>
                      <tr>
                        <th className={`px-6 py-3 text-left text-xs font-medium tracking-wider ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          Operação
                        </th>
                        <th className={`px-6 py-3 text-left text-xs font-medium tracking-wider ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          Complexidade
                        </th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${
                      theme === 'dark' 
                        ? 'bg-gray-900 divide-gray-700' 
                        : 'bg-white divide-gray-200'
                    }`}>
                      {selectedStructure.operations.map((operation) => (
                        <tr key={operation.name}>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>
                            {operation.name}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          }`}>
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
                <h3 className={`text-lg font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
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