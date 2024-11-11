// src/pages/learn/Arrays.tsx
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import { useTheme } from '../../contexts/theme/ThemeContext';

const Arrays = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = (
    <div>
      <h2 className={`text-2xl font-bold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        O que são Arrays?
      </h2>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Arrays são estruturas de dados que armazenam elementos do mesmo tipo em sequência.
        Cada elemento pode ser acessado através de um índice numérico.
      </p>

      <h3 className={`text-xl font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Declaração e Inicialização
      </h3>
      <div className={`p-6 rounded-lg mb-8 transition-colors duration-200 ${
        isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
      }`}>
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

      <h3 className={`text-xl font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Operações Comuns
      </h3>

      <div className={`p-6 rounded-lg mb-6 transition-colors duration-200 ${
        isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
      }`}>
        <h4 className="font-semibold text-primary-500 mb-3">1. Inserção em Array</h4>
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

      <div className={`p-6 rounded-lg mb-8 transition-colors duration-200 ${
        isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
      }`}>
        <h4 className="font-semibold text-primary-500 mb-3">2. Remoção de Elemento</h4>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark 
            ? 'bg-green-900/20 hover:bg-green-900/30' 
            : 'bg-green-50 hover:bg-green-100'
        }`}>
          <h4 className={`font-semibold mb-3 ${
            isDark ? 'text-green-400' : 'text-green-700'
          }`}>
            Vantagens
          </h4>
          <ul className={`space-y-2 ${isDark ? 'text-green-300' : 'text-green-600'}`}>
            <li>• Acesso rápido a elementos (O(1))</li>
            <li>• Uso eficiente de memória</li>
            <li>• Fácil de percorrer sequencialmente</li>
            <li>• Ótimo para acesso aleatório</li>
          </ul>
        </div>
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark 
            ? 'bg-red-900/20 hover:bg-red-900/30' 
            : 'bg-red-50 hover:bg-red-100'
        }`}>
          <h4 className={`font-semibold mb-3 ${
            isDark ? 'text-red-400' : 'text-red-700'
          }`}>
            Desvantagens
          </h4>
          <ul className={`space-y-2 ${isDark ? 'text-red-300' : 'text-red-600'}`}>
            <li>• Tamanho fixo (em C)</li>
            <li>• Inserção e remoção podem ser custosas</li>
            <li>• Desperdício de memória se não utilizar todo o espaço</li>
            <li>• Difícil de expandir o tamanho</li>
          </ul>
        </div>
      </div>

      <h3 className={`text-xl font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Complexidade das Operações
      </h3>
      <div className="overflow-x-auto rounded-lg">
        <table className={`min-w-full overflow-hidden ${
          isDark ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <thead className={isDark ? 'bg-gray-900' : 'bg-gray-50'}>
            <tr>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDark ? 'text-gray-300' : 'text-gray-500'
              }`}>
                Operação
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDark ? 'text-gray-300' : 'text-gray-500'
              }`}>
                Complexidade
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDark ? 'text-gray-300' : 'text-gray-500'
              }`}>
                Descrição
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y ${
            isDark ? 'divide-gray-700' : 'divide-gray-200'
          }`}>
            {[
              {
                op: 'Acesso',
                complex: 'O(1)',
                desc: 'Acesso direto por índice'
              },
              {
                op: 'Inserção',
                complex: 'O(n)',
                desc: 'Precisa mover elementos'
              },
              {
                op: 'Remoção',
                complex: 'O(n)',
                desc: 'Precisa mover elementos'
              },
              {
                op: 'Busca',
                complex: 'O(n)',
                desc: 'Busca linear'
              }
            ].map((item, index) => (
              <tr key={index}>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.op}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-primary-500">
                  {item.complex}
                </td>
                <td className={`px-6 py-4 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {item.desc}
                </td>
              </tr>
            ))}
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