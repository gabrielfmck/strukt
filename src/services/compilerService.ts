// src/services/compilerService.ts
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

const JUDGE0_API = 'https://judge0-ce.p.rapidapi.com';
const headers = {
  'Content-Type': 'application/json',
  'X-RapidAPI-Key': 'fe94bdb3ccmsh2b60afda771618bp13b57cjsna40760988e52',
  'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
};

export const compileAndExecute = async (code: string, input: string = ''): Promise<string> => {
  try {
    console.log('Enviando código para compilação...');

    // Criar submissão com timeout mais longo
    const response = await fetch(`${JUDGE0_API}/submissions?base64_encoded=false&wait=true`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        source_code: code,
        language_id: 52, // C (GCC 9.2.0)
        stdin: input,
        cpu_time_limit: 5, // 5 segundos
        memory_limit: 128000, // 128MB
        wall_time_limit: 10 // 10 segundos
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

    // Verificações de erro mais detalhadas
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
      throw error; // Mantém a mensagem de erro original
    }
    throw new Error('Erro desconhecido ao compilar/executar o código');
  }
};