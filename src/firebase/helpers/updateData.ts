import { updatePassword } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';

import { FirebaseCollections } from '@/constants/firebase.ts';
import { auth, db } from '@/firebase';
import { IEditUserData, IUpdateData } from '@/firebase/helpers/types.ts';

export const updateDocument = async (options: IUpdateData) => {
  const { collection, newDoc, id } = options;
  const docRef = doc(db, collection, id);

  await updateDoc(docRef, newDoc);
};

export const updateUserPassword = async (password: string) => {
  const user = auth.currentUser;

  if (user && password) {
    await updatePassword(user, password);
  }
};

export const updateUser = async ({
  gender,
  name,
  password,
  lastName,
  telegram,
}: IEditUserData) => {
  const user = auth.currentUser!;

  const { uid } = user;

  const updatedInfo = {
    gender,
    name,
    lastName,
    telegram,
  };

  await updateDoc(doc(db, FirebaseCollections.Users, uid), updatedInfo);

  if (password) {
    await updateUserPassword(password);
  }
};
