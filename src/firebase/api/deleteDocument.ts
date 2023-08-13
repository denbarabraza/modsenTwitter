import { deleteDoc, doc } from 'firebase/firestore';

import { db } from '@/firebase';

export const deleteDocument = async (collection: string, prop: string) => {
  await deleteDoc(doc(db, collection, prop));
};
