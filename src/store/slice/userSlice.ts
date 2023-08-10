import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import myProfileIcon from '@/assets/photo.svg';
import { IUser } from '@/types';

export interface IUserState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  isError: string;
}

export type UpdateUserPayload = Pick<IUser, 'surname' | 'gender' | 'name' | 'telegram'>;

export type SetUserThunkPayload = Pick<IUser, 'email' | 'password'>;

const initialState: IUserState = {
  user: {
    id: '1',
    name: 'Denis',
    nameLowercase: 'DENIS',
    phone: '+375446541365461',
    surname: 'Bareischev',
    password: '1231123',
    telegram: '@denbarabraza',
    email: 'denis.bareischev@gmail.com',
    gender: 'Male',
    token: undefined,
    photo: myProfileIcon,
  },
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
