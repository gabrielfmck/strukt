// src/components/learning/VisualizationPanel.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ArrayElement {
  value: number;
  isActive: boolean;
  isComparing: boolean;
  isSorted: boolean;
}

interface VisualizationPanelProps {
  type: 'array' | 'linkedList' | 'tree' | 'stack' | 'queue';
  data: number[];
  speed?: number;
}

const VisualizationPanel = ({
  type = 'array',
  data = [],
  speed = 1000,
}: VisualizationPanelProps) => {
  const [elements, setElements] = useState<ArrayElement[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(speed);

  useEffect(() => {
    // Inicializa os elementos com os dados fornecidos
    setElements(
      data.map((value) => ({
        value,
        isActive: false,
        isComparing: false,
        isSorted: false,
      }))
    );
  }, [data]);

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const arr = [...elements];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Marca os elementos que estão sendo comparados
        arr[j].isComparing = true;
        arr[j + 1].isComparing = true;
        setElements([...arr]);
        await sleep(animationSpeed);

        if (arr[j].value > arr[j + 1].value) {
          // Troca os elementos
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setElements([...arr]);
          await sleep(animationSpeed);
        }

        // Remove a marcação de comparação
        arr[j].isComparing = false;
        arr[j + 1].isComparing = false;
      }
      // Marca o elemento como ordenado
      arr[n - i - 1].isSorted = true;
      setElements([...arr]);
    }
    arr[0].isSorted = true;
    setElements([...arr]);
    setIsAnimating(false);
  };

  const renderArray = () => (
    <div className="flex items-end justify-center space-x-1 h-64">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ height: 0 }}
          animate={{
            height: `${(element.value / Math.max(...data)) * 100}%`,
            backgroundColor: element.isSorted
              ? '#10B981'
              : element.isComparing
              ? '#F59E0B'
              : '#3B82F6',
          }}
          transition={{ duration: 0.3 }}
          className="w-8 rounded-t-lg flex items-center justify-center"
          style={{
            minHeight: '24px',
          }}
        >
          <span className="text-white text-sm font-medium">{element.value}</span>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Visualização - {type.charAt(0).toUpperCase() + type.slice(1)}
        </h3>
        <button
          onClick={bubbleSort}
          disabled={isAnimating}
          className={`px-4 py-2 rounded-lg text-white text-sm font-medium ${
            isAnimating ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'
          }`}
        >
          {isAnimating ? 'Ordenando...' : 'Ordenar'}
        </button>
      </div>

      <div className="border rounded-lg p-4 bg-gray-50">{type === 'array' && renderArray()}</div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Controles</h4>
        <div className="flex items-center space-x-4">
          <label className="text-sm text-gray-600">
            Velocidade:
            <input
              type="range"
              min="100"
              max="2000"
              step="100"
              value={animationSpeed}
              onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
              className="ml-2"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default VisualizationPanel;
