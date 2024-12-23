// src\pages\learn\LinkedLists.tsx
import { motion } from 'framer-motion';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import { useTheme } from '../../contexts/theme/ThemeContext';

const LinkedLists = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = (
    <div className="space-y-8">
      {/* Introdução */}
      <section className={`rounded-lg shadow-md p-6 border ${
        isDark 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-2xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          O que são Listas Ligadas?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Listas ligadas são estruturas de dados dinâmicas onde cada elemento (nó) 
          contém um valor e uma referência (ponteiro) para o próximo elemento da lista.
        </motion.p>
      </section>

      {/* Estrutura Básica */}
      <section>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Estrutura Básica
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h4 className="text-lg font-semibold text-primary-500 mb-4">
            Definição do Nó
          </h4>
          <CodeEditor
            initialCode={`#include <stdio.h>

// Definição da estrutura de um nó para a lista ligada
struct Node {
    int data;            // Armazena o valor do nó
    struct Node* next;   // Ponteiro para o próximo nó na lista
};

int main() {
    // Aqui poderia ser feita a criação de nós, mas neste exemplo estamos apenas definindo a estrutura.
    return 0;
}`}
            language="c"
          />
        </motion.div>
      </section>

      {/* Implementação */}
      <section>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
          Implementação
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <CodeEditor
            initialCode={`#include <stdio.h>    // Inclui a biblioteca padrão de entrada e saída
#include <stdlib.h>   // Inclui a biblioteca para alocação de memória dinâmica

// Definição da estrutura de um nó para a lista ligada
struct Node {
    int data;               // Armazena o valor do nó
    struct Node* next;      // Ponteiro para o próximo nó na lista
};

// Função para criar um novo nó com o valor fornecido
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));  // Aloca memória para o novo nó
    newNode->data = data;    // Define o valor do nó
    newNode->next = NULL;    // Define o ponteiro 'next' como NULL, pois será o último nó inicialmente
    return newNode;          // Retorna o endereço do novo nó
}

// Função para inserir um nó no início da lista
struct Node* insertAtBegin(struct Node* head, int data) {
    struct Node* newNode = createNode(data);  // Cria um novo nó com o valor fornecido
    newNode->next = head;   // Aponta o 'next' do novo nó para o nó atual 'head'
    return newNode;         // Retorna o novo nó, que agora é o primeiro da lista
}

// Função para inserir um nó no final da lista
struct Node* insertAtEnd(struct Node* head, int data) {
    struct Node* newNode = createNode(data);  // Cria um novo nó com o valor fornecido
    
    if (head == NULL)       // Verifica se a lista está vazia
        return newNode;     // Se estiver vazia, o novo nó se torna o primeiro da lista
        
    struct Node* current = head;   // Começa do início da lista
    while (current->next != NULL)  // Percorre a lista até o último nó
        current = current->next;
        
    current->next = newNode;       // Define o 'next' do último nó para o novo nó
    return head;                   // Retorna o início da lista
}

// Função para imprimir todos os elementos da lista
void printList(struct Node* head) {
    struct Node* current = head;   // Começa do início da lista
    while (current != NULL) {      // Continua até o final da lista
        printf("%d -> ", current->data);  // Imprime o valor do nó atual
        current = current->next;          // Move para o próximo nó
    }
    printf("NULL");              // Indica o final da lista
}

// Função principal para testar as operações na lista ligada
int main() {
    struct Node* head = NULL;  // Inicializa a lista como vazia (head é NULL)
    
    // Insere alguns elementos na lista
    head = insertAtBegin(head, 10);  // Insere 10 no início
    head = insertAtEnd(head, 20);    // Insere 20 no final
    head = insertAtBegin(head, 5);   // Insere 5 no início
    
    // Imprime a lista
    printf("Lista: ");
    printList(head);
    
    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
}`}
            language="c"
          />
        </motion.div>
      </section>

      {/* Grid de Complexidade e Comparação */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Complexidade */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`rounded-lg shadow-md border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h3 className={`p-4 border-b text-xl font-semibold ${
            isDark 
              ? 'text-white border-gray-700' 
              : 'text-gray-900 border-gray-200'
          }`}>
            Complexidade das Operações
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className={isDark ? 'bg-gray-900' : 'bg-gray-50'}>
                <tr>
                  {['Operação', 'Complexidade'].map((header) => (
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
                  ['Acesso a um elemento', 'O(n)'],
                  ['Inserção no início', 'O(1)'],
                  ['Inserção no final', 'O(n)'],
                  ['Remoção', 'O(n)'],
                  ['Busca', 'O(n)']
                ].map(([op, complex], index) => (
                  <tr key={index}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-900'
                    }`}>
                      {op}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-primary-500">
                      {complex}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Comparação */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h3 className={`text-xl font-semibold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Comparação com Arrays
          </h3>

          <div className="space-y-6">
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-green-900/20' : 'bg-green-50'
            }`}>
              <h4 className={`font-semibold mb-3 ${
                isDark ? 'text-green-400' : 'text-green-700'
              }`}>
                Vantagens
              </h4>
              <ul className="space-y-2">
                {[
                  'Tamanho dinâmico',
                  'Inserção e remoção eficientes no início',
                  'Não precisa realocar memória',
                  'Melhor uso de memória (aloca conforme necessário)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className={isDark ? 'text-green-400' : 'text-green-600'}>•</span>
                    <span className={isDark ? 'text-green-300' : 'text-green-700'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-red-900/20' : 'bg-red-50'
            }`}>
              <h4 className={`font-semibold mb-3 ${
                isDark ? 'text-red-400' : 'text-red-700'
              }`}>
                Desvantagens
              </h4>
              <ul className="space-y-2">
                {[
                  'Não possui acesso direto aos elementos',
                  'Usa mais memória por elemento (ponteiro adicional)',
                  'Não é cache-friendly',
                  'Mais complexo de implementar'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className={isDark ? 'text-red-400' : 'text-red-600'}>•</span>
                    <span className={isDark ? 'text-red-300' : 'text-red-700'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dicas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-lg p-6 border-l-4 ${
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
          Dicas Importantes
        </h4>
        <ul className="space-y-3">
          {[
            'Sempre verifique se a lista está vazia antes de acessar elementos',
            'Cuidado com memory leaks - libere a memória quando remover nós',
            'Use listas ligadas quando precisar de inserções/remoções frequentes',
            'Considere usar arrays se precisar de acesso aleatório frequente'
          ].map((tip, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-start gap-2"
            >
              <span className={isDark ? 'text-yellow-400' : 'text-yellow-600'}>•</span>
              <span>{tip}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );

  return (
    <ContentPage
      title="Listas Ligadas"
      content={content}
      duration="20 min"
    />
  );
};

export default LinkedLists;