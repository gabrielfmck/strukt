// src/config/api.ts
export const API_CONFIG = {
    JUDGE0_API: 'https://judge0-ce.p.rapidapi.com',
    RAPID_API_KEY: import.meta.env.VITE_RAPID_API_KEY || '',
    RAPID_API_HOST: 'judge0-ce.p.rapidapi.com'
  } as const;