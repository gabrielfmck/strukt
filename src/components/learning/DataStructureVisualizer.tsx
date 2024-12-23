// src\components\learning\DataStructureVisualizer.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Node {
  value: number;
  next?: number;
}

interface DataStructureVisualizerProps {
  type: 'array' | 'linked-list' | 'stack' | 'queue';
  maxSize?: number;
}

const DataStructureVisualizer = ({ type, maxSize = 10 }: DataStructureVisualizerProps) => {
  const [elements, setElements] = useState<Node[]>([]);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const validateInput = (num: number): boolean => {
    if (isNaN(num)) {
      setError('Por favor, insira um número válido');
      return false;
    }
    if (elements.length >= maxSize) {
      setError(`Tamanho máximo (${maxSize}) atingido`);
      return false;
    }
    return true;
  };

  const handleArrayAddition = (num: number): Node[] => {
    return [...elements, { value: num }];
  };

  const handleStackAddition = (num: number): Node[] => {
    return [...elements, { value: num }];
  };

  const handleQueueAddition = (num: number): Node[] => {
    return [...elements, { value: num }];
  };

  const handleLinkedListAddition = (num: number): Node[] => {
    const newElements = [...elements];
    if (newElements.length > 0) {
      newElements[newElements.length - 1].next = num;
    }
    newElements.push({ value: num });
    return newElements;
  };

  const addElement = () => {
    const num = parseInt(value);
    if (!validateInput(num)) {
      return;
    }

    let newElements: Node[] = [];
    setError('');

    switch (type) {
      case 'array':
        newElements = handleArrayAddition(num);
        break;
      case 'stack':
        newElements = handleStackAddition(num);
        break;
      case 'queue':
        newElements = handleQueueAddition(num);
        break;
      case 'linked-list':
        newElements = handleLinkedListAddition(num);
        break;
      default:
        return;
    }

    setElements(newElements);
    setValue('');
  };

  const handleRemove = () => {
    if (elements.length === 0) {
      setError('Estrutura está vazia');
      return;
    }

    setError('');
    let newElements: Node[] = [];

    switch (type) {
      case 'array':
      case 'stack':
        newElements = elements.slice(0, -1);
        break;
      case 'queue':
        newElements = elements.slice(1);
        break;
      case 'linked-list':
        newElements = elements.slice(0, -1);
        break;
      default:
        return;
    }

    setElements(newElements);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Digite um número"
        />
        <button
          onClick={addElement}
          className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
        >
          Adicionar
        </button>
        <button
          onClick={handleRemove}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Remover
        </button>
      </div>

      {error && (
        <div className="text-red-600 mb-4 text-sm">{error}</div>
      )}

      <div className="flex flex-wrap gap-4 items-center justify-center my-8">
        <AnimatePresence>
          {elements.map((element, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="relative"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center border-2 border-primary-500 transition-colors">
                <span className="text-lg font-bold text-primary-700">
                  {element.value}
                </span>
              </div>
              {type === 'linked-list' && element.next !== undefined && (
                <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                  <svg className="w-8 h-4" fill="none" viewBox="0 0 24 8">
                    <path
                      d="M0 4h24M20 1l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        {type === 'array' && 'Array: Acesso O(1), Inserção O(n), Remoção O(n)'}
        {type === 'stack' && 'Pilha: LIFO - Last In, First Out'}
        {type === 'queue' && 'Fila: FIFO - First In, First Out'}
        {type === 'linked-list' && 'Lista Ligada: Inserção O(1), Busca O(n)'}
      </div>
    </div>
  );
};

export default DataStructureVisualizer;