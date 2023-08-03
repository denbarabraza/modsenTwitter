import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAppInitialState } from '@/store/slice/interface.ts';
import { ThemeEnum } from '@/theme/types.ts';

const initialState: IAppInitialState = {
  theme: ThemeEnum.Light,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeEnum>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;
export const appReducer = appSlice.reducer;
