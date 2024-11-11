// src/pages/learn/LinkedLists.tsx
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import { useTheme } from '../../contexts/theme/ThemeContext';

const LinkedLists = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = (
    <div>
      <h2 className={`text-2xl font-bold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        O que são Listas Ligadas?
      </h2>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Listas ligadas são estruturas de dados dinâmicas onde cada elemento (nó) 
        contém um valor e uma referência (ponteiro) para o próximo elemento da lista.
      </p>

      <h3 className={`text-xl font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Estrutura Básica
      </h3>
      <div className={`p-6 rounded-lg mb-8 transition-colors duration-200 ${
        isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
      }`}>
        <h4 className="font-semibold text-primary-500 mb-3">Definição do Nó</h4>
        <CodeEditor
          initialCode={`struct Node {
    int data;           // Dado armazenado
    struct Node* next;  // Ponteiro para próximo nó
};`}
          language="c"
        />
      </div>

      <h3 className={`text-xl font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Implementação
      </h3>
      <div className={`p-6 rounded-lg mb-8 transition-colors duration-200 ${
        isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
      }`}>
        <CodeEditor
          initialCode={`#include <stdio.h>
#include <stdlib.h>

struct Node {
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

// Inserir no final
struct Node* insertAtEnd(struct Node* head, int data) {
    struct Node* newNode = createNode(data);
    
    if (head == NULL)
        return newNode;
        
    struct Node* current = head;
    while (current->next != NULL)
        current = current->next;
        
    current->next = newNode;
    return head;
}

// Imprimir lista
void printList(struct Node* head) {
    struct Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

// Função principal para teste
int main() {
    struct Node* head = NULL;
    
    // Inserir alguns elementos
    head = insertAtBegin(head, 10);
    head = insertAtEnd(head, 20);
    head = insertAtBegin(head, 5);
    
    // Imprimir lista
    printf("Lista: ");
    printList(head);
    
    return 0;
}`}
          language="c"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Complexidade das Operações
          </h3>
          <div className={`overflow-hidden rounded-lg ${
            isDark ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <table className="min-w-full">
              <thead className={isDark ? 'bg-gray-900' : 'bg-gray-50'}>
                <tr>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase ${
                    isDark ? 'text-gray-300' : 'text-gray-500'
                  }`}>Operação</th>
                  <th className={`px-4 py-3 text-left text-xs font-medium uppercase ${
                    isDark ? 'text-gray-300' : 'text-gray-500'
                  }`}>Complexidade</th>
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
                    <td className={`px-4 py-3 ${
                      isDark ? 'text-gray-300' : 'text-gray-900'
                    }`}>{op}</td>
                    <td className="px-4 py-3 font-mono text-primary-500">{complex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className={`text-xl font-semibold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Comparação com Arrays
          </h3>
          <div className={`p-6 rounded-lg space-y-6 transition-colors duration-200 ${
            isDark ? 'bg-gray-800/50' : 'bg-gray-50'
          }`}>
            <div>
              <h4 className={`font-semibold mb-2 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>Vantagens</h4>
              <ul className={`list-disc pl-5 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Tamanho dinâmico</li>
                <li>Inserção e remoção eficientes no início</li>
                <li>Não precisa realocar memória</li>
                <li>Melhor uso de memória (aloca conforme necessário)</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${
                isDark ? 'text-red-400' : 'text-red-600'
              }`}>Desvantagens</h4>
              <ul className={`list-disc pl-5 space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Não possui acesso direto aos elementos</li>
                <li>Usa mais memória por elemento (ponteiro adicional)</li>
                <li>Não é cache-friendly</li>
                <li>Mais complexo de implementar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`p-6 rounded-lg border-l-4 ${
        isDark 
          ? 'bg-blue-900/20 border-blue-500 text-blue-300' 
          : 'bg-blue-50 border-blue-500 text-blue-600'
      }`}>
        <h4 className={`text-lg font-semibold mb-4 ${
          isDark ? 'text-blue-300' : 'text-blue-700'
        }`}>
          Dicas Importantes
        </h4>
        <ul className="space-y-3">
          {[
            'Sempre verifique se a lista está vazia antes de acessar elementos',
            'Cuidado com memory leaks - libere a memória quando remover nós',
            'Use listas ligadas quando precisar de inserções/remoções frequentes',
            'Considere usar arrays se precisar de acesso aleatório frequente'
          ].map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className={`font-bold mr-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
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
      title="Listas Ligadas"
      content={content}
      duration="20 min"
    />
  );
};

export default LinkedLists;