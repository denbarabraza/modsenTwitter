import { AppRootStateType } from '@/store/store';

export const getThemeSelector = (state: AppRootStateType) => state.app.theme;
export const getAlertSelector = (state: AppRootStateType) => state.app.alert;

export const getAppLoadingSelector = (state: AppRootStateType) => state.app.isLoading;

export const getModalStatusSelector = (state: AppRootStateType) => state.app.modalStatus;
