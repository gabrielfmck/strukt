// src/types/auth.ts
import { User } from 'firebase/auth';

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

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  preferredLanguage: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  notifications: boolean;
}

export interface UserStats {
  exercisesCompleted: number;
  studyHours: number;
  studyStreak: number;
  level: number;
  badges: number;
  currentModule: string;
}