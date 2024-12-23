// src/pages/Practice.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/theme/ThemeContext";
import CodeEditor from "../components/learning/CodeEditor";
import { compileAndExecute } from "../services/compilerService";
import {
  HiAcademicCap,
  HiCode,
  HiLightningBolt,
  HiChip,
  HiCollection,
  HiCube,
  HiDatabase,
} from "react-icons/hi";
import { toast } from "react-toastify";

type Difficulty = "Fácil" | "Médio" | "Difícil";

interface Exercise {
  id: number;
  title: string;
  difficulty: Difficulty;
  category: string;
  description: string;
  template: string;
  hints?: string[];
  explanation?: string;
  testCases: {
    input: string;
    expectedOutput: string;
    explanation?: string;
  }[];
}

interface CategoryInfo {
  name: string;
  icon: JSX.Element;
  description: string;
  color: {
    light: string;
    dark: string;
    text: string;
    darkText: string;
  };
}

const getLanguageFromExercise = (exercise: Exercise): 'c' | 'javascript' => {
  if (exercise.template.includes('#include <stdio.h>')) {
    return 'c';
  }
  return 'javascript';
};

interface CategoryInfo {
  name: string;
  icon: JSX.Element;
  description: string;
  color: {
    light: string;
    dark: string;
    text: string;
    darkText: string;
  };
}

const categories: Record<string, CategoryInfo> = {
  Introdução: {
    name: "Introdução",
    icon: <HiAcademicCap className="w-5 h-5" />,
    description: "Conceitos básicos de programação",
    color: {
      light: "bg-blue-100",
      dark: "bg-blue-900/30",
      text: "text-blue-600",
      darkText: "text-blue-400",
    },
  },
  Arrays: {
    name: "Arrays",
    icon: <HiCollection className="w-5 h-5" />,
    description: "Manipulação de arrays e vetores",
    color: {
      light: "bg-purple-100",
      dark: "bg-purple-900/30",
      text: "text-purple-600",
      darkText: "text-purple-400",
    },
  },
  "Estruturas de Controle": {
    name: "Estruturas de Controle",
    icon: <HiLightningBolt className="w-5 h-5" />,
    description: "Condicionais e loops",
    color: {
      light: "bg-yellow-100",
      dark: "bg-yellow-900/30",
      text: "text-yellow-600",
      darkText: "text-yellow-400",
    },
  },
  "Estruturas de Dados": {
    name: "Estruturas de Dados",
    icon: <HiDatabase className="w-5 h-5" />,
    description: "Implementação de estruturas de dados",
    color: {
      light: "bg-green-100",
      dark: "bg-green-900/30",
      text: "text-green-600",
      darkText: "text-green-400",
    },
  },
  "Algoritmos de Ordenação": {
    name: "Algoritmos de Ordenação",
    icon: <HiCube className="w-5 h-5" />,
    description: "Implementação de algoritmos de ordenação",
    color: {
      light: "bg-red-100",
      dark: "bg-red-900/30",
      text: "text-red-600",
      darkText: "text-red-400",
    },
  },
  "Strings": {
    name: "Strings",
    icon: <HiCode className="w-5 h-5" />,
    description: "Manipulação de strings",
    color: {
      light: "bg-teal-100",
      dark: "bg-teal-900/30",
      text: "text-teal-600",
      darkText: "text-teal-400",
    },
  },
  "Matemática": {
    name: "Matemática",
    icon: <HiChip className="w-5 h-5" />,
    description: "Problemas matemáticos",
    color: {
      light: "bg-indigo-100",
      dark: "bg-indigo-900/30",
      text: "text-indigo-600",
      darkText: "text-indigo-400",
    },
  },
  "Recursão": {
    name: "Recursão",
    icon: <HiLightningBolt className="w-5 h-5" />,
    description: "Problemas recursivos",
    color: {
      light: "bg-pink-100",
      dark: "bg-pink-900/30",
      text: "text-pink-600",
      darkText: "text-pink-400",
    },
  },
  "Operações Matemáticas": {
    name: "Operações Matemáticas",
    icon: <HiChip className="w-5 h-5" />,
    description: "Cálculos e operações matemáticas",
    color: {
      light: "bg-indigo-100",
      dark: "bg-indigo-900/30",
      text: "text-indigo-600",
      darkText: "text-indigo-400",
    },
  },
  "Laços": {
    name: "Laços",
    icon: <HiLightningBolt className="w-5 h-5" />,
    description: "Estruturas de repetição",
    color: {
      light: "bg-yellow-100",
      dark: "bg-yellow-900/30",
      text: "text-yellow-600",
      darkText: "text-yellow-400",
    },
  },
};

