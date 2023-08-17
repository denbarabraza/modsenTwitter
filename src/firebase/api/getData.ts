import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

import { FirebaseCollections } from '@/constants/firebase.ts';
import { db } from '@/firebase';
import { ITweet, IUser } from '@/types';

export const getDocument = async (collection: string, prop: string) => {
  const docSnapshot = await getDoc(doc(db, collection, prop));

  if (docSnapshot.exists()) {
    return docSnapshot.data();
  }

  return false;
};

export const getTweetsByUserId = async (field: string, id: string) => {
  const q = query(
    collection(db, FirebaseCollections.Tweets),
    orderBy('date', 'desc'),
    where(field, '==', id),
  );

  const querySnapshot = await getDocs(q);

  const tweetsByUserId = querySnapshot.docs.map(doc => {
    const { text, date, creator, image, likes, tweetId } = doc.data() as ITweet;

    return {
      id: doc.id,
      tweetId,
      text,
      date,
      creator,
      image,
      likes,
    };
  });

  return tweetsByUserId;
};

export const getAllTweets = async () => {
  const q = query(collection(db, FirebaseCollections.Tweets), orderBy('date', 'desc'));

  const querySnapshot = await getDocs(q);

  const allTweets = querySnapshot.docs.map(doc => {
    const { text, date, creator, image, likes, tweetId } = doc.data() as ITweet;

    return {
      id: doc.id,
      tweetId,
      text,
      date,
      creator,
      image,
      likes,
    };
  });

  return allTweets;
};

export const getTweetsBySearch = async (field: string, searchValue: string) => {
  const q = query(
    collection(db, FirebaseCollections.Tweets),
    where(field, '>=', searchValue),
    where(field, '<=', `${searchValue}\uf8ff`),
  );

  const querySnapshot = await getDocs(q);

  const tweetsBySearch = querySnapshot.docs.map(doc => {
    const { text, date, creator, image, likes, tweetId } = doc.data() as ITweet;

    return {
      id: doc.id,
      tweetId,
      text,
      date,
      creator,
      image,
      likes,
    };
  });

  return tweetsBySearch;
};

export const getUsersBySearch = async (field: string, searchValue: string) => {
  const q = query(
    collection(db, FirebaseCollections.Users),
    where(field, '>=', searchValue),
    where(field, '<=', `${searchValue}\uf8ff`),
  );

  const querySnapshot = await getDocs(q);

  const usersBySearch = querySnapshot.docs.map(doc => {
    const { name, email, lastName, telegram, phone } = doc.data() as IUser;

    return {
      id: doc.id,
      name,
      email,
      lastName,
      telegram,
      phone,
    };
  });

  return usersBySearch;
};
