// src/hooks/useModuleNavigation.ts
import { useLocation } from 'react-router-dom';

export interface ModuleInfo {
  path: string;
  title: string;
  topic: string;
}

const modules: ModuleInfo[] = [
  {
    path: '/learn/what-is-programming',
    title: 'O que é programação?',
    topic: 'Introdução à Programação'
  },
  {
    path: '/learn/variables',
    title: 'Variáveis e Tipos de Dados',
    topic: 'Introdução à Programação'
  },
  {
    path: '/learn/control-structures',
    title: 'Estruturas de Controle',
    topic: 'Introdução à Programação'
  },
  {
    path: '/learn/arrays',
    title: 'Arrays e Vetores',
    topic: 'Estruturas de Dados Básicas'
  },
  {
    path: '/learn/linked-lists',
    title: 'Listas Ligadas',
    topic: 'Estruturas de Dados Básicas'
  },
  {
    path: '/learn/stacks-queues',
    title: 'Pilhas e Filas',
    topic: 'Estruturas de Dados Básicas'
  },
  {
    path: '/learn/bubble-sort',
    title: 'Bubble Sort',
    topic: 'Algoritmos de Ordenação'
  },
  {
    path: '/learn/selection-sort',
    title: 'Selection Sort',
    topic: 'Algoritmos de Ordenação'
  },
  {
    path: '/learn/quick-sort',
    title: 'Quick Sort',
    topic: 'Algoritmos de Ordenação'
  }
];

export const useModuleNavigation = () => {
  const location = useLocation();
  const currentIndex = modules.findIndex(m => m.path === location.pathname);
  const currentModule = modules[currentIndex];

  const getPreviousModule = (): ModuleInfo | null => {
    if (currentIndex > 0) {
      return modules[currentIndex - 1];
    }
    return null;
  };

  const getNextModule = (): ModuleInfo | null => {
    if (currentIndex < modules.length - 1) {
      return modules[currentIndex + 1];
    }
    return null;
  };

  return {
    currentModule,
    previousModule: getPreviousModule(),
    nextModule: getNextModule(),
    isFirst: currentIndex === 0,
    isLast: currentIndex === modules.length - 1,
    allModules: modules
  };
};