import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ArrayElement {
  value: number;
  isActive: boolean;
  isComparing: boolean;
  isSorted: boolean;
}

interface VisualizationPanelProps {
  algorithm: 'bubble' | 'selection' | 'quick';
  data: number[];
  speed: number;
  onSpeedChange?: (speed: number) => void;
}

const VisualizationPanel = ({
  algorithm,
  data = [],
  speed = 1000,
  onSpeedChange,
}: VisualizationPanelProps) => {
  const [elements, setElements] = useState<ArrayElement[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(speed);

  useEffect(() => {
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

  const handleSpeedChange = (newSpeed: number) => {
    setCurrentSpeed(newSpeed);
    if (onSpeedChange) {
      onSpeedChange(newSpeed);
    }
  };

  const bubbleSort = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const arr = [...elements];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        arr[j].isComparing = true;
        arr[j + 1].isComparing = true;
        setElements([...arr]);
        await sleep(currentSpeed);

        if (arr[j].value > arr[j + 1].value) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setElements([...arr]);
          await sleep(currentSpeed);
        }

        arr[j].isComparing = false;
        arr[j + 1].isComparing = false;
      }
      arr[n - i - 1].isSorted = true;
      setElements([...arr]);
    }
    arr[0].isSorted = true;
    setElements([...arr]);
    setIsAnimating(false);
  };

  const selectionSort = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const arr = [...elements];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      arr[i].isActive = true;
      setElements([...arr]);
      await sleep(currentSpeed);

      for (let j = i + 1; j < n; j++) {
        arr[j].isComparing = true;
        setElements([...arr]);
        await sleep(currentSpeed);

        if (arr[j].value < arr[minIdx].value) {
          if (minIdx !== i) arr[minIdx].isActive = false;
          minIdx = j;
          arr[minIdx].isActive = true;
        }

        arr[j].isComparing = false;
        setElements([...arr]);
      }

      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      }

      arr[i].isActive = false;
      arr[i].isSorted = true;
      setElements([...arr]);
      await sleep(currentSpeed);
    }

    arr[n - 1].isSorted = true;
    setElements([...arr]);
    setIsAnimating(false);
  };

  const quickSort = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const arr = [...elements];
    await quickSortHelper(arr, 0, arr.length - 1);
    setElements(arr.map((el) => ({ ...el, isSorted: true })));
    setIsAnimating(false);
  };

  const quickSortHelper = async (arr: ArrayElement[], low: number, high: number) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    } else if (low === high) {
      arr[low].isSorted = true;
      setElements([...arr]);
    }
  };

  const partition = async (arr: ArrayElement[], low: number, high: number) => {
    const pivot = arr[high].value;
    arr[high].isActive = true;
    setElements([...arr]);
    await sleep(currentSpeed);

    let i = low - 1;

    for (let j = low; j < high; j++) {
      arr[j].isComparing = true;
      setElements([...arr]);
      await sleep(currentSpeed);

      if (arr[j].value < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setElements([...arr]);
        await sleep(currentSpeed);
      }

      arr[j].isComparing = false;
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    arr[high].isActive = false;
    arr[i + 1].isSorted = true;
    setElements([...arr]);
    await sleep(currentSpeed);

    return i + 1;
  };

  const renderArray = () => (
    <div className="flex flex-wrap items-end justify-center space-x-1 h-64">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ height: 0 }}
          animate={{
            height: `${(element.value / Math.max(...data)) * 100}%`,
            backgroundColor: element.isSorted
              ? '#10B981'
              : element.isActive
              ? '#FBBF24'
              : element.isComparing
              ? '#EF4444'
              : '#3B82F6',
          }}
          transition={{ duration: 0.3 }}
          className="rounded-t-lg flex items-center justify-center sm:w-4 md:w-6 lg:w-8"
          style={{
            minHeight: '24px',
          }}
        >
          <span className="text-white text-xs text-center block mt-2 font-medium">
            {element.value}
          </span>
        </motion.div>
      ))}
    </div>
  );

  const handleSort = () => {
    switch (algorithm) {
      case 'bubble':
        bubbleSort();
        break;
      case 'selection':
        selectionSort();
        break;
      case 'quick':
        quickSort();
        break;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-0">Visualização do Algoritmo</h3>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Velocidade:</span>
            <input
              type="range"
              min="100"
              max="2000"
              step="100"
              value={2100 - currentSpeed}
              onChange={(e) => handleSpeedChange(2100 - parseInt(e.target.value))}
              className="w-full sm:w-32"
              disabled={isAnimating}
            />
          </div>
          <button
            onClick={handleSort}
            disabled={isAnimating}
            className={`px-4 py-2 rounded-lg text-white text-sm font-medium ${
              isAnimating ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'
            }`}
          >
            {isAnimating ? 'Ordenando...' : 'Ordenar'}
          </button>
        </div>
      </div>

      {renderArray()}

      <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-blue-500 mr-2"></div>
          <span>Não visitado</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-yellow-400 mr-2"></div>
          <span>Comparando</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-red-500 mr-2"></div>
          <span>Trocando</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded bg-green-500 mr-2"></div>
          <span>Ordenado</span>
        </div>
      </div>
    </div>
  );
};

export default VisualizationPanel;
