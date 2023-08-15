import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FieldValues } from 'react-hook-form';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { FirebaseCollections } from '@/constants/firebase.ts';
import { defaultValueUserSignUp } from '@/constants/valueUserSignUp.ts';
import { auth, db } from '@/firebase';
import { createDocument } from '@/firebase/api/createDocument.ts';
import { getDocument } from '@/firebase/api/getData.ts';
import { signInWithEmail } from '@/firebase/api/signInWithEmail.ts';
import { signUpWithEmail } from '@/firebase/api/signUpWithEmail.ts';
import { ILogInFormInput } from '@/pages/Login';
import { setAlert } from '@/store/slice/appSlice.ts';
import { setError, setUser } from '@/store/slice/userSlice.ts';
import { IUser } from '@/types';
import { pureNumberPhone } from '@/utils/pureNumberPhone.ts';

export const logInWithEmailThunk = createAsyncThunk(
  'user/logInUserWithEmail',
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

export const logInWithNumberThunk = createAsyncThunk(
  'user/logInWithPhoneNumber',
  async ({ phone, password }: { phone: string; password: string }, { dispatch }) => {
    try {
      const usersRef = collection(db, 'users');

      const pureNumber = pureNumberPhone(phone);

      const response = query(usersRef, where('phone', '==', pureNumber));

      const querySnapshot = await getDocs(response);

      if (!querySnapshot.docs[0]) {
        dispatch(setError('Invalid phone number'));
      }
      const { email } = querySnapshot.docs[0].data() as IUser;

      return dispatch(logInWithEmailThunk({ email, password }));
    } catch (error) {
      dispatch(setError('Login Error'));
    }
  },
);

export const signUpWithEmailThunk = createAsyncThunk(
  'user/signUpWithEmail',
  async (options: FieldValues, { dispatch }) => {
    try {
      const { email, password, name, phone, day, month, year, isValid, reset } = options;
      const { defaultPhoto, defaultTelegram } = defaultValueUserSignUp;
      const nameLowercase = name.toLowerCase();
      const newUserdata: IUser = {
        id: 'user.uid',
        email,
        nameLowercase,
        name: name.split(' ')[0],
        lastName: name.split(' ')[1],
        phone: pureNumberPhone(phone),
        dateOfBirth: `${day} ${month} ${year}`,
        gender: null,
        telegram: defaultTelegram,
        photo: defaultPhoto,
      };

      const user = await signUpWithEmail(newUserdata, password);

      if (user) {
        return user;
      }

      if (isValid) {
        reset();
      }

      return {} as IUser;
    } catch (e) {
      dispatch(setError('SignUp Error'));
    }
  },
);

export const signUpWithGoogleThunk = createAsyncThunk(
  'user/signUpWithGoogle',
  async (_, { dispatch }) => {
    try {
      const provider = new GoogleAuthProvider();
      const { user: googleAccount } = await signInWithPopup(auth, provider);
      const { uid, email, displayName, phoneNumber } = googleAccount;

      const existedUser = (await getDocument(FirebaseCollections.Users, uid)) as
        | IUser
        | false;

      if (!displayName || !email) {
        dispatch(
          setAlert({
            isVisible: true,
            message: 'Error with google account',
          }),
        );
        throw new Error('Error with google account');
      }

      const { defaultPhoto, defaultTelegram } = defaultValueUserSignUp;
      const nameLowercase = displayName.toLowerCase();
      const newUser: IUser = {
        id: uid,
        email,
        nameLowercase,
        name: displayName.split(' ')[0],
        lastName: displayName.split(' ')[1],
        phone: phoneNumber ?? '',
        dateOfBirth: '',
        gender: null,
        telegram: defaultTelegram,
        photo: defaultPhoto,
      };

      if (existedUser) {
        dispatch(setUser(existedUser));
      } else {
        await createDocument({
          collection: FirebaseCollections.Users,
          document: newUser,
          id: uid,
        });
        dispatch(setUser(newUser));
      }
    } catch (e) {
      dispatch(
        setAlert({
          isVisible: true,
          message: (e as Error).message,
        }),
      );
    }
  },
);
