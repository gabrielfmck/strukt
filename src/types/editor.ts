export interface EditorProps {
    initialCode?: string;
    onCodeChange?: (code: string) => void;
    language?: string;
    theme?: string;
    readOnly?: boolean;
    showLineNumbers?: boolean;
  }
  
  export interface CodeResult {
    stdout?: string;
    stderr?: string;
    compile_output?: string;
    status?: {
      id: number;
      description: string;
    };
  }