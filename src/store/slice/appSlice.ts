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
  isModalOpen: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state: IAppInitialState, action: PayloadAction<ThemeEnum>) => {
      state.theme = action.payload;
    },
    setAppLoading: (state: IAppInitialState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAlert: (state: IAppInitialState, action: PayloadAction<IAlertObj>) => {
      state.alert = action.payload;
    },
    setModalStatus: (state: IAppInitialState, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setTheme, setAlert, setAppLoading, setModalStatus } = appSlice.actions;
export const appReducer = appSlice.reducer;
