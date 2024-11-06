import React, { useState, useEffect } from 'react';

interface VisualizationPanelProps {
  algorithm: 'bubble' | 'selection' | 'quick';
  data: number[];
  speed: number;
  onSpeedChange?: (speed: number) => void;
}

const VisualizationPanel: React.FC<VisualizationPanelProps> = ({
  algorithm,
  data,
  speed,
  onSpeedChange
}) => {
  const [currentArray, setCurrentArray] = useState<number[]>([]);
  const [comparing, setComparing] = useState<number[]>([]);
  const [swapping, setSwapping] = useState<number[]>([]);
  const [sorted, setSorted] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setCurrentArray([...data]);
    setComparing([]);
    setSwapping([]);
    setSorted([]);
    setIsRunning(false);
  }, [data]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    const arr = [...currentArray];
    const n = arr.length;
    let sortedIndices: number[] = [];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isRunning) return;
        
        setComparing([j, j + 1]);
        await sleep(speed);

        if (arr[j] > arr[j + 1]) {
          setSwapping([j, j + 1]);
          await sleep(speed);
          
          // Swap
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          
          setCurrentArray([...arr]);
          await sleep(speed);
        }
        
        setSwapping([]);
      }
      sortedIndices = [...sortedIndices, n - 1 - i];
      setSorted(sortedIndices);
    }
    setSorted([...Array(n).keys()]);
    setComparing([]);
    setIsRunning(false);
  };

  const selectionSort = async () => {
    const arr = [...currentArray];
    const n = arr.length;
    let sortedIndices: number[] = [];

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      
      for (let j = i + 1; j < n; j++) {
        if (!isRunning) return;
        
        setComparing([minIdx, j]);
        await sleep(speed);

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      if (minIdx !== i) {
        setSwapping([i, minIdx]);
        await sleep(speed);
        
        // Swap
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        
        setCurrentArray([...arr]);
        await sleep(speed);
      }
      
      sortedIndices = [...sortedIndices, i];
      setSorted(sortedIndices);
      setSwapping([]);
    }
    setSorted([...Array(n).keys()]);
    setComparing([]);
    setIsRunning(false);
  };

  const quickSort = async () => {
    const arr = [...currentArray];
    const n = arr.length;
    
    const partition = async (low: number, high: number): Promise<number> => {
      const pivot = arr[high];
      let i = low - 1;
      
      for (let j = low; j < high; j++) {
        if (!isRunning) return -1;
        
        setComparing([j, high]);
        await sleep(speed);
        
        if (arr[j] <= pivot) {
          i++;
          setSwapping([i, j]);
          await sleep(speed);
          
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          
          setCurrentArray([...arr]);
          await sleep(speed);
        }
      }
      
      setSwapping([i + 1, high]);
      await sleep(speed);
      
      const temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      
      setCurrentArray([...arr]);
      await sleep(speed);
      
      return i + 1;
    };
    
    const sort = async (low: number, high: number) => {
      if (low < high) {
        const pi = await partition(low, high);
        if (pi === -1) return; // Sorting was stopped
        
        await sort(low, pi - 1);
        await sort(pi + 1, high);
      }
    };
    
    await sort(0, n - 1);
    setSorted([...Array(n).keys()]);
    setComparing([]);
    setSwapping([]);
    setIsRunning(false);
  };

  const startVisualization = () => {
    setIsRunning(true);
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

  const stopVisualization = () => {
    setIsRunning(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Visualização do Algoritmo
        </h3>
        <div className="flex gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Velocidade:</span>
            <input
              type="range"
              min="100"
              max="2000"
              step="100"
              value={speed}
              onChange={(e) => onSpeedChange?.(Number(e.target.value))}
              className="w-32"
            />
          </div>
          <button
            onClick={isRunning ? stopVisualization : startVisualization}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              isRunning
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            {isRunning ? 'Parar' : 'Iniciar'}
          </button>
        </div>
      </div>

      <div className="flex items-end justify-center h-64 gap-1">
        {currentArray.map((value, index) => (
          <div
            key={index}
            className={`w-8 rounded-t-lg transition-all duration-200 ${
              comparing.includes(index)
                ? 'bg-yellow-400'
                : swapping.includes(index)
                ? 'bg-red-400'
                : sorted.includes(index)
                ? 'bg-green-400'
                : 'bg-blue-400'
            }`}
            style={{ height: `${(value / Math.max(...data)) * 100}%` }}
          >
            <span className="text-xs text-center block mt-2">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-400 rounded"></div>
          <span>Não visitado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded"></div>
          <span>Comparando</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-400 rounded"></div>
          <span>Trocando</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-400 rounded"></div>
          <span>Ordenado</span>
        </div>
      </div>
    </div>
  );
};

export default VisualizationPanel;