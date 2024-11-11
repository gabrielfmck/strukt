// src/pages/learn/Variables.tsx
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import { useTheme } from '../../contexts/theme/ThemeContext';

const Variables = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = (
    <div>
      <h2 className={`text-2xl font-bold mb-6 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        O que são variáveis?
      </h2>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Variáveis são espaços na memória do computador que armazenam dados. 
        Pense nelas como caixas onde você pode guardar diferentes tipos de informação.
      </p>

      <h3 className={`text-xl font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Tipos de Dados Básicos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className={`p-6 rounded-lg ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        } transition-colors duration-200`}>
          <h4 className="font-semibold text-primary-500 mb-3">Números</h4>
          <ul className="space-y-2">
            <li className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`font-mono px-2 py-1 rounded mr-2 ${
                isDark ? 'bg-gray-900/50 text-gray-200' : 'bg-gray-200 text-gray-800'
              }`}>int</span>
              <span>1, 2, 3, -1, -2, -3</span>
            </li>
            <li className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`font-mono px-2 py-1 rounded mr-2 ${
                isDark ? 'bg-gray-900/50 text-gray-200' : 'bg-gray-200 text-gray-800'
              }`}>float</span>
              <span>1.5, 3.14, -2.8</span>
            </li>
          </ul>
        </div>

        <div className={`p-6 rounded-lg ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        } transition-colors duration-200`}>
          <h4 className="font-semibold text-primary-500 mb-3">Texto</h4>
          <ul className="space-y-2">
            <li className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`font-mono px-2 py-1 rounded mr-2 ${
                isDark ? 'bg-gray-900/50 text-gray-200' : 'bg-gray-200 text-gray-800'
              }`}>string</span>
              <span>"Olá, mundo!", "Programação"</span>
            </li>
          </ul>
        </div>

        <div className={`p-6 rounded-lg ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        } transition-colors duration-200`}>
          <h4 className="font-semibold text-primary-500 mb-3">Booleano</h4>
          <ul className="space-y-2">
            <li className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`font-mono px-2 py-1 rounded mr-2 ${
                isDark ? 'bg-gray-900/50 text-gray-200' : 'bg-gray-200 text-gray-800'
              }`}>bool</span>
              <span>true, false</span>
            </li>
          </ul>
        </div>
      </div>

      <h3 className={`text-xl font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>Exemplos de Uso</h3>
      <div className={`${
        isDark ? 'bg-gray-800' : 'bg-gray-50'
      } p-6 rounded-lg mb-8`}>
        <CodeEditor
          initialCode={`#include <stdio.h>

int main() {
    // Declarando variáveis de diferentes tipos
    int idade = 25; // Variável do tipo inteiro
    char nome[] = "Maria"; // Variável do tipo string (array de caracteres)
    float altura = 1.65; // Variável do tipo float (número decimal)

    // Usando variáveis
    printf("Nome: %s | ", nome);
    printf("Idade: %d | ", idade);
    printf("Altura: %.2f | ", altura);

    return 0;
}
`}
          language="c"
        />
      </div>

      <h3 className={`text-xl font-semibold mt-8 mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>Boas Práticas</h3>
      <div className={`p-6 rounded-lg space-y-4 border-l-4 ${
        isDark 
          ? 'bg-green-900/20 border-green-500 text-green-200' 
          : 'bg-green-50 border-green-500 text-green-700'
      }`}>
        <div>
          <h4 className={`font-semibold mb-2 ${
            isDark ? 'text-green-300' : 'text-green-700'
          }`}>
            Use nomes descritivos
          </h4>
          <p className="flex items-center gap-4">
            <span className="inline-flex items-center">
              <span className="text-red-500 line-through mr-2">x</span>
              ❌
            </span>
            <span className="inline-flex items-center">
              <code className="text-green-500 mr-2">idade</code>
              ✅
            </span>
          </p>
        </div>

        <div>
          <h4 className={`font-semibold mb-2 ${
            isDark ? 'text-green-300' : 'text-green-700'
          }`}>
            Comece com letra minúscula
          </h4>
          <p className="flex items-center gap-4">
            <span className="inline-flex items-center">
              <code className="text-red-500 line-through mr-2">NomeCompleto</code>
              ❌
            </span>
            <span className="inline-flex items-center">
              <code className="text-green-500 mr-2">nomeCompleto</code>
              ✅
            </span>
          </p>
        </div>

        <div>
          <h4 className={`font-semibold mb-2 ${
            isDark ? 'text-green-300' : 'text-green-700'
          }`}>
            Evite caracteres especiais
          </h4>
          <p className="flex items-center gap-4">
            <span className="inline-flex items-center">
              <code className="text-red-500 line-through mr-2">média_final</code>
              ❌
            </span>
            <span className="inline-flex items-center">
              <code className="text-green-500 mr-2">mediaFinal</code>
              ✅
            </span>
          </p>
        </div>

        <div>
          <h4 className={`font-semibold mb-2 ${
            isDark ? 'text-green-300' : 'text-green-700'
          }`}>
            Use camelCase
          </h4>
          <p className="flex items-center gap-4">
            <span className="inline-flex items-center">
              <code className="text-red-500 line-through mr-2">idade_usuario</code>
              ❌
            </span>
            <span className="inline-flex items-center">
              <code className="text-green-500 mr-2">idadeUsuario</code>
              ✅
            </span>
          </p>
        </div>
      </div>
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