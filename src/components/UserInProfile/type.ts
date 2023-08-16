import { IUser } from '@/types';

export type IUserInProfile = Omit<IUser, 'nameLowercase'>;
