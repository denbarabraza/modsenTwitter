import { AppRootStateType } from '@/store/store';

export const getTweetsSelector = (state: AppRootStateType) => state.tweets.tweets;
