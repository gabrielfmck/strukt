import { motion } from 'framer-motion';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import { useTheme } from '../../contexts/theme/ThemeContext';

const Arrays = () => {
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
          O que são Arrays?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Arrays são estruturas de dados que armazenam elementos do mesmo tipo em sequência.
          Cada elemento pode ser acessado através de um índice numérico.
        </motion.p>
      </section>

      {/* Declaração e Inicialização */}
      <section>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
          Declaração e Inicialização
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
            initialCode={`#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída

int main() {
    // Declara um array de inteiros 'numeros' com 5 elementos e inicializa com valores de 1 a 5
    int numeros[5] = {1, 2, 3, 4, 5};

    // Declara um array de caracteres 'texto' com 6 elementos e inicializa com a string "Hello"
    // O compilador adiciona automaticamente o caractere nulo ao final da string
    char texto[6] = "Hello";

    // Acessa e imprime o primeiro elemento do array 'numeros', que é o número 1
    printf("%d", numeros[0]);  // Imprime: 1

    // Acessa e imprime o primeiro caractere do array 'texto', que é o caractere 'H'
    printf("%c", texto[0]);    // Imprime: H

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
}
`}
            language="c"
          />
        </motion.div>
      </section>

      {/* Operações Comuns */}
      <section>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          Operações Comuns
        </motion.h3>

        <div className="space-y-6">
          {[
            {
              title: 'Inserção em Array',
              code: `#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída

int main() {
    int arr[6] = {1, 2, 3, 4, 5};  // Declara um array de inteiros com 5 elementos preenchidos e espaço para um sexto
    int n = 5;  // Número de elementos atuais no array
    int pos;    // Posição onde o novo elemento será inserido
    int value;  // Valor a ser inserido

    // Solicita ao usuário a posição onde deseja inserir o novo valor
    printf("Digite a posição (0 a %d) para inserir o novo valor: ", n);
    scanf("%d", &pos);

    // Solicita ao usuário o valor a ser inserido
    printf("Digite o valor a ser inserido: ");
    scanf("%d", &value);

    // Verifica se a posição está dentro dos limites do array
    if (pos < 0 || pos > n) {
        printf("Posição inválida!\n");
        return 1;  // Encerra o programa com erro
    }

    // Desloca os elementos para a direita para abrir espaço na posição especificada
    for (int i = n; i > pos; i--) {
        arr[i] = arr[i - 1];
    }

    // Insere o novo valor na posição especificada
    arr[pos] = value;
    n++;  // Incrementa o número de elementos no array

    // Exibe o array atualizado
    printf("Array após a inserção: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
}
`
            }
          ].map((op, index) => (
            <motion.div
              key={op.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`rounded-lg shadow-md p-6 border ${
                isDark 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}
            >
              <h4 className="text-lg font-semibold text-primary-500 mb-4">
                {op.title}
              </h4>
              <CodeEditor
                initialCode={op.code}
                language="c"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vantagens e Desvantagens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            Vantagens
          </h4>
          <ul className="space-y-2">
            {[
              'Acesso rápido a elementos (O(1))',
              'Uso eficiente de memória',
              'Fácil de percorrer sequencialmente',
              'Ótimo para acesso aleatório'
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-2"
              >
                <span>•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className={`rounded-lg p-6 border-l-4 ${
            isDark 
              ? 'bg-red-900/20 border-red-500 text-red-200'
              : 'bg-red-50 border-red-500 text-red-800'
          }`}
        >
          <h4 className={`text-lg font-semibold mb-4 ${
            isDark ? 'text-red-300' : 'text-red-800'
          }`}>
            Desvantagens
          </h4>
          <ul className="space-y-2">
            {[
              'Tamanho fixo (em C)',
              'Inserção e remoção podem ser custosas',
              'Desperdício de memória se não utilizar todo o espaço',
              'Difícil de expandir o tamanho'
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-2"
              >
                <span>•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Complexidade */}
      <section>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Complexidade das Operações
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg shadow-md border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className={isDark ? 'bg-gray-900' : 'bg-gray-50'}>
                <tr>
                  {['Operação', 'Complexidade', 'Descrição'].map((header) => (
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
                  { op: 'Acesso', complex: 'O(1)', desc: 'Acesso direto por índice' },
                  { op: 'Inserção', complex: 'O(n)', desc: 'Precisa mover elementos' },
                  { op: 'Remoção', complex: 'O(n)', desc: 'Precisa mover elementos' },
                  { op: 'Busca', complex: 'O(n)', desc: 'Busca linear' }
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
        </motion.div>
      </section>
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