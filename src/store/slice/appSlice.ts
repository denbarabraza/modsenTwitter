import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ModalStatusEnum } from '@/constants/modalStatus.ts';
import { IAlertObj, IAppInitialState } from '@/store/slice/types.ts';
import { ThemeEnum } from '@/theme/types.ts';

const initialState: IAppInitialState = {
  theme: ThemeEnum.Light,
  isLoading: false,
  alert: {
    isVisible: false,
    message: '',
  },
  modalStatus: ModalStatusEnum.Closed,
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
    setModalStatus: (state: IAppInitialState, action: PayloadAction<ModalStatusEnum>) => {
      state.modalStatus = action.payload;
    },
  },
});

export const { setTheme, setAlert, setModalStatus } = appSlice.actions;
export const appReducer = appSlice.reducer;
