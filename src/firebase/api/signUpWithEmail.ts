import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { auth, db } from '@/firebase';
import { IUser } from '@/types';

export const signUpWithEmail = async (newUserdata: IUser, password: string) => {
  const registeredUser = await createUserWithEmailAndPassword(
    auth,
    newUserdata.email,
    password,
  );

  const uidUser = registeredUser.user.uid;
  const user = { ...newUserdata, id: uidUser };

  await setDoc(doc(db, 'users', registeredUser.user.uid), user);

  return user;
};
