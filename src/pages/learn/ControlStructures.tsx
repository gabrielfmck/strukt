import { motion } from 'framer-motion';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import { useTheme } from '../../contexts/theme/ThemeContext';

const ControlStructures = () => {
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
          Estruturas de Controle
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Estruturas de controle permitem que seu programa tome decisões e execute 
          diferentes blocos de código baseados em condições.
        </motion.p>
      </section>

      {/* Estruturas Condicionais */}
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
          Estruturas Condicionais
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
          <h4 className="text-lg font-semibold text-primary-500 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            if/else
          </h4>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Usado para executar código baseado em uma condição:
          </p>
          <CodeEditor
            initialCode={`#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída

int main() {
    int numero;  // Declara uma variável inteira para armazenar o número digitado

    // Exibe uma mensagem para o usuário solicitando a entrada de um número
    printf("Digite um número: ");
    // Lê um número inteiro inserido pelo usuário e o armazena na variável 'numero'
    scanf("%d", &numero);

    // Verifica se o número é maior que zero
    if (numero > 0) {
        // Se for maior que zero, exibe uma mensagem indicando que o número é positivo
        printf("O número é positivo.");
    }
    // Caso contrário, verifica se o número é menor que zero
    else if (numero < 0) {
        // Se for menor que zero, exibe uma mensagem indicando que o número é negativo
        printf("O número é negativo.");
    }
    // Se não é nem maior nem menor que zero, então é igual a zero
    else {
        // Exibe uma mensagem indicando que o número é zero
        printf("O número é zero.");
    }

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
}
`}
            language="c"
          />
        </motion.div>
      </section>

      {/* Loops */}
      <section>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Loops (Estruturas de Repetição)
        </motion.h3>

        <div className="space-y-6">
          {[
            {
              title: 'for',
              description: 'Usado quando sabemos quantas vezes queremos repetir algo:',
              code: `#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída

int main() {
    // Inicia um loop 'for' que declara a variável 'i' e a inicializa com o valor 1
    // A condição 'i <= 5' mantém o loop ativo enquanto 'i' é menor ou igual a 5
    // 'i++' incrementa 'i' em 1 a cada iteração
    for (int i = 1; i <= 5; i++) {
        // Imprime o valor atual de 'i' na tela, sem pular para a próxima linha
        printf("%d", i);
    }

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
}
`
            },
            {
              title: 'while',
              description: 'Usado quando queremos repetir algo enquanto uma condição for verdadeira:',
              code: `#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída

int main() {
    int numero = 0;  // Declara uma variável inteira 'numero' e a inicializa com 0

    // Inicia um loop 'while' que continuará enquanto 'numero' for menor ou igual a 10
    while (numero <= 10) {
        // Solicita ao usuário que digite um número maior que 10
        printf("Digite um número maior que 10: ");
        // Lê o número inserido pelo usuário e o armazena na variável 'numero'
        scanf("%d", &numero);
    }

    // Quando o loop terminar (ou seja, quando 'numero' for maior que 10), exibe uma mensagem de confirmação
    printf("Número válido!");

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
}
`
            }
          ].map((loop, index) => (
            <motion.div
              key={loop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`rounded-lg shadow-md p-6 border ${
                isDark 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}
            >
              <h4 className="text-lg font-semibold text-primary-500 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {loop.title}
              </h4>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {loop.description}
              </p>
              <CodeEditor
                initialCode={loop.code}
                language="c"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* switch/case */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg shadow-md p-6 border ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
          }`}
        >
          <h4 className="text-lg font-semibold text-primary-500 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            switch/case
          </h4>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Usado para múltiplas condições sobre uma mesma variável:
          </p>
          <CodeEditor
            initialCode={`#include <stdio.h>  // Inclui a biblioteca padrão de entrada e saída

int main() {
    int dia;  // Declara uma variável inteira 'dia' para armazenar o dia da semana

    // Exibe uma mensagem para o usuário solicitando a entrada de um número entre 1 e 7
    printf("Digite um número de 1 a 7 para o dia da semana: ");
    // Lê o número inteiro inserido pelo usuário e armazena na variável 'dia'
    scanf("%d", &dia);

    // Inicia uma estrutura 'switch' para verificar o valor da variável 'dia'
    switch (dia) {
        case 1:  // Caso o valor de 'dia' seja 1
            printf("Domingo");  // Exibe "Domingo"
            break;  // Encerra o 'case' e sai do 'switch'
        case 2:  // Caso o valor de 'dia' seja 2
            printf("Segunda-feira");  // Exibe "Segunda-feira"
            break;
        case 3:  // Caso o valor de 'dia' seja 3
            printf("Terça-feira");  // Exibe "Terça-feira"
            break;
        case 4:  // Caso o valor de 'dia' seja 4
            printf("Quarta-feira");  // Exibe "Quarta-feira"
            break;
        case 5:  // Caso o valor de 'dia' seja 5
            printf("Quinta-feira");  // Exibe "Quinta-feira"
            break;
        case 6:  // Caso o valor de 'dia' seja 6
            printf("Sexta-feira");  // Exibe "Sexta-feira"
            break;
        case 7:  // Caso o valor de 'dia' seja 7
            printf("Sábado");  // Exibe "Sábado"
            break;
        default:  // Caso o valor de 'dia' não corresponda a nenhum dos casos acima
            // Exibe uma mensagem de erro informando que o número é inválido
            printf("Número inválido! Digite um valor entre 1 e 7.");
    }

    return 0;  // Retorna 0 para indicar que o programa terminou com sucesso
}
`}
            language="c"
          />
        </motion.div>
      </section>

      {/* Dicas */}
      <section>
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
              'Sempre use chaves {} para delimitar blocos de código, mesmo que seja apenas uma linha',
              'Indente seu código para melhor legibilidade',
              'Não esqueça do break no switch/case',
              'Cuidado com loops infinitos - sempre garanta que a condição de parada será alcançada'
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
      </section>

      {/* Exercícios */}
      <section>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl font-semibold mb-6 flex items-center gap-3 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Exercícios Práticos
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg p-6 ${
            isDark 
              ? 'bg-emerald-900/20 text-emerald-200' 
              : 'bg-emerald-50 text-emerald-800'
          }`}
        >
          <ol className="space-y-4 list-decimal list-inside">
            {[
              'Escreva um programa que imprima todos os números pares de 0 a 10',
              'Crie um programa que determine se um número é positivo, negativo ou zero',
              'Faça um programa que calcule a média de 3 notas e imprima "Aprovado" se a média for maior ou igual a 7'
            ].map((exercise, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {exercise}
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </section>
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