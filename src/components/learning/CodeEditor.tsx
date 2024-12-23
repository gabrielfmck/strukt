// src\components\learning\CodeEditor.tsx
import { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { useTheme } from '../../contexts/theme/ThemeContext';
import { compileAndExecute } from '../../services/pistonCompilerService';

interface CodeEditorProps {
  initialCode: string;
  language?: string;
  onCodeChange?: (code: string) => void;
  readOnly?: boolean;
  height?: string;
  onRunTests?: () => Promise<void>;
  isCompiling?: boolean;
  results?: string[];
}

const CodeEditor = ({
  initialCode,
  language = 'c',
  onCodeChange,
  readOnly = false,
  height = '400px',
  onRunTests,
  isCompiling = false,
  results = []
}: CodeEditorProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleCodeChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
      onCodeChange?.(value);
    }
  };

  const handleRunCode = async () => {
    if (!code.trim()) {
      setOutput('Por favor, insira algum código para executar');
      return;
    }

    setIsRunning(true);
    setOutput('Compilando e executando...');

    try {
      const result = await compileAndExecute(code, input);
      setOutput(result || 'Programa executado com sucesso (sem saída)');
      if (onRunTests) {
        await onRunTests();
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      setOutput(`Erro: ${errorMessage}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-lg border shadow-lg transition-shadow hover:shadow-xl bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
      {/* Header */}  
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" /> 
          </div>
          <div className="flex items-center ml-6">
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Editor de Código
            </h3>
            <span className="ml-2 px-2 py-0.5 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium">
              {language.toUpperCase()}
            </span>
          </div>
        </div>

        {!readOnly && (
          <button
            onClick={handleRunCode}
            disabled={isRunning || isCompiling}
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isRunning || isCompiling ? (
              <>
                <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Executando
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                </svg>
                Executar
              </>
            )}
          </button>
        )}
      </div>

      {/* Editor */}
      <MonacoEditor
        height={height}
        language={language}
        value={code}
        onChange={handleCodeChange}
        theme={isDark ? 'vs-dark' : 'light'} 
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          fontSize: 14,
          lineNumbers: 'on',
          automaticLayout: true,
          readOnly,
          fontFamily: "'Fira Code', monospace",
          padding: { top: 16, bottom: 16 },
          smoothScrolling: true,
        }}
      />

      {/* Input Section */}
      {!readOnly && (
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <div className="mb-2 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Entrada (stdin):
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-20 p-3 font-mono text-sm rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/50 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Digite a entrada do programa aqui..."
            />
          </div>
        </div>
      )}

      {/* Output */}
      {output && (
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <div className="mb-2 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              Saída:
            </div>
            <div className={`p-4 font-mono text-sm rounded-lg ${
              output.toLowerCase().includes('erro') 
                ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/30'
                : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
            }`}>
              {output}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Resultados:</h4>
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-4 mb-2 font-mono text-sm rounded-lg flex items-center ${
                  result.includes('Passou')
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                }`}
              >
                {result.includes('Passou') ? (
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                {result}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;