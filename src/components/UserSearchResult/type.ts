import { IUser } from '@/types';

export type IUserSearchResultProps = Pick<
  IUser,
  'name' | 'telegram' | 'lastName' | 'photo' | 'id'
>;
