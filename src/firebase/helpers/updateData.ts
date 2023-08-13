import { doc, DocumentData, updateDoc, WithFieldValue } from 'firebase/firestore';

import { db } from '@/firebase';

interface IUpdateData {
  collection: string;
  id: string;
  newDoc: WithFieldValue<DocumentData>;
}

export const updateDocument = async (options: IUpdateData) => {
  const { collection, newDoc, id } = options;
  const docRef = doc(db, collection, id);

  await updateDoc(docRef, newDoc);
};
