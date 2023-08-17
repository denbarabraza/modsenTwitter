import { AppRootStateType } from '@/store/store';

export const getUserSelector = (state: AppRootStateType) => state.user.user;
export const getUserDataSelector = (state: AppRootStateType) => state.user;
export const isAuthSelector = (state: AppRootStateType) => state.user.isAuth;
export const userIdSelector = (state: AppRootStateType) => state.user.user.id;
