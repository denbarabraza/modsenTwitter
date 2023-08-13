import { deleteDoc, doc } from 'firebase/firestore';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { db } from '@/firebase';
import { setAppLoading } from '@/store/slice/appSlice.ts';
import { setError } from '@/store/slice/userSlice.ts';

export const deleteDocumentThunk = createAsyncThunk(
  'tweets/deleteTweets',
  async ({ collection, prop }: { collection: string; prop: string }, { dispatch }) => {
    try {
      dispatch(setAppLoading(true));
      await deleteDoc(doc(db, collection, prop));
      dispatch(setAppLoading(false));
    } catch (e) {
      dispatch(setError('Delete Tweets Error'));
    }
  },
);
