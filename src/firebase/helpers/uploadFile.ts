import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { FirebaseCollections } from '@/constants/firebase.ts';
import { storage } from '@/firebase';
import { updateDocument } from '@/firebase/helpers/updateData.ts';

type TFile = Blob | Uint8Array | ArrayBuffer;

interface IUploadFile {
  collection: FirebaseCollections;
  file: TFile;
  id: string;
}

export const uploadFile = async (options: IUploadFile) => {
  const { collection, file, id } = options;
  const storageRef = ref(storage, id);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed', () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
      await updateDocument({
        collection,
        id,
        newDoc: { image: downloadURL },
      });
    });
  });
};
