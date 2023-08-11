import { createAsyncThunk } from '@reduxjs/toolkit';

import { FirebaseCollections } from '@/constants/firebase.ts';
import { getDocument } from '@/firebase/api/getData.ts';
import { signInWithEmail } from '@/firebase/api/signInWithEmail.ts';
import { ILogInFormInput } from '@/pages/Login';
import { IUser } from '@/types';

export const logInUserThunk = createAsyncThunk(
  'user/logInUser',
  async (options: ILogInFormInput, { rejectWithValue }) => {
    try {
      const { email, password } = options;
      const user = await signInWithEmail(email, password);
      const existedUser = (await getDocument(FirebaseCollections.Users, user!.uid)) as
        | IUser
        | false;

      if (existedUser) {
        return existedUser;
      }

      return {} as IUser;
    } catch (error) {
      return rejectWithValue('Login Error');
    }
  },
);
