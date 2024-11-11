// src/pages/Practice.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/theme/ThemeContext';
import CodeEditor from '../components/learning/CodeEditor';

const exercises = [
  {
    id: 1,
    title: 'Inverter Array',
    difficulty: 'Fácil',
    category: 'Arrays',
    description: 'Escreva uma função que inverta os elementos de um array sem usar métodos auxiliares.',
    template: `function inverterArray(arr) {
  // Seu código aqui
  return arr;
}`,
    testCases: [
      { input: '[1, 2, 3, 4, 5]', expectedOutput: '[5, 4, 3, 2, 1]' },
      { input: '[10, 20]', expectedOutput: '[20, 10]' },
    ],
  },
  {
    id: 2,
    title: 'Encontrar Elemento Duplicado',
    difficulty: 'Médio',
    category: 'Arrays',
    description: 'Encontre o primeiro elemento duplicado em um array de números.',
    template: `function encontrarDuplicado(arr) {
  // Seu código aqui
  return -1; // Retorna -1 se não encontrar duplicados
}`,
    testCases: [
      { input: '[1, 3, 4, 2, 2]', expectedOutput: '2' },
      { input: '[3, 1, 3, 4, 2]', expectedOutput: '3' },
    ],
  },
  {
    id: 3,
    title: 'Implementar Pilha',
    difficulty: 'Médio',
    category: 'Estruturas de Dados',
    description: 'Implemente uma pilha (stack) com as operações push, pop e peek.',
    template: `class Stack {
  constructor() {
    // Inicialização da pilha
  }

  push(element) {
    // Adicionar elemento
  }

  pop() {
    // Remover e retornar o elemento do topo
  }

  peek() {
    // Retornar o elemento do topo sem remover
  }

  isEmpty() {
    // Verificar se a pilha está vazia
  }
}`,
    testCases: [
      { 
        input: 'push(1), push(2), pop(), peek()', 
        expectedOutput: 'pop() retorna 2, peek() retorna 1' 
      },
    ],
  },
    {
      id: 4,
      title: 'Soma dos Números Pares',
      difficulty: 'Fácil',
      category: 'Arrays',
      description: 'Escreva uma função que receba um array de números e retorne a soma de todos os números pares.',
      template: `function somaPares(arr) {
    // Seu código aqui
    return 0;
  }`,
      testCases: [
        { input: '[1, 2, 3, 4, 5]', expectedOutput: '6' },
        { input: '[10, 15, 20, 25]', expectedOutput: '30' },
      ],
    },
    {
      id: 5,
      title: 'Verificar Palíndromo',
      difficulty: 'Médio',
      category: 'Strings',
      description: 'Escreva uma função que verifique se uma string é um palíndromo, ignorando espaços e capitalização.',
      template: `function ehPalindromo(str) {
    // Seu código aqui
    return false;
  }`,
      testCases: [
        { input: "'A man a plan a canal Panama'", expectedOutput: 'true' },
        { input: "'Hello World'", expectedOutput: 'false' },
      ],
    },
    {
      id: 6,
      title: 'Fibonacci Recursivo',
      difficulty: 'Médio',
      category: 'Recursão',
      description: 'Implemente uma função recursiva que retorne o n-ésimo número de Fibonacci.',
      template: `function fibonacci(n) {
    // Seu código aqui
    return 0;
  }`,
      testCases: [
        { input: '5', expectedOutput: '5' },
        { input: '10', expectedOutput: '55' },
      ],
    },
    {
      id: 7,
      title: 'Ordenação por Seleção',
      difficulty: 'Difícil',
      category: 'Algoritmos de Ordenação',
      description: 'Implemente o algoritmo de ordenação por seleção (Selection Sort).',
      template: `function selectionSort(arr) {
    // Seu código aqui
    return arr;
  }`,
      testCases: [
        { input: '[29, 10, 14, 37, 13]', expectedOutput: '[10, 13, 14, 29, 37]' },
        { input: '[1, 5, 3, 2, 4]', expectedOutput: '[1, 2, 3, 4, 5]' },
      ],
    },
    {
      id: 8,
      title: 'Remover Duplicados',
      difficulty: 'Médio',
      category: 'Arrays',
      description: 'Escreva uma função que remova os elementos duplicados de um array.',
      template: `function removerDuplicados(arr) {
    // Seu código aqui
    return arr;
  }`,
      testCases: [
        { input: '[1, 2, 2, 3, 4, 4, 5]', expectedOutput: '[1, 2, 3, 4, 5]' },
        { input: '[10, 10, 20, 30, 30, 30]', expectedOutput: '[10, 20, 30]' },
      ],
    },
    {
      id: 9,
      title: 'Calculadora de Potências',
      difficulty: 'Difícil',
      category: 'Matemática',
      description: 'Crie uma função que calcule a potência de um número dado um expoente, sem usar operadores de potência.',
      template: `function potencia(base, expoente) {
    // Seu código aqui
    return 1;
  }`,
      testCases: [
        { input: '2, 3', expectedOutput: '8' },
        { input: '5, 0', expectedOutput: '1' },
      ],
    },
    {
      id: 10,
      title: 'Verificar Anagramas',
      difficulty: 'Médio',
      category: 'Strings',
      description: 'Escreva uma função que verifique se duas strings são anagramas uma da outra.',
      template: `function saoAnagramas(str1, str2) {
    // Seu código aqui
    return false;
  }`,
      testCases: [
        { input: "'listen', 'silent'", expectedOutput: 'true' },
        { input: "'hello', 'world'", expectedOutput: 'false' },
      ],
    },
    {
      id: 11,
      title: 'Imprimir "Olá, Mundo!"',
      difficulty: 'Fácil',
      category: 'Introdução',
      description: 'Escreva um programa em C que imprima "Olá, Mundo!" na tela.',
      template: `#include <stdio.h>
  
  int main() {
    // Seu código aqui
    return 0;
  }`,
      testCases: [
        { input: '', expectedOutput: 'Olá, Mundo!' },
      ],
    },
    {
      id: 12,
      title: 'Soma de Dois Números',
      difficulty: 'Fácil',
      category: 'Operações Matemáticas',
      description: 'Escreva um programa que leia dois números inteiros e exiba a soma deles.',
      template: `#include <stdio.h>
  
  int main() {
    int a, b;
    // Seu código aqui
    return 0;
  }`,
      testCases: [
        { input: '2 3', expectedOutput: '5' },
        { input: '10 20', expectedOutput: '30' },
      ],
    },
    {
      id: 13,
      title: 'Verificar Número Par ou Ímpar',
      difficulty: 'Fácil',
      category: 'Estruturas de Controle',
      description: 'Escreva um programa que verifique se um número é par ou ímpar.',
      template: `#include <stdio.h>
  
  int main() {
    int num;
    // Seu código aqui
    return 0;
  }`,
      testCases: [
        { input: '4', expectedOutput: 'Par' },
        { input: '7', expectedOutput: 'Ímpar' },
      ],
    },
    {
      id: 14,
      title: 'Maior de Dois Números',
      difficulty: 'Fácil',
      category: 'Estruturas de Controle',
      description: 'Escreva um programa que leia dois números e imprima o maior deles.',
      template: `#include <stdio.h>
  
  int main() {
    int a, b;
    // Seu código aqui
    return 0;
  }`,
      testCases: [
        { input: '8 3', expectedOutput: '8' },
        { input: '10 20', expectedOutput: '20' },
      ],
    },
    {
      id: 15,
      title: 'Calcular Fatorial',
      difficulty: 'Fácil',
      category: 'Laços',
      description: 'Escreva um programa que calcule o fatorial de um número inteiro positivo.',
      template: `#include <stdio.h>
  
  int main() {
    int num;
    // Seu código aqui
    return 0;
  }`,
      testCases: [
        { input: '5', expectedOutput: '120' },
        { input: '3', expectedOutput: '6' },
      ],
    },
    {
      id: 16,
      title: 'Tabuada',
      difficulty: 'Fácil',
      category: 'Laços',
      description: 'Escreva um programa que exiba a tabuada de um número de 1 a 10.',
      template: `#include <stdio.h>
  
  int main() {
    int num;
    // Seu código aqui
    return 0;
  }`,
      testCases: [
        { input: '5', expectedOutput: '5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50' },
        { input: '3', expectedOutput: '3 x 1 = 3\n3 x 2 = 6\n...\n3 x 10 = 30' },
      ],
    },
    {
      id: 17,
      title: 'Cálculo de Média',
      difficulty: 'Fácil',
      category: 'Operações Matemáticas',
      description: 'Escreva um programa que calcule a média de três notas e exiba o resultado.',
      template: `#include <stdio.h>
  
  int main() {
    float nota1, nota2, nota3;
    // Seu código aqui
    return 0;
  }`,
      testCases: [
        { input: '7.5 8.0 9.0', expectedOutput: '8.2' },
        { input: '6.0 7.0 8.0', expectedOutput: '7.0' },
      ],
    },
      {
        id: 18,
        title: 'Calcular Média Ponderada',
        difficulty: 'Médio',
        category: 'Matemática',
        description: 'Escreva um programa que calcule a média ponderada de três notas com seus respectivos pesos.',
        template: `#include <stdio.h>
    
    int main() {
      float nota1, nota2, nota3;
      int peso1, peso2, peso3;
      // Seu código aqui
      return 0;
    }`,
        testCases: [
          { input: '7 8 9 2 3 5', expectedOutput: '8.2' },
          { input: '5 6 7 1 1 1', expectedOutput: '6.0' },
        ],
      },
      {
        id: 19,
        title: 'Encontrar Elemento em um Array',
        difficulty: 'Fácil',
        category: 'Arrays',
        description: 'Escreva um programa que receba um array e um número, e retorne se o número está presente no array.',
        template: `#include <stdio.h>
    
    int main() {
      int arr[5], num;
      // Seu código aqui
      return 0;
    }`,
        testCases: [
          { input: '[1, 2, 3, 4, 5] 3', expectedOutput: 'Encontrado' },
          { input: '[10, 20, 30, 40, 50] 25', expectedOutput: 'Não encontrado' },
        ],
      },
      {
        id: 20,
        title: 'Número Primo',
        difficulty: 'Médio',
        category: 'Matemática',
        description: 'Escreva uma função que verifique se um número é primo.',
        template: `#include <stdio.h>
    
    int ehPrimo(int num) {
      // Seu código aqui
    }
    
    int main() {
      int num;
      // Seu código aqui
      return 0;
    }`,
        testCases: [
          { input: '5', expectedOutput: 'Primo' },
          { input: '10', expectedOutput: 'Não é primo' },
        ],
      },
      {
        id: 21,
        title: 'Calcular Máximo Divisor Comum (MDC)',
        difficulty: 'Difícil',
        category: 'Matemática',
        description: 'Implemente uma função que calcule o máximo divisor comum (MDC) entre dois números usando o Algoritmo de Euclides.',
        template: `#include <stdio.h>
    
    int mdc(int a, int b) {
      // Seu código aqui
    }
    
    int main() {
      int a, b;
      // Seu código aqui
      return 0;
    }`,
        testCases: [
          { input: '48 18', expectedOutput: '6' },
          { input: '100 25', expectedOutput: '25' },
        ],
      },
      {
        id: 22,
        title: 'Inverter uma String',
        difficulty: 'Médio',
        category: 'Strings',
        description: 'Escreva um programa que inverta uma string fornecida pelo usuário.',
        template: `#include <stdio.h>
    #include <string.h>
    
    int main() {
      char str[100];
      // Seu código aqui
      return 0;
    }`,
        testCases: [
          { input: '"hello"', expectedOutput: '"olleh"' },
          { input: '"world"', expectedOutput: '"dlrow"' },
        ],
      },
      {
        id: 23,
        title: 'Ordenação de Array (Bubble Sort)',
        difficulty: 'Difícil',
        category: 'Algoritmos de Ordenação',
        description: 'Implemente o algoritmo de ordenação Bubble Sort para ordenar um array de números inteiros.',
        template: `#include <stdio.h>
    
    void bubbleSort(int arr[], int n) {
      // Seu código aqui
    }
    
    int main() {
      int arr[5];
      // Seu código aqui
      return 0;
    }`,
        testCases: [
          { input: '[5, 2, 9, 1, 5]', expectedOutput: '[1, 2, 5, 5, 9]' },
          { input: '[3, 0, 8, 7, 6]', expectedOutput: '[0, 3, 6, 7, 8]' },
        ],
      },
      {
        id: 24,
        title: 'Somatório Recursivo',
        difficulty: 'Médio',
        category: 'Recursão',
        description: 'Escreva uma função recursiva que retorne o somatório de todos os números de 1 até n.',
        template: `#include <stdio.h>
    
    int somatorio(int n) {
      // Seu código aqui
    }
    
    int main() {
      int n;
      // Seu código aqui
      return 0;
    }`,
        testCases: [
          { input: '5', expectedOutput: '15' },
          { input: '10', expectedOutput: '55' },
        ],
      },
      {
        id: 25,
        title: 'Contar Palavras em uma String',
        difficulty: 'Difícil',
        category: 'Strings',
        description: 'Escreva um programa que conte o número de palavras em uma string.',
        template: `#include <stdio.h>
    #include <string.h>
    
    int main() {
      char str[100];
      // Seu código aqui
      return 0;
    }`,
        testCases: [
          { input: '"Hello world"', expectedOutput: '2' },
          { input: '"This is a test string"', expectedOutput: '5' },
        ],
      },
      {
        id: 26,
        title: 'Calcular Média de Notas com Aprovação',
        difficulty: 'Médio',
        category: 'Operações Matemáticas',
        description: 'Escreva um programa que calcule a média de notas de um aluno e determine se ele foi aprovado (média >= 6).',
        template: `#include <stdio.h>
    
    int main() {
      float nota1, nota2, nota3;
      // Seu código aqui
      return 0;
    }`,
        testCases: [
          { input: '7.0 8.0 6.0', expectedOutput: 'Média: 7.0 - Aprovado' },
          { input: '5.0 4.0 6.0', expectedOutput: 'Média: 5.0 - Reprovado' },
        ],
      },
      {
        id: 27,
        title: 'Jogo de Adivinhação',
        difficulty: 'Médio',
        category: 'Interação com Usuário',
        description: 'Escreva um programa onde o usuário tenta adivinhar um número entre 1 e 100. O programa deve informar se o palpite é maior ou menor que o número correto.',
        template: `#include <stdio.h>
    #include <stdlib.h>
    #include <time.h>
    
    int main() {
      // Inicialize o gerador de números aleatórios
      srand(time(0));
      int numeroCorreto = rand() % 100 + 1;
      int palpite;
      // Seu código aqui
      return 0;
    }`,
        testCases: [
          { input: 'simulado: usuário adivinha o número correto', expectedOutput: 'Parabéns! Você acertou.' },
        ],
      },
    ];

    const Practice = () => {
      const { theme } = useTheme();
      const [selectedExercise, setSelectedExercise] = useState(exercises[0]);
      const [userCode, setUserCode] = useState(selectedExercise.template);
      const [results, setResults] = useState<string[]>([]);
    
      const handleRunTests = () => {
        const testResults = selectedExercise.testCases.map((testCase) => {
          try {
            // Criando a função a partir do código do usuário
            const userFunction = eval(`(${userCode})`);
    
            // Parseando o input do teste (para arrays ou objetos)
            const parsedInput = JSON.parse(testCase.input);
    
            // Executando a função do usuário com os inputs
            const userOutput = Array.isArray(parsedInput)
              ? userFunction(...parsedInput)  // Se for array, espalhamos os argumentos
              : userFunction(parsedInput);     // Se for valor único, passamos direto
    
            // Verificando se a saída corresponde ao esperado
            if (JSON.stringify(userOutput) === JSON.stringify(JSON.parse(testCase.expectedOutput))) {
              return `Teste para input ${testCase.input}: Passou ✅`;
            } else {
              return `Teste para input ${testCase.input}: Falhou ❌ - Resultado esperado: ${testCase.expectedOutput}, Obtido: ${JSON.stringify(userOutput)}`;
            }
          } catch (error) {
            const errorMessage = (error instanceof Error) ? error.message : "Erro desconhecido";
            return `Erro ao executar o teste para input ${testCase.input}: ${errorMessage}`;
          }
        });
    
        setResults(testResults);
      };
    
      return (
        <div className={`min-h-screen py-12 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className={`text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Exercícios de Programação
              </h1>
              <p className={`text-xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Pratique seus conhecimentos resolvendo desafios
              </p>
            </div>
    
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar com lista de exercícios */}
              <div className="lg:col-span-1">
                <div className={`rounded-lg shadow-lg overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <div className="p-4">
                    <h2 className={`text-lg font-semibold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Exercícios Disponíveis
                    </h2>
                    <nav className="space-y-2">
                      {exercises.map((exercise) => (
                        <button
                          key={exercise.id}
                          onClick={() => {
                            setSelectedExercise(exercise);
                            setUserCode(exercise.template);
                            setResults([]);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                            selectedExercise.id === exercise.id
                              ? theme === 'dark'
                                ? 'bg-primary-900/50 text-primary-400'
                                : 'bg-primary-50 text-primary-600'
                              : theme === 'dark'
                                ? 'text-gray-300 hover:bg-gray-700'
                                : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <h3 className="font-medium">{exercise.title}</h3>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className={`
                              text-xs px-2 py-1 rounded-full
                              ${exercise.difficulty === 'Fácil'
                                ? theme === 'dark' ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                                : exercise.difficulty === 'Médio'
                                ? theme === 'dark' ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
                                : theme === 'dark' ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'}
                            `}>
                              {exercise.difficulty}
                            </span>
                            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                              {exercise.category}
                            </span>
                          </div>
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
    
              {/* Área principal */}
              <div className="lg:col-span-3 space-y-8">
                <motion.div
                  key={selectedExercise.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Descrição do exercício */}
                  <div className={`rounded-lg shadow-lg p-6 mb-8 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <h2 className={`text-2xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {selectedExercise.title}
                    </h2>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className={`
                        text-sm px-2 py-1 rounded-full
                        ${selectedExercise.difficulty === 'Fácil'
                          ? theme === 'dark' ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                          : selectedExercise.difficulty === 'Médio'
                          ? theme === 'dark' ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
                          : theme === 'dark' ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'}
                      `}>
                        {selectedExercise.difficulty}
                      </span>
                      <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                        {selectedExercise.category}
                      </span>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-300 mb-4' : 'text-gray-600 mb-4'}>
                      {selectedExercise.description}
                    </p>
                    
                    <div className={theme === 'dark' ? 'bg-gray-700 rounded-lg p-4' : 'bg-gray-50 rounded-lg p-4'}>
                      <h3 className={`text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Casos de Teste:
                      </h3>
                      <ul className="space-y-2">
                        {selectedExercise.testCases.map((testCase, index) => (
                          <li key={index} className={`text-sm ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <span className="font-mono">Input: {testCase.input}</span>
                            <br />
                            <span className="font-mono">Output esperado: {testCase.expectedOutput}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
    
                  {/* Editor de código e resultados */}
                  <div className={`rounded-lg shadow-lg p-6 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className={`text-lg font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Sua Solução
                      </h3>
                      <button
                        onClick={handleRunTests}
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 transition-colors"
                      >
                        Executar Testes
                      </button>
                    </div>
    
                    <CodeEditor
                      initialCode={userCode}
                      onCodeChange={setUserCode}
                    />
    
                    {results.length > 0 && (
                      <div className="mt-6">
                        <h4 className={`text-lg font-semibold mb-3 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          Resultados
                        </h4>
                        <div className={theme === 'dark' ? 'bg-gray-700 rounded-lg p-4' : 'bg-gray-50 rounded-lg p-4'}>
                          {results.map((result, index) => (
                            <div
                              key={index}
                              className={`text-sm ${
                                result.includes('Passou')
                                  ? theme === 'dark' ? 'text-green-400' : 'text-green-600'
                                  : theme === 'dark' ? 'text-red-400' : 'text-red-600'
                              }`}
                            >
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Practice;