import { ModalStatusEnum } from '@/constants/modalStatus.ts';
import { ThemeEnum } from '@/theme/types.ts';
import { IUser } from '@/types';

export interface IAppInitialState {
  theme: ThemeEnum;
  isLoading: boolean;
  alert: IAlertObj;
  modalStatus: ModalStatusEnum;
}

export interface IAlertObj {
  isVisible: boolean;
  message: string;
}

export interface IUserState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  isError: string;
}

export type UpdateUserPayload = Pick<IUser, 'lastName' | 'gender' | 'name' | 'telegram'>;
