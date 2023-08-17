import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { storage } from '@/firebase';
import { IUploadFile } from '@/firebase/helpers/types.ts';
import { updateDocument } from '@/firebase/helpers/updateData.ts';

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
