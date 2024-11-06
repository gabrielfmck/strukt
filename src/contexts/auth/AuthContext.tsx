import { createContext } from 'react';
import type { AuthContextType } from '../../types/auth';

export const AuthContext = createContext<AuthContextType>({
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
});