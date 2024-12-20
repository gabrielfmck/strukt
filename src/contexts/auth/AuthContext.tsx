// src/contexts/auth/AuthContext.tsx
import { createContext } from 'react';
import type { User } from 'firebase/auth';

export interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signUp: (email: string, password: string, displayName?: string) => Promise<User>;
  login: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserEmail: (email: string) => Promise<void>;
  updateUserPassword: (password: string) => Promise<void>;
  updateUserProfile: (data: { displayName?: string; photoURL?: string }) => Promise<void>;
}

const defaultContext: AuthContextType = {
  currentUser: null,
  loading: true,
  signUp: async () => {
    throw new Error('AuthContext não inicializado');
  },
  login: async () => {
    throw new Error('AuthContext não inicializado');
  },
  logout: async () => {
    throw new Error('AuthContext não inicializado');
  },
  resetPassword: async () => {
    throw new Error('AuthContext não inicializado');
  },
  updateUserEmail: async () => {
    throw new Error('AuthContext não inicializado');
  },
  updateUserPassword: async () => {
    throw new Error('AuthContext não inicializado');
  },
  updateUserProfile: async () => {
    throw new Error('AuthContext não inicializado');
  }
};

export const AuthContext = createContext<AuthContextType>(defaultContext);