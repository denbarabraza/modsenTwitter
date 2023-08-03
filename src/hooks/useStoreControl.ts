import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppRootStateType } from '@/store/store.ts';

export type RootDispatchThunkType = ThunkDispatch<AppRootStateType, any, AnyAction>;
export const useAppDispatch = () => useDispatch<RootDispatchThunkType>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
