import { DocumentData, WithFieldValue } from 'firebase/firestore';

import { FirebaseCollections } from '@/constants/firebase.ts';
import { Gender } from '@/types';

export interface IEditUserData {
  gender: Gender;
  name: string;
  password: string;
  lastName: string;
  telegram: string;
}

export interface IUpdateData {
  collection: string;
  id: string;
  newDoc: WithFieldValue<DocumentData>;
}

type TFile = Blob | Uint8Array | ArrayBuffer;

export interface IUploadFile {
  collection: FirebaseCollections;
  file: TFile;
  id: string;
}
