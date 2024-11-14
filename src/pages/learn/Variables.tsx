import { motion } from 'framer-motion';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import { useTheme } from '../../contexts/theme/ThemeContext';

const Variables = () => {
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
          O que são variáveis?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Variáveis são espaços na memória do computador que armazenam dados. 
          Pense nelas como caixas onde você pode guardar diferentes tipos de informação.
        </motion.p>
      </section>

      {/* Tipos de Dados */}
      <section>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          Tipos de Dados Básicos
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Números',
              icon: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14',
              content: [
                { type: 'int', examples: '1, 2, 3, -1, -2, -3' },
                { type: 'float', examples: '1.5, 3.14, -2.8' }
              ]
            },
            {
              title: 'Texto',
              icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
              content: [
                { type: 'string', examples: '"Olá, mundo!", "Programação"' }
              ]
            },
            {
              title: 'Booleano',
              icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              content: [
                { type: 'bool', examples: 'true, false' }
              ]
            }
          ].map((dataType, index) => (
            <motion.div
              key={dataType.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`p-6 rounded-lg shadow-md border transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-primary-500/50' 
                  : 'bg-white border-gray-200 hover:border-primary-500/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dataType.icon} />
                </svg>
                <h4 className={`text-lg font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {dataType.title}
                </h4>
              </div>
              <div className="space-y-4">
                {dataType.content.map(item => (
                  <div key={item.type}>
                    <code className={`px-2 py-1 rounded font-mono text-sm ${
                      isDark 
                        ? 'bg-primary-900/50 text-primary-400' 
                        : 'bg-primary-50 text-primary-700'
                    }`}>
                      {item.type}
                    </code>
                    <p className={`mt-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.examples}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Exemplo de Código */}
      <section className={`rounded-lg shadow-md p-6 border ${
        isDark 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Exemplos de Uso
        </motion.h3>

        <CodeEditor
          initialCode={`#include <stdio.h>

int main() {
    // Declarando variáveis de diferentes tipos
    int idade = 21;          // Variável do tipo inteiro
    char nome[] = "Gabriel";   // Variável do tipo string (array de caract)
    float altura = 1.80;     // Variável do tipo float (número decimal)

    // Usando variáveis
    printf("Nome: %s | ", nome);
    printf("Idade: %d | ", idade);
    printf("Altura: %.2f", altura);

    return 0;
}`}
          language="c"
        />
      </section>

      {/* Boas Práticas */}
      <section className={`rounded-lg shadow-md p-6 border ${
        isDark 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Boas Práticas
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Use nomes descritivos',
              wrong: 'x',
              right: 'idade',
              icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
            },
            {
              title: 'Comece com letra minúscula',
              wrong: 'NomeCompleto',
              right: 'nomeCompleto',
              icon: 'M13 10V3L4 14h7v7l9-11h-7z'
            },
            {
              title: 'Evite caracteres especiais',
              wrong: 'média_final',
              right: 'mediaFinal',
              icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            },
            {
              title: 'Use camelCase',
              wrong: 'idade_usuario',
              right: 'idadeUsuario',
              icon: 'M4 6h16M4 12h16m-7 6h7'
            }
          ].map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className={`p-6 rounded-lg shadow-md border transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-primary-500/50' 
                  : 'bg-white border-gray-200 hover:border-primary-500/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={practice.icon} />
                </svg>
                <h4 className={`text-lg font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {practice.title}
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <code className={`px-2 py-1 rounded font-mono text-sm ${
                    isDark
                      ? 'bg-red-900/30 text-red-400'
                      : 'bg-red-50 text-red-600'
                  }`}>
                    {practice.wrong}
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <code className={`px-2 py-1 rounded font-mono text-sm ${
                    isDark
                      ? 'bg-green-900/30 text-green-400'
                      : 'bg-green-50 text-green-600'
                  }`}>
                    {practice.right}
                  </code>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <ContentPage
      title="Variáveis e Tipos de Dados"
      content={content}
      duration="15 min"
    />
  );
};

export default Variables;