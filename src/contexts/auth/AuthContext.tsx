import { createContext } from 'react';
import type { AuthContextType } from '../../types/auth';

// Criamos um valor inicial que corresponde à interface AuthContextType
export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  signUp: async () => {
    throw new Error('AuthContext not initialized');
  },
  login: async () => {
    throw new Error('AuthContext not initialized');
  },
  logout: async () => {
    throw new Error('AuthContext not initialized');
  },
  resetPassword: async () => {
    throw new Error('AuthContext not initialized');
  },
  updateUserEmail: async () => {
    throw new Error('AuthContext not initialized');
  },
  updateUserPassword: async () => {
    throw new Error('AuthContext not initialized');
  },
  updateUserProfile: async () => {
    throw new Error('AuthContext not initialized');
  },
});