import { AppRootStateType } from '@/store/store';

export const getThemeSelector = (state: AppRootStateType) => state.app.theme;
