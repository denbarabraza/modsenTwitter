import { Dispatch, SetStateAction } from 'react';

import { ITweet } from '@/types';

export interface ITweetItem {
  tweetId: string;
  creatorId: string;
  name: string;
  lastName: string;
  photo?: string;
  email: string;
  date: number;
  text: string;
  likes: string[];
  image?: string;

  setTweets: Dispatch<SetStateAction<ITweet[]>>;
  handleGetTweets: () => void;
}
