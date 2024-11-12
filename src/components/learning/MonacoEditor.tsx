import { useRef, useEffect } from 'react';
import Editor, { OnMount, OnChange } from '@monaco-editor/react';
import { editor, Range } from 'monaco-editor';
import { useTheme } from '../../contexts/theme/ThemeContext';

interface MonacoEditorProps {
  initialCode: string;
  language?: string;
  readOnly?: boolean;
  onChange?: (value: string | undefined) => void;
  height?: string;
  className?: string;
  showLineNumbers?: boolean;
}

const MonacoEditor = ({
  initialCode,
  language = 'c',
  readOnly = false,
  onChange,
  height = '400px',
  className = '',
  showLineNumbers = true,
}: MonacoEditorProps) => {
  const { theme } = useTheme();
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const isDark = theme === 'dark';

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
    
    // Configurar tema personalizado
    editor.updateOptions({
      theme: isDark ? 'vs-dark' : 'vs-light',
      fontSize: 14,
      fontFamily: 'Fira Code, monospace',
      minimap: { enabled: false },
      scrollbar: {
        vertical: 'auto',
        horizontal: 'auto',
      },
      lineNumbers: showLineNumbers ? 'on' : 'off',
      readOnly: readOnly,
      wordWrap: 'on',
      automaticLayout: true,
      tabSize: 2,
      rulers: [],
      renderWhitespace: 'none',
      roundedSelection: true,
      selectOnLineNumbers: true,
      cursorBlinking: 'smooth',
      cursorSmoothCaretAnimation: 'on',
      scrollBeyondLastLine: false,
      quickSuggestions: {
        other: !readOnly,
        comments: !readOnly,
        strings: !readOnly
      },
      folding: true,
      dragAndDrop: true,
      formatOnPaste: true,
      formatOnType: true,
    });
  };

  const handleEditorChange: OnChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  // Atualizar tema quando o tema global mudar
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.updateOptions({
        theme: isDark ? 'vs-dark' : 'vs-light'
      });
    }
  }, [isDark]);

  return (
    <div className={`overflow-hidden rounded-lg border ${
      isDark 
        ? 'border-gray-700 bg-gray-800' 
        : 'border-gray-200 bg-white'
    } ${className}`}>
      <Editor
        height={height}
        defaultLanguage={language}
        defaultValue={initialCode}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          readOnly,
          contextmenu: true,
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
          dragAndDrop: true,
          formatOnPaste: true,
          formatOnType: true,
        }}
        beforeMount={(monaco) => {
          // Configurar linguagens suportadas
          monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false,
          });
          
          // Configurar snippets e autocompleção
          monaco.languages.registerCompletionItemProvider('c', {
            provideCompletionItems: (model, position) => {
              const word = model.getWordUntilPosition(position);
              const range = new Range(
                position.lineNumber,
                word.startColumn,
                position.lineNumber,
                word.endColumn
              );

              const suggestions = [
                {
                  label: 'printf',
                  kind: monaco.languages.CompletionItemKind.Function,
                  insertText: 'printf("${1:format}"${2:, args});',
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                  detail: 'Print formatted output to stdout',
                  range
                },
                {
                  label: 'scanf',
                  kind: monaco.languages.CompletionItemKind.Function,
                  insertText: 'scanf("${1:format}", ${2:&var});',
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                  detail: 'Read formatted input from stdin',
                  range
                },
                {
                  label: 'main',
                  kind: monaco.languages.CompletionItemKind.Function,
                  insertText: [
                    'int main() {',
                    '\t${1}',
                    '\treturn 0;',
                    '}'
                  ].join('\n'),
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                  detail: 'Main function',
                  range
                },
              ];
              return { suggestions };
            },
          });
        }}
      />
    </div>
  );
};

export default MonacoEditor;