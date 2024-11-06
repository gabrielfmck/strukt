// src/types/firebase-errors.ts
import { FirebaseError } from 'firebase/app';

export type FirebaseAuthError = FirebaseError & {
  code: string;
  message: string;
  name: string;
};