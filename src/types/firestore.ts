// src/types/firestore.ts
import type { UserPreferences, UserStats } from './auth';

export interface UserData {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  lastLoginAt: Date;
  preferences: UserPreferences;
  stats: UserStats;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  points: number;
  completed: boolean;
  completedAt?: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

export interface StudySession {
  id: string;
  userId: string;
  startedAt: Date;
  endedAt?: Date;
  duration: number; // em minutos
  topic: string;
  progress: number; // 0-100
}

export interface UserProgress {
  userId: string;
  exerciseId: string;
  status: 'not_started' | 'in_progress' | 'completed';
  attempts: number;
  lastAttemptAt?: Date;
  completedAt?: Date;
  timeSpent: number;
  score?: number;
}