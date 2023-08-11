export interface IUser {
  id: string;
  email: string;
  name: string;
  lastName: string;
  telegram?: string;
  gender?: Gender | null;
  phone: string;
  dateOfBirth: string;
  photo?: string;
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export type ICreator = Pick<IUser, 'id' | 'email' | 'name' | 'photo'>;

export interface ITweet {
  id?: string;
  tweetId: string;
  creator: ICreator;
  text: string;
  date: number;
  image?: string;
  likes: string[];
}

export interface INewTweet {
  name: string;
  email: string;
  id: string;
  photo: string;
  tweetValue: string;
  image?: File;
}

export type ITweetBySearch = Pick<ITweet, 'text' | 'id'>;
