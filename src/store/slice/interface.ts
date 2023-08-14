import { ThemeEnum } from '@/theme/types.ts';

export interface IAppInitialState {
  theme: ThemeEnum;
  isLoading: boolean;
  alert: IAlertObj;
  isModalOpen: boolean;
}

export interface IAlertObj {
  isVisible: boolean;
  message: string;
}
