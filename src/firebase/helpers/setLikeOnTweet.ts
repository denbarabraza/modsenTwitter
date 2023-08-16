import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { FirebaseCollections } from '@/constants/firebase.ts';
import { db } from '@/firebase';
import { getTweetsByUserId } from '@/firebase/api/getData.ts';

export const setLikeOnTweet = async (tweetId: string, userId: string) => {
  const tweet = await getTweetsByUserId('tweetId', tweetId);
  const tweetRef = doc(db, FirebaseCollections.Tweets, tweetId);

  if (tweet[0].likes.includes(userId)) {
    await updateDoc(tweetRef, {
      likes: arrayRemove(userId),
    });
  } else {
    await updateDoc(tweetRef, {
      likes: arrayUnion(userId),
    });
  }
};
