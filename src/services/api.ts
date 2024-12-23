// src/config/api.ts
export const API_CONFIG = {
  JUDGE0_API: import.meta.env.VITE_JUDGE0_API || '',
  RAPID_API_KEY: import.meta.env.VITE_JUDGE0_API_KEY || '',
  RAPID_API_HOST: import.meta.env.VITE_JUDGE0_API_HOST || '',
  PISTON_API: import.meta.env.VITE_PISTON_API || ''
} as const;