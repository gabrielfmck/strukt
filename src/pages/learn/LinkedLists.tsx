// src/pages/learn/LinkedLists.tsx
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';

const LinkedLists = () => {
  const content = (
    <div>
      <h2>O que são Listas Ligadas?</h2>
      <p className="mb-6">
        Listas ligadas são estruturas de dados dinâmicas onde cada elemento (nó) 
        contém um valor e uma referência (ponteiro) para o próximo elemento da lista.
      </p>

      {/* Estrutura Básica */}
      <h3 className="text-xl font-semibold mb-4">Estrutura Básica</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="font-semibold text-primary-600 mb-3">Definição do Nó</h4>
        <CodeEditor
          initialCode={`struct Node {
    int data;           // Dado armazenado
    struct Node* next;  // Ponteiro para próximo nó
};`}
          language="c"
        />
      </div>

      {/* Implementação Completa */}
      <h3 className="text-xl font-semibold mb-4">Implementação</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
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

      {/* Complexidade */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Complexidade das Operações</h3>
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Operação</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Complexidade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Acesso a um elemento</td>
                  <td className="px-4 py-3 font-mono text-primary-600">O(n)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Inserção no início</td>
                  <td className="px-4 py-3 font-mono text-primary-600">O(1)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Inserção no final</td>
                  <td className="px-4 py-3 font-mono text-primary-600">O(n)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Remoção</td>
                  <td className="px-4 py-3 font-mono text-primary-600">O(n)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Busca</td>
                  <td className="px-4 py-3 font-mono text-primary-600">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Comparação com Arrays</h3>
          <div className="bg-gray-50 p-6 rounded-lg space-y-6">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">Vantagens</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Tamanho dinâmico</li>
                <li>Inserção e remoção eficientes no início</li>
                <li>Não precisa realocar memória</li>
                <li>Melhor uso de memória (aloca conforme necessário)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-600 mb-2">Desvantagens</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Não possui acesso direto aos elementos</li>
                <li>Usa mais memória por elemento (ponteiro adicional)</li>
                <li>Não é cache-friendly</li>
                <li>Mais complexo de implementar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Dicas e Observações */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h4 className="text-lg font-semibold text-blue-700 mb-4">Dicas Importantes</h4>
        <ul className="space-y-3 text-blue-600">
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Sempre verifique se a lista está vazia antes de acessar elementos</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Cuidado com memory leaks - libere a memória quando remover nós</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Use listas ligadas quando precisar de inserções/remoções frequentes</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">•</span>
            <span>Considere usar arrays se precisar de acesso aleatório frequente</span>
          </li>
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