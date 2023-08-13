import { v1 } from 'uuid';

import { FirebaseCollections } from '@/constants/firebase.ts';
import { createDocument } from '@/firebase/api/createDocument.ts';
import { uploadFile } from '@/firebase/helpers/uploadFile.ts';
import { INewTweet } from '@/types';

export const createNewTweet = async (options: INewTweet) => {
  const { email, id, image, name, photo, tweetValue, lastName } = options;
  const tweet = {
    tweetId: v1(),
    creator: { name, lastName, email, id, photo },
    text: tweetValue,
    date: Date.now(),
    image: '',
    likes: [],
  };

  if (image) {
    await uploadFile({
      collection: FirebaseCollections.Tweets,
      id: tweet.tweetId,
      file: image,
    });

    const url = URL.createObjectURL(image);

    tweet.image = url;
  }

  await createDocument({
    collection: FirebaseCollections.Tweets,
    id: tweet.tweetId,
    document: tweet,
  });

  return tweet;
};
