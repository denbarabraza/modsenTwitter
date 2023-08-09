import { IUser } from '@/types';

export type IUserSearchResultProps = Pick<IUser, 'name' | 'email' | 'photo' | 'id'>;
