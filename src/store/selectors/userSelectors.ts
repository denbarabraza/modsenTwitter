import { AppRootStateType } from '@/store/store';

export const getUserSelector = (state: AppRootStateType) => state.user.user;
export const isAuthUserSelector = (state: AppRootStateType) => state.user.isAuth;
export const userIdSelector = (state: AppRootStateType) => state.user.user.id;