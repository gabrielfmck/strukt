// src/pages/learn/Variables.tsx
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';

const Variables = () => {
  const content = (
    <div>
      <h2>O que são variáveis?</h2>
      <p className="mb-6">
        Variáveis são espaços na memória do computador que armazenam dados. 
        Pense nelas como caixas onde você pode guardar diferentes tipos de informação.
      </p>

      <h3 className="text-xl font-semibold mb-4">Tipos de Dados Básicos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-primary-600 mb-3">Números</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-mono bg-gray-200 px-2 py-1 rounded mr-2">int</span>
              <span>1, 2, 3, -1, -2, -3</span>
            </li>
            <li className="flex items-start">
              <span className="font-mono bg-gray-200 px-2 py-1 rounded mr-2">float</span>
              <span>1.5, 3.14, -2.8</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-primary-600 mb-3">Texto</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-mono bg-gray-200 px-2 py-1 rounded mr-2">string</span>
              <span>"Olá, mundo!", "Programação"</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-primary-600 mb-3">Booleano</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-mono bg-gray-200 px-2 py-1 rounded mr-2">bool</span>
              <span>true, false</span>
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Exemplos de Uso</h3>
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
        language="javascript"
      />

      <h3 className="text-xl font-semibold mt-8 mb-4">Boas Práticas</h3>
      <div className="bg-green-50 p-6 rounded-lg space-y-3">
        <div>
          <h4 className="font-semibold text-green-700">Use nomes descritivos</h4>
          <p className="text-green-600">
            Em vez de <code className="text-red-500">x</code>, use <code className="text-green-500">idade</code>
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-green-700">Comece com letra minúscula</h4>
          <p className="text-green-600">
            Use <code className="text-green-500">nomeCompleto</code> em vez de <code className="text-red-500">NomeCompleto</code>
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-green-700">Evite caracteres especiais</h4>
          <p className="text-green-600">
            Use <code className="text-green-500">mediaFinal</code> em vez de <code className="text-red-500">média_final</code>
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-green-700">Use camelCase</h4>
          <p className="text-green-600">
            Use <code className="text-green-500">idadeUsuario</code> em vez de <code className="text-red-500">idade_usuario</code>
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