import { ThemeEnum } from '@/theme/types.ts';

export interface IAppInitialState {
  theme: ThemeEnum;
  isLoading: boolean;
  alert: IAlertObj;
}

export interface IAlertObj {
  isVisible: boolean;
  message: string;
}
