import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAlertObj, IAppInitialState } from '@/store/slice/interface.ts';
import { ThemeEnum } from '@/theme/types.ts';

const initialState: IAppInitialState = {
  theme: ThemeEnum.Light,
  isLoading: false,
  alert: {
    isVisible: false,
    message: '',
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeEnum>) => {
      state.theme = action.payload;
    },
    setAlert: (state, action: PayloadAction<IAlertObj>) => {
      state.alert = action.payload;
    },
  },
});

export const { setTheme, setAlert } = appSlice.actions;
export const appReducer = appSlice.reducer;
