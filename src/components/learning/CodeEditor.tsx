// src/components/learning/CodeEditor.tsx
import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/theme/ThemeContext';
import { compileAndExecute } from '../../services/pistonCompilerService';
import { toast } from 'react-toastify';
import MonacoEditor from './MonacoEditor';

interface CodeEditorProps {
  initialCode: string;
  language?: string;
  onCodeChange?: (code: string) => void;
  readOnly?: boolean;
  results?: string[];
}

const CodeEditor = ({
  initialCode = '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
  language = 'c',
  onCodeChange,
  readOnly = false,
  results = []
}: CodeEditorProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleCodeChange = (newCode: string | undefined) => {
    if (newCode) {
      setCode(newCode);
      if (onCodeChange) {
        onCodeChange(newCode);
      }
    }
  };

  const handleRunCode = async () => {
    if (!code.trim()) {
      toast.error('Por favor, insira algum código para executar');
      return;
    }

    setIsRunning(true);
    setOutput('Compilando e executando...');

    try {
      const result = await compileAndExecute(code, input);
      if (result) {
        setOutput(result);
        
        if (!result.toLowerCase().includes('erro')) {
          toast.success('Código executado com sucesso!');
        } else {
          toast.error('Erro ao executar o código');
        }
      } else {
        setOutput('Erro: Não foi possível executar o código');
        toast.error('Erro ao executar o código');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      setOutput(`Erro: ${errorMessage}`);
      toast.error(errorMessage);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className={`rounded-lg overflow-hidden shadow-xl border ${
      isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
    }`}>
      {/* Header */}
      <div className={`flex items-center justify-between p-4 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <h3 className={`font-medium ml-4 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <span className="font-mono">Editor de Código</span>
            <span className={`ml-2 px-2 py-1 text-xs rounded-md bg-opacity-20 ${
              language === 'c' ? 'bg-blue-500 text-blue-500' : 'bg-yellow-500 text-yellow-500'
            }`}>
              {language === 'c' ? 'C' : 'JavaScript'}
            </span>
          </h3>
        </div>
        <button
          onClick={handleRunCode}
          disabled={isRunning || readOnly}
          className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isRunning || readOnly
              ? 'bg-gray-600 cursor-not-allowed opacity-50'
              : 'bg-primary-600 hover:bg-primary-700'
          }`}
        >
          {isRunning ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Executando
            </>
          ) : (
            <>
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Executar
            </>
          )}
        </button>
      </div>

      {/* Editor */}
      <MonacoEditor
        initialCode={code}
        language={language}
        onChange={handleCodeChange}
        readOnly={readOnly}
        height="400px"
      />

      {/* Input Section */}
      {!readOnly && (
        <div className={`border-t ${
          isDark ? 'border-gray-700 bg-gray-900/20' : 'border-gray-200 bg-gray-50'
        }`}>
          <div className="p-4">
            <h4 className={`font-medium mb-2 flex items-center ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Entrada (stdin):
            </h4>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={`w-full h-20 p-3 font-mono rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/50 border ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-gray-300' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="Digite a entrada do programa aqui..."
            />
          </div>
        </div>
      )}

      {/* Output */}
      {output && (
        <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className={`p-4 ${isDark ? 'bg-gray-900/20' : 'bg-gray-50'}`}>
            <h4 className={`font-medium mb-2 flex items-center ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              Saída:
            </h4>
            <div className={`p-4 font-mono text-sm rounded-lg ${
              output.toLowerCase().includes('erro')
                ? isDark 
                  ? 'bg-red-900/20 text-red-400 border border-red-800/30'
                  : 'bg-red-50 text-red-900 border-red-200'
                : isDark
                ? 'bg-gray-800 text-gray-300 border border-gray-700'
                : 'bg-white text-gray-900 border border-gray-200'
            }`}>
              {output}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className={`p-4 ${isDark ? 'bg-gray-900/20' : 'bg-gray-50'}`}>
            <h4 className={`font-medium mb-2 flex items-center ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Resultados:
            </h4>
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-4 mb-2 font-mono text-sm rounded-lg flex items-center ${
                  result.includes('Passou')
                    ? isDark
                      ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-800/30'
                      : 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                    : isDark
                    ? 'bg-red-900/20 text-red-400 border border-red-800/30'
                    : 'bg-red-50 text-red-900 border border-red-200'
                }`}
              >
                {result.includes('Passou') ? (
                  <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                )}
                {result.replace('✅', '').replace('❌', '')}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;