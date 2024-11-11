// src/pages/learn/ControlStructures.tsx
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import { useTheme } from '../../contexts/theme/ThemeContext';

const ControlStructures = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = (
    <div>
      <h2 className={`text-2xl font-bold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Estruturas de Controle
      </h2>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Estruturas de controle permitem que seu programa tome decisões e execute 
        diferentes blocos de código baseados em condições.
      </p>

      <h3 className={`text-xl font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Estruturas Condicionais
      </h3>
      
      {/* if/else */}
      <div className={`p-6 rounded-lg mb-8 transition-colors duration-200 ${
        isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
      }`}>
        <h4 className="font-semibold text-primary-500 mb-3">if/else</h4>
        <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Usado para executar código baseado em uma condição:
        </p>
        <CodeEditor
          initialCode={`#include <stdio.h>

int main() {
    int numero;

    printf("Digite um número: ");
    scanf("%d", &numero);

    if (numero > 0) {
        printf("O número é positivo.\n");
    } else if (numero < 0) {
        printf("O número é negativo.\n");
    } else {
        printf("O número é zero.\n");
    }

    return 0;
}`}
          language="c"
        />
      </div>

      <h3 className={`text-xl font-semibold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Loops (Estruturas de Repetição)
      </h3>
      
      {/* for */}
      <div className={`p-6 rounded-lg mb-6 transition-colors duration-200 ${
        isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
      }`}>
        <h4 className="font-semibold text-primary-500 mb-3">for</h4>
        <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Usado quando sabemos quantas vezes queremos repetir algo:
        </p>
        <CodeEditor
          initialCode={`#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d\n", i);
    }

    return 0;
}`}
          language="c"
        />
      </div>

      {/* while */}
      <div className={`p-6 rounded-lg mb-6 transition-colors duration-200 ${
        isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
      }`}>
        <h4 className="font-semibold text-primary-500 mb-3">while</h4>
        <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Usado quando queremos repetir algo enquanto uma condição for verdadeira:
        </p>
        <CodeEditor
          initialCode={`#include <stdio.h>

int main() {
    int numero = 0;

    while (numero <= 10) {
        printf("Digite um número maior que 10: ");
        scanf("%d", &numero);
    }

    printf("Número válido!\n");

    return 0;
}`}
          language="c"
        />
      </div>

      {/* switch/case */}
      <div className={`p-6 rounded-lg mb-8 transition-colors duration-200 ${
        isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
      }`}>
        <h4 className="font-semibold text-primary-500 mb-3">switch/case</h4>
        <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Usado para múltiplas condições sobre uma mesma variável:
        </p>
        <CodeEditor
          initialCode={`#include <stdio.h>

int main() {
    int dia;

    printf("Digite um número de 1 a 7 para o dia da semana: ");
    scanf("%d", &dia);

    switch (dia) {
        case 1:
            printf("Domingo\n");
            break;
        case 2:
            printf("Segunda-feira\n");
            break;
        case 3:
            printf("Terça-feira\n");
            break;
        case 4:
            printf("Quarta-feira\n");
            break;
        case 5:
            printf("Quinta-feira\n");
            break;
        case 6:
            printf("Sexta-feira\n");
            break;
        case 7:
            printf("Sábado\n");
            break;
        default:
            printf("Número inválido! Digite um valor entre 1 e 7.\n");
    }

    return 0;
}`}
          language="c"
        />
      </div>

      {/* Dicas */}
      <div className={`p-6 rounded-lg border-l-4 ${
        isDark 
          ? 'bg-yellow-900/20 border-yellow-500 text-yellow-200'
          : 'bg-yellow-50 border-yellow-500 text-yellow-700'
      }`}>
        <h4 className={`text-lg font-semibold mb-4 ${
          isDark ? 'text-yellow-300' : 'text-yellow-800'
        }`}>
          Dicas Importantes
        </h4>
        <ul className="space-y-3">
          {[
            'Sempre use chaves {} para delimitar blocos de código, mesmo que seja apenas uma linha',
            'Indente seu código para melhor legibilidade',
            'Não esqueça do break no switch/case',
            'Cuidado com loops infinitos - sempre garanta que a condição de parada será alcançada'
          ].map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className={`font-bold mr-2 ${
                isDark ? 'text-yellow-400' : 'text-yellow-600'
              }`}>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Exercícios Práticos */}
      <h3 className={`text-xl font-semibold mt-8 mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Exercícios Práticos
      </h3>
      <div className={`p-6 rounded-lg ${
        isDark 
          ? 'bg-green-900/20 text-green-200' 
          : 'bg-green-50 text-green-800'
      }`}>
        <ol className="list-decimal list-inside space-y-4">
          <li>Escreva um programa que imprima todos os números pares de 0 a 10</li>
          <li>Crie um programa que determine se um número é positivo, negativo ou zero</li>
          <li>Faça um programa que calcule a média de 3 notas e imprima "Aprovado" se a média for maior ou igual a 7</li>
        </ol>
      </div>
    </div>
  );

  return (
    <ContentPage
      title="Estruturas de Controle"
      content={content}
      duration="20 min"
    />
  );
};

export default ControlStructures;