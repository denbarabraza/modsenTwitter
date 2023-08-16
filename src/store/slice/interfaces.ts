import { ModalStatusEnum } from '@/store/slice/appSlice.ts';
import { ThemeEnum } from '@/theme/types.ts';

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
