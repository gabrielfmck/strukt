// src/components/learning/CodeEditor.tsx
import { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import c from 'react-syntax-highlighter/dist/esm/languages/hljs/c';
import { compileAndExecute } from '../../services/compilerService';

SyntaxHighlighter.registerLanguage('c', c);

interface CodeEditorProps {
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  language?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ 
  initialCode = '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
  onCodeChange,
  language = 'c'
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('Compilando e executando...');

    try {
      const result = await compileAndExecute(code);
      setOutput(result);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      setOutput(`Erro: ${errorMessage}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800">
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <h3 className="text-white font-medium">Editor de Código C</h3>
        <button
          onClick={handleRunCode}
          disabled={isRunning}
          className={`px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors ${
            isRunning
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isRunning ? 'Executando...' : 'Executar'}
        </button>
      </div>

      <div className="relative min-h-[300px]">
        <div className="absolute inset-0">
          <SyntaxHighlighter
            language={language}
            style={dracula}
            showLineNumbers
            customStyle={{
              margin: 0,
              padding: '1rem',
              minHeight: '300px',
              background: 'transparent',
              fontSize: '14px',
              lineHeight: '1.5',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
        <textarea
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            onCodeChange?.(e.target.value);
          }}
          className="absolute inset-0 w-full h-full p-4 bg-transparent text-transparent caret-white resize-none focus:outline-none font-mono"
          spellCheck={false}
          style={{
            fontSize: '14px',
            lineHeight: '1.5',
            tabSize: 2,
          }}
        />
      </div>

      {output && (
        <div className="p-4 border-t border-gray-700">
          <h4 className="text-white font-medium mb-2">Saída:</h4>
          <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap bg-gray-800 p-4 rounded">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;