const exercises = [
  {
    id: 1,
    title: "Inverter Array",
    difficulty: "Fácil" as Difficulty,
    category: "Arrays",
    description:
      "Escreva uma função que inverta os elementos de um array sem usar métodos auxiliares.",
    template: `#include <stdio.h>

void inverterArray(int array[], int tamanho) {
    // Seu código aqui para inverter os elementos do array
}

int main() {
    int array[] = { /* Inicialize o array com valores */ };
    int tamanho = sizeof(array) / sizeof(array[0]);  // Calcula o tamanho do array

    inverterArray(array, tamanho);

    // Seu código aqui para exibir o array invertido

    return 0;
}
`,
    testCases: [
      { input: "[1, 2, 3, 4, 5]", expectedOutput: "[5, 4, 3, 2, 1]" },
      { input: "[10, 20]", expectedOutput: "[20, 10]" },
    ],
  },
  {
    id: 2,
    title: "Encontrar Elemento Duplicado",
    difficulty: "Médio" as Difficulty,
    category: "Arrays",
    description:
      "Encontre o primeiro elemento duplicado em um array de números.",
    template: `#include <stdio.h>

int main() {
    // Seu código aqui
    return 0;
}
`,
    testCases: [
      { input: "[1, 3, 4, 2, 2]", expectedOutput: "2" },
      { input: "[3, 1, 3, 4, 2]", expectedOutput: "3" },
    ],
  },
  {
    id: 3,
    title: "Implementar Pilha",
    difficulty: "Médio" as Difficulty,
    category: "Estruturas de Dados",
    description:
      "Implemente uma pilha (stack) com as operações push, pop e peek.",
    template: `#include <stdio.h>

int main() {
    // Seu código aqui
    return 0;
}
`,
    testCases: [
      {
        input: "push(1), push(2), pop(), peek()",
        expectedOutput: "pop() retorna 2, peek() retorna 1",
      },
    ],
  },
  {
    id: 4,
    title: "Soma dos Números Pares",
    difficulty: "Fácil" as Difficulty,
    category: "Arrays",
    description:
      "Escreva uma função que receba um array de números e retorne a soma de todos os números pares.",
    template: `#include <stdio.h>

int main() {
    int num, soma = 0, quantidade;

    // Solicite a quantidade de números
    // Seu código aqui

    for (int i = 0; i < quantidade; i++) {
        // Solicite o próximo número
        // Seu código aqui

        // Verifique se é par e, se for, some à variável 'soma'
        // Seu código aqui
    }

    printf("Soma dos números pares: %d\n", soma);

    return 0;
}`,
    testCases: [
      { input: "[1, 2, 3, 4, 5]", expectedOutput: "6" },
      { input: "[10, 15, 20, 25]", expectedOutput: "30" },
    ],
  },
  {
    id: 5,
    title: "Verificar Palíndromo",
    difficulty: "Médio" as Difficulty,
    category: "Strings",
    description:
      "Escreva uma função que verifique se uma string é um palíndromo, ignorando espaços e capitalização.",
    template: `#include <stdio.h>

int main() {
    // Seu código aqui
    return 0;
}
`,
    testCases: [
      { input: "'A man a plan a canal Panama'", expectedOutput: "true" },
      { input: "'Hello World'", expectedOutput: "false" },
    ],
  },
  {
    id: 6,
    title: "Fibonacci Recursivo",
    difficulty: "Médio" as Difficulty,
    category: "Recursão",
    description:
      "Implemente uma função recursiva que retorne o n-ésimo número de Fibonacci.",
    template: `#include <stdio.h>

int main() {
    // Seu código aqui
    return 0;
}
`,
    testCases: [
      { input: "5", expectedOutput: "5" },
      { input: "10", expectedOutput: "55" },
    ],
  },
  {
    id: 7,
    title: "Ordenação por Seleção",
    difficulty: "Difícil" as Difficulty,
    category: "Algoritmos de Ordenação",
    description:
      "Implemente o algoritmo de ordenação por seleção (Selection Sort).",
    template: `#include <stdio.h>

int main() {
    // Seu código aqui
    return 0;
}
`,
    testCases: [
      { input: "[29, 10, 14, 37, 13]", expectedOutput: "[10, 13, 14, 29, 37]" },
      { input: "[1, 5, 3, 2, 4]", expectedOutput: "[1, 2, 3, 4, 5]" },
    ],
  },
  {
    id: 8,
    title: "Remover Duplicados",
    difficulty: "Médio" as Difficulty,
    category: "Arrays",
    description:
      "Escreva uma função que remova os elementos duplicados de um array.",
    template: `#include <stdio.h>

int main() {
    // Seu código aqui
    return 0;
}
`,
    testCases: [
      { input: "[1, 2, 2, 3, 4, 4, 5]", expectedOutput: "[1, 2, 3, 4, 5]" },
      { input: "[10, 10, 20, 30, 30, 30]", expectedOutput: "[10, 20, 30]" },
    ],
  },
  {
    id: 9,
    title: "Calculadora de Potências",
    difficulty: "Difícil" as Difficulty,
    category: "Matemática",
    description:
      "Crie uma função que calcule a potência de um número dado um expoente, sem usar operadores de potência.",
    template: `#include <stdio.h>

int main() {
    // Seu código aqui
    return 0;
}
`,
    testCases: [
      { input: "2, 3", expectedOutput: "8" },
      { input: "5, 0", expectedOutput: "1" },
    ],
  },
  {
    id: 10,
    title: "Verificar Anagramas",
    difficulty: "Médio" as Difficulty,
    category: "Strings",
    description:
      "Escreva uma função que verifique se duas strings são anagramas uma da outra.",
    template: `#include <stdio.h>

int main() {
    // Seu código aqui
    return 0;
}
`,
    testCases: [
      { input: "'listen', 'silent'", expectedOutput: "true" },
      { input: "'hello', 'world'", expectedOutput: "false" },
    ],
  },
  {
    id: 11,
    title: 'Imprimir "Ola, Mundo!"',
    difficulty: "Fácil" as Difficulty,
    category: "Introdução",
    description: 'Escreva um programa em C que imprima "Ola, Mundo!" na tela.',
    template: `#include <stdio.h>

int main() {
    // Seu código aqui para imprimir "Ola, Mundo!"
    return 0;
}
`,
    testCases: [{ input: "", expectedOutput: "Ola, Mundo!" }],
  },
  {
    id: 12,
    title: "Soma de Dois Números",
    difficulty: "Fácil" as Difficulty,
    category: "Operações Matemáticas",
    description:
      "Escreva um programa que leia dois números inteiros e exiba a soma deles.",
    template: `#include <stdio.h>

int main() {
    int num1, num2;

    // Seu código aqui para ler dois números

    // Seu código aqui para calcular e exibir a soma

    return 0;
}
`,
    testCases: [
      { input: "2 3", expectedOutput: "5" },
      { input: "10 20", expectedOutput: "30" },
    ],
  },
  {
    id: 13,
    title: "Verificar Número Par ou Ímpar",
    difficulty: "Fácil" as Difficulty,
    category: "Estruturas de Controle",
    description:
      "Escreva um programa que verifique se um número é par ou ímpar.",
    template: `#include <stdio.h>

int main() {
    int num;

    // Seu código aqui para ler o número

    // Seu código aqui para verificar se é par ou ímpar e exibir o resultado

    return 0;
}
`,
    testCases: [
      { input: "4", expectedOutput: "Par" },
      { input: "7", expectedOutput: "Ímpar" },
    ],
  },
  {
    id: 14,
    title: "Maior de Dois Números",
    difficulty: "Fácil" as Difficulty,
    category: "Estruturas de Controle",
    description:
      "Escreva um programa que leia dois números e imprima o maior deles.",
    template: `#include <stdio.h>

int main() {
    int num1, num2;

    // Seu código aqui para ler dois números

    // Seu código aqui para verificar e imprimir o maior número

    return 0;
}
`,
    testCases: [
      { input: "8 3", expectedOutput: "8" },
      { input: "10 20", expectedOutput: "20" },
    ],
  },
  {
    id: 15,
    title: "Calcular Fatorial",
    difficulty: "Fácil" as Difficulty,
    category: "Laços",
    description:
      "Escreva um programa que calcule o fatorial de um número inteiro positivo.",
    template: `#include <stdio.h>

int main() {
    int num;
    
    // Seu código aqui para ler o número

    // Seu código aqui para calcular o fatorial do número

    // Exiba o resultado do fatorial

    return 0;
}
`,
    testCases: [
      { input: "5", expectedOutput: "120" },
      { input: "3", expectedOutput: "6" },
    ],
  },
  {
    id: 16,
    title: "Tabuada",
    difficulty: "Fácil" as Difficulty,
    category: "Laços",
    description:
      "Escreva um programa que exiba a tabuada de um número de 1 a 10.",
    template: `#include <stdio.h>

int main() {
    int num;

    // Seu código aqui para ler o número

    // Seu código aqui para exibir a tabuada de 1 a 10 do número

    return 0;
}
`,
    testCases: [
      { input: "5", expectedOutput: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50" },
      { input: "3", expectedOutput: "3 x 1 = 3\n3 x 2 = 6\n...\n3 x 10 = 30" },
    ],
  },
  {
    id: 17,
    title: "Cálculo de Média",
    difficulty: "Fácil" as Difficulty,
    category: "Operações Matemáticas",
    description:
      "Escreva um programa que calcule a média de três notas e exiba o resultado.",
    template: `#include <stdio.h>

int main() {
    float nota1, nota2, nota3;

    // Seu código aqui para ler as três notas

    // Seu código aqui para calcular a média das notas

    // Exiba o resultado da média

    return 0;
}
`,
    testCases: [
      { input: "7.5 8.0 9.0", expectedOutput: "8.2" },
      { input: "6.0 7.0 8.0", expectedOutput: "7.0" },
    ],
  },
  {
    id: 18,
    title: "Calcular Média Ponderada",
    difficulty: "Médio" as Difficulty,
    category: "Matemática",
    description:
      "Escreva um programa que calcule a média ponderada de três notas com seus respectivos pesos.",
    template: `#include <stdio.h>
    
    int main() {
      float nota1, nota2, nota3;
      int peso1, peso2, peso3;
      // Seu código aqui
      return 0;
    }`,
    testCases: [
      { input: "7 8 9 2 3 5", expectedOutput: "8.2" },
      { input: "5 6 7 1 1 1", expectedOutput: "6.0" },
    ],
  },
  {
    id: 19,
    title: "Encontrar Elemento em um Array",
    difficulty: "Fácil" as Difficulty,
    category: "Arrays",
    description:
      "Escreva um programa que receba um array e um número, e retorne se o número está presente no array.",
    template: `#include <stdio.h>

int main() {
    int array[] = { /* Inicialize o array com valores */ };
    int tamanho = sizeof(array) / sizeof(array[0]);  // Calcula o tamanho do array
    int numero;

    // Seu código aqui para ler o número a ser procurado

    // Seu código aqui para verificar se o número está no array

    // Exiba se o número foi "Encontrado" ou "Não encontrado"

    return 0;
}
`,
    testCases: [
      { input: "[1, 2, 3, 4, 5] 3", expectedOutput: "Encontrado" },
      { input: "[10, 20, 30, 40, 50] 25", expectedOutput: "Não encontrado" },
    ],
  },
  {
    id: 20,
    title: "Número Primo",
    difficulty: "Médio" as Difficulty,
    category: "Matemática",
    description: "Escreva uma função que verifique se um número é primo.",
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
      { input: "5", expectedOutput: "Primo" },
      { input: "10", expectedOutput: "Não é primo" },
    ],
  },
  {
    id: 21,
    title: "Calcular Máximo Divisor Comum (MDC)",
    difficulty: "Difícil" as Difficulty,
    category: "Matemática",
    description:
      "Implemente uma função que calcule o máximo divisor comum (MDC) entre dois números usando o Algoritmo de Euclides.",
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
      { input: "48 18", expectedOutput: "6" },
      { input: "100 25", expectedOutput: "25" },
    ],
  },
  {
    id: 22,
    title: "Inverter uma String",
    difficulty: "Médio" as Difficulty,
    category: "Strings",
    description:
      "Escreva um programa que inverta uma string fornecida pelo usuário.",
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
    title: "Ordenação de Array (Bubble Sort)",
    difficulty: "Difícil" as Difficulty,
    category: "Algoritmos de Ordenação",
    description:
      "Implemente o algoritmo de ordenação Bubble Sort para ordenar um array de números inteiros.",
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
      { input: "[5, 2, 9, 1, 5]", expectedOutput: "[1, 2, 5, 5, 9]" },
      { input: "[3, 0, 8, 7, 6]", expectedOutput: "[0, 3, 6, 7, 8]" },
    ],
  },
  {
    id: 24,
    title: "Somatório Recursivo",
    difficulty: "Médio" as Difficulty,
    category: "Recursão",
    description:
      "Escreva uma função recursiva que retorne o somatório de todos os números de 1 até n.",
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
      { input: "5", expectedOutput: "15" },
      { input: "10", expectedOutput: "55" },
    ],
  },
  {
    id: 25,
    title: "Contar Palavras em uma String",
    difficulty: "Difícil" as Difficulty,
    category: "Strings",
    description:
      "Escreva um programa que conte o número de palavras em uma string.",
    template: `#include <stdio.h>
    #include <string.h>
    
    int main() {
      char str[100];
      // Seu código aqui
      return 0;
    }`,
    testCases: [
      { input: '"Hello world"', expectedOutput: "2" },
      { input: '"This is a test string"', expectedOutput: "5" },
    ],
  },
  {
    id: 26,
    title: "Calcular Média de Notas com Aprovação",
    difficulty: "Médio" as Difficulty,
    category: "Operações Matemáticas",
    description:
      "Escreva um programa que calcule a média de notas de um aluno e determine se ele foi aprovado (média >= 6).",
    template: `#include <stdio.h>
    
    int main() {
      float nota1, nota2, nota3;
      // Seu código aqui
      return 0;
    }`,
    testCases: [
      { input: "7.0 8.0 6.0", expectedOutput: "Média: 7.0 - Aprovado" },
      { input: "5.0 4.0 6.0", expectedOutput: "Média: 5.0 - Reprovado" },
    ],
  },
  {
    id: 27,
    title: "Jogo de Adivinhação",
    difficulty: "Médio" as Difficulty,
    category: "Interação com Usuário",
    description:
      "Escreva um programa onde o usuário tenta adivinhar um número entre 1 e 100. O programa deve informar se o palpite é maior ou menor que o número correto.",
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
      {
        input: "simulado: usuário adivinha o número correto",
        expectedOutput: "Parabéns! Você acertou.",
      },
    ],
  },
] as Exercise[];

