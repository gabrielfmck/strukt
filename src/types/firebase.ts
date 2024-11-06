// src/types/firebase.ts
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

export interface FirebaseContext {
  app: FirebaseApp;
  auth: Auth;
}