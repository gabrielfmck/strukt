// src/components/learning/CodeEditor.tsx
import { useState, useRef } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
  const [input, setInput] = useState('');
  const editorRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current && editorRef.current) {
      editorRef.current.scrollTop = event.currentTarget.scrollTop;
      editorRef.current.scrollLeft = event.currentTarget.scrollLeft;
    }
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('Compilando e executando...');

    try {
      const result = await compileAndExecute(code, input);
      setOutput(result);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      setOutput(`Erro: ${errorMessage}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="bg-[#1a1b26] rounded-lg overflow-hidden shadow-xl border border-[#232433]">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between p-4 bg-[#232433]">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <h3 className="text-gray-300 font-medium ml-4">Editor de Código C</h3>
        </div>
        <button
          onClick={handleRunCode}
          disabled={isRunning}
          className={`px-4 py-2 rounded-lg text-white text-sm font-medium transition-all hover:scale-105 ${
            isRunning
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-[#0284c7] hover:bg-[#0284c7]/90'
          }`}
        >
          {isRunning ? 'Executando...' : 'Executar'}
        </button>
      </div>

      {/* Editor */}
      <div className="relative" style={{ height: '400px' }}>
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            if (onCodeChange) {
              onCodeChange(e.target.value);
            }
          }}
          onScroll={handleScroll}
          className="absolute inset-0 w-full h-full resize-none font-mono bg-[#1a1b26] text-gray-300 focus:outline-none"
          style={{
            fontSize: '14px',
            lineHeight: '1.6',
            tabSize: 2,
            padding: '1rem 1rem 1rem 4rem',
            caretColor: '#0284c7',
            zIndex: 2,
          }}
          spellCheck={false}
        />
        <div 
          ref={editorRef}
          className="absolute inset-0 overflow-auto pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <SyntaxHighlighter
            language={language}
            style={atomOneDark}
            showLineNumbers
            customStyle={{
              margin: 0,
              padding: '1rem 1rem 1rem 4rem',
              background: 'transparent',
              minHeight: '100%',
              fontSize: '14px',
              lineHeight: '1.6',
              position: 'relative',
            }}
            lineNumberStyle={{
              minWidth: '3em',
              paddingRight: '1em',
              color: '#506686',
              textAlign: 'right',
              userSelect: 'none',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* Entrada */}
      <div className="p-4 border-t border-[#232433] bg-[#1f2937]/20">
        <h4 className="text-gray-300 font-medium mb-2 flex items-center">
          Entrada (stdin):
        </h4>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-20 p-3 bg-[#232433] text-gray-300 font-mono rounded-lg 
            resize-none focus:outline-none focus:ring-2 focus:ring-[#0284c7]/50 
            border border-gray-700"
          placeholder="Digite a entrada do programa aqui..."
        />
      </div>

      {/* Saída */}
      {output && (
        <div className="p-4 border-t border-[#232433] bg-[#1f2937]/20">
          <h4 className="text-gray-300 font-medium mb-2 flex items-center">
            Saída:
          </h4>
          <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap 
            bg-[#232433] p-4 rounded-lg max-h-48 overflow-auto border border-gray-700">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;