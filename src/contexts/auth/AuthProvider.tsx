// src/contexts/auth/AuthProvider.tsx
import { useState, useEffect, type ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  updateEmail,
  updatePassword,
  type User,
  type UserCredential,
  type AuthError,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '../../config/firebase';
import { AuthContext } from './AuthContext';
import type { AuthContextType } from '../../types/auth';
import { handleAuthError } from '../../utils/auth-utils';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, displayName?: string): Promise<void> => {
    console.log('Tentando criar usuário:', { email, displayName });
    
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuário criado com sucesso:', userCredential.user.uid);
      
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
        console.log('Perfil atualizado com displayName:', displayName);
      }

      setCurrentUser(userCredential.user);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      if (error instanceof FirebaseError) {
        const errorMessage = handleAuthError(error);
        throw new Error(errorMessage);
      }
      throw error;
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleAuthError(error);
        throw new Error(errorMessage);
      }
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleAuthError(error);
        throw new Error(errorMessage);
      }
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleAuthError(error);
        throw new Error(errorMessage);
      }
      throw error;
    }
  };

  const updateUserEmail = async (newEmail: string) => {
    if (!currentUser) throw new Error('Nenhum usuário autenticado');
    try {
      await updateEmail(currentUser, newEmail);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleAuthError(error);
        throw new Error(errorMessage);
      }
      throw error;
    }
  };

  const updateUserPassword = async (newPassword: string) => {
    if (!currentUser) throw new Error('Nenhum usuário autenticado');
    try {
      await updatePassword(currentUser, newPassword);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleAuthError(error);
        throw new Error(errorMessage);
      }
      throw error;
    }
  };

  const updateUserProfile = async (newDisplayName: string) => {
    if (!currentUser) throw new Error('Nenhum usuário autenticado');
    try {
      await updateProfile(currentUser, { displayName: newDisplayName });
      setCurrentUser({ ...currentUser });
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleAuthError(error);
        throw new Error(errorMessage);
      }
      throw error;
    }
  };

  const value: AuthContextType = {
    currentUser,
    loading,
    signUp,
    login,
    logout,
    resetPassword,
    updateUserEmail,
    updateUserPassword,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}