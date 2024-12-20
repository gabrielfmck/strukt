// src/services/compilerService.ts
import { API_CONFIG } from '@/services/api';

interface CompilerResponse {
  stdout?: string;
  stderr?: string;
  compile_output?: string;
  message?: string;
  status?: {
    id: number;
    description: string;
  };
}

const JUDGE0_API = API_CONFIG.JUDGE0_API;
const headers = {
  'Content-Type': 'application/json',
  'X-RapidAPI-Key': API_CONFIG.RAPID_API_KEY,
  'X-RapidAPI-Host': API_CONFIG.RAPID_API_HOST
};

export const compileAndExecute = async (code: string, input: string = ''): Promise<string> => {
  try {
    console.log('Enviando código para compilação...');

    const response = await fetch(`${JUDGE0_API}/submissions?base64_encoded=false&wait=true`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        source_code: code,
        language_id: 52, // C (GCC 9.2.0)
        stdin: input,
        cpu_time_limit: 5,
        memory_limit: 128000,
        wall_time_limit: 10
      })
    });

    if (!response.ok) {
      console.error('Erro na resposta:', response.status);
      if (response.status === 429) {
        throw new Error('Muitas requisições. Por favor, aguarde alguns segundos e tente novamente.');
      }
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const result: CompilerResponse = await response.json();
    console.log('Resposta do servidor:', result);

    if (result.status?.id === 6) {
      return 'Erro: Tempo limite de execução excedido';
    }
    if (result.status?.id === 7) {
      return 'Erro: Limite de memória excedido';
    }
    if (result.compile_output?.trim()) {
      return `Erro de compilação:\n${result.compile_output}`;
    }
    if (result.stderr?.trim()) {
      return `Erro de execução:\n${result.stderr}`;
    }
    if (result.message?.trim()) {
      return `Erro: ${result.message}`;
    }
    if (result.status?.id !== 3) {
      return `Status: ${result.status?.description || 'Erro desconhecido'}`;
    }

    return result.stdout?.trim() || 'Programa executado com sucesso (sem saída)';
  } catch (error) {
    console.error('Erro detalhado:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Erro desconhecido ao compilar/executar o código');
  }
};
