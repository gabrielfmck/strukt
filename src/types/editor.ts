// src/types/editor.ts
import { editor } from 'monaco-editor';

// Props para o MonacoEditor
export interface MonacoEditorProps {
  initialCode: string;
  language?: string;
  readOnly?: boolean;
  onChange?: (value: string | undefined) => void;
  height?: string;
  className?: string;
  showLineNumbers?: boolean;
  theme?: 'vs-dark' | 'vs-light';
}

// Props para o CodeEditor principal
export interface CodeEditorProps {
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  language?: string;
  readOnly?: boolean;
  showLineNumbers?: boolean;
}

// Interface para as respostas da API de compilação
export interface CompilerResponse {
  stdout?: string;
  stderr?: string;
  compile_output?: string;
  message?: string;
  status?: {
    id: number;
    description: string;
  };
}

// Interface para os resultados do código
export interface CodeResult {
  success: boolean;
  output: string;
  error?: string;
}

// Interface para as configurações do editor
export interface EditorConfiguration {
  fontSize?: number;
  fontFamily?: string;
  lineHeight?: number;
  minimap?: {
    enabled: boolean;
  };
  scrollbar?: editor.IEditorScrollbarOptions;
  wordWrap?: 'on' | 'off' | 'wordWrapColumn' | 'bounded';
  lineNumbers?: 'on' | 'off' | 'relative';
  glyphMargin?: boolean;
  folding?: boolean;
  contextmenu?: boolean;
  quickSuggestions?: boolean | {
    other: boolean;
    comments: boolean;
    strings: boolean;
  };
  snippetSuggestions?: 'top' | 'bottom' | 'inline' | 'none';
  formatOnPaste?: boolean;
  formatOnType?: boolean;
}

// Interface para temas personalizados
export interface EditorTheme {
  base: 'vs' | 'vs-dark';
  inherit: boolean;
  rules: editor.ITokenThemeRule[];
  colors: { [key: string]: string };
}

// Interface para snippets
export interface CodeSnippet {
  prefix: string;
  body: string | string[];
  description: string;
}

// Interface para a configuração de linguagens
export interface LanguageConfig {
  id: string;
  extensions: string[];
  aliases: string[];
  mimetypes: string[];
  snippets: CodeSnippet[];
}

// Tipo para os status de execução
export type ExecutionStatus = 'idle' | 'running' | 'success' | 'error';

// Interface para o histórico de execução
export interface ExecutionHistory {
  id: string;
  code: string;
  input?: string;
  output?: string;
  status: ExecutionStatus;
  timestamp: number;
  language: string;
}

// Interface para as estatísticas de execução
export interface ExecutionStats {
  totalExecutions: number;
  successfulExecutions: number;
  failedExecutions: number;
  averageExecutionTime: number;
}

// Interface para as configurações do compilador
export interface CompilerOptions {
  language_id: number;
  cpu_time_limit?: number;
  memory_limit?: number;
  wall_time_limit?: number;
  compiler_options?: string;
  command_line_arguments?: string;
  redirect_stderr_to_stdout?: boolean;
  base64_encoded?: boolean;
}