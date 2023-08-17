import { Dispatch, SetStateAction } from 'react';

import { ITweet } from '@/types';

export interface ICreateTweet {
  setTweets: Dispatch<SetStateAction<ITweet[]>>;
}
