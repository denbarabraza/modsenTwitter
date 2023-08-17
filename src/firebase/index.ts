import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import {
  VITE_FIREBASE_BUCKET_STORAGE,
  VITE_FIREBASE_DOMAIN_AUTH,
  VITE_FIREBASE_ID_API,
  VITE_FIREBASE_ID_MEASUREMENT,
  VITE_FIREBASE_ID_PROJECT,
  VITE_FIREBASE_KEY_API,
  VITE_FIREBASE_MESSAGING_ID_SENDER,
} from '@/constants/environments.ts';

const firebaseConfig = {
  apiKey: VITE_FIREBASE_KEY_API,
  authDomain: VITE_FIREBASE_DOMAIN_AUTH,
  projectId: VITE_FIREBASE_ID_PROJECT,
  storageBucket: VITE_FIREBASE_BUCKET_STORAGE,
  messagingSenderId: VITE_FIREBASE_MESSAGING_ID_SENDER,
  appId: VITE_FIREBASE_ID_API,
  measurementId: VITE_FIREBASE_ID_MEASUREMENT,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
