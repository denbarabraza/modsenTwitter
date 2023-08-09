import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '@/types';

export interface UserState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  isError: string;
}

export type UpdateUserPayload = Pick<IUser, 'surname' | 'gender' | 'name' | 'telegram'>;

export type SetUserThunkPayload = Pick<IUser, 'email' | 'password'>;

const initialState: UserState = {
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
  isError: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.isAuth = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    updateUser: (state, action: PayloadAction<UpdateUserPayload>) => {
      state.user = { ...state.user, ...action.payload };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isAuth = true;
      state.isLoading = action.payload;
      state.user = {} as IUser;
    },
    removeUser: state => {
      state.isAuth = false;
      state.isLoading = false;
      state.user = {} as IUser;
    },
  },
});

export const { setUser, updateUser, removeUser, setLoading } = userSlice.actions;

export const userReducer = userSlice.reducer;