const Practice = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedExercise, setSelectedExercise] = useState<Exercise>(exercises[0]);
  const [userCode, setUserCode] = useState(selectedExercise.template);
  const [results, setResults] = useState<string[]>([]);
  const [showHints, setShowHints] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setUserCode(selectedExercise.template);
    setResults([]);
    setShowHints(false);
  }, [selectedExercise]);

  const handleRunTests = async () => {
    if (!userCode.trim()) {
      toast.error("Por favor, escreva algum código antes de executar os testes.");
      return;
    }

    setIsCompiling(true);
    setResults([]);

    try {
      const testResults = await Promise.all(
        selectedExercise.testCases.map(async (testCase) => {
          try {
            const result = await compileAndExecute(userCode, testCase.input);
            const normalizedResult = result.trim().replace(/\r\n/g, "\n");
            const normalizedExpected = testCase.expectedOutput
              .trim()
              .replace(/\r\n/g, "\n");

            if (normalizedResult === normalizedExpected) {
              return `Teste para input: Passou`;
            } else {
              return `Teste para input: Falhou`;
            }
          } catch {
            return `Erro ao executar o teste`;
          }
        })
      );

      const allPassed = testResults.every((result) => result.includes('Passou'));
      if (allPassed) {
        toast.success("Todos os testes passaram! 🎉");
      } else {
        toast.error("Alguns testes falharam. Verifique os resultados.");
      }

      setResults(testResults);
    } catch (err) {
      toast.error("Erro ao executar os testes. Verifique seu código.");
      console.error("Erro nos testes:", err);
    } finally {
      setIsCompiling(false);
    }
  };

  const filteredExercises = exercises.filter((exercise) => {
    const matchesCategory =
      !selectedCategory || exercise.category === selectedCategory;
    const matchesDifficulty =
      !selectedDifficulty || exercise.difficulty === selectedDifficulty;
    const matchesSearch =
      exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleDifficultySelect = (difficulty: string | null) => {
    setSelectedDifficulty(
      difficulty === selectedDifficulty ? null : difficulty
    );
  };

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Header Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1
              className={`text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Exercícios de Programação
            </h1>
            <p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Pratique seus conhecimentos resolvendo desafios
            </p>
          </div>

          {/* Filtros */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {/* Barra de Pesquisa */}
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Buscar exercícios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDark
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:ring-2 focus:ring-primary-500`}
              />
            </div>

            {/* Filtros por Categoria */}
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => handleCategorySelect(key)}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === key
                      ? `${category.color.light} ${category.color.text}`
                      : isDark
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Filtros por Dificuldade */}
            <div className="flex gap-2 justify-center">
              {["Fácil", "Médio", "Difícil"].map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => handleDifficultySelect(difficulty)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedDifficulty === difficulty
                      ? difficulty === "Fácil"
                        ? "bg-green-100 text-green-800"
                        : difficulty === "Médio"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                      : isDark
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Lista de Exercícios */}
          <div className="lg:col-span-1">
            <div
              className={`rounded-lg shadow-lg overflow-hidden ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="p-4">
                <h2
                  className={`text-lg font-semibold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Exercícios Disponíveis ({filteredExercises.length})
                </h2>
                <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                  {filteredExercises.map((exercise) => (
                    <motion.button
                      key={exercise.id}
                      onClick={() => setSelectedExercise(exercise)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedExercise.id === exercise.id
                          ? isDark
                            ? "bg-primary-900/50 text-primary-400"
                            : "bg-primary-50 text-primary-600"
                          : isDark
                          ? "hover:bg-gray-700 text-gray-300"
                          : "hover:bg-gray-50 text-gray-600"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="font-medium text-base mb-1">
                        {exercise.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            exercise.difficulty === "Fácil"
                              ? isDark
                                ? "bg-green-900/50 text-green-400"
                                : "bg-green-100 text-green-800"
                              : exercise.difficulty === "Médio"
                              ? isDark
                                ? "bg-yellow-900/50 text-yellow-400"
                                : "bg-yellow-100 text-yellow-800"
                              : isDark
                              ? "bg-red-900/50 text-red-400"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {exercise.difficulty}
                        </span>
                        <span
                          className={`text-xs ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {categories[exercise.category]?.name}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Área Principal */}
          <div className="lg:col-span-3">
            <motion.div
              key={selectedExercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Detalhes do Exercício */}
              <div
                className={`rounded-lg shadow-lg p-6 ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2
                      className={`text-2xl font-bold mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {selectedExercise.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          selectedExercise.difficulty === "Fácil"
                            ? isDark
                              ? "bg-green-900/50 text-green-400"
                              : "bg-green-100 text-green-800"
                            : selectedExercise.difficulty === "Médio"
                            ? isDark
                              ? "bg-yellow-900/50 text-yellow-400"
                              : "bg-yellow-100 text-yellow-800"
                            : isDark
                            ? "bg-red-900/50 text-red-400"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {selectedExercise.difficulty}
                      </span>
                      <span
                        className={isDark ? "text-gray-400" : "text-gray-500"}
                      >
                        {categories[selectedExercise.category]?.name}
                      </span>
                    </div>
                  </div>
                  {selectedExercise.hints && (
                    <button
                      onClick={() => setShowHints(!showHints)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                        isDark
                          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {showHints ? "Ocultar Dicas" : "Ver Dicas"}
                    </button>
                  )}
                </div>

                <p
                  className={`mt-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {selectedExercise.description}
                </p>

                {showHints && selectedExercise.hints && (
                  <div
                    className={`mt-4 p-4 rounded-lg ${
                      isDark ? "bg-gray-700" : "bg-gray-50"
                    }`}
                  >
                    <h3
                      className={`text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Dicas:
                    </h3>
                    <ul
                      className={`list-disc pl-5 space-y-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {selectedExercise.hints.map((hint, index) => (
                        <li key={index}>{hint}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div
                  className={`mt-6 p-4 rounded-lg ${
                    isDark ? "bg-gray-700" : "bg-gray-50"
                  }`}
                >
                  <h3
                    className={`text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Casos de Teste:
                  </h3>
                  <div className="space-y-4">
                    {selectedExercise.testCases.map((testCase, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          isDark ? "bg-gray-800" : "bg-white"
                        }`}
                      >
                        <div
                          className={`font-mono text-sm ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          <div>
                            <span className="font-semibold">Input:</span>{" "}
                            {testCase.input}
                          </div>
                          <div>
                            <span className="font-semibold">Output Esperado:</span>{" "}
                            {testCase.expectedOutput}
                          </div>
                          {testCase.explanation && (
                            <div className="mt-2 text-xs">
                              <span className="font-semibold">Explicação:</span>{" "}
                              {testCase.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Editor Section */}
              <CodeEditor
                initialCode={selectedExercise.template}
                language={getLanguageFromExercise(selectedExercise)}
                onCodeChange={setUserCode}
                results={results}
                onRunTests={handleRunTests}
                isCompiling={isCompiling}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;