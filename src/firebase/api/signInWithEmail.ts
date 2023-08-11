import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/firebase';

export const signInWithEmail = async (email: string, password: string) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  return user;
};
