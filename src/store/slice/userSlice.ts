import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { logInWithEmailThunk, signUpWithEmailThunk } from '@/store/thunks/auth';
import { IUser } from '@/types';

export interface IUserState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  isError: string;
}

export type UpdateUserPayload = Pick<IUser, 'lastName' | 'gender' | 'name' | 'telegram'>;

const initialState: IUserState = {
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
    setError: (state, action: PayloadAction<string>) => {
      state.isError = action.payload;
    },
    removeUser: state => {
      state.isAuth = false;
      state.isLoading = false;
      state.user = {} as IUser;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      logInWithEmailThunk.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.isAuth = true;
        state.isLoading = false;
        state.user = action.payload;
        state.isError = '';
      },
    );
    builder.addCase(logInWithEmailThunk.pending, state => {
      state.isAuth = false;
      state.isLoading = true;
      state.user = {} as IUser;
      state.isError = '';
    });
    builder.addCase(logInWithEmailThunk.rejected, state => {
      state.isAuth = false;
      state.isLoading = false;
      state.user = {} as IUser;
      state.isError = 'Login Error';
    });
    builder.addCase(
      signUpWithEmailThunk.fulfilled,
      (state, action: PayloadAction<IUser | undefined>) => {
        state.isAuth = true;
        state.isLoading = false;
        state.user = action.payload || ({} as IUser);
        state.isError = '';
      },
    );
    builder.addCase(signUpWithEmailThunk.pending, state => {
      state.isAuth = false;
      state.isLoading = true;
      state.user = {} as IUser;
      state.isError = '';
    });
    builder.addCase(signUpWithEmailThunk.rejected, state => {
      state.isAuth = false;
      state.isLoading = false;
      state.user = {} as IUser;
    });
  },
});

// signUpWithEmailThunk

export const { setUser, updateUser, removeUser, setLoading, setError } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
