// src\utils\env.ts
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

export const getEnvVar = (key: keyof ImportMetaEnv): string => {
  const value = import.meta.env[key];
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
};

export const appVersion = getEnvVar('VITE_APP_VERSION') || '1.0.0';