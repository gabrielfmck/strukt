// src/pages/learn/Arrays.tsx
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';

const Arrays = () => {
  const content = (
    <div>
      <h2>O que são Arrays?</h2>
      <p className="mb-6">
        Arrays são estruturas de dados que armazenam elementos do mesmo tipo em sequência.
        Cada elemento pode ser acessado através de um índice numérico.
      </p>

      {/* Declaração e Inicialização */}
      <h3 className="text-xl font-semibold mb-4">Declaração e Inicialização</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <CodeEditor
          initialCode={`// Declaração de arrays em C
int numeros[5] = {1, 2, 3, 4, 5};
char texto[6] = "Hello";

// Acessando elementos
printf("%d\\n", numeros[0]);  // Imprime: 1
printf("%c\\n", texto[0]);    // Imprime: H`}
          language="c"
        />
      </div>

      {/* Operações Comuns */}
      <h3 className="text-xl font-semibold mb-4">Operações Comuns</h3>

      {/* Inserção */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="font-semibold text-primary-600 mb-3">1. Inserção em Array</h4>
        <CodeEditor
          initialCode={`void inserir(int arr[], int n, int elemento, int posicao) {
    // Move elementos para abrir espaço
    for(int i = n; i > posicao; i--) {
        arr[i] = arr[i-1];
    }
    // Insere o elemento
    arr[posicao] = elemento;
}`}
          language="c"
        />
      </div>

      {/* Remoção */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 className="font-semibold text-primary-600 mb-3">2. Remoção de Elemento</h4>
        <CodeEditor
          initialCode={`void remover(int arr[], int n, int posicao) {
    // Move elementos para preencher o espaço
    for(int i = posicao; i < n-1; i++) {
        arr[i] = arr[i+1];
    }
}`}
          language="c"
        />
      </div>

      {/* Características */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-semibold text-green-700 mb-3">Vantagens</h4>
          <ul className="space-y-2 text-green-600">
            <li>• Acesso rápido a elementos (O(1))</li>
            <li>• Uso eficiente de memória</li>
            <li>• Fácil de percorrer sequencialmente</li>
            <li>• Ótimo para acesso aleatório</li>
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-lg">
          <h4 className="font-semibold text-red-700 mb-3">Desvantagens</h4>
          <ul className="space-y-2 text-red-600">
            <li>• Tamanho fixo (em C)</li>
            <li>• Inserção e remoção podem ser custosas</li>
            <li>• Desperdício de memória se não utilizar todo o espaço</li>
            <li>• Difícil de expandir o tamanho</li>
          </ul>
        </div>
      </div>

      {/* Complexidade */}
      <h3 className="text-xl font-semibold mb-4">Complexidade das Operações</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Operação
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Complexidade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descrição
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Acesso</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600 font-mono">O(1)</td>
              <td className="px-6 py-4 text-sm text-gray-500">Acesso direto por índice</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Inserção</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600 font-mono">O(n)</td>
              <td className="px-6 py-4 text-sm text-gray-500">Precisa mover elementos</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Remoção</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600 font-mono">O(n)</td>
              <td className="px-6 py-4 text-sm text-gray-500">Precisa mover elementos</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Busca</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-primary-600 font-mono">O(n)</td>
              <td className="px-6 py-4 text-sm text-gray-500">Busca linear</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <ContentPage
      title="Arrays e Vetores"
      content={content}
      duration="15 min"
    />
  );
};

export default Arrays